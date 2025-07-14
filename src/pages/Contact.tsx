import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock, Linkedin, Instagram } from 'lucide-react';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';
import { useEffect } from 'react';
import { updatePageSEO, getOrganizationSchema, getWebPageSchema } from '@/utils/seo';

const Contact = () => {
  useEffect(() => {
    const structuredData = [
      getOrganizationSchema(),
      getWebPageSchema(
        'Contact Refluxe - Suport Cupoane Digitale Fidelitate',
        'Contactează echipa Refluxe pentru suport, întrebări sau demonstrații despre programele de fidelitate digitale. Răspuns rapid în limba română.',
        'https://refluxe.io/contact'
      ),
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Refluxe",
        "description": "Contactează echipa Refluxe pentru suport și informații despre programele de fidelitate digitale",
        "url": "https://refluxe.io/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Refluxe",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+40-756-123-456",
              "contactType": "customer service",
              "email": "contact@refluxe.io",
              "availableLanguage": "Romanian",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            }
          ]
        }
      }
    ];

    updatePageSEO({
      title: 'Contact Refluxe - Suport Cupoane Digitale Fidelitate România | Asistență Platformă',
      description: 'Contactează echipa Refluxe pentru suport, întrebări sau demonstrații despre programele de fidelitate digitale. Răspuns rapid în limba română. Program Lun-Vin 09:00-17:00.',
      keywords: 'contact refluxe, suport tehnic, asistenta clienti, demonstratie cupoane digitale, ajutor program fidelitate, contact romania, whatsapp support',
      canonical: 'https://refluxe.io/contact',
      ogImage: 'https://refluxe.io/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png',
      structuredData: structuredData
    });
  }, []);

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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Contactează Echipa Refluxe
                </h2>
                <div className="space-y-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
                  <ScrollAnimatedElement animation="fadeIn" delay={200} threshold={0.8}>
                    <p>
                      Vrei să-ți transformi clienții în abonați pe viață? Hai să vorbim.
                    </p>
                  </ScrollAnimatedElement>
                  <ScrollAnimatedElement animation="fadeIn" delay={300} threshold={0.8}>
                    <p>
                      Fie că ai întrebări, vrei să vezi cum funcționează sau ai nevoie de ajutor cu programul tău de fidelitate, suntem aici ca să-ți oferim soluții clare și rapide.
                      Scrie-ne.
                      Sună-ne.
                      Începe să-ți crești veniturile cu un program de fidelitate care chiar funcționează.
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
                    Nu lăsa clienții să dispară. Contactează-ne acum și hai să-i aducem înapoi.
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
                            <p className="text-white/90 text-lg sm:text-xl">contact@refluxe.io</p>
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
