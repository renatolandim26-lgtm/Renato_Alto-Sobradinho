import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre o Grupo */}
          <div>
            <h4 className="font-bold mb-4">Sobre Nós</h4>
            <p className="text-sm text-sidebar-foreground/80 leading-relaxed">
              Nosso objetivo é apresentar opções com boa localização, conforto, lazer e potencial de valorização, oferecendo suporte em todo o processo para que você encontre o imóvel ideal com segurança e praticidade.
            </p>
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

          {/* Copyright */}
          <div className="text-sm text-sidebar-foreground/60">
            <p>© 2026 Sólidus. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
