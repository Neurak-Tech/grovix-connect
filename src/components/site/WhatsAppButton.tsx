import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

// Site-wide WhatsApp click-to-chat button. Replace SITE.whatsappNumber in
// src/lib/site.ts with the real business number before launch.
export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi Grovix Ventures, I'd like to know more about your services.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-gold/40 bg-card p-3.5 text-gold shadow-lg transition-transform hover:scale-105 hover:border-gold hover:bg-secondary"
      style={{ boxShadow: "0 8px 30px -8px oklch(0.78 0.115 90 / 45%)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
