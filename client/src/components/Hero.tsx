import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { condominiumData } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Alto Sobradinho",
      subtitle: "",
      description: "Descubra o lifestyle sofisticado no Alto Sobradinho. Um empreendimento único que combina arquitetura contemporânea com áreas de lazer completas e localização privilegiada.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388046529/4hbgRFMku9Ni9M9aw75Dyf/hero-alto-sobradinho-VckTpUB7mK2Sj6XG8ckVgU.webp"
    },
    {
      title: condominiumData.main.name,
      subtitle: "",
      description: "Segundo condomínio do complexo Alto Sobradinho",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388046529/4hbgRFMku9Ni9M9aw75Dyf/hero-alto-alvorada-56Mo86NuinkctM6cN3wVkX.webp"
    },
    {
      title: "Alto do Horizonte",
      subtitle: "",
      description: "Uma grande oportunidade para quem busca conforto, segurança e qualidade de vida.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388046529/4hbgRFMku9Ni9M9aw75Dyf/hero-alto-horizonte-JmTcvv7zDuRp6nLnjGWwAp.webp"
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
          backgroundAttachment: "fixed"
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

        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
          {currentSlideData.title}
        </h1>

        {currentSlideData.description && (
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
          {currentSlideData.description}
        </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#sobre"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-smooth border border-white/50"
          >
            Saiba Mais
          </a>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-smooth"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-smooth"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
}
