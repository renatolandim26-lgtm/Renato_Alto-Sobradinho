import React from "react";

export default function InterestMap() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Localização
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça a localização privilegiada do condomínio
          </p>
        </div>

        {/* Imagem Estática do Mapa */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/mapa-localizacao.png"
            alt="Mapa ilustrativo da localização do condomínio"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>
  );
}
