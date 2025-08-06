import { Card } from "@/components/ui/card";
import villageScene from "@/assets/village-scene.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${villageScene})` }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Qué es Blooming Valley?
            </h2>
            <div className="w-24 h-1 bg-warm-amber mx-auto rounded-full" />
          </div>
          
          {/* Main Description */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft animate-fade-in">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
                  <span className="font-semibold text-primary">Blooming Valley</span> es un RPG de simulación de vida en tercera persona, donde el silencio pesa tanto como la tierra que cultivas. Heredas una parcela abandonada en un valle melancólico, un lugar que alguna vez floreció, y que ahora espera a que alguien le devuelva el alma.
                </p>
                
                <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
                  Cultiva, pesca, cocina y explora, pero también <em className="text-dusty-lavender font-medium">escucha</em>: hay ecos en los bosques, historias olvidadas en cada rincón, y criaturas que te observan desde la niebla.
                </p>
                
                <div className="mt-8 p-6 bg-mist rounded-lg border-l-4 border-warm-amber">
                  <p className="font-inter text-base text-muted-foreground italic">
                    "Un juego donde la introspección y la conexión con la naturaleza se entrelazan en una experiencia única de crecimiento personal."
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Atmospheric elements */}
          <div className="mt-12 flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-dusty-lavender rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-warm-amber rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;