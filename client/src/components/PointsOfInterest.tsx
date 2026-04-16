export default function PointsOfInterest() {
  const categories = [
    {
      title: "EDUCAÇÃO",
      items: [
        "Centro de Educação Infantil",
        "Faculdade Projeção",
        "Senac Sobradinho"
      ]
    },
    {
      title: "COMPRAS E SERVIÇOS",
      items: [
        "Shopping Iguatemi",
        "Shopping Sobradinho",
        "Atacadão Dia a Dia",
        "Ultra Box",
        "Posto Petrobras",
        "Oba Hortifruti"
      ]
    },
    {
      title: "LAZER",
      items: [
        "Parque Ecológico dos Jequitibás",
        "Sesi Sobradinho",
        "Colorado Beer"
      ]
    },
    {
      title: "SAÚDE",
      items: [
        "Hospital Regional de Sobradinho",
        "Centro Clínico - Amor Saúde"
      ]
    },
    {
      title: "RESTAURANTES",
      items: [
        "Giraffas",
        "Padaria Flamingo",
        "Jeronimo",
        "Madero",
        "McDonald's"
      ]
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais atrações e serviços próximos ao condomínio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="card-corporate">
              <h3 className="text-xl font-bold mb-6 text-primary" style={{ fontFamily: "var(--font-display)" }}>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-foreground">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0">
                      {itemIdx + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
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
