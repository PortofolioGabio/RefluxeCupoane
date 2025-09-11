import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Planuri = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "START",
      description: "Pentru Întreprinderile mici care vor să devină mari.",
      monthlyPrice: "149",
      yearlyDiscount: "sau 1,490 RON / an. Primești 2 luni gratuite.",
      yearlyNote: "(plată unică)",
      features: [
        "1 Magazin",
        "200 Clienți"
      ]
    },
    {
      name: "PLUS", 
      description: "Pentru o afacere in crestere, cu câteva puncte de vânzare.",
      monthlyPrice: "249",
      yearlyDiscount: "sau 1,490 RON / an. Primești 2 luni gratuite.",
      yearlyNote: "(plată unică)",
      features: [
        "1 Magazin",
        "500 Clienți"
      ]
    },
    {
      name: "PRO",
      description: "Pentru companii avansate care au deja mai multe puncte de vânzare.",
      monthlyPrice: "399", 
      yearlyDiscount: "sau 1,490 RON / an. Primești 2 luni gratuite.",
      yearlyNote: "(plată unică)",
      features: [
        "1 Magazin",
        "Clienți nelimitați"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      name: "Promoții disponibile",
      description: "Poți folosi până la 4 tipuri de cupoane pentru promoții",
      start: "1",
      plus: "5", 
      pro: "10"
    },
    {
      name: "Carduri de vizită",
      description: "Carduri digitale finalizate - disponibile în carduri publice",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de abonament",
      description: "Carduri multiple disponibile",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de cashback",
      description: "Carduri de cashback finalizate cu instrumente de economie personalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de reducere",
      description: "Carduri digitale de reducere directă finalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Card cadou",
      description: "Carduri digitale de certificat pre-plătit finalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de cupon",
      description: "Carduri digitale de cupoane finalizate cu reduceri pentru prima vizită",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de membri",
      description: "Carduri digitale finalizate pentru membri",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de recompense",
      description: "Carduri digitale de recompense finalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Carduri de recompense",
      description: "Carduri digitale de recompense finalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Șabloane",
      description: "111 Modele de carduri gata de folosit pentru diferite tipuri de afaceri, inclusiv sectorul de servicii, cu un design individual în unele afaceri",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Personalizarea cardurilor",
      description: "Creează un proiect, carduri cu un design exclusiv în 5 minute. Personalizează culori, logo-uri, imagini și structura cardului. Profită de cele mai creative modele de carduri personalizate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "CRM",
      description: "CRM avansat, capacitatea de a segmenta clienții pentru corespondență direcționată și creșterea vânzărilor cu până la 200%",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Push gratuit",
      description: "Notificare completă de SMS. Clienții care doresc pot primi notificare push nelimitată. Automat. Trimite mesajul tău în istoricul telefonului și nu necesită clientul. Generează unul",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Geolocalizări inteligente",
      description: "Folosește harta automat pentru clienții tăi când ajung la 100 metri de compania ta. Ofertele tale vor fi prin gestionare la distanță în consultarea clienților tăi pentru magazinul tău",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "Personalizarea notificărilor push",
      description: "Creează un proiect, carduri de push automatizat. Creează mesaje finalizate automat, gratuit",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "PWA Scanner App",
      description: "Aplicație opțională scanner CRM/PWA pentru conectarea punctelor și premiilor clienților tăi cu ușurință și rapiditate",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Program de Recomandare",
      description: "Clienții tăi pot recomanda puncte și recompense prin invitarea prietenilor la promoția ta. Crește-ți baza de clienți cu cost de publicitate",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "Control duplicat",
      description: "Clienții tăi nu pot folosi alte carduri de fidelitate pentru o promoție și să obțină mai multe puncte decât ar trebui. Control aplicat exclusiv pentru clienți",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Rapoarte inteligente",
      description: "Rapoarte complete și feedback pentru a analiza performanța integrată a programelor și clienților tăi",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Analiză pentru management",
      description: "Vezi ce articol trebuie să câștigi din segment și alți vânzători din oraș, pentru a arăta și pentru a vizita. Recomandare pentru îmbunătățirea vânzărilor companiei tale",
      start: "1",
      plus: "3",
      pro: "5"
    },
    {
      name: "API și Integrare",
      description: "Integrare cu software-ul tău pentru automatizarea automată a cardurilor, punctelor și premiilor",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "Câmpuri personalizabile",
      description: "Ia-ți propriile câmpuri cu taxare personalizată: numele și telefonul tău. Adaugă mai multe câmpuri pentru clienții tăi",
      start: false,
      plus: true,
      pro: true
    },
    {
      name: "Configurare gratuită a programului de fidelitate",
      description: "Configurăm toate programele de fidelitate",
      start: false,
      plus: false,
      pro: true
    }
  ];

  const handleDemoClick = () => {
    navigate('/demonstratie');
  };

  const renderFeatureStatus = (status: boolean | string) => {
    if (typeof status === 'boolean') {
      return status ? (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="h-4 w-4 text-white" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <X className="h-4 w-4 text-white" />
          </div>
        </div>
      );
    }
    return <div className="text-center text-sm font-medium">{status}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              TRANSFORMĂ CLIENȚII ÎN FANI CHIAR ASTĂZI
            </h1>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-white text-gray-900 shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-sm text-gray-500 mb-2">La doar</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.monthlyPrice}<span className="text-lg font-normal">RON /lună</span>
                  </div>
                  <div className="text-sm text-red-500 mb-2">
                    {plan.yearlyDiscount}
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    {plan.yearlyNote}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={handleDemoClick}
                  >
                    AFLĂ MAI MULTE ACUM
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-8 mb-8">
            <h2 className="text-3xl font-bold text-center">
              DESCOPERĂ FUNCȚIONALITĂȚILE FIECĂRUI PLAN
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                    Funcționalitate
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    START
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    PLUS
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    PRO
                  </th>
                </tr>
                <tr className="bg-orange-400 text-white">
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                    Investiție lunară
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    249 RON
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    349 RON
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    499 RON
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="font-semibold text-gray-900 mb-1">{feature.name}</div>
                      <div className="text-sm text-gray-600">{feature.description}</div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.start)}
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.plus)}
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planuri;