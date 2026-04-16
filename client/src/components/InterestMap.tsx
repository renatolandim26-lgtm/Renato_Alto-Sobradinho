import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Coordenadas do condomínio Alto da Alvorada (Sobradinho, DF)
// Localização: Sh Boa Vista - Sobradinho II
const CONDOMINIUM_COORDS: [number, number] = [-15.6718215, -47.8187598];

// Pontos de interesse com coordenadas (ajustadas para a região de Sobradinho II)
const pointsOfInterest = [
  { name: "Centro de Educação Infantil", category: "EDUCAÇÃO", coords: [-15.67, -47.815] as [number, number] },
  { name: "Faculdade Projeção", category: "EDUCAÇÃO", coords: [-15.675, -47.82] as [number, number] },
  { name: "Senac Sobradinho", category: "EDUCAÇÃO", coords: [-15.68, -47.81] as [number, number] },
  { name: "Shopping Iguatemi", category: "COMPRAS E SERVIÇOS", coords: [-15.665, -47.825] as [number, number] },
  { name: "Shopping Sobradinho", category: "COMPRAS E SERVIÇOS", coords: [-15.685, -47.805] as [number, number] },
  { name: "Atacadão Dia a Dia", category: "COMPRAS E SERVIÇOS", coords: [-15.68, -47.82] as [number, number] },
  { name: "Ultra Box", category: "COMPRAS E SERVIÇOS", coords: [-15.675, -47.815] as [number, number] },
  { name: "Posto Petrobras", category: "COMPRAS E SERVIÇOS", coords: [-15.67, -47.81] as [number, number] },
  { name: "Oba Hortifruti", category: "COMPRAS E SERVIÇOS", coords: [-15.668, -47.822] as [number, number] },
  { name: "Parque Ecológico dos Jequitibás", category: "LAZER", coords: [-15.66, -47.83] as [number, number] },
  { name: "Sesi Sobradinho", category: "LAZER", coords: [-15.69, -47.8] as [number, number] },
  { name: "Colorado Beer", category: "LAZER", coords: [-15.675, -47.825] as [number, number] },
  { name: "Hospital Regional de Sobradinho", category: "SAÚDE", coords: [-15.695, -47.795] as [number, number] },
  { name: "Centro Clínico - Amor Saúde", category: "SAÚDE", coords: [-15.68, -47.815] as [number, number] },
  { name: "Giraffas", category: "RESTAURANTES", coords: [-15.67, -47.81] as [number, number] },
  { name: "Padaria Flamingo", category: "RESTAURANTES", coords: [-15.675, -47.82] as [number, number] },
  { name: "Jeronimo", category: "RESTAURANTES", coords: [-15.665, -47.805] as [number, number] },
  { name: "Madero", category: "RESTAURANTES", coords: [-15.68, -47.825] as [number, number] },
  { name: "McDonald's", category: "RESTAURANTES", coords: [-15.685, -47.8] as [number, number] },
];

// Cores para cada categoria
const categoryColors: Record<string, string> = {
  "EDUCAÇÃO": "#3b82f6",
  "COMPRAS E SERVIÇOS": "#8b5cf6",
  "LAZER": "#ec4899",
  "SAÚDE": "#10b981",
  "RESTAURANTES": "#f59e0b"
};

// Componente para criar ícones personalizados
const createCustomIcon = (category: string) => {
  const color = categoryColors[category] || "#6366f1";
  return L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        cursor: pointer;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    className: "custom-marker"
  });
};

// Componente para ícone do condomínio
const createCondominiumIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        background-color: #dc2626;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(220, 38, 38, 0.4);
        cursor: pointer;
        font-weight: bold;
        color: white;
        font-size: 18px;
      ">
        🏢
      </div>
    `,
    iconSize: [40, 40],
    className: "condominium-marker"
  });
};

// Componente para centralizar o mapa
function MapCenterController() {
  const map = useMap();
  
  useEffect(() => {
    // Centralizar no condomínio
    map.setView(CONDOMINIUM_COORDS, 14);
  }, [map]);
  
  return null;
}

export default function InterestMap() {
  return (
    <section id="pontos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Pontos de Interesse
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça as principais atrações e serviços próximos ao condomínio
          </p>
        </div>

        {/* Mapa Interativo */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={CONDOMINIUM_COORDS}
            zoom={14}
            style={{ height: "500px", width: "100%" }}
            className="z-10"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Marcador do Condomínio */}
            <Marker position={CONDOMINIUM_COORDS} icon={createCondominiumIcon()}>
              <Popup>
                <div className="text-center font-semibold">
                  <p className="text-red-600">Alto da Alvorada</p>
                  <p className="text-xs text-gray-600">Seu novo lar</p>
                </div>
              </Popup>
            </Marker>
            
            {/* Marcadores dos Pontos de Interesse */}
            {pointsOfInterest.map((point, idx) => (
              <Marker
                key={idx}
                position={point.coords}
                icon={createCustomIcon(point.category)}
              >
                <Popup>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{point.name}</p>
                    <p className="text-xs text-gray-600">{point.category}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            
            <MapCenterController />
          </MapContainer>
        </div>

        {/* Legenda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div
                style={{
                  backgroundColor: color,
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
                }}
              ></div>
              <span className="text-sm font-medium text-foreground">{category}</span>
            </div>
          ))}
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
