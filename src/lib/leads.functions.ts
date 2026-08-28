import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  interested_brand: z.string().trim().max(60).optional().or(z.literal("")),
  source_page: z.string().trim().max(60),
  // Honeypot — bots fill it, humans never see it.
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      // Silently accept bot submissions without storing them.
      return { ok: true };
    }

    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("Backend configuration missing");

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("lead_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      message: data.message || null,
      interested_brand: data.interested_brand || null,
      source_page: data.source_page,
    });

    if (error) throw new Error("Could not submit your enquiry. Please try again.");
    return { ok: true };
  });
