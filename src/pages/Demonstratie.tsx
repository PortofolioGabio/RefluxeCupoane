
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

const Demonstratie = () => {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    email: '',
    dataNasterii: undefined as Date | undefined,
    prefix: '+40'
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
        nume: '',
        prenume: '',
        telefon: '',
        email: '',
        dataNasterii: undefined,
        prefix: '+40'
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
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Completează formularul</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nume">Nume *</Label>
                    <Input
                      id="nume"
                      type="text"
                      required
                      value={formData.nume}
                      onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                      placeholder="Introduceți numele"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenume">Prenume *</Label>
                    <Input
                      id="prenume"
                      type="text"
                      required
                      value={formData.prenume}
                      onChange={(e) => setFormData({ ...formData, prenume: e.target.value })}
                      placeholder="Introduceți prenumele"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefon">Număr de telefon *</Label>
                  <div className="flex gap-2">
                    <Select value={formData.prefix} onValueChange={(value) => setFormData({ ...formData, prefix: value })}>
                      <SelectTrigger className="w-24 h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+40">+40</SelectItem>
                        <SelectItem value="+41">+41</SelectItem>
                        <SelectItem value="+43">+43</SelectItem>
                        <SelectItem value="+49">+49</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="telefon"
                      type="tel"
                      required
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      placeholder="722 123 456"
                      className="flex-1 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nume@exemplu.ro"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Data nașterii</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dataNasterii ? (
                          format(formData.dataNasterii, "dd MMMM yyyy", { locale: ro })
                        ) : (
                          <span>Selectați data nașterii</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.dataNasterii}
                        onSelect={(date) => setFormData({ ...formData, dataNasterii: date })}
                        locale={ro}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-refluxe hover:opacity-90 text-white font-semibold h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Se trimite...' : 'Solicită Demonstrația'}
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
