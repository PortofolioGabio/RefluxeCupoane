import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Users, TrendingUp, ExternalLink, Star, CheckCircle, Bell, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { updatePageSEO, getOrganizationSchema, getWebPageSchema, getSoftwareApplicationSchema } from '@/utils/seo';
import OptimizedImage from '@/components/OptimizedImage';

const Index = () => {
  useEffect(() => {
    const structuredData = [
      getOrganizationSchema(),
      getWebPageSchema(
        'Refluxe - Platformă Cupoane Digitale Fidelitate',
        'Transformă clienții în fani fideli cu platforma #1 de cupoane digitale și programe de fidelitate din România. Peste 30.000 magazine partenere.',
        'https://refluxe.io/'
      ),
      getSoftwareApplicationSchema()
    ];

    updatePageSEO({
      title: 'Refluxe - Platformă Cupoane Digitale Fidelitate România | Card Loialitate Digital',
      description: 'Transformă clienții în fani fideli cu platforma #1 de cupoane digitale și programe de fidelitate din România. Peste 30.000 magazine partenere. Începe gratuit!',
      keywords: 'cupoane digitale, card fidelitate digital, program loialitate, marketing digital, retail Romania, card puncte, cashback, recompense clienti, aplicatie fidelitate',
      canonical: 'https://refluxe.io/',
      ogImage: 'https://refluxe.io/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png',
      structuredData: structuredData
    });
  }, []);

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-brand-orange" />,
      title: "Cupoane Digitale", 
      description: "Elimină hârtia și modernizează programele de fidelitate cu cupoane digitale interactive."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-orange" />,
      title: "Retenție Clienți",
      description: "Crește loialitatea clienților prin experiențe personalizate și recompense atractive."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-orange" />,
      title: "Analitică Avansată",
      description: "Monitorizează performanța campaniilor și comportamentul clienților în timp real."
    }
  ];

  const benefits = [
    "Bază date",
    "Alerte PUSH",
    "Notificări automatizate",
    "Rapoarte Detaliate"
  ];

  const loyaltyPrograms = [
    {
      image: "/gabio-uploads/6f082d50-f6d4-4f3f-ad73-c605985279c2.png",
      title: "RefluxeAcces",
      description: "Blochează ușa concurenței. Transformă fiecare intrare într-o experiență VIP. Oferă acces cu recompense pe niveluri care îi fac pe clienți să se simtă parte din “gașca selectă” a brandului tău."
    },
    {
      image: "/gabio-uploads/ccfbc196-6e05-4031-912e-00fa318145c9.png",
      title: "RefluxePuncte",
      description: "Fiecare vizită = o victorie. Fă din fiecare interacțiune o misiune cu recompensă. Cu cât vin mai des, cu atât câștigă mai mult. Și nu doar puncte — ci obiceiuri."
    },
    {
      image: "/gabio-uploads/695078de-f615-4f31-8acc-fac9285012f7.png",
      title: "RefluxeReducere",
      description: "Reduceri care declanșează acțiune. Fără vânzări lente și reduceri ignorate. Oferă discounturi progresive care îi fac să cumpere ACUM, nu “poate mai târziu”."
    },
    {
      image: "/gabio-uploads/ce8894f8-8ebe-4910-9a6d-b3ff5a3637fc.png",
      title: "RefluxeRecompense",
      description: "Gamificarea care creează dependență. Stimulează creierul clienților cu recompense inteligente. Îi ții în priză, le crești loialitatea și... vânzările cresc pe pilot automat."
    },
    {
      image: "/gabio-uploads/57e7633a-d890-4c9a-b843-9a2ce7b6d271.png",
      title: "RefluxeCashback",
      description: "Cashback-ul îi face să simtă că „au câștigat” la fiecare achiziție. Și vor să câștige din nou și din nou."
    },
    {
      image: "/gabio-uploads/b79307ec-62c8-427c-9e0a-03f9edc1f35a.png",
      title: "RefluxeCupon",
      description: "Cuponul care vinde în locul tău. Targetare precisă + personalizare automată = cuponul perfect. Trimiți, se deschide, se folosește. Tu doar numeri comenzile."
    },
    {
      image: "/gabio-uploads/98b296a9-52a3-4764-8cac-b8cede88a98e.png",
      title: "RefluxeMultipas",
      description: "Un singur card. Toate avantajele. Unifică toate serviciile tale într-un multipass digital care adaugă valoare la fiecare vizită. Clienții tăi rămân în joc până câștigă... și apoi joacă din nou."
    },
    {
      image: "/gabio-uploads/995bd4ba-c4fa-4286-aba1-7f6a9f0bd12f.png",
      title: "RefluxeCadou",
      description: "Carduri cadou care aduc profit. Ușor de personalizat. Ușor de vândut. Ușor de iubit. Oferă-le clienților motive să dăruiască brandul tău altora – și să-ți plătească pentru asta."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Stabilește miza",
      description: "Ce vrei să-i faci pe clienți să repete la infinit? Exemplu: „După 6 vizite, primești un cadou!” Recompensa trebuie să sune prea bine ca să nu revină."
    },
    {
      number: "2", 
      title: "Alege stilul",
      description: "Ai sute de modele pregătite. Sau îl creezi de la zero și-l faci unic. Brandul tău merită un card care întoarce capete."
    },
    {
      number: "3",
      title: "Personalizează",
      description: "Logo, culori, date de contact – totul pe card. 5 minute mai târziu, ai un instrument de vânzare pe care-l poți arăta cu mândrie."
    },
    {
      number: "4",
      title: "Descarcă promoția",
      description: "Platforma îți face toată treaba: PDF cu reguli, QR, instrucțiuni. Tu doar îl tipărești și-l afișezi. Gata cu complicațiile."
    },
    {
      number: "5",
      title: "Promovează-l",
      description: "QR în magazin? Link online? Ambele funcționează. Clienții se înscriu în 10 secunde. Iar tu ai o bază de date în creștere."
    },
    {
      number: "6",
      title: "Ai un program LIVE",
      description: "Începe să-ți vezi clienții revenind, cumpărând și recomandând. Asta înseamnă fidelitate pe pilot automat."
    }
  ];

  const integrations = [
    { name: "Zapier", icon: "🔗" },
    { name: "HubSpot", icon: "🧡" },
    { name: "Salesforce", icon: "☁️" },
    { name: "Mailchimp", icon: "📧" },
    { name: "Slack", icon: "💬" },
    { name: "Trello", icon: "📋" },
    { name: "Asana", icon: "🔴" },
    { name: "Notion", icon: "📝" },
    { name: "Airtable", icon: "🟡" },
    { name: "Shopify", icon: "🛍️" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "PayPal", icon: "💳" }
  ];

