
-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name text NOT NULL,
  email text NOT NULL,
  lead_source text,
  product_type text,
  submitted_at timestamp with time zone NOT NULL,
  ip_address text,
  user_agent text,
  processed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only admins can view contact submissions
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create index for performance
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_submitted_at ON public.contact_submissions(submitted_at);
