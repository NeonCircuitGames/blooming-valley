import { Card } from "@/components/ui/card";
import { Sprout, Fish, Users, TreePine, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Cultiva a tu ritmo",
    description: "No hay tiempo límite, solo las estaciones y tus decisiones.",
    color: "text-primary"
  },
  {
    icon: Fish,
    title: "Vive del entorno",
    description: "Pesca, cocina, recolecta, y crea.",
    color: "text-dusty-lavender"
  },
  {
    icon: Users,
    title: "Conecta con los aldeanos",
    description: "Cada personaje guarda una historia. Algunas, conocidas. Otras, aún sin contar.",
    color: "text-warm-amber"
  },
  {
    icon: TreePine,
    title: "Explora sin combatir",
    description: "Conoce a los espíritus del bosque: observa e interpreta.",
    color: "text-slate-gray"
  },
  {
    icon: Sparkles,
    title: "Un mundo con alma",
    description: "Eventos sorprendentes y secretos de la naturaleza por descubrir.",
    color: "text-dusty-lavender"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Características Clave
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las mecánicas que hacen de Blooming Valley una experiencia única.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-8 bg-card hover:bg-card/80 border-border/50 shadow-soft transition-all duration-500 hover:scale-105 hover:shadow-amber animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="mb-6">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4 group-hover:text-warm-amber transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-warm-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 bg-dusty-lavender rounded-full animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;