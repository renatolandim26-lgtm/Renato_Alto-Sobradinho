import { Phone, User, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { condominiumData } from "@/lib/data";

export default function ContactSection() {
  const { contact } = condominiumData;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const regions = [
    "Samambaia",
    "Sobradinho",
    "Águas Claras",
    "Recanto das Emas",
    "Planaltina",
    "Santa Maria",
    "Valparaíso de Goiás",
    "Ceilândia",
    "Taguatinga"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.region) {
      toast.error("Por favor, selecione uma região de interesse.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mojyejbd", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso! Entraremos em contato em breve.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", region: "" });
      } else {
        const result = await response.json();
        toast.error(result.error || "Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro de conexão ao enviar o formulário.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <p className="text-base font-semibold text-primary/60 uppercase tracking-widest mb-4">Entre em Contato</p>
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-light mb-6 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Fale com seu consultor
            </h2>
            <p className="text-lg sm:text-base text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Estamos à disposição para esclarecer dúvidas e apresentar as melhores oportunidades de investimento no Alto Sobradinho.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Consultor Info - Premium */}
            <div className="lg:col-span-2">
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
					{/* Photo */}
					<div className="w-full flex items-center justify-center py-12">
					  <img 
					    src="/images/renato-landim.png" 
					    alt={contact.main.name}
					    className="w-56 h-56 rounded-full object-cover object-top border-4 border-black"
					  />
					</div>

	                {/* Content */}
	                <div className="px-8 pb-12 text-center">
	                  {/* Header */}
	                  <div className="mb-8">
	                    <h3 className="text-3xl font-serif text-foreground mb-2">{contact.main.name}</h3>
	                    <p className="text-sm text-foreground font-bold tracking-widest uppercase">CONSULTOR IMOBILIÁRIO</p>
	                  </div>

                    <div className="w-full h-px bg-slate-200 mb-8"></div>

	                  {/* Contact Info */}
	                  <div className="flex justify-center mb-8">
	                    <a
	                      href={`https://wa.me/${contact.main.phone}?text=${encodeURIComponent(contact.main.defaultMessage)}`}
	                      target="_blank"
	                      rel="noopener noreferrer"
	                      className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 w-full max-w-xs"
	                    >
	                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
	                        <MessageCircle size={24} className="text-green-600" />
	                      </div>
	                      <div className="text-left">
	                        <p className="text-xs text-slate-500 uppercase font-bold">WhatsApp</p>
	                        <p className="text-lg font-bold text-slate-900">{contact.main.formattedPhone}</p>
	                      </div>
	                    </a>
	                  </div>

                    <div className="w-full h-px bg-slate-200 mb-8"></div>

	                  {/* Quote */}
	                  <div className="px-4">
	                    <p className="text-base text-slate-700 italic leading-relaxed font-medium">
	                      "Meu compromisso é ajudá-lo a encontrar o investimento imobiliário perfeito para sua vida."
	                    </p>
	                  </div>
	                </div>
              </div>
            </div>

            {/* Formulário - Premium */}
            <div className="lg:col-span-3">
              <div className="border border-slate-200 rounded-xl p-8 bg-white shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Solicite atendimento personalizado</h3>
                <p className="text-base text-foreground/60 mb-10">Preencha os dados abaixo e receba as melhores opções de investimento.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome e Sobrenome */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Nome</label>
                      <Input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="h-12 border-b border-slate-300 bg-transparent focus:border-primary rounded-none px-0 py-2 text-base placeholder:text-foreground/30 focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Sobrenome</label>
                      <Input
                        type="text"
                        placeholder="Seu sobrenome"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="h-12 border-b border-slate-300 bg-transparent focus:border-primary rounded-none px-0 py-2 text-base placeholder:text-foreground/30 focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email e WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">E-mail</label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-b border-slate-300 bg-transparent focus:border-primary rounded-none px-0 py-2 text-base placeholder:text-foreground/30 focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">WhatsApp</label>
                      <Input
                        type="tel"
                        placeholder="(61) 9 9999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 border-b border-slate-300 bg-transparent focus:border-primary rounded-none px-0 py-2 text-base placeholder:text-foreground/30 focus:outline-none focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Região */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Região de Interesse</label>
                    <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                      <SelectTrigger className="h-12 border-b border-slate-300 bg-transparent focus:border-primary rounded-none px-0 py-2 text-base placeholder:text-foreground/30 focus:outline-none focus:ring-0 transition-colors">
                        <SelectValue placeholder="Selecione uma região" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Botão */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 sm:h-11 bg-primary hover:bg-primary/90 text-white text-base sm:text-sm font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {isSubmitting ? "Enviando..." : "Quero receber opções"}
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-foreground/50 text-center pt-2">
                    Ao enviar este formulário, você concorda com nossa Política de Privacidade.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
