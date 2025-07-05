-- Data retention and security monitoring policies

-- Create function to clean up old submissions (GDPR compliance)
CREATE OR REPLACE FUNCTION cleanup_old_submissions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Delete contact submissions older than 2 years
  DELETE FROM contact_submissions 
  WHERE created_at < NOW() - INTERVAL '2 years';
  
  -- Delete SAV submissions older than 5 years (warranty period)
  DELETE FROM sav_submissions 
  WHERE created_at < NOW() - INTERVAL '5 years';
  
  -- Delete rate limit entries older than 1 day
  DELETE FROM rate_limits 
  WHERE created_at < NOW() - INTERVAL '1 day';
  
  -- Log cleanup operation
  RAISE NOTICE 'Data cleanup completed at %', NOW();
END;
$$;

-- Create security audit log table
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL,
  ip_address text,
  user_agent text,
  endpoint text,
  details jsonb,
  severity text DEFAULT 'info' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can manage audit logs
CREATE POLICY "Service role can manage audit logs"
ON public.security_audit_log
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create indexes for audit log performance
CREATE INDEX idx_security_audit_log_event_type ON public.security_audit_log(event_type);
CREATE INDEX idx_security_audit_log_created_at ON public.security_audit_log(created_at);
CREATE INDEX idx_security_audit_log_severity ON public.security_audit_log(severity);

-- Function to log security events
CREATE OR REPLACE FUNCTION log_security_event(
  p_event_type text,
  p_ip_address text DEFAULT NULL,
  p_user_agent text DEFAULT NULL,
  p_endpoint text DEFAULT NULL,
  p_details jsonb DEFAULT NULL,
  p_severity text DEFAULT 'info'
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO security_audit_log (
    event_type,
    ip_address,
    user_agent,
    endpoint,
    details,
    severity
  ) VALUES (
    p_event_type,
    p_ip_address,
    p_user_agent,
    p_endpoint,
    p_details,
    p_severity
  );
END;
$$;

-- Schedule automatic cleanup (requires pg_cron extension)
-- This would typically be set up in production environment
-- SELECT cron.schedule('cleanup-old-data', '0 2 * * *', 'SELECT cleanup_old_submissions();');

-- Add data anonymization function for GDPR compliance
CREATE OR REPLACE FUNCTION anonymize_contact_submission(submission_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE contact_submissions 
  SET 
    email = 'anonymized-' || extract(epoch from now())::text || '@example.com',
    ip_address = '0.0.0.0',
    user_agent = 'anonymized'
  WHERE id = submission_id;
  
  -- Log anonymization
  PERFORM log_security_event(
    'data_anonymization',
    NULL,
    NULL,
    'contact_submissions',
    jsonb_build_object('submission_id', submission_id),
    'info'
  );
END;
$$;