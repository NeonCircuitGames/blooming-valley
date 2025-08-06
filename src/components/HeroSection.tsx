import { Button } from "@/components/ui/button";
import valleyOverview from "@/assets/valley-overview.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 animate-parallax"
        style={{
          backgroundImage: `url(${valleyOverview})`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      {/* Floating mist effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
          Blooming Valley
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 font-light">
            Un rincón olvidado. Una vida por reconstruir.
          </p>
          <p className="font-inter text-lg md:text-xl text-primary-foreground/80 font-light">
            Un viaje de silencio, memoria y raíces.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-warm-amber hover:bg-warm-amber/90 text-primary font-inter font-medium px-8 py-3 rounded-lg shadow-amber transition-all duration-300 hover:scale-105"
          >
            Ver Tráiler
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-inter font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Wishlist en Steam
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;