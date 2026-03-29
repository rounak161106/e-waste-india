import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlobalCrisisSection from "@/components/GlobalCrisisSection";
import IndiaCrisisSection from "@/components/IndiaCrisisSection";
import DeviceContentsSection from "@/components/DeviceContentsSection";
import ImpactsSection from "@/components/ImpactsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import QuizSection from "@/components/QuizSection";
import TakeActionSection from "@/components/TakeActionSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-ewaste-dark">
    <Navbar />
    <HeroSection />
    <GlobalCrisisSection />
    {/* Circuit board divider */}
    <div className="relative h-16 overflow-hidden opacity-[0.06]">
      <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h30l5-10h10l5 10h50' stroke='%2300FF88' fill='none' stroke-width='1'/%3E%3Ccircle cx='35' cy='10' r='3' fill='%2300FF88'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23FF6B35'/%3E%3Cpath d='M0 30h20l3-5h14l3 5h60' stroke='%23FF6B35' fill='none' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundSize: "200px 40px", backgroundPosition: "center" }} />
    </div>
    <IndiaCrisisSection />
    <DeviceContentsSection />
    <ImpactsSection />
    <CaseStudiesSection />
    <SolutionsSection />
    <QuizSection />
    <TakeActionSection />
    <FooterSection />
    <BackToTop />
  </div>
);

export default Index;
