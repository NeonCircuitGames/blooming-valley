import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import valleyOverview from "@/assets/valley-overview.jpg";
import villageScene from "@/assets/village-scene.jpg";
import farmingScene from "@/assets/farming-scene.jpg";
import explorationScene from "@/assets/exploration-scene.jpg";
import communityScene from "@/assets/community-scene.jpg";
import forestSpiritScene from "@/assets/forest-spirit-scene.jpg";

const galleryItems = [
  {
    image: valleyOverview,
    title: "El Valle",
    caption: "Donde la niebla susurra nombres que olvidaste."
  },
  {
    image: villageScene,
    title: "La Aldea",
    caption: "Historias esperan en cada ventana iluminada."
  },
  {
    image: farmingScene,
    title: "La Granja",
    caption: "Lo que crece afuera refleja lo que llevas dentro."
  },
  {
    image: explorationScene,
    title: "El Bosque",
    caption: "No necesitas luchar, solo escuchar."
  },
  {
    image: communityScene,
    title: "La Comunidad",
    caption: "El fuego une más que las palabras."
  },
  {
    image: forestSpiritScene,
    title: "Los Espíritus",
    caption: "Guardianes silenciosos de secretos antiguos."
  }
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-24 bg-mist">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Un Mundo por Descubrir
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada rincón del valle guarda una historia, un misterio, una invitación a la contemplación.
          </p>
        </div>

        {/* Main Gallery Carousel */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-soft bg-card border-border/30">
            <div className="relative">
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className="w-full h-96 md:h-[500px] object-cover transition-all duration-700"
              />
              
              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="font-inter text-lg italic opacity-90">
                  {galleryItems[currentIndex].caption}
                </p>
              </div>
              
              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentIndex 
                  ? 'ring-2 ring-warm-amber shadow-amber' 
                  : 'hover:shadow-soft opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-24 object-cover"
              />
            </Card>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-warm-amber scale-110' 
                  : 'bg-dusty-lavender/50 hover:bg-dusty-lavender'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;