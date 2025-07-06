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
    nume: '',
    email: '',
    whatsapp: '',
    numeCompanie: '',
    numarMagazine: '',
    areProgramFidelitate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Demo request submitted:', formData);
      toast({
        title: "Cerere trimisă cu succes!",
        description: "Vă vom contacta în cel mai scurt timp pentru a programa demonstrația.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        nume: '',
        email: '',
        whatsapp: '',
        numeCompanie: '',
        numarMagazine: '',
        areProgramFidelitate: ''
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicită o Demonstrație <span className="text-purple-600">Gratuită</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă cum Refluxe poate transforma programul tău de fidelitate în doar 30 de minute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form - Now takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white rounded-3xl">
              <CardContent className="p-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                  Completează formularul de mai jos
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nume" className="text-sm font-medium text-gray-700">
                        Nume <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nume"
                        type="text"
                        required
                        value={formData.nume}
                        onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                        placeholder="Numele tău"
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
                        placeholder="Adresa ta de email"
                        className="h-12 rounded-full border-gray-300 px-4"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="0745 123 456"
                        className="h-12 rounded-full border-gray-300 px-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numeCompanie" className="text-sm font-medium text-gray-700">
                        Numele companiei <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="numeCompanie"
                        type="text"
                        required
                        value={formData.numeCompanie}
                        onChange={(e) => setFormData({ ...formData, numeCompanie: e.target.value })}
                        placeholder="Numele companiei tale"
                        className="h-12 rounded-full border-gray-300 px-4"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="numarMagazine" className="text-sm font-medium text-gray-700">
                        Numărul de magazine <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="numarMagazine"
                        type="text"
                        required
                        value={formData.numarMagazine}
                        onChange={(e) => setFormData({ ...formData, numarMagazine: e.target.value })}
                        placeholder="Ex: 1, 2-5, 5+"
                        className="h-12 rounded-full border-gray-300 px-4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Ai deja un program de fidelitate? <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.areProgramFidelitate} onValueChange={(value) => setFormData({ ...formData, areProgramFidelitate: value })}>
                        <SelectTrigger className="h-12 rounded-full border-gray-300 px-4">
                          <SelectValue placeholder="Selectează o opțiune" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="da">Da</SelectItem>
                          <SelectItem value="nu">Nu</SelectItem>
                          <SelectItem value="planific">Planific să implementez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 rounded-full mt-8 text-lg"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? 'Se trimite...' : 'Solicită demonstrația gratuită!'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits - Now takes 1 column */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
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
                  <a href="#" className="text-purple-600 hover:underline">
                    Termenii și Condițiile
                  </a>{' '}
                  și{' '}
                  <a href="#" className="text-purple-600 hover:underline">
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