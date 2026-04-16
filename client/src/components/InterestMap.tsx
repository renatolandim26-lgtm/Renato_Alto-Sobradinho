import React from "react";

// Pontos de interesse com coordenadas (ajustadas para a região de Sobradinho II)
const pointsOfInterest = [
  { name: "Centro de Educação Infantil", category: "EDUCAÇÃO" },
  { name: "Faculdade Projeção", category: "EDUCAÇÃO" },
  { name: "Senac Sobradinho", category: "EDUCAÇÃO" },
  { name: "Shopping Iguatemi", category: "COMPRAS E SERVIÇOS" },
  { name: "Shopping Sobradinho", category: "COMPRAS E SERVIÇOS" },
  { name: "Atacadão Dia a Dia", category: "COMPRAS E SERVIÇOS" },
  { name: "Ultra Box", category: "COMPRAS E SERVIÇOS" },
  { name: "Posto Petrobras", category: "COMPRAS E SERVIÇOS" },
  { name: "Oba Hortifruti", category: "COMPRAS E SERVIÇOS" },
  { name: "Parque Ecológico dos Jequitibás", category: "LAZER" },
  { name: "Sesi Sobradinho", category: "LAZER" },
  { name: "Colorado Beer", category: "LAZER" },
  { name: "Hospital Regional de Sobradinho", category: "SAÚDE" },
  { name: "Centro Clínico - Amor Saúde", category: "SAÚDE" },
  { name: "Giraffas", category: "RESTAURANTES" },
  { name: "Padaria Flamingo", category: "RESTAURANTES" },
  { name: "Jeronimo", category: "RESTAURANTES" },
  { name: "Madero", category: "RESTAURANTES" },
  { name: "McDonald's", category: "RESTAURANTES" },
];

// Cores para cada categoria
const categoryColors: Record<string, string> = {
  "EDUCAÇÃO": "#3b82f6",
  "COMPRAS E SERVIÇOS": "#8b5cf6",
  "LAZER": "#ec4899",
  "SAÚDE": "#10b981",
  "RESTAURANTES": "#f59e0b"
};

export default function InterestMap() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Localização
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça as principais atrações e serviços próximos ao condomínio
          </p>
        </div>

        {/* Lista de Pontos de Interesse */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(
            pointsOfInterest.reduce((acc, point) => {
              if (!acc[point.category]) {
                acc[point.category] = [];
              }
              acc[point.category].push(point);
              return acc;
            }, {} as Record<string, typeof pointsOfInterest>)
          ).map(([category, items]) => (
            <div key={category} className="card-corporate">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary" style={{ fontFamily: "var(--font-display)" }}>
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-foreground">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-semibold flex-shrink-0"
                      style={{ backgroundColor: categoryColors[item.category] }}
                    >
                      {itemIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
