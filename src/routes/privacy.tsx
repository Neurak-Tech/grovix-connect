import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Grovix Ventures Pvt Ltd" },
      {
        name: "description",
        content:
          "How GROVIX VENTURES PRIVATE LIMITED collects, uses, and protects personal information under Indian law, including the Digital Personal Data Protection Act, 2023.",
      },
      { property: "og:title", content: "Privacy Policy — Grovix Ventures Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Read how Grovix Ventures handles personal data for Lead Foundry, AiHive, and grovix.co.in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`This policy explains how ${SITE.legalName} (“Grovix”, “we”, “us”) collects, uses, stores, and shares personal information when you visit grovix.co.in or use Lead Foundry and AiHive services.`}
    >
      <LegalSection title="1. Who we are">
        <p>
          {SITE.legalName} is a company incorporated in India (CIN {SITE.cin}, GSTIN {SITE.gstin}).
          Registered office: {SITE.address.line1}, {SITE.address.line2}.
        </p>
        <p>
          For privacy requests, write to{" "}
          <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
            {SITE.email}
          </a>{" "}
          or call {SITE.phoneDisplay}. We typically respond within 7 business days.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>We collect information you provide and information generated when you use our sites and services:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Enquiry and account data:</strong> name, email,
            phone, company, message, brand interest (Lead Foundry, AiHive, or both), and any files
            or notes you send us.
          </li>
          <li>
            <strong className="text-foreground">Service data:</strong> advertising account metrics,
            WhatsApp Business identifiers, CRM records, workflow logs, and content you connect to
            AiHive or ask us to manage under a statement of work.
          </li>
          <li>
            <strong className="text-foreground">Technical data:</strong> IP address, browser type,
            device, referring URL, pages viewed, and approximate location derived from IP.
          </li>
          <li>
            <strong className="text-foreground">Cookies and similar technologies:</strong> session
            cookies required to run the site, and (only if you accept) measurement cookies used to
            understand traffic and campaign performance.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Why we use personal data">
        <p>We process personal data to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>respond to consultations, audits, demos, and support requests;</li>
          <li>deliver performance marketing, automation, and related professional services;</li>
          <li>operate, secure, and improve grovix.co.in and our products;</li>
          <li>send service messages and, where permitted, relevant updates about our brands;</li>
          <li>comply with tax, accounting, and other legal obligations in India;</li>
          <li>detect fraud, abuse, and security incidents.</li>
        </ul>
        <p>
          Where the Digital Personal Data Protection Act, 2023 applies, we rely on your consent for
          marketing communications and optional cookies, and on legitimate uses necessary to perform
          a contract or comply with law for core service delivery.
        </p>
      </LegalSection>

      <LegalSection title="4. Sharing">
        <p>
          We do not sell personal data. We share it only with: (a) our employees and contractors
          bound by confidentiality; (b) infrastructure and communications providers (hosting, email,
          analytics, WhatsApp Business, advertising platforms) acting on our instructions; (c)
          professional advisers; and (d) authorities when required by law. Lead Foundry campaigns
          may send data to Meta, Google, and similar platforms according to your campaign setup.
        </p>
      </LegalSection>

      <LegalSection title="5. Retention">
        <p>
          Enquiry records are kept for up to 36 months after last contact unless you ask us to
          delete them sooner and we have no legal need to retain them. Client files follow the
          retention period in the relevant contract, then a further 8 years for tax records where
          applicable. Cookie identifiers last for the period described in your browser or until you
          clear them.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          Subject to Indian law, you may request access, correction, erasure, withdrawal of consent,
          and grievance redressal. You may also nominate another person to exercise rights on your
          behalf in the event of death or incapacity, as provided under the DPDP Act. To exercise
          rights, email {SITE.email} with sufficient detail for us to verify the request.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>
          Essential cookies keep the site working (for example, remembering your cookie choice).
          Optional cookies are used only after you tap Accept on our banner. You can Reject optional
          cookies and still use the public website. Changing your mind later: clear site data for
          grovix.co.in in your browser, then reload and choose again.
        </p>
      </LegalSection>

      <LegalSection title="8. International transfers">
        <p>
          Some processors may store or process data outside India. We take reasonable contractual
          and technical steps so that such processing remains consistent with this policy and
          applicable law.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          Our services are directed at businesses, not children. We do not knowingly collect
          personal data from anyone under 18. If you believe we have, contact us and we will delete
          it.
        </p>
      </LegalSection>

      <LegalSection title="10. Security and changes">
        <p>
          We use HTTPS, access controls, and least-privilege practices. No method of transmission is
          perfectly secure. We will update this page when our practices change and revise the “Last
          updated” date. Continued use of the site after a change constitutes notice of the updated
          policy, except where consent is legally required.
        </p>
        <p>
          This policy should be read with our{" "}
          <Link to="/terms" className="text-gold hover:underline">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
