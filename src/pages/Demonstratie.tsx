
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Demonstratie = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    stores: '',
    hasLoyaltyProgram: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cerere trimisă cu succes!",
      description: "Te vom contacta în curând pentru a programa demonstrația.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white rounded-3xl shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="mb-6">
              <h2 className="text-gray-800 text-lg font-medium mb-2">
                Fill out the form below.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 text-sm font-medium mb-2 block">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 text-sm font-medium mb-2 block">
                  E-mail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter work email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-gray-700 text-sm font-medium mb-2 block">
                  WhatsApp <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-gray-700 text-sm font-medium mb-2 block">
                  Company name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Company name or Instagram"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="stores" className="text-gray-700 text-sm font-medium mb-2 block">
                  Number of Stores <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="stores"
                  type="text"
                  placeholder="Enter number of Stores"
                  value={formData.stores}
                  onChange={(e) => handleInputChange('stores', e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="loyalty" className="text-gray-700 text-sm font-medium mb-2 block">
                  Do you already have a Loyalty Program? <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange('hasLoyaltyProgram', value)}>
                  <SelectTrigger className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <SelectValue placeholder="Click to select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <SelectItem value="yes" className="text-gray-700 hover:bg-gray-50">Yes</SelectItem>
                    <SelectItem value="no" className="text-gray-700 hover:bg-gray-50">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-200"
                >
                  Request a demo!
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demonstratie;
