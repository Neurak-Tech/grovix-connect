import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Grovix Ventures Pvt Ltd" },
      {
        name: "description",
        content:
          "Terms governing use of grovix.co.in and services offered by GROVIX VENTURES PRIVATE LIMITED, including Lead Foundry and AiHive.",
      },
      { property: "og:title", content: "Terms & Conditions — Grovix Ventures Pvt Ltd" },
      {
        property: "og:description",
        content: "Legal terms for Grovix Ventures websites, consultations, and client engagements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro={`These terms govern access to grovix.co.in and commercial services provided by ${SITE.legalName}. By using the site or engaging us, you agree to them.`}
    >
      <LegalSection title="1. Agreement">
        <p>
          These Terms &amp; Conditions (“Terms”) are a contract between you and {SITE.legalName},
          CIN {SITE.cin}, registered at {SITE.address.line1}, {SITE.address.line2}. If you act for a
          company, you confirm you are authorised to bind it.
        </p>
        <p>
          A signed proposal, statement of work, or insertion order (“SOW”) prevails over these Terms
          where they conflict, except for clauses on liability, governing law, and intellectual
          property ownership of our pre-existing materials.
        </p>
      </LegalSection>

      <LegalSection title="2. Our brands and services">
        <p>
          <strong className="text-foreground">Lead Foundry</strong> provides performance marketing
          services, including media buying, creative testing, landing pages, and reporting. Ad
          platforms (Meta, Google, and others) remain independent parties; their policies apply to
          your accounts.
        </p>
        <p>
          <strong className="text-foreground">AiHive</strong> provides software and implementation
          for AI agents, workflow automation, and CRM features. Platform availability, WhatsApp
          template approvals, and third-party API limits are outside our exclusive control.
        </p>
        <p>
          Website content is general information. A consultation, audit, or demo does not create a
          client relationship until an SOW is accepted and, where required, a retainer or setup fee
          is received.
        </p>
      </LegalSection>

      <LegalSection title="3. Enquiries and communications">
        <p>
          Forms, email, and WhatsApp ({SITE.phoneDisplay}) may be used to contact you about your
          request. You must provide accurate details. We may refuse or discontinue services that we
          reasonably believe are unlawful, harmful, or outside our expertise.
        </p>
      </LegalSection>

      <LegalSection title="4. Fees, taxes, and media spend">
        <p>
          Fees are as stated in the SOW, exclusive of GST unless noted. Invoices are payable within
          15 days unless otherwise agreed. Late amounts may accrue interest at 1.5% per month or the
          maximum allowed by law, whichever is lower.
        </p>
        <p>
          Advertising media spend is paid to the relevant platform (or prepaid to us for onward
          payment) and is not a Grovix professional fee. Unused media credit remains subject to
          platform rules. We do not guarantee a specific ROAS, lead volume, or revenue outcome.
        </p>
      </LegalSection>

      <LegalSection title="5. Client responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>grant timely access to ad accounts, analytics, domains, WhatsApp Business, and CRM;</li>
          <li>obtain all consents required to process your customers’ data through our tools;</li>
          <li>ensure creatives, offers, and landing pages comply with applicable advertising and consumer law;</li>
          <li>not reverse engineer AiHive software or resell access without written permission.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          Grovix retains all rights in our methodologies, software, templates, and pre-existing
          materials. Upon full payment, you receive a non-exclusive licence to use deliverables
          created specifically for you under the SOW, for your internal business purposes. You
          retain rights in your trademarks, product data, and customer lists.
        </p>
      </LegalSection>

      <LegalSection title="7. Confidentiality">
        <p>
          Each party will keep the other’s non-public business information confidential and use it
          only to perform the engagement, except for information that is public, independently
          developed, or required to be disclosed by law.
        </p>
      </LegalSection>

      <LegalSection title="8. Warranties and liability">
        <p>
          The website is provided “as is.” We do not warrant uninterrupted availability. To the
          fullest extent permitted by Indian law, Grovix is not liable for indirect, incidental,
          special, or consequential losses, including lost profits or data, arising from use of the
          site or services.
        </p>
        <p>
          Our aggregate liability arising out of an SOW is limited to the professional fees actually
          paid to us under that SOW in the three months preceding the claim (excluding media spend
          and third-party platform charges). Nothing in these Terms limits liability for fraud or
          other liability that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnity">
        <p>
          You will indemnify Grovix against claims arising from your content, product claims,
          customer data, or your breach of platform policies or these Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Term and termination">
        <p>
          Either party may terminate an SOW for material breach that remains uncured 15 days after
          written notice, or immediately if the other party becomes insolvent. Upon termination you
          will pay for work performed and non-cancellable third-party commitments. Sections on IP,
          confidentiality, liability, and governing law survive.
        </p>
      </LegalSection>

      <LegalSection title="11. Website use">
        <p>
          You may not scrape, overload, or attempt to gain unauthorised access to the site. We may
          suspend access for abuse. Links to third-party sites are for convenience; we are not
          responsible for their content.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law">
        <p>
          These Terms are governed by the laws of India. Courts at Kolkata, West Bengal, have
          exclusive jurisdiction, without prejudice to our right to seek interim relief elsewhere.
        </p>
        <p>
          Personal data is handled as described in our{" "}
          <Link to="/privacy" className="text-gold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          {SITE.legalName}
          <br />
          {SITE.address.line1}, {SITE.address.line2}
          <br />
          <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
            {SITE.email}
          </a>
          {" · "}
          {SITE.phoneDisplay}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
