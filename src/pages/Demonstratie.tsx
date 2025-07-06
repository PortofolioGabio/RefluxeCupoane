
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Demonstratie = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    nomeEmpresa: '',
    numeroLojas: '',
    temPrograma: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Demo request submitted:', formData);
      toast({
        title: "Cerere trimisa cu succes!",
        description: "Vă vom contacta în cel mai scurt timp pentru a programa demonstrația.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        nomeEmpresa: '',
        numeroLojas: '',
        temPrograma: ''
      });
    }, 2000);
  };

  const benefits = [
    "Demonstrație personalizată de 30 de minute",
    "Configurare gratuită pentru primul tău program",
    "Suport tehnic dedicat pentru implementare",
    "Acces gratuit la toate funcționalitățile timp de 14 zile"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicită o Demonstrație <span className="text-brand-purple">Gratuită</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă cum Refluxe poate transforma programul tău de fidelitate în doar 30 de minute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="shadow-xl border-0 bg-white rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Preencha o formulário abaixo.
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                    Nome <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="h-12 rounded-full border-gray-300 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Insira email de trabalho"
                    className="h-12 rounded-full border-gray-300 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                    WhatsApp <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="h-12 rounded-full border-gray-300 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nomeEmpresa" className="text-sm font-medium text-gray-700">
                    Nome da empresa <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nomeEmpresa"
                    type="text"
                    required
                    value={formData.nomeEmpresa}
                    onChange={(e) => setFormData({ ...formData, nomeEmpresa: e.target.value })}
                    placeholder="Nome da empresa ou Instagram"
                    className="h-12 rounded-full border-gray-300 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numeroLojas" className="text-sm font-medium text-gray-700">
                    Número de Lojas <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="numeroLojas"
                    type="text"
                    required
                    value={formData.numeroLojas}
                    onChange={(e) => setFormData({ ...formData, numeroLojas: e.target.value })}
                    placeholder="Insira número de Lojas"
                    className="h-12 rounded-full border-gray-300 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Já tem Programa de Fidelidade? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.temPrograma} onValueChange={(value) => setFormData({ ...formData, temPrograma: value })}>
                    <SelectTrigger className="h-12 rounded-full border-gray-300 px-4">
                      <SelectValue placeholder="Clique para selecionar uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao">Não</SelectItem>
                      <SelectItem value="planejando">Estou planejando implementar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 rounded-full mt-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar demonstração!'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-gradient-refluxe text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ce vei primi:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                      <p className="text-white/90">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  🔒 Datele tale sunt în siguranță
                </h3>
                <p className="text-gray-600 mb-4">
                  Nu vom împărtăși niciodată informațiile tale cu terțe părți. Folosim datele doar pentru a-ți oferi cea mai bună experiență de demonstrație.
                </p>
                <p className="text-sm text-gray-500">
                  Prin completarea formularului, ești de acord cu{' '}
                  <a href="#" className="text-brand-purple hover:underline">
                    Termenii și Condițiile
                  </a>{' '}
                  și{' '}
                  <a href="#" className="text-brand-purple hover:underline">
                    Politica de Confidențialitate
                  </a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demonstratie;
