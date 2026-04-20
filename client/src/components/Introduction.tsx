import { Sparkles } from "lucide-react";

export default function Introduction() {
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-white via-secondary/3 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={24} className="text-primary" />
            <span className="text-base font-semibold text-primary uppercase tracking-wider">Sobre o Empreendimento</span>
            <Sparkles size={24} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Qualidade de Vida e Sofisticação
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                Uma nova oportunidade de viver com <span className="font-semibold text-primary">conforto, segurança e qualidade de vida</span>. Em uma localização incrível, com infraestrutura completa, o complexo Alto Sobradinho oferece uma ampla variedade de lazer, serviços e a facilidade de financiamento bancário com documentação completa.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                Aqui você irá desfrutar de tudo o que está disponível desde a educação até as comodidades e serviços oferecidos, criando um ambiente perfeito para sua família.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/10 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Localização Privilegiada</h3>
                <p className="text-base text-foreground/80">Acesso fácil a todas as principais áreas de Brasília, com infraestrutura completa e segurança 24h.</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/10 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Lazer e Comodidade</h3>
                <p className="text-base text-foreground/80">Piscina, academia, quadra poliesportiva, salão de festas e muito mais para sua diversão.</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/10 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Cultura e Gastronomia</h3>
                <p className="text-base text-foreground/80">Aproveite a atmosfera singular de Brasília, com suas opções de cultura, gastronomia e lazer.</p>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-10 border border-primary/10 text-center shadow-md">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              O Alto Sobradinho é mais que um empreendimento — é um <span className="text-primary">estilo de vida</span> pensado para você e sua família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
