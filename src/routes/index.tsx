import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoTicker } from "@/components/site/LogoTicker";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { SystemFlow } from "@/components/site/SystemFlow";
import { CaseStudies } from "@/components/site/CaseStudies";
import { AIDashboard } from "@/components/site/AIDashboard";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";
import { Cursor } from "@/components/site/Cursor";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { ShowcaseMockups } from "@/components/site/ShowcaseMockups";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adsrahu — Growth Infrastructure For Modern Businesses" },
      {
        name: "description",
        content:
          "Adsrahu builds premium growth infrastructure — performance marketing, AI automation, CRM, WhatsApp funnels and conversion systems for ambitious brands.",
      },
      { property: "og:title", content: "Adsrahu — Growth Infrastructure For Modern Businesses" },
      {
        property: "og:description",
        content:
          "Performance marketing, AI systems, CRM and WhatsApp automation — engineered as one operating layer for modern brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="dark cursor-stealth min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <LogoTicker />
        <Services />
        <Industries />
        <SystemFlow />
        <CaseStudies />
        <AIDashboard />
        <Testimonials />
        <WhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
