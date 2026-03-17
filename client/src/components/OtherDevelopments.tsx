import { MapPin, Home, Bed } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function OtherDevelopments() {
  return (
    <section id="empreendimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Outros Empreendimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça outros projetos e empreendimentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {condominiumData.otherDevelopments.map((dev) => (
            <div
              key={dev.id}
              className="card-corporate overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Development Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/30 transition-colors">
                <Home size={48} className="text-primary/40" />
              </div>

              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {dev.name}
              </h3>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{dev.location}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Home size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{dev.developer || "Apartamentos"}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Bed size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{dev.bedrooms}</span>
                </div>
              </div>

              <div className="border-t border-border pt-3">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  {dev.status}
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
