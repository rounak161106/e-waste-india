import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobalCrisisSection from "@/components/GlobalCrisisSection";
import IndiaCrisisSection from "@/components/IndiaCrisisSection";
import DeviceContentsSection from "@/components/DeviceContentsSection";
import ImpactsSection from "@/components/ImpactsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import TakeActionSection from "@/components/TakeActionSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-ewaste-dark">
    <Navbar />
    <HeroSection />
    <GlobalCrisisSection />
    <IndiaCrisisSection />
    <DeviceContentsSection />
    <ImpactsSection />
    <CaseStudiesSection />
    <SolutionsSection />
    <TakeActionSection />
    <FooterSection />
    <BackToTop />
  </div>
);

export default Index;
