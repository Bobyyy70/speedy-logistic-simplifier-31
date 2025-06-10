
-- Sécurisation des politiques RLS pour Speed E-Log
-- Phase 1: Activer RLS sur les tables sensibles et créer des politiques

-- 1. Sécuriser la table api_credentials (accès restreint aux fonctions serveur)
ALTER TABLE IF EXISTS public.api_credentials ENABLE ROW LEVEL SECURITY;

-- Politique pour api_credentials : accès uniquement aux fonctions authentifiées
DROP POLICY IF EXISTS "api_credentials_service_access" ON public.api_credentials;
CREATE POLICY "api_credentials_service_access" ON public.api_credentials
    FOR ALL USING (false); -- Bloque tout accès direct, seules les fonctions edge peuvent accéder

-- 2. Sécuriser la table customers (si elle existe)
ALTER TABLE IF EXISTS public.customers ENABLE ROW LEVEL SECURITY;

-- Politique pour customers : lecture publique limitée pour les témoignages
DROP POLICY IF EXISTS "customers_public_read" ON public.customers;
CREATE POLICY "customers_public_read" ON public.customers
    FOR SELECT USING (
        -- Permet seulement la lecture des témoignages publics
        public_testimonial = true OR 
        -- Ou si l'utilisateur est le propriétaire (pour futures évolutions)
        auth.uid() = user_id
    );

-- 3. Sécuriser la table orders (si elle existe)
ALTER TABLE IF EXISTS public.orders ENABLE ROW LEVEL SECURITY;

-- Politique pour orders : accès uniquement au propriétaire
DROP POLICY IF EXISTS "orders_owner_access" ON public.orders;
CREATE POLICY "orders_owner_access" ON public.orders
    FOR ALL USING (
        auth.uid() = customer_id OR
        -- Accès pour les fonctions de service autorisées
        current_setting('request.jwt.claims', true)::json->>'role' = 'service_role'
    );

-- 4. Sécuriser la table profiles (si elle existe)
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;

-- Politique pour profiles : accès au propriétaire uniquement
DROP POLICY IF EXISTS "profiles_owner_access" ON public.profiles;
CREATE POLICY "profiles_owner_access" ON public.profiles
    FOR ALL USING (auth.uid() = id);

-- 5. Créer une fonction pour valider les entrées (prévention injection)
CREATE OR REPLACE FUNCTION public.sanitize_input(input_text text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
    -- Supprime les caractères potentiellement dangereux
    RETURN regexp_replace(
        regexp_replace(input_text, '[<>''";]', '', 'g'),
        '(script|javascript|vbscript|onload|onerror)', '', 'gi'
    );
END;
$function$;

-- 6. Fonction sécurisée pour insérer des demandes de contact
CREATE OR REPLACE FUNCTION public.submit_contact_form(
    p_first_name text,
    p_last_name text,
    p_email text,
    p_phone text DEFAULT NULL,
    p_company_name text DEFAULT NULL,
    p_message text DEFAULT NULL
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
DECLARE
    result_id uuid;
BEGIN
    -- Validation et sanitisation des entrées
    IF LENGTH(p_first_name) < 2 OR LENGTH(p_last_name) < 2 THEN
        RETURN json_build_object('success', false, 'error', 'Nom et prénom requis (min 2 caractères)');
    END IF;
    
    IF p_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
        RETURN json_build_object('success', false, 'error', 'Email invalide');
    END IF;
    
    -- Insertion sécurisée (table contact_requests à créer si nécessaire)
    INSERT INTO public.contact_requests (
        first_name,
        last_name,
        email,
        phone,
        company_name,
        message,
        created_at
    ) VALUES (
        sanitize_input(p_first_name),
        sanitize_input(p_last_name),
        sanitize_input(p_email),
        sanitize_input(p_phone),
        sanitize_input(p_company_name),
        sanitize_input(p_message),
        NOW()
    ) RETURNING id INTO result_id;
    
    RETURN json_build_object('success', true, 'id', result_id);
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object('success', false, 'error', 'Erreur lors de l\'envoi');
END;
$function$;

-- 7. Créer la table contact_requests si elle n'existe pas
CREATE TABLE IF NOT EXISTS public.contact_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text,
    company_name text,
    message text,
    created_at timestamptz DEFAULT NOW(),
    processed boolean DEFAULT false
);

-- Activer RLS sur contact_requests
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Politique pour contact_requests : accès restreint aux fonctions autorisées
CREATE POLICY "contact_requests_service_access" ON public.contact_requests
    FOR ALL USING (
        current_setting('request.jwt.claims', true)::json->>'role' = 'service_role'
    );
