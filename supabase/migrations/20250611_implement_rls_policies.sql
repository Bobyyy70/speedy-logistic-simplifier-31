
-- Enable RLS on all tables and create comprehensive security policies

-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can only access their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create orders table if it doesn't exist and enable RLS
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  client_id uuid REFERENCES public.profiles(client_id) ON DELETE CASCADE,
  order_number text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  total_amount decimal(10,2),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Orders: Users can only see their own orders
CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders" ON public.orders
  FOR UPDATE USING (auth.uid() = user_id);

-- Create customers table if it doesn't exist and enable RLS
CREATE TABLE IF NOT EXISTS public.customers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  address text,
  city text,
  postal_code text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Customers: Users can only access their own customer data
CREATE POLICY "Users can view own customer data" ON public.customers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own customer data" ON public.customers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own customer data" ON public.customers
  FOR UPDATE USING (auth.uid() = user_id);

-- Create products table if it doesn't exist and enable RLS
CREATE TABLE IF NOT EXISTS public.products (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.profiles(client_id) ON DELETE CASCADE,
  sku text NOT NULL,
  name text NOT NULL,
  description text,
  weight decimal(8,3),
  dimensions jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Products: Users can only see products for their client
CREATE POLICY "Users can view client products" ON public.products
  FOR SELECT USING (
    client_id = (SELECT client_id FROM public.profiles WHERE id = auth.uid())
  );

CREATE POLICY "Users can create client products" ON public.products
  FOR INSERT WITH CHECK (
    client_id = (SELECT client_id FROM public.profiles WHERE id = auth.uid())
  );

-- Create stock_levels table if it doesn't exist and enable RLS
CREATE TABLE IF NOT EXISTS public.stock_levels (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id uuid REFERENCES public.products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 0,
  reserved_quantity integer NOT NULL DEFAULT 0,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.stock_levels ENABLE ROW LEVEL SECURITY;

-- Stock levels: Users can only see stock for their client's products
CREATE POLICY "Users can view client stock" ON public.stock_levels
  FOR SELECT USING (
    product_id IN (
      SELECT p.id FROM public.products p 
      WHERE p.client_id = (SELECT client_id FROM public.profiles WHERE id = auth.uid())
    )
  );

-- Create api_credentials table for secure API key storage
CREATE TABLE IF NOT EXISTS public.api_credentials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.profiles(client_id) ON DELETE CASCADE,
  service_name text NOT NULL,
  encrypted_credentials jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.api_credentials ENABLE ROW LEVEL SECURITY;

-- API credentials: Strict access control
CREATE POLICY "Users can view own api credentials" ON public.api_credentials
  FOR SELECT USING (
    client_id = (SELECT client_id FROM public.profiles WHERE id = auth.uid())
  );

-- Create user roles and permissions system
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('admin', 'manager', 'viewer')),
  permissions jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- User roles: Users can only see their own roles
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

-- Create security audit log
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  resource_type text,
  resource_id uuid,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Security audit log: Only admins can view
CREATE POLICY "Admins can view audit log" ON public.security_audit_log
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
