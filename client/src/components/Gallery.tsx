import { condominiumData } from "@/lib/data";

export default function Gallery() {
  const gallery = condominiumData.gallery;

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Galeria do Empreendimento
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a sofisticação e os detalhes pensados para o seu bem-estar.
          </p>
        </div>

        {/* Gallery Grid - Puramente Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-primary/5 group"
            >
              <img
                src={item.image}
                alt={item.title || "Imagem do empreendimento"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
