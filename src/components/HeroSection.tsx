import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import valleyOverview from "@/assets/valley-overview.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Aquí se implementaría la lógica de reproducción de música
  };

  const trailerUrl = "https://www.youtube.com/watch?v=w7e_W-a39jQ&ab_channel=NeonCircuitGames";

  const texts = {
    es: {
      title: "Blooming Valley",
      subtitle1: "Un rincón en la naturaleza. Una vida por construir.",
      trailer: "Ver Tráiler",
      wishlist: "Wishlist en Steam"
    },
    en: {
      title: "Blooming Valley",
      subtitle1: "A corner in nature. A life to build.",
      subtitle2: "",
      trailer: "Watch Trailer",
      wishlist: "Wishlist on Steam"
    }
  };

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
      
      {/* Top Right Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <button
          onClick={toggleMusic}
          className="w-12 h-12 bg-primary-foreground/20 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary-foreground" />
          ) : (
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
          )}
        </button>
        
        <button
          onClick={toggleLanguage}
          className="w-12 h-12 bg-primary-foreground/20 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300"
          aria-label={`Cambiar a ${language === 'es' ? 'inglés' : 'español'}`}
        >
          <span className="text-sm font-bold text-primary-foreground">
            {language.toUpperCase()}
          </span>
        </button>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/30 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white px-6 py-2 rounded-lg inline-block mb-6 tracking-tight animate-pulse-slow bg-transparent">
          {texts[language].title}
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 font-light">
            {texts[language].subtitle1}
          </p>
           {texts[language].subtitle2 && (
             <p className="font-inter text-lg md:text-xl text-primary-foreground/80 font-light">
               {texts[language].subtitle2}
             </p>
           )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
    size="lg" 
    className="bg-warm-amber hover:bg-warm-amber/90 text-primary font-inter font-medium px-8 py-3 rounded-lg shadow-amber transition-all duration-300 hover:scale-105"
    onClick={() => window.open(trailerUrl, "_blank")}
  >
    {texts[language].trailer}
  </Button>
  <Button 
    variant="outline" 
    size="lg"
    className="group border-primary-foreground/30 text-forest-green hover:text-forest-green hover:bg-primary-foreground/10 bg-primary-foreground/10 font-inter font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] relative overflow-hidden"
  >
    <span className="absolute inset-0 border border-primary-foreground/20 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {texts[language].wishlist}
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