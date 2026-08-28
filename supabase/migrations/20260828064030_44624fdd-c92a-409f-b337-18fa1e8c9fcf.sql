CREATE TABLE public.lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  interested_brand text,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.lead_submissions TO anon;
GRANT ALL ON public.lead_submissions TO service_role;

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.lead_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

COMMENT ON TABLE public.lead_submissions IS 'Website lead capture submissions. Insert-only for anonymous visitors; read via service role.';