import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-inter">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <ProjectSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
