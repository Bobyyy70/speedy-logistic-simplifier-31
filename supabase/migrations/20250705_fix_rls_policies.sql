-- Fix RLS policies for form submissions
-- Allow edge functions to insert data using service role

-- Contact submissions INSERT policy
CREATE POLICY "Allow edge function inserts for contact submissions" 
ON public.contact_submissions
FOR INSERT 
TO service_role
WITH CHECK (true);

-- SAV submissions INSERT policy  
CREATE POLICY "Allow edge function inserts for sav submissions"
ON public.sav_submissions
FOR INSERT
TO service_role 
WITH CHECK (true);

-- Add rate limiting table for security
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  request_count integer DEFAULT 1,
  window_start timestamp with time zone DEFAULT timezone('utc'::text, now()),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on rate limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can manage rate limits
CREATE POLICY "Service role can manage rate limits"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create index for rate limiting performance
CREATE INDEX idx_rate_limits_ip_endpoint ON public.rate_limits(ip_address, endpoint);
CREATE INDEX idx_rate_limits_window_start ON public.rate_limits(window_start);