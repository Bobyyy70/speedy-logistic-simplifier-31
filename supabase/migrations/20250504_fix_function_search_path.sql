
-- Fix the function_search_path_mutable warning by setting search_path explicitly
CREATE OR REPLACE FUNCTION public.get_user_client_id()
RETURNS uuid
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $function$
  SELECT client_id FROM public.profiles WHERE id = auth.uid();
$function$;

-- Note: If the profiles table does not exist yet, this function might need to be updated
-- when the authentication system is fully implemented with the profiles table.
