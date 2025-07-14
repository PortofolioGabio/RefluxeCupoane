
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
      title: "Totul începe cu clientul",
      description: "Noi nu programăm de drag. Totul e despre client. Despre cum îl facem să rămână, să recomande și să revină."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-orange" />,
      title: "Inovație non-stop",
      description: "Tehnologia se mișcă rapid. Noi o depășim. Livrăm funcții noi și utile, fără bullshit."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-orange" />,
      title: "Relații care contează",
      description: "Credem că fidelizarea reală vine din încredere, transparență și valoare livrată constant."
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
    "Tech stack modern (React, Node.js)",
    "Cloud scalabil și blindat",
    "API-uri REST simple",
    "Securitate enterprise",
    "Back-up zilnic + disaster recovery"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimatedElement animation="fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transformăm Programele de Fidelitate În Magneți de Vânzări Recurenți
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Refluxe nu e „încă o platformă.”
              E arma ta secretă ca să-ți faci clienții să revină, să cumpere și să devină obsedați de brandul tău.
              Simplu pentru tine. Plăcut pentru ei. Profitabil pentru toată lumea.
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
                Fără loialitate, n-ai business. De aceea, oferim afacerilor din România armele digitale de care au nevoie ca să-și transforme clienții în abonați pe viață.
              </p>
              <div className="space-y-3">
                {[
                  "Tehnologie simplă, dar letală.",
                  "Experiență digitală care creează dependență.",
                  "Fiecare interacțiune = o șansă de a vinde din nou.",
                  "Eliminăm complicațiile inutile",
                  "Soluții care funcționează pentru orice industrie",
                  "Construim durabil prin digitalizare"
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
                    Vrem să fim nr. 1 în România la fidelizare digitală.
                    Apoi, să cucerim toată Europa de Est.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      "Fidelitatea nu se cumpără. Se câștigă cu experiențe wow."
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
                      Platformă construită pe cele mai moderne standarde. Rapidă. Scalabilă. Sigură.
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
                În spate avem o echipă de maniaci ai performanței digitale: dezvoltatori, designeri și strategi care fac o singură chestie:
              </p>
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Creăm produse care aduc rezultate:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Livrăm funcționalități utile, nu feature-uri de dragul slide-urilor</li>
                  <li>• Suport în limba română + training complet</li>
                  <li>• Feedback real de la utilizatori = upgrade continuu</li>
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
              Hai să Constrium Viitorul Fidelității
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Te-ai săturat de clienți care vin o dată și dispar? Intră în noua eră a loialității. Refluxe te ajută să îi transformi în abonați care cumpără din nou. Și din nou. Și din nou.
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
