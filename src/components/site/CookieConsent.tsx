import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "grovix-cookie-consent";

// Basic DPDP-aware cookie consent banner. The stored value can later be used
// to gate analytics / pixel scripts (load them only when consent === "accepted").
export function CookieConsent() {
  // Rendered client-side after hydration; starts hidden on the server.
  const [choice, setChoice] = useState<string | null>(() => {
    if (typeof window === "undefined") return "hidden";
    return window.localStorage.getItem(STORAGE_KEY) ?? null;
  });

  if (choice !== null) return null;

  const decide = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use cookies and similar technologies to improve your experience and measure our marketing.
          See our{" "}
          <Link to="/privacy" className="text-gold underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="text-gold underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => decide("rejected")}>
            Reject
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-gold-bright" onClick={() => decide("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
