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
      name: "Start",
      storeCount: "1 Magazin",
      clientCount: "250 clienți",
      description: "Perfect pentru a testa platforma",
      badge: null,
      features: [
        { name: "Până la 100 cupoane/lună", included: true },
        { name: "1 program de fidelitate", included: true },
        { name: "Dashboard de bază", included: true },
        { name: "Suport email", included: true },
        { name: "Integrare API", included: false },
        { name: "Branding personalizat", included: false },
        { name: "Analitică avansată", included: false },
        { name: "Suport prioritar", included: false }
      ],
      cta: "Începe Gratuit",
      popular: false
    },
    {
      name: "Avansat",
      storeCount: "1 Magazin",
      clientCount: "500 clienți",
      description: "Ideal pentru afaceri în creștere",
      badge: "Cel mai popular",
      features: [
        { name: "Până la 5,000 cupoane/lună", included: true },
        { name: "Programe de fidelitate nelimitate", included: true },
        { name: "Dashboard avansat", included: true },
        { name: "Suport chat și email", included: true },
        { name: "Integrare API completă", included: true },
        { name: "Branding personalizat", included: true },
        { name: "Analitică avansată", included: true },
        { name: "Suport prioritar", included: false }
      ],
      cta: "Începe Perioada de Probă",
      popular: true
    },
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
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: "Cupoane promotionale", description: "Poți utiliza unul din cele 8 tipuri de carduri pentru promoții." },
    { name: "Carduri cu ștampile", description: "Carduri digitale nelimitate - economisește alegând cardurile din plastic" },
    { name: "Carduri de abonament", description: "Carduri de abonament nelimitate" },
    { name: "Carduri cashback", description: "Carduri cashback nelimitate cu instrumente personalizate de economisire" },
    { name: "Carduri de reducere", description: "Carduri digitale clasice de reducere nelimitate" },
    { name: "Carduri cadou", description: "Certificate preplătite digitale nelimitate" },
    { name: "Carduri cupon", description: "Cupoane digitale nelimitate cu reducere QR pentru prima vizită" },
    { name: "Carduri de membru", description: "Carduri digitale nelimitate pentru membri" },
    { name: "Carduri de recompense", description: "Carduri digitale de recompense nelimitate" },
    { name: "Carduri de cerere", description: "Carduri digitale de cerere nelimitate" },
    { name: "Șabloane de carduri gata făcute", description: "19 șabloane de carduri gata de utilizare. Folosește tipuri diferite de afaceri. Alege cea potrivită sau creează-ți propriul card cu un design individual în câteva minute." },
    { name: "Personalizarea cardurilor", description: "Creează-ți propriul card cu un design unic în 5 minute. Personalizează culorile, logo-ul, imaginile active și descrierea cardului. Profită la maximum de constructorul nostru personalizat de carduri." },
    { name: "CRM", description: "Construit în 1984. Capacitatea de a segmenta clienții pentru corespondență țintită și crește vânzările cu până la 300%." },
    { name: "Push gratuit", description: "Înlocuire completă pentru SMS. Clienții cu aplicația nativă primesc notificări push nelimitate gratuit. Push-ul nu rămâne în istoricul telefonului și nu deranjează clientul. Economisește la SMS." },
    { name: "Geolocalizare inteligentă", description: "Trimite automat mesaje clienților tăi când ajung în raza de 100 de metri de afacerea ta. Sunt clienții tăi în apropiere? Amintește-le de promoțiile tale și invită-i în magazin." },
    { name: "Personalizarea notificărilor push", description: "Creează-ți propriul kit automatizat de push. Creează mesaje automate nelimitate gratuit." },
    { name: "Aplicația scanner POS", description: "Instalează aplicația Scanner POS pentru a acorda puncte și recompense clienților tăi fără hardware suplimentar." },
    { name: "Program de recomandări", description: "Clienții tăi pot câștiga promoții și recompense invitând prieteni la promoția ta. Oferă-le clienților tăi codurile lor de publicitate prin recomandare." },
    { name: "Control duplicate", description: "Clienții tăi nu vor putea să emită mai multe carduri de fidelitate pentru o promoție și să obțină beneficii suplimentare. Baza ta de clienți conține doar înregistrări unice de clienți." },
    { name: "Rapoarte inteligente", description: "Rapoarte complete și detaliate pentru a analiza performanța completă a programelor și clienților tăi." },
    { name: "Acces management/echipă", description: "Dacă ai mai multe magazine și mai mulți vânzători sau asistenți, această funcție este pentru tine! Rapoarte separate pentru fiecare manager/echipă și magazin. Restricționează echipa de management cea mai eficientă din afacerea ta." },
    { name: "API și integrare", description: "Integrare cu software-ul tău pentru acumularea automată de ștampile, puncte și premii." },
    { name: "Câmpuri personalizate", description: "Creează-ți propriile carduri cu conținut personalizat fără a folosi șablonul. Adaugă date suplimentare pentru carduri." },
    { name: "Configurare gratuită program fidelitate", description: "Configurăm toate programele tale de fidelitate." }
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
    if (planIndex === 0) { // Gratuit
      if (featureIndex <= 11 || featureIndex === 14 || featureIndex === 15 || featureIndex === 17 || featureIndex === 18 || featureIndex === 19 || featureIndex === 20) {
        return 'included';
      } else if (featureIndex === 12 || featureIndex === 16 || featureIndex === 21 || featureIndex === 22 || featureIndex === 23) {
        return 'excluded';
      } else {
        return 'limited';
      }
    } else if (planIndex === 1) { // Pro
      if (featureIndex === 12 || featureIndex === 16 || featureIndex === 21 || featureIndex === 22 || featureIndex === 23) {
        return 'excluded';
      } else {
        return 'included';
      }
    } else { // Enterprise
      return 'included';
    }
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
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isYearly ? 'text-white' : 'text-gray-300'}`}>
              Lunar
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-brand-orange"
            />
            <span className={`font-medium ${isYearly ? 'text-white' : 'text-gray-300'}`}>
              Anual
            </span>
            <Badge className="bg-brand-orange text-white ml-2">
              Economisești 10%
            </Badge>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compară Toate Funcționalitățile
            </h2>
            <p className="text-xl text-gray-600">
              Vezi în detaliu ce include fiecare plan pentru a face cea mai bună alegere.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-orange">
                  <th className="text-left py-4 px-6 font-bold text-white border-r border-orange-400">Funcționalitate</th>
                  <th className="text-center py-4 px-6 font-bold text-white border-r border-orange-400">Start</th>
                  <th className="text-center py-4 px-6 font-bold text-white border-r border-orange-400">Avansat</th>
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
                    {[0, 1, 2].map((planIndex) => (
                      <td key={planIndex} className="text-center py-4 px-6 border-r border-gray-200 last:border-r-0">
                        {renderFeatureCell(getFeatureStatus(planIndex, featureIndex))}
                      </td>
                    ))}
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
