import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import logoSolidusNew from "@assets/logo-solidus-new.png";

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre Nós */}
          <div>
            <h4 className="font-bold mb-4">Solidus Empreendimentos</h4>
            <p className="text-sm text-sidebar-foreground/80 leading-relaxed">
              Especialistas em imóveis com conforto, localização privilegiada e alto potencial de valorização.
            </p>
            <p className="text-sm text-sidebar-foreground/80 leading-relaxed mt-4">
              Conectamos você às melhores oportunidades imobiliárias em Brasília, com atendimento personalizado e segurança em cada etapa.
            </p>
          </div>

          {/* Endereço e Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Brasília,DF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <MapPin size={20} />
                Brasília – DF
              </a>
              <a
                href="tel:+556199886578"
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <Phone size={20} />
                (61) 99988-6578
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/solidusempreendimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                @solidusempreendimentos
              </a>
              <a
                href="https://www.facebook.com/share/17tySGHbdD/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                Solidus Imóveis DF
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Início
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Imóveis
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-sidebar-foreground/20 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-sidebar-foreground/60">
              © 2026 Solidus Empreendimentos — Todos os direitos reservados.
            </p>
            <img 
              src={logoSolidusNew} 
              alt="Solidus" 
              className="h-10 w-10 object-contain opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
