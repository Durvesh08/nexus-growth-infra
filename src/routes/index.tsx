import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoTicker } from "@/components/site/LogoTicker";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { RealEstateSection } from "@/components/site/RealEstateSection";
import { SystemFlow } from "@/components/site/SystemFlow";
import { Services } from "@/components/site/Services";
import { ShowcaseMockups } from "@/components/site/ShowcaseMockups";
import { Industries } from "@/components/site/Industries";
import { CaseStudies } from "@/components/site/CaseStudies";
import { AIDashboard } from "@/components/site/AIDashboard";
import { Founder } from "@/components/site/Founder";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adsrahu — Real Estate Lead Generation & Growth Systems" },
      { name: "description", content: "Adsrahu builds performance marketing, CRM, WhatsApp and AI automation systems for real estate, coaches, healthcare and modern businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProblemSolution />
      <RealEstateSection />
      <SystemFlow />
      <Services />
      <ShowcaseMockups />
      <Industries />
      <CaseStudies />
      <AIDashboard />
      <Founder />
      <Testimonials />
      <WhyUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
