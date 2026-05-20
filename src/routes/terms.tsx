import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Adsrahu" }, { name: "description", content: "The terms that govern your use of Adsrahu services and website." }] }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms that govern your use of Adsrahu services and this website."
      updated="May 2026"
      sections={[
        { h: "1. Agreement", p: <p>By engaging Adsrahu or using this website, you agree to these terms. If you do not agree, please refrain from using our services.</p> },
        { h: "2. Services", p: <p>Adsrahu provides performance marketing, lead generation, CRM, WhatsApp and automation services as scoped in individual engagement agreements.</p> },
        { h: "3. Payments", p: <p>Fees, billing cycles and deliverables are defined in your service agreement. Invoices are due within the period specified on each invoice.</p> },
        { h: "4. Results disclaimer", p: <p>While we engineer systems designed to drive measurable growth, no specific lead, revenue or ROAS outcome is guaranteed. Performance depends on multiple market factors.</p> },
        { h: "5. Intellectual property", p: <p>All Adsrahu frameworks, templates and proprietary systems remain our intellectual property. Client-supplied assets remain yours.</p> },
        { h: "6. Confidentiality", p: <p>Both parties agree to keep confidential information private and use it solely for the purposes of the engagement.</p> },
        { h: "7. Limitation of liability", p: <p>Adsrahu's liability is limited to the fees paid for services in the three months preceding any claim.</p> },
        { h: "8. Governing law", p: <p>These terms are governed by the applicable laws of India and the jurisdiction of competent courts therein.</p> },
      ]}
    />
  ),
});
