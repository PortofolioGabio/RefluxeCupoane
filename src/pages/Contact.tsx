
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock, Linkedin, Instagram } from 'lucide-react';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <ScrollAnimatedElement animation="fadeIn">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider">
              CONTACT
            </h1>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <ScrollAnimatedElement animation="slideRight" delay={100} className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Contact Refluxe.
                </h2>
                <div className="space-y-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
                  <ScrollAnimatedElement animation="fadeIn" delay={200} threshold={0.8}>
                    <p>
                      Ai întrebări, vrei să afli mai multe despre serviciile noastre sau ai nevoie 
                      de ajutor cu programul tău de fidelitate? Suntem aici să te ajutăm! Completează 
                      formularul de mai jos sau contactează-ne direct prin canalele noastre de 
                      servicii pentru clienți.
                    </p>
                  </ScrollAnimatedElement>
                  <ScrollAnimatedElement animation="fadeIn" delay={300} threshold={0.8}>
                    <p>
                      Dacă ai nevoie de orice, nu ezita să ne contactezi. Suntem gata să te ajutăm 
                      să creezi un program de fidelitate extraordinar!
                    </p>
                  </ScrollAnimatedElement>
                </div>
              </div>

              {/* Footer Section */}
              <ScrollAnimatedElement animation="slideUp" delay={400}>
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-refluxe rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">Refluxe</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4 text-lg sm:text-xl">
                    Conectează-te mai bine și vinde mai mult!
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                      <Linkedin className="h-7 w-7 text-white" />
                    </div>
                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                      <Instagram className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </ScrollAnimatedElement>

            {/* Right Side - Contact Card */}
            <div className="lg:pl-6">
              <ScrollAnimatedElement animation="slideLeft" delay={200}>
                <Card className="bg-gradient-hero text-white shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-8 space-y-8">
                    <div className="space-y-6">
                      <ScrollAnimatedElement animation="fadeIn" delay={400} threshold={0.8}>
                        <div className="flex items-start space-x-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <Mail className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl sm:text-2xl mb-2">E-mail</h3>
                            <p className="text-white/90 text-lg sm:text-xl">contact@refluxe.ro</p>
                          </div>
                        </div>
                      </ScrollAnimatedElement>

                      <ScrollAnimatedElement animation="fadeIn" delay={500} threshold={0.8}>
                        <div className="flex items-start space-x-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <Phone className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl sm:text-2xl mb-2">WhatsApp Phone</h3>
                            <p className="text-white/90 text-lg sm:text-xl">+40 756 123 456</p>
                          </div>
                        </div>
                      </ScrollAnimatedElement>

                      <ScrollAnimatedElement animation="fadeIn" delay={600} threshold={0.8}>
                        <div className="flex items-start space-x-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <Clock className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl sm:text-2xl mb-2">Program de lucru</h3>
                            <p className="text-white/90 text-lg sm:text-xl">Lun - Vin de la 09:00 la 17:00</p>
                          </div>
                        </div>
                      </ScrollAnimatedElement>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              {/* Company and Legal Links */}
              <ScrollAnimatedElement animation="slideUp" delay={700}>
                <div className="mt-8 grid grid-cols-2 gap-8 text-base sm:text-lg">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3 text-lg sm:text-xl">Companie</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Despre Noi</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3 text-lg sm:text-xl">Legal</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Termeni de Utilizare</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Politica de Confidențialitate</a></li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
