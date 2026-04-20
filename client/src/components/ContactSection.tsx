import { MessageCircle, Phone } from "lucide-react";
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
    <section id="contato" className="py-20 bg-white border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Fale com nosso consultor
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Entre em contato para conhecer melhor o Alto Sobradinho e receber informações personalizadas.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Consultor Info - Compacto */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-2xl font-bold">{contact.main.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{contact.main.name}</h3>
                    <p className="text-sm text-muted-foreground">Consultor Imobiliário</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${contact.main.phone}`}
                    className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <span>{contact.main.formattedPhone}</span>
                  </a>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-semibold transition-all text-sm w-full"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Formulário - Minimalista */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="h-10 border-b border-primary/20 bg-transparent focus:border-primary rounded-none px-0 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Sobrenome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="h-10 border-b border-primary/20 bg-transparent focus:border-primary rounded-none px-0 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-10 border-b border-primary/20 bg-transparent focus:border-primary rounded-none px-0 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-10 border-b border-primary/20 bg-transparent focus:border-primary rounded-none px-0 py-2 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                    <SelectTrigger className="h-10 border-b border-primary/20 bg-transparent focus:border-primary rounded-none px-0 py-2 text-sm">
                      <SelectValue placeholder="Região de interesse" />
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

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </Button>
                </div>

                <p className="text-[11px] text-center text-muted-foreground">
                  Ao enviar, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
