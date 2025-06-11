
-- Create table for SAV form submissions
CREATE TABLE IF NOT EXISTS public.sav_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number text NOT NULL,
  email text NOT NULL,
  issue_category text,
  submitted_at timestamp with time zone NOT NULL,
  ip_address text,
  user_agent text,
  processed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.sav_submissions ENABLE ROW LEVEL SECURITY;

-- Only admins can view SAV submissions
CREATE POLICY "Admins can view sav submissions" ON public.sav_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create index for performance
CREATE INDEX idx_sav_submissions_order_number ON public.sav_submissions(order_number);
CREATE INDEX idx_sav_submissions_submitted_at ON public.sav_submissions(submitted_at);
