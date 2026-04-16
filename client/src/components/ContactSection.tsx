import { MessageCircle, Phone, User } from "lucide-react";
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
    "Planaltina"
  ];

  const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(contact.main.defaultMessage)}`;

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
    <section id="contato" className="py-24 bg-gradient-to-b from-secondary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Fale com seu consultor
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para oferecer um atendimento exclusivo e personalizado para você encontrar o seu novo lar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Card do Consultor - Renato Landim */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/5 group hover:shadow-2xl transition-all duration-500">
              <div className="bg-primary p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30 shadow-inner">
                    <User className="text-white w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{contact.main.name}</h3>
                  <p className="text-primary-foreground/80 font-medium">{contact.main.role}</p>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Telefone</p>
                      <p className="text-lg font-bold text-foreground">{contact.main.formattedPhone}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-center text-muted-foreground mb-6 italic">
                    "Meu compromisso é ajudar você a realizar o melhor investimento imobiliário da sua vida."
                  </p>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all duration-300 w-full font-bold text-lg group"
                  >
                    <MessageCircle className="group-hover:scale-110 transition-transform" size={24} />
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Cadastro */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-primary/5">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Solicitar Informações</h3>
                <p className="text-muted-foreground">Preencha os campos abaixo e receba o material completo do empreendimento.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Nome</label>
                    <Input
                      type="text"
                      placeholder="Seu primeiro nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="h-12 bg-secondary/5 border-secondary/20 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Sobrenome</label>
                    <Input
                      type="text"
                      placeholder="Seu sobrenome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="h-12 bg-secondary/5 border-secondary/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">E-mail Corporativo</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-secondary/5 border-secondary/20 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">WhatsApp</label>
                    <Input
                      type="tel"
                      placeholder="(61) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-secondary/5 border-secondary/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">Região de Interesse</label>
                  <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                    <SelectTrigger className="h-12 bg-secondary/5 border-secondary/20 focus:bg-white transition-all">
                      <SelectValue placeholder="Onde você busca morar?" />
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando Solicitação...
                    </span>
                  ) : "Receber Material Gratuito"}
                </Button>
                
                <p className="text-[10px] text-center text-muted-foreground mt-4">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade e Termos de Uso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
