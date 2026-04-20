import { MapPin, Home, Bed } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function OtherDevelopments() {
  return (
    <section id="empreendimentos" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Outros Empreendimentos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça outros projetos e empreendimentos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {condominiumData.otherDevelopments.map((dev) => (
            <div
              key={dev.id}
              className="card-corporate overflow-hidden hover:shadow-xl rounded-2xl shadow-md transition-all duration-300 group p-6"
            >
              {/* Development Image Placeholder */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/30 transition-colors overflow-hidden rounded-xl">                {dev.image ? (
                  <img
                    src={dev.image}
                    alt={dev.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  )/>
                ) : (
                  <Home size={40} className="text-primary/40" />
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {dev.name}
              </h3>

              <div className="space-y-2 sm:space-y-3 mb-6 text-xs sm:text-sm">
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

              {dev.status && (
                <div className="border-t border-border pt-3">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {dev.status}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
