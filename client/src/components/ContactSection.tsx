import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: ""
  });

  const consultants = [
    { name: "Davyd", phone: "5561993707482" },
    { name: "Nicolas", phone: "5561996244743" },
    { name: "Renato", phone: "5561999886578" },
    { name: "Geovane", phone: "5561991033288" },
    { name: "Elisângela", phone: "5561994120508" },
    { name: "Mara", phone: "5561992117736" },
    { name: "Raione", phone: "5561991515712" },
    { name: "Ana Luiza", phone: "5561999526890" }
  ];

  const regions = [
    "Samambaia",
    "Sobradinho",
    "Águas Claras",
    "Recanto das Emas",
    "Planaltina"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados
    setFormData({ firstName: "", lastName: "", email: "", phone: "", region: "" });
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
          {/* Consultores */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Nossos Consultores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultants.map((consultant, idx) => (
                <div key={idx} className="card-corporate text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-sm">{consultant.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{consultant.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Consultor de Imóveis</p>
                  <a
                    href={`https://wa.me/${consultant.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-smooth w-full"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              ))}
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
                  className="w-full bg-primary hover:opacity-90 text-white py-2 rounded-lg transition-smooth"
                >
                  Cadastrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
