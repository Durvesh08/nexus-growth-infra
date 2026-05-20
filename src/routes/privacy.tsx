import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Adsrahu" }, { name: "description", content: "How Adsrahu collects, uses and protects your information." }] }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect your information."
      updated="May 2026"
      sections={[
        { h: "1. Information we collect", p: <p>We collect contact information you voluntarily provide through forms, calls or messaging — including name, email, phone number, company, and project details.</p> },
        { h: "2. How we use it", p: <p>To respond to inquiries, schedule strategy calls, deliver our services, and send relevant growth resources. We never sell your data.</p> },
        { h: "3. Cookies & analytics", p: <p>We use privacy-respecting analytics to understand how the site is used and improve content quality. You may disable cookies in your browser settings.</p> },
        { h: "4. Third-party services", p: <p>We rely on trusted providers (e.g. CRM, email, scheduling) under strict data agreements. Only the minimum data required is shared.</p> },
        { h: "5. Data retention", p: <p>We retain inquiry and client data only as long as needed to deliver services and meet legal obligations.</p> },
        { h: "6. Your rights", p: <p>You may request access, correction or deletion of your personal data at any time by emailing hello@adsrahu.com.</p> },
        { h: "7. Updates", p: <p>This policy may be updated periodically. Material changes will be reflected on this page with a new “last updated” date.</p> },
      ]}
    />
  ),
});
