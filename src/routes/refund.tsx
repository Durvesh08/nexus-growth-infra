import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({ meta: [{ title: "Refund Policy — Adsrahu" }, { name: "description", content: "Our refund policy for Adsrahu services and engagements." }] }),
  component: () => (
    <LegalPage
      title="Refund Policy"
      subtitle="Clear, fair terms for our service engagements."
      updated="May 2026"
      sections={[
        { h: "1. Scope", p: <p>This policy covers paid services delivered by Adsrahu. Specific refund terms may also be defined in your individual engagement agreement.</p> },
        { h: "2. Strategy & audit calls", p: <p>Strategy calls are complimentary unless otherwise specified. Paid audit reports are non-refundable once delivered.</p> },
        { h: "3. Project-based work", p: <p>For scoped projects (landing pages, CRM setup, funnel builds), refunds are available on the unworked portion if cancellation occurs before delivery milestones.</p> },
        { h: "4. Monthly retainers", p: <p>Retainer fees cover work delivered in the billing month and are non-refundable once that month's services have commenced.</p> },
        { h: "5. Ad spend", p: <p>Ad budget paid to platforms (Meta, Google, etc.) is governed by those platforms' terms and is not refundable by Adsrahu.</p> },
        { h: "6. How to request a refund", p: <p>Email contact@adsrahu.com within 7 days of the billing event with your invoice details and reason. We aim to respond within 3 business days.</p> },
        { h: "7. Updates", p: <p>This policy may be updated periodically. The latest version always applies to active engagements.</p> },
      ]}
    />
  ),
});
