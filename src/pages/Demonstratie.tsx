
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';

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

  const validateForm = () => {
    const requiredFields = [
      { field: 'nume', label: 'Nume' },
      { field: 'email', label: 'Email' },
      { field: 'whatsapp', label: 'WhatsApp' },
      { field: 'numeCompanie', label: 'Numele companiei' },
      { field: 'numarMagazine', label: 'Numărul de magazine' },
      { field: 'areProgramFidelitate', label: 'Program de fidelitate' }
    ];

    for (const { field, label } of requiredFields) {
      if (!formData[field as keyof typeof formData].trim()) {
        toast({
          title: "Câmp obligatoriu",
          description: `Vă rugăm să completați câmpul: ${label}`,
          variant: "destructive",
        });
        return false;
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalid",
        description: "Vă rugăm să introduceți o adresă de email validă",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    console.log('Submitting form data to Make.com webhook:', formData);

    try {
      const response = await fetch('https://hook.eu2.make.com/qkcxinnfvtq6wtpvy4ky98cmlawzhpmg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          nume: formData.nume,
          email: formData.email,
          whatsapp: formData.whatsapp,
          numeCompanie: formData.numeCompanie,
          numarMagazine: formData.numarMagazine,
          areProgramFidelitate: formData.areProgramFidelitate,
          timestamp: new Date().toISOString(),
          source: 'Refluxe Demonstratie Form'
        }),
      });

      // Since we're using no-cors mode, we can't check response status
      // We'll assume success and show a positive message
      toast({
        title: "Cerere trimisă cu succes!",
        description: "Vă vom contacta în cel mai scurt timp pentru a programa demonstrația.",
      });

      // Reset form after successful submission
      setFormData({
        nume: '',
        email: '',
        whatsapp: '',
        numeCompanie: '',
        numarMagazine: '',
        areProgramFidelitate: ''
      });

    } catch (error) {
      console.error('Error submitting form to Make.com webhook:', error);
      toast({
        title: "Eroare la trimiterea cererii",
        description: "A apărut o problemă. Vă rugăm să încercați din nou sau să ne contactați direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <ScrollAnimatedElement animation="fadeIn" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicită o Demonstrație <span className="text-purple-600">Gratuită</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă cum Refluxe poate transforma programul tău de fidelitate în doar 30 de minute.
          </p>
        </ScrollAnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form - Now takes 2 columns */}
          <ScrollAnimatedElement animation="slideUp" delay={200} className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white rounded-3xl">
              <CardContent className="p-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                  Completează formularul de mai jos
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 rounded-full mt-8 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Se trimite...' : 'Request a demo!'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimatedElement>

          {/* Benefits - Now takes 1 column */}
          <div className="space-y-8">
            <ScrollAnimatedElement animation="slideLeft" delay={400}>
              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Ce vei primi:</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <ScrollAnimatedElement 
                        key={index} 
                        animation="fadeIn" 
                        delay={600 + index * 100}
                        threshold={0.8}
                      >
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                          <p className="text-white/90">{benefit}</p>
                        </div>
                      </ScrollAnimatedElement>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="slideLeft" delay={500}>
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
            </ScrollAnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demonstratie;
