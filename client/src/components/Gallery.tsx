import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const gallery = condominiumData.gallery;

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os espaços sofisticados do Alto da Alvorada
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={gallery[selectedIndex].image}
              alt={gallery[selectedIndex].title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {gallery[selectedIndex].title}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
