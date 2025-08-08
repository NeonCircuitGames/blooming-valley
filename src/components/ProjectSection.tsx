import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Download, MapPin, Clock } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre el Proyecto
            </h2>
            <div className="w-24 h-1 bg-warm-amber mx-auto rounded-full" />
          </div>
          
          {/* Main Content */}
          <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-soft mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="font-inter text-lg leading-relaxed text-foreground mb-6">
                  Desarrollado por "Neon Circuit Games", un estudio peruano basado en la ciudad de Arequipa. <span className="font-semibold text-primary">Blooming Valley</span> nace del deseo de crear un juego que celebre la vida sencilla en el valle. Estamos construyendo un vertical slice con Unreal Engine durante 7 meses, buscando transmitir una historia de pertenencia y conexión con la naturaleza.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-4 bg-mist rounded-lg">
                    <MapPin className="w-8 h-8 text-dusty-lavender mx-auto mb-2" />
                    <div className="font-playfair text-sm font-semibold text-primary">Origen</div>
                    <div className="font-inter text-sm text-muted-foreground">Perú</div>
                  </div>
                  
                  <div className="text-center p-4 bg-mist rounded-lg">
                    <Clock className="w-8 h-8 text-warm-amber mx-auto mb-2" />
                    <div className="font-playfair text-sm font-semibold text-primary">Desarrollo</div>
                    <div className="font-inter text-sm text-muted-foreground">7 meses</div>
                  </div>
                  
                  <div className="text-center p-4 bg-mist rounded-lg">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">UE</span>
                    </div>
                    <div className="font-playfair text-sm font-semibold text-primary">Engine</div>
                    <div className="font-inter text-sm text-muted-foreground">Unreal Engine</div>
                  </div>
                </div>
                
                <div className="bg-warm-amber/10 border-l-4 border-warm-amber p-6 rounded-lg">
                  <p className="font-inter text-base text-foreground italic mb-4">
                    "Queremos que cada jugador encuentre en Blooming Valley un espejo de su propia búsqueda de sentido y conexión."
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    — Neon Circuit Games
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-warm-amber hover:bg-warm-amber/90 text-primary font-inter font-medium px-8 py-3 rounded-lg shadow-amber transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Apóyanos en Steam
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-muted font-inter font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Dossier PDF
              </Button>
            </div>
          </div>
          
          {/* Atmospheric decoration */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-4 opacity-40">
              <div className="w-8 h-1 bg-dusty-lavender rounded-full" />
              <div className="w-4 h-1 bg-warm-amber rounded-full" />
              <div className="w-8 h-1 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;