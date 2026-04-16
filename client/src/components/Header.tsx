import { Menu, X } from "lucide-react";
import { useState } from "react";
import { condominiumData } from "@/lib/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-smooth">
              Galeria
            </a>
            <a href="#amenidades" className="text-foreground hover:text-primary transition-smooth">
              Lazer
            </a>
            <a href="#plantas" className="text-foreground hover:text-primary transition-smooth">
              Plantas
            </a>
            <a href="#localizacao" className="text-foreground hover:text-primary transition-smooth">
              Localização
            </a>
            <a href="#empreendimentos" className="text-foreground hover:text-primary transition-smooth">
              Empreendimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute right-4 active:scale-90 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border space-y-1">
            <a href="#sobre" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Sobre
            </a>
            <a href="#galeria" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Galeria
            </a>
            <a href="#amenidades" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Lazer
            </a>
            <a href="#plantas" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Plantas
            </a>
            <a href="#localizacao" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Localização
            </a>
            <a href="#empreendimentos" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Empreendimentos
            </a>
            <a href="#contato" className="block py-3 px-2 text-foreground hover:text-primary hover:bg-secondary/5 rounded transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
