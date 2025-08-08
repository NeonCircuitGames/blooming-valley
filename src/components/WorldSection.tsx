import { Card } from "@/components/ui/card";
import { MapPin, TreePine, Home, Wheat, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WorldSection = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
      title: "Un Mundo por Descubrir",
      subtitle: "Explora cada rincón de este valle lleno de misterios y recuerdos",
      locations: [
        {
          name: "El Valle Central",
          description: "Tu hogar ancestral, lleno de posibilidades",
          icon: Mountain,
          position: "top-1/2 left-1/2"
        },
        {
          name: "La Aldea",
          description: "Donde viven los últimos habitantes",
          icon: Home,
          position: "top-1/3 right-1/4"
        },
        {
          name: "La Granja",
          description: "Terrenos fértiles esperando ser cultivados",
          icon: Wheat,
          position: "bottom-1/3 left-1/3"
        },
        {
          name: "El Bosque Místico",
          description: "Hogar de espíritus y secretos antiguos",
          icon: TreePine,
          position: "top-1/4 left-1/4"
        }
      ]
    },
    en: {
      title: "A World to Discover",
      subtitle: "Explore every corner of this valley full of mysteries and memories",
      locations: [
        {
          name: "The Central Valley",
          description: "Your ancestral home, full of possibilities",
          icon: Mountain,
          position: "top-1/2 left-1/2"
        },
        {
          name: "The Village",
          description: "Where the last inhabitants live",
          icon: Home,
          position: "top-1/3 right-1/4"
        },
        {
          name: "The Farm",
          description: "Fertile lands waiting to be cultivated",
          icon: Wheat,
          position: "bottom-1/3 left-1/3"
        },
        {
          name: "The Mystic Forest",
          description: "Home to spirits and ancient secrets",
          icon: TreePine,
          position: "top-1/4 left-1/4"
        }
      ]
    }
  };

  const currentTexts = texts[language];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-mist relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-dusty-lavender/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-warm-amber/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            {currentTexts.title}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentTexts.subtitle}
          </p>
          <div className="w-24 h-1 bg-warm-amber mx-auto rounded-full mt-6" />
        </div>

        {/* Illustrated Map */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-border/30 shadow-soft overflow-hidden">
            <div className="relative h-96 md:h-[500px] bg-gradient-to-b from-sky-200/20 via-green-100/30 to-earth-brown/20">
              {/* Mountain backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-gray/20" />
              
              {/* River illustration */}
              <div className="absolute top-1/4 left-0 right-1/3 h-2 bg-dusty-lavender/40 rounded-full transform rotate-12" />
              
              {/* Location markers */}
              {currentTexts.locations.map((location, index) => (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${location.position} group cursor-pointer`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Pulsing indicator */}
                  <div className="absolute inset-0 w-12 h-12 bg-warm-amber/20 rounded-full animate-ping" />
                  
                  {/* Main marker */}
                  <div className="relative w-12 h-12 bg-warm-amber rounded-full flex items-center justify-center shadow-amber hover:scale-110 transition-all duration-300">
                    <location.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Tooltip */}
                  <Card className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-card/90 backdrop-blur-sm border-border/50 shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 min-w-max">
                    <h4 className="font-playfair font-semibold text-primary text-sm mb-1">
                      {location.name}
                    </h4>
                    <p className="font-inter text-xs text-muted-foreground">
                      {location.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTexts.locations.map((location, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/80 hover:bg-card border-border/50 shadow-soft transition-all duration-500 hover:scale-105 hover:shadow-amber animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="mb-4">
                  <location.icon className="w-8 h-8 mx-auto text-warm-amber group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                  {location.name}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  {location.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Atmospheric elements */}
        <div className="mt-12 flex justify-center space-x-4 opacity-50">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-dusty-lavender rounded-full animate-float"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldSection;