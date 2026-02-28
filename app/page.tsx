import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProductVision } from "@/components/ProductVision";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { ReportShowcase } from "@/components/ReportShowcase";
import { Compliance } from "@/components/Compliance";
import { VideoSection } from "@/components/VideoSection";
import { FAQ } from "@/components/FAQ";
import { DemoForm } from "@/components/DemoForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProductVision />
        <Features />
        <HowItWorks />
        <ReportShowcase />
        <Compliance />
        <VideoSection />
        <FAQ />
        <DemoForm />
        <Footer />
      </main>
    </>
  );
}
