import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Twitter, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Blooming Valley
            </h3>
            <p className="font-inter text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Un RPG de simulación de vida que explora la belleza de la vida rural, 
              los vínculos humanos y la búsqueda de pertenencia al territorio.
            </p>
            
            {/* Newsletter */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-4">
              <div className="mb-3">
                <h4 className="font-inter font-semibold text-primary-foreground mb-2">
                  Mantente al día
                </h4>
                <p className="font-inter text-sm text-primary-foreground/80">
                  Recibe actualizaciones sobre el desarrollo
                </p>
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="tu@email.com" 
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  size="sm"
                  className="bg-warm-amber hover:bg-warm-amber/90 text-primary"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-warm-amber transition-colors duration-300">
                  Steam Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-warm-amber transition-colors duration-300">
                  Tráiler del Juego
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-warm-amber transition-colors duration-300">
                  Dossier PDF
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-warm-amber transition-colors duration-300">
                  Prensa
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 font-inter">
              <p className="text-primary-foreground/80 text-sm">
                hello@neoncircuitgames.com
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-warm-amber hover:bg-primary-foreground/10"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-warm-amber hover:bg-primary-foreground/10"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-warm-amber hover:bg-primary-foreground/10"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-sm text-primary-foreground/80">
              © 2025 Neon Circuit Games. Hecho con <Heart className="w-4 h-4 inline text-warm-amber" /> en Arequipa, Perú.
            </div>
            
            <div className="font-inter text-sm text-primary-foreground/80">
              Videojuego desarrollado con Unreal Engine
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;