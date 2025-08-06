import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <GallerySection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Index;
