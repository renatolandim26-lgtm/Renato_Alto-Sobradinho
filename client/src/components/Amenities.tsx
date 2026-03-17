import { 
  Waves, 
  Dumbbell, 
  Activity, 
  Utensils, 
  Smile, 
  Bike, 
  Flame, 
  Shield 
} from "lucide-react";
import { condominiumData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves size={32} />,
  Dumbbell: <Dumbbell size={32} />,
  Activity: <Activity size={32} />,
  Utensils: <Utensils size={32} />,
  Smile: <Smile size={32} />,
  Bike: <Bike size={32} />,
  Flame: <Flame size={32} />,
  Shield: <Shield size={32} />
};

export default function Amenities() {
  return (
    <section id="amenidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Área de Lazer Completa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desfrute de uma vida com qualidade, segurança e conforto em um ambiente pensado para você e sua família
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {condominiumData.main.amenities.map((amenity, index) => (
            <div
              key={index}
              className="card-corporate text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-primary">
                {iconMap[amenity.icon]}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </section>
  );
}
