import { ParkingCircle, Maximize2, MessageCircle, Trees } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Units() {
  const { contact } = condominiumData;
  const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(contact.main.defaultMessage)}`;

  return (
    <section id="plantas" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Plantas e Unidades
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Escolha entre diferentes opções de plantas que se adaptam ao seu estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {condominiumData.main.units.map((unit) => (
            <div
              key={unit.id}
              className="card-corporate overflow-hidden hover:shadow-xl rounded-2xl shadow-md transition-all duration-300 p-8"
            >
              {/* Unit Image */}
              <div className="h-48 overflow-hidden rounded-xl mb-8 flex items-center justify-center bg-muted">                {unit.image && unit.image !== "" ? (
                  <img 
                    src={unit.image} 
                    alt={unit.name} 
                    loading="lazy"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />>
                ) : (
                  <div className="text-center">
                    <Maximize2 size={48} className="text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Imagem da planta</p>
                  </div>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {unit.name}
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-8 text-sm sm:text-base">
                <div className="flex items-center gap-3 text-foreground">
                  <Maximize2 size={18} className="text-primary flex-shrink-0" />
                  <span>{unit.area}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <ParkingCircle size={18} className="text-primary flex-shrink-0" />
                  <span>
                    {unit.name === "2 Quartos" && "1 garagem vinculada"}
                    {unit.name === "3 Quartos" && "2 garagens vinculadas"}
                    {unit.name === "Cobertura" && "2 garagens vinculadas"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Trees size={18} className="text-primary flex-shrink-0" />
                  <span>Suíte e {unit.name === "Cobertura" ? "Área Privativa" : "Garden"}</span>
                </div>

              </div>

              <div className="border-t border-border pt-6">
                <a
                  href="#contato"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all text-sm sm:text-base active:scale-95"
                >
                  <MessageCircle size={16} />
                  Solicitar Informações
                </a>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
