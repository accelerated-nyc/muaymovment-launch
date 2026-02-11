import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MethodSection from "@/components/sections/MethodSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import SpectrumSection from "@/components/sections/SpectrumSection";
import AboutSection from "@/components/sections/AboutSection";
import PricingSection from "@/components/sections/PricingSection";
import SchedulingSection from "@/components/sections/SchedulingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
  <main>
    <HeroSection />
    <ProblemSection />
    <MethodSection />
    <VideoShowcase />
    <SpectrumSection />
    <AboutSection />
    <PricingSection />
    <SchedulingSection />
    <TestimonialsSection />
    <FooterSection />
  </main>
  );
};

export default Index;
