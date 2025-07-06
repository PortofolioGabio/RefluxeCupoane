
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Shield
} from 'lucide-react';

const Despre = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-brand-orange" />,
      title: "Focalizare pe Client",
      description: "Totul începe și se termină cu experiența clientului. Construim soluții care pun consumatorul în centru."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-orange" />,
      title: "Inovație Continuă",
      description: "Tehnologia evoluează rapid și noi rămânem mereu în față cu soluții moderne și eficiente."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-orange" />,
      title: "Relații Autentice",
      description: "Credem că fidelitatea se câștigă prin încredere, transparență și valoare reală oferită."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Afaceri Partner",
      icon: <Users className="h-6 w-6 text-brand-purple" />
    },
    {
      number: "100K+",
      label: "Cupoane Procesate",
      icon: <TrendingUp className="h-6 w-6 text-brand-purple" />
    },
    {
      number: "95%",
      label: "Satisfacție Client",
      icon: <Award className="h-6 w-6 text-brand-purple" />
    },
    {
      number: "24/7",
      label: "Suport Tehnic",
      icon: <Clock className="h-6 w-6 text-brand-purple" />
    }
  ];

  const features = [
    "Developed cu tehnologii moderne (React, Node.js)",
    "Infrastructură cloud scalabilă și sigură",
    "Design responsive optimizat pentru mobile",
    "API-uri RESTful pentru integrări ușoare",
    "Securitate de nivel enterprise",
    "Backup-uri automate și disaster recovery"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimatedElement animation="fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transformăm programele de fidelitate în experiențe memorabile
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Născut din dorința de a moderniza interacțiunea dintre afaceri și clienții lor, 
              Refluxe este platforma care face programele de fidelitate simple, eficiente și plăcute pentru toți.
            </p>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedElement animation="slideRight" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Misiunea Noastră
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Să oferim afacerilor din România instrumentele necesare pentru a-și crește loialitatea clienților 
                prin tehnologie modernă și experiențe digitale excepționale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Credem că fiecare interacțiune între o afacere și clientul său poate fi o oportunitate de a 
                construi o relație durabilă, bazată pe valoare reală și încredere reciprocă.
              </p>
              <div className="space-y-3">
                {[
                  "Eliminăm complexitatea din programele de fidelitate",
                  "Oferim soluții accessible pentru orice tip de afacere",
                  "Promovăm sustenabilitatea prin digitalizare"
                ].map((point, index) => (
                  <ScrollAnimatedElement 
                    key={index} 
                    animation="fadeIn" 
                    delay={300 + index * 100}
                    threshold={0.8}
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement animation="slideLeft" delay={200} className="relative">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-brand-purple to-brand-orange text-white overflow-hidden">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 mb-6 text-white/80" />
                  <h3 className="text-2xl font-bold mb-4">Viziunea Noastră</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Să devenim platforma de referință pentru programele de fidelitate digitală în România 
                    și să extindem această misiune în toată Europa de Est.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      "Fidelitatea nu se cumpără, se câștigă prin experiențe excepționale."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedElement animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principiile care ne ghidează în dezvoltarea produselor și relațiile cu partenerii noștri.
            </p>
          </ScrollAnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimatedElement 
                key={index} 
                animation="slideUp" 
                delay={index * 150}
                threshold={0.3}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedElement animation="slideRight" delay={100} className="relative">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-refluxe p-8 text-white">
                    <Shield className="h-12 w-12 mb-4 text-white/80" />
                    <h3 className="text-2xl font-bold mb-4">Tehnologie de Încredere</h3>
                    <p className="text-white/90">
                      Construim cu cele mai moderne tehnologii pentru a asigura securitate, 
                      scalabilitate și performanță excepțională.
                    </p>
                  </div>
                  <div className="p-8 bg-white">
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <ScrollAnimatedElement 
                          key={index} 
                          animation="fadeIn" 
                          delay={300 + index * 80}
                          threshold={0.8}
                        >
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        </ScrollAnimatedElement>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement animation="slideLeft" delay={200}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Construim pentru Viitor
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                În spatele Refluxe stă o echipă de dezvoltatori, designeri și strategii de marketing 
                cu experiență în construirea produselor digitale scalabile.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Folosim cele mai noi tehnologii și metodologii de dezvoltare pentru a asigura că 
                platforma noastră rămâne sigură, rapidă și ușor de folosit.
              </p>
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Commitment-ul nostru:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Updates regulate cu funcționalități noi</li>
                  <li>• Suport tehnic specializat în limba română</li>
                  <li>• Documentație completă și training-uri</li>
                  <li>• Feedback loop direct cu utilizatorii</li>
                </ul>
              </div>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-refluxe text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimatedElement animation="fadeIn" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Să construim împreună viitorul fidelității
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Alătură-te misiunii noastre de a transforma modul în care afacerile se conectează cu clienții lor.
            </p>
          </ScrollAnimatedElement>
          <ScrollAnimatedElement animation="slideUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demonstratie">
                <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
                  Începe Astăzi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-brand-purple font-semibold px-8 py-3 text-lg">
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Despre;
