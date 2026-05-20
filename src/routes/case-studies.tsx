import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ShowcaseMockups } from "@/components/site/ShowcaseMockups";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Adsrahu Growth Systems" },
      { name: "description", content: "Real estate, coaches and service businesses scaled with Adsrahu's lead generation systems, CRM and WhatsApp automation." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Systems in production,<br /><span className="text-gradient">results in pipeline.</span></>}
        description="A look inside the funnels, CRM pipelines, WhatsApp automations and ad systems we've engineered for real businesses."
        primaryCta={{ label: "Book Strategy Call", to: "/book-a-call" }}
      />
      <CaseStudies />
      <ShowcaseMockups />
      <FinalCTA />
    </>
  );
}
