import React from "react";
import { 
  Waves, 
  Dumbbell, 
  Activity, 
  Utensils, 
  Smile, 
  Bike, 
  Flame, 
  Shield,
  ShoppingCart,
  WashingMachine,
  Gamepad2,
  Dices,
  Dog,
  Zap
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
  Shield: <Shield size={32} />,
  ShoppingCart: <ShoppingCart size={32} />,
  WashingMachine: <WashingMachine size={32} />,
  Gamepad2: <Gamepad2 size={32} />,
  Dices: <Dices size={32} />,
  Dog: <Dog size={32} />,
  Zap: <Zap size={32} />
};

export default function Amenities() {
  return (
    <section id="amenidades" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Área de Lazer e Comodidade
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Desfrute de uma vida com qualidade, segurança e conforto em um ambiente pensado para você e sua família
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {condominiumData.main.amenities.map((amenity, index) => (
            <div
              key={index}
              className="card-corporate text-center hover:shadow-xl rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300 p-8"
            >
              <div className="flex justify-center mb-6 text-primary">
                {iconMap[amenity.icon]}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base whitespace-pre-line">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 sm:my-20 h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </section>
  );
}
