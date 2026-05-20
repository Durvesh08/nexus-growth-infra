import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { ShowcaseMockups } from "@/components/site/ShowcaseMockups";
import { SystemFlow } from "@/components/site/SystemFlow";
import { RealEstateSection } from "@/components/site/RealEstateSection";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Adsrahu | Real Estate Lead Generation & Growth" },
      { name: "description", content: "Real estate lead generation, Meta & Google Ads, CRM automation, WhatsApp funnels and high-converting landing pages." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Growth systems built<br /><span className="text-gradient">around results.</span></>}
        description="Real estate lead generation, performance ads, CRM and WhatsApp automation — engineered as one connected growth engine."
        primaryCta={{ label: "Book Strategy Call", to: "/book-a-call" }}
        secondaryCta={{ label: "View Case Studies", to: "/case-studies" }}
      />
      <RealEstateSection />
      <Services />
      <SystemFlow />
      <ShowcaseMockups />
      <FinalCTA />
    </>
  );
}
