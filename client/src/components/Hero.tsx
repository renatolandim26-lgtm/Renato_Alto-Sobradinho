import { ArrowDown, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { condominiumData } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Hero() {
  const { contact } = condominiumData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(contact.main.defaultMessage)}`;

  const slides = [
    {
      title: "Alto Sobradinho",
      subtitle: "",
      description: "Destino Vida e Lar",
      image: "/images/hero-alto-sobradinho.jpg"
    },
    {
      title: "Alto da Aurora",
      subtitle: "",
      description: "Terceiro condomínio do nosso complexo",
      image: "/images/hero-alto-aurora.jpg"
    },
    {
      title: "Alto da Alvorada",
      subtitle: "",
      description: "Segundo condomínio do complexo Alto Sobradinho",
      image: "/images/hero-alto-alvorada.jpg"
    },
    {
      title: "Alto do Horizonte",
      subtitle: "",
      description: "Primeiro condomínio do nosso complexo",
      image: "/images/hero-alto-horizonte.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000"
        style={{
          backgroundImage: `url('${currentSlideData.image}')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          willChange: "background-image"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
        {currentSlideData.subtitle && (
        <div className="mb-6 inline-block">
          <span className="bg-primary/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentSlideData.subtitle}
          </span>
        </div>
      )}

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
          {currentSlideData.title}
        </h1>

        {currentSlideData.description && (
        <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 text-gray-200 max-w-2xl mx-auto">
          {currentSlideData.description}
        </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0 max-w-md mx-auto">
          <a
            href="#sobre"
            className="px-8 sm:px-8 py-4 sm:py-3 bg-white text-primary rounded-xl font-bold transition-all shadow-lg shadow-white/20 hover:shadow-white/30 hover:bg-white/95 flex items-center justify-center gap-2 text-base sm:text-base active:scale-95 flex-1"
          >
            Conhecer o Projeto
          </a>
          <a
            href="#contato"
            className="px-8 sm:px-8 py-4 sm:py-3 bg-primary/80 hover:bg-primary text-white rounded-xl font-semibold transition-all border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 text-base sm:text-base active:scale-95 flex-1"
          >
            <MessageCircle size={16} />
            Contato
          </a>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-smooth active:scale-90"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex gap-1.5 sm:gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all ${
                  idx === currentSlide ? "bg-white w-6 h-2 sm:w-8" : "bg-white/50 w-2 h-2"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-smooth active:scale-90"
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white opacity-50" />
        </div>
      </div>
    </section>
  );
}