return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-hero text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transformă clienții ocazionali <span className="text-brand-orange">în clienți fideli</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
                Automat, prin mementouri inteligente, mesaje personalizate și recompense care îi fac să revină. Fără aplicații complicate, fără reclame costisitoare, doar rezultate reale și constante.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demonstratie">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3 text-lg">
                  Solicită Demonstrație
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-gray-900 hover:bg-white hover:font-semibold px-8 py-3 text-lg"
                onClick={() => window.open('https://app.refluxe.io/', '_blank')}
              >
                Intră în Aplicație
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-orange" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-end items-end h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
            <div className="relative">
              <OptimizedImage 
                src="/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png" 
                alt="Aplicația mobilă Refluxe pentru programe de fidelitate digitale - transformă clienții în fani fideli"
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
                style={{ marginBottom: '-12rem' }}
                priority={true}
                width={600}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Why Digital Cards Section */}
      <section className="py-4 sm:py-8 lg:py-12">
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
          <OptimizedImage 
            src="/gabio-uploads/955053ff-b18c-43de-bdb8-1ddceb318ca0.png" 
            alt="Beneficiile cardurilor digitale de fidelitate - de ce să alegi soluțiile Refluxe pentru programul tău de loialitate"
            className="w-full h-auto max-w-4xl mx-auto"
            width={1600}
            height={800}
          />
        </div>
      </section>

      {/* Loyalty Programs Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Programe de Fidelitate Complete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă varietatea de soluții digitale pe care le poți implementa pentru a-ți fideliza clienții
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loyaltyPrograms.map((program, index) => (
              <div key={index} className="space-y-4">
                <OptimizedImage 
                  src={program.image} 
                  alt={`${program.title} - ${program.description.substring(0, 100)}...`}
                  className="w-full h-auto"
                  width={300}
                  height={400}
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    <span className="font-extrabold text-brand-purple">Refluxe</span>
                    {program.title.replace('Refluxe', '')}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase leading-tight">
                  PAȘI SIMPLI PENTRU A CREA UN PROGRAM DE FIDELITATE
                </h2>
                <p className="text-xl text-gray-200">
                  ...în mai puțin timp decât îți ia să-ți bei cafeaua.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => {
                  const isWhiteCard = index % 2 === 0;
                  
                  return (
                    <Card 
                      key={index} 
                      className={`
                        ${isWhiteCard 
                          ? 'bg-white text-gray-900' 
                          : 'bg-transparent text-white border-white/20'
                        } 
                        border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full
                      `}
                    >
                      <CardContent className="p-6 h-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className={`
                            font-bold text-lg 
                            ${isWhiteCard 
                              ? 'bg-gradient-hero bg-clip-text text-transparent' 
                              : 'text-white'
                            }
                          `}>
                            {step.title}
                          </h3>
                          <p className={`
                            text-sm leading-relaxed 
                            ${isWhiteCard 
                              ? 'bg-gradient-hero bg-clip-text text-transparent' 
                              : 'text-white/90'
                            }
                          `}>
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Push Notifications Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Trimite notificări push clienților tăi.
              </h2>
              <p className="text-xl text-gray-600">
                Trimite notificări PUSH în stil SMS clienților tăi folosind funcționalități native mobile.
              </p>
              <p className="text-gray-500">
                Folosește tehnologii precum Geolocație, Memento-uri, Control Calitate și mesaje pentru clienții tăi.
              </p>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-2">
                <Bell className="mr-2 h-4 w-4" />
                TESTEAZĂ ACUM
              </Button>
            </div>
            
            <div className="relative flex justify-center">
              <OptimizedImage 
                src="/gabio-uploads/2f049e99-bfad-4539-b644-1b4b2d83ba37.png" 
                alt="Notificări push mobile pentru aplicația de fidelitate Refluxe - comunicare directă cu clienții"
                className="max-w-full h-auto"
                width={400}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stores Counter Section */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Este <span className="text-brand-orange">mai ieftin să readuci</span> un client decât să câștigi unul nou
            Alătură-te la peste <span className="text-brand-orange">30.000</span> de magazine
          </h2>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Automatizează fluxul tău de lucru
              </h2>
              <p className="text-xl text-gray-600">
                Integrează cu peste 5.000 de aplicații și ai posibilități nelimitate.
              </p>
            </div>
            
            <div className="relative flex justify-center">
              <OptimizedImage 
                src="/gabio-uploads/ad1aad5f-00a2-4440-a28c-8d7c97a7b352.png" 
                alt="Integrări Zapier și aplicații pentru platforma Refluxe - automatizează fluxul de lucru"
                className="max-w-full h-auto"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
