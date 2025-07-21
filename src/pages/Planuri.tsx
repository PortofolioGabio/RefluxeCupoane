import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Link, useNavigate } from 'react-router-dom';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Planuri = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const plans = [
      {
        name: "Nelimitat+",
        storeCount: "1 Magazin",
        clientCount: "Bază de date nelimitată",
        description: "Pentru corporații și lanțuri de magazine",
        badge: "Toate funcționalitățile",
        features: [
          { name: "1 GEO-locație", included: true },
          { name: "1 manager", included: true },
          { name: "Alerte push nelimitate (tip SMS)", included: true },
          { name: "Notificări personalizabile și automate", included: true },
          { name: "10 promoții active simultan", included: true },
          { name: "Client Ambasador", included: true },
          { name: "Anti-duplicare", included: true },
          { name: "Rapoarte detaliate", included: true },
          { name: "Design personalizabil", included: true },
          { name: "Integrare API", included: true }
        ],
        cta: "Contactează Vânzările",
        popular: true
      }
    ];

  const comparisonFeatures = [
    { name: "1 locație", description: "Ai o locație fizică? Perfect. Planul funcționează pentru acea locație." },
    { name: "1 GEO-locație", description: "Trimitem automat oferte clienților când trec prin apropierea locației tale." },
    { name: "1 manager", description: "Poți avea o persoană care administrează totul. Fără haos, totul sub control." },
    { name: "Bază de date nelimitată", description: "Oricâți clienți ai, îi poți păstra pe toți într-un singur loc. Fără limite." },
    { name: "Alerte push nelimitate (tip SMS)", description: "Trimite mesaje clienților direct pe telefon. Seamănă cu SMS-urile, dar sunt mai smart." },
    { name: "Notificări personalizabile și automate", description: "Trimitem oferte sau mesaje automat, exact cum vrei tu. Clientul simte că e special." },
    { name: "10 promoții active simultan", description: "Poți rula până la 10 promoții în același timp – fără să le amesteci." },
    { name: "Client Ambasador", description: "Clienții tăi îți aduc alți clienți. Le dai un mic beneficiu, și vorbesc în locul tău." },
    { name: "Anti-duplicare", description: "Un client nu poate trișa – nu poate folosi aceeași ofertă de mai multe ori." },
    { name: "Rapoarte detaliate", description: "Vezi clar ce merge, câți clienți revin, ce promoții aduc cei mai mulți bani." },
    { name: "Design personalizabil", description: "Alegi culorile, logo-ul, mesajele – totul arată exact cum vrei tu." },
    { name: "Integrare API", description: "Dacă ai deja alte sisteme, conectăm Refluxe cu ele ca să meargă totul ca uns." }
  ];

  const faqs = [
    {
      question: "Pot schimba planul oricând?",
      answer: "Da, poți face upgrade sau downgrade oricând. Modificările se aplică la următoarea facturare."
    },
    {
      question: "Există perioadă de probă gratuită?",
      answer: "Planul Pro include 14 zile de probă gratuită. Planul Enterprise include 30 de zile."
    },
    {
      question: "Ce se întâmplă dacă depășesc limita de cupoane?",
      answer: "Te vom notifica când te apropii de limită și îți vom sugera upgrade-ul la planul superior."
    },
    {
      question: "Includ planurile suport tehnic?",
      answer: "Toate planurile includ suport tehnic. Pro și Enterprise au suport prioritar și dedicat."
    }
  ];

  const handleDemoClick = () => {
    navigate('/demonstratie');
  };

  const getFeatureStatus = (planIndex: number, featureIndex: number) => {
    // Since we only have the Expert plan, all features are included
    return 'included';
  };

  const renderFeatureCell = (status: string) => {
    if (status === 'included') {
      return <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Check className="h-3 w-3 text-white" /></div>;
    } else if (status === 'excluded') {
      return <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto"><X className="h-3 w-3 text-white" /></div>;
    } else {
      return <span className="text-xs text-gray-600 mx-auto block text-center">Limited</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Un Singur Plan. Toată Puterea.
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Tot ce ai nevoie pentru un program de fidelitate care aduce clienții înapoi. Fără complicații. Fără costuri ascunse.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered pricing text */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-relaxed">
              <span className="text-brand-orange">TOTUL</span> pentru doar
              <br />
              <span className="text-brand-purple">100 lei / lună</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Nimic complicat. Fără costuri ascunse. <strong>Un singur preț. O platformă completă. O afacere care crește.</strong>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Vrei să-ți transformi clienții în fani loiali? <strong>Asta e unealta. 100 lei. Atât. Fără costuri ascunse.</strong>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative shadow-xl border-0 transition-all duration-300 ${
                    plan.popular 
                      ? 'ring-2 ring-brand-purple shadow-2xl scale-105' 
                      : ''
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-brand-purple text-white px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Always visible client count */}
                    <div className="flex items-center space-x-3 mb-4">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        {plan.storeCount}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {plan.clientCount}
                      </span>
                    </div>

                    {/* Always visible features list */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${
                              feature.included ? 'text-gray-700' : 'text-gray-400'
                            }`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <Button 
                        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                        onClick={handleDemoClick}
                      >
                        Programează un Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Access Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <strong>Lucrezi cu o echipă și vrei ca fiecare să aibă acces?</strong>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nicio problemă! Cu Refluxe, poți folosi un singur cont și să adaugi mai mulți manageri, fiecare cu cardul lui propriu.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Cum funcționează?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">👤</span>
                <p className="text-gray-700">
                  <strong>Fiecare utilizator are acces separat, dar totul se gestionează dintr-un singur cont central</strong>
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">💳</span>
                <p className="text-gray-700">
                  <strong>Fiecare folosește cardul lui pentru a scana clienți și aplica promoții</strong>
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🔔</span>
                <p className="text-gray-700">
                  <strong>Notificările automate sunt comune – trimitem mesaje unificate către toți clienții</strong>
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📊</span>
                <p className="text-gray-700">
                  <strong>Toate datele și rezultatele se văd într-un singur panou</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cât costă / lună / utilizator?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-purple/10 rounded-lg p-6">
                <div className="text-lg font-semibold text-brand-purple mb-2">🔹 2–5 utilizatori</div>
                <div className="text-xl font-bold text-gray-900">80 lei / lună / utilizator</div>
              </div>
              <div className="bg-brand-orange/10 rounded-lg p-6">
                <div className="text-lg font-semibold text-brand-orange mb-2">🔹 6–10 utilizatori</div>
                <div className="text-xl font-bold text-gray-900">60 lei / lună / utilizator</div>
              </div>
              <div className="bg-green-100 rounded-lg p-6">
                <div className="text-lg font-semibold text-green-600 mb-2">🔹 11+ utilizatori</div>
                <div className="text-xl font-bold text-gray-900">40 lei / lună / utilizator</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-6">
              <strong>Cu cât ai mai mulți utilizatori, cu atât plătești mai puțin pentru fiecare. Simplu!</strong>
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              <strong>Activează accesul pentru echipa ta și lasă-i pe toți să contribuie la creșterea afacerii!</strong>
            </p>
            <Link to="https://app.refluxe.io/registration">
              <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-8 py-3">
                Înscrie-te acum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              Ai întrebări? Contactează-ne aici.
            </p>
            <Link to="/contact">
              <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-8 py-3">
                Contactează-ne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planuri;