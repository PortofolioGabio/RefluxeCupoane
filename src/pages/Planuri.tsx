import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Link, useNavigate } from 'react-router-dom';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Planuri = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: "Expert",
      storeCount: "1 Magazin",
      clientCount: "Nelimitați",
      description: "Pentru corporații și lanțuri de magazine",
      badge: "Toate funcționalitățile",
      features: [
        { name: "Cupoane nelimitate", included: true },
        { name: "Programe de fidelitate nelimitate", included: true },
        { name: "Dashboard enterprise", included: true },
        { name: "Suport dedicat 24/7", included: true },
        { name: "API și integrări personalizate", included: true },
        { name: "White-label complet", included: true },
        { name: "Analitică și rapoarte personalizate", included: true },
        { name: "Account manager dedicat", included: true }
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

  const handleButtonClick = (index: number) => {
    if (expandedCard === index) {
      // If clicking on already expanded card, collapse it
      setExpandedCard(null);
    } else {
      // If clicking on a different card, expand it (auto-collapse previous)
      setExpandedCard(index);
    }
  };

  const handleSecondClick = (index: number) => {
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
            Planuri Simple, Rezultate Excepționale
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Alege planul perfect pentru afacerea ta. Toate planurile includ acces la funcționalitățile de bază.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered pricing text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Începând de la 249 lei / lună
            </h2>
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
                  } ${
                    expandedCard === index 
                      ? 'scale-105 shadow-2xl' 
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
                      <span className="text-sm font-semibold text-gray-700">
                        {plan.clientCount}
                      </span>
                    </div>

                    {/* Expandable features list */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      expandedCard === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
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
                        className={`w-full font-semibold py-3 transition-all duration-300 ${
                          expandedCard === index
                            ? 'bg-brand-orange hover:bg-brand-orange/90 text-white transform hover:scale-105'
                            : 'bg-brand-purple hover:bg-brand-purple/90 text-white'
                        }`}
                        onClick={() => expandedCard === index ? handleSecondClick(index) : handleButtonClick(index)}
                      >
                        {expandedCard === index ? 'Programează un Demo' : 'Află mai multe'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Toate Funcționalitățile Expert
            </h2>
            <p className="text-xl text-gray-600">
              Vezi în detaliu ce include planul nostru Expert pentru afacerea ta.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-orange">
                  <th className="text-left py-4 px-6 font-bold text-white border-r border-orange-400">Funcționalitate</th>
                  <th className="text-center py-4 px-6 font-bold text-white">Expert</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 border-r border-gray-200">
                      <div>
                        <div className="font-semibold">{feature.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{feature.description}</div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      {renderFeatureCell(getFeatureStatus(0, featureIndex))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la cele mai comune întrebări despre planurile noastre.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Mai ai întrebări? Echipa noastră este gata să te ajute.
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
