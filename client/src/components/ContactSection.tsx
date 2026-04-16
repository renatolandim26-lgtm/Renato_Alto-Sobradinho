import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function ContactSection() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.region) {
      toast.error("Por favor, selecione uma região de interesse.");
      return;
    }

    setIsSubmitting(true);
    console.log("Iniciando envio para Formspree...", formData);
    
    try {
      // Usando JSON em vez de FormData para maior compatibilidade com Formspree em alguns contextos
      const response = await fetch("https://formspree.io/f/xyzwpqab", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      console.log("Resposta do Formspree:", response.status, result);

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso! Entraremos em contato em breve.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", region: "" });
      } else {
        // Se o erro for 404, o ID do formulário provavelmente é um placeholder
        if (response.status === 404) {
          toast.error("Erro de configuração: O ID do formulário (xyzwpqab) parece ser inválido ou um placeholder.");
        } else {
          toast.error(result.error || "Erro ao enviar o formulário. Tente novamente.");
        }
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro de conexão ao enviar o formulário.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Fale com seu consultor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para tirar dúvidas e conhecer melhor nossos empreendimentos
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* Consultor - Renato Landim */}
          <div className="flex justify-center">
            <div className="card-corporate text-center max-w-sm">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Renato Landim</h3>
              <p className="text-base text-muted-foreground mb-6">Consultor de Imóveis</p>
              <a
                href="https://wa.me/5561999886578"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-smooth w-full font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Cadastro */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h3>
            <div className="card-corporate p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Nome
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Sobrenome
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite seu sobrenome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      placeholder="(61) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Região de Interesse
                  </label>
                  <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                    <SelectTrigger className="w-full">
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:opacity-90 text-white py-2 rounded-lg transition-smooth"
                >
                  {isSubmitting ? "Enviando..." : "Cadastrar"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
