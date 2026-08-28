import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLead } from "@/lib/leads.functions";

// Shared lead capture form used on Home, Lead Foundry, AiHive and Contact.
// All submissions go to the lead_submissions table via submitLead().
export function LeadForm({
  sourcePage,
  defaultBrand,
  submitLabel = "Submit Enquiry",
  dark = false,
}: {
  sourcePage: string;
  defaultBrand?: string;
  submitLabel?: string;
  dark?: boolean;
}) {
  const [brand, setBrand] = useState(defaultBrand ?? "");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await submitLead({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          company: String(fd.get("company") ?? ""),
          message: String(fd.get("message") ?? ""),
          interested_brand: brand,
          source_page: sourcePage,
          website: String(fd.get("website") ?? ""),
        },
      });
      toast.success("Thank you! Our team will reach out to you shortly.");
      form.reset();
      setBrand(defaultBrand ?? "");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`${sourcePage}-name`}>Name *</Label>
          <Input id={`${sourcePage}-name`} name="name" required placeholder="Your full name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${sourcePage}-email`}>Email *</Label>
          <Input id={`${sourcePage}-email`} name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${sourcePage}-phone`}>Phone / WhatsApp</Label>
          <Input id={`${sourcePage}-phone`} name="phone" type="tel" placeholder="+91 ..." />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${sourcePage}-company`}>Company</Label>
          <Input id={`${sourcePage}-company`} name="company" placeholder="Company name" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Interested in</Label>
        <Select value={brand} onValueChange={setBrand}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lead-foundry">Lead Foundry — Performance Marketing</SelectItem>
            <SelectItem value="aihive">AiHive — AI &amp; Automation</SelectItem>
            <SelectItem value="both">Both</SelectItem>
            <SelectItem value="general">General Enquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${sourcePage}-message`}>Message</Label>
        <Textarea
          id={`${sourcePage}-message`}
          name="message"
          rows={4}
          placeholder="Tell us briefly about your business and what you need..."
        />
      </div>

      {/* Honeypot field — hidden from humans */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button
        type="submit"
        disabled={pending}
        className={
          dark
            ? "w-full bg-primary text-primary-foreground hover:bg-gold-bright"
            : "w-full bg-primary text-primary-foreground hover:bg-gold-bright"
        }
      >
        {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {submitLabel}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you consent to us contacting you as described in our Privacy Policy.
      </p>
    </form>
  );
}
