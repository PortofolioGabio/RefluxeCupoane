
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Users, TrendingUp, ExternalLink, Star, CheckCircle, Bell, Zap } from 'lucide-react';

const Index = () => {
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
    "Integrare simplă în 5 minute",
    "Suport 24/7 în limba română",
    "Securitate de nivel bancar",
    "Personalizare completă"
  ];

  const loyaltyPrograms = [
    {
      image: "/lovable-uploads/6f082d50-f6d4-4f3f-ad73-c605985279c2.png",
      title: "RefluxeAcces",
      description: "Transformă experiența clienților cu sisteme moderne de acces bazate pe niveluri și recompense personalizate, creând o comunitate fidelă și angajată."
    },
    {
      image: "/lovable-uploads/ccfbc196-6e05-4031-912e-00fa318145c9.png",
      title: "RefluxePuncte",
      description: "Dezvoltă programe sofisticate de loialitate cu ștampile digitale, unde fiecare interacțiune se transformă în oportunități tangibile de recompensare și satisfacție maximă."
    },
    {
      image: "/lovable-uploads/695078de-f615-4f31-8acc-fac9285012f7.png",
      title: "RefluxeReducere",
      description: "Implementează strategii inteligente de discount cu niveluri progresive care motivează clienții să revină și să se implice mai mult în ecosistema ta de brand."
    },
    {
      image: "/lovable-uploads/ce8894f8-8ebe-4910-9a6d-b3ff5a3637fc.png",
      title: "RefluxeRecompense",
      description: "Creează ecosisteme complexe de recompensare bazate pe puncte și gamification, stimulând angajamentul continuu și construind relații de lungă durată cu clienții."
    },
    {
      image: "/lovable-uploads/57e7633a-d890-4c9a-b843-9a2ce7b6d271.png",
      title: "RefluxeCashback",
      description: "Revoluționează fidelitatea prin programe avansate de cashback cu returnări financiare directe, oferind valoare tangibilă și imediată pentru fiecare achiziție realizată."
    },
    {
      image: "/lovable-uploads/b79307ec-62c8-427c-9e0a-03f9edc1f35a.png",
      title: "RefluxeCupon",
      description: "Dezvoltă campanii dinamice de cupoane digitale cu targeting precis și personalizare avansată, maximizând rata de conversie și achiziția de clienți noi."
    },
    {
      image: "/lovable-uploads/98b296a9-52a3-4764-8cac-b8cede88a98e.png",
      title: "RefluxeMultipas",
      description: "Implementează sisteme multi-servicii inovatoare unde clienții acumulează beneficii transversale, creând experiențe holistice și valoare adăugată în întregul parcurs client."
    },
    {
      image: "/lovable-uploads/995bd4ba-c4fa-4286-aba1-7f6a9f0bd12f.png",
      title: "RefluxeCadou",
      description: "Lansează programe sofisticate de carduri cadou digitale cu flexibilitate maximă și personalizare completă, extinzând reach-ul brandului și generând venituri suplimentare."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Creează o promoție",
      description: "Definește ce va fi recompensa programului tău de fidelitate. Exemplu: Pentru fiecare 6 vizite, primești 1 cadou gratuit!"
    },
    {
      number: "2", 
      title: "Creează un stil pentru cardul tău",
      description: "Alege din sute de șabloane sau creează un card de la zero"
    },
    {
      number: "3",
      title: "Personalizează cardul tău",
      description: "Adaugă logo-ul și culorile pe card. Adaugă informațiile de contact ale afacerii tale."
    },
    {
      number: "4",
      title: "Descarcă și aplică promoția",
      description: "Platforma creează automat un fișier PDF promoțional A4 cu regulile promoției, codul QR al cardului și instrucțiunile de instalare."
    },
    {
      number: "5",
      title: "Promovează programul tău",
      description: "Tipărește un cod QR pentru a-l plasa în magazin pentru a face mai ușoară înscrierea clienților, sau distribuie link-ul online pentru înregistrare rapidă."
    },
    {
      number: "6",
      title: "Totul este gata!",
      description: "Bucură-te de toate avantajele și beneficiile unui card de fidelitate!"
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
                Transformă clienții în <span className="text-brand-orange">fani fideli</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
                Platforma modernă de cupoane digitale de fidelitate care crește vânzările și retenția clienților.
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
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg"
                onClick={() => window.open('#', '_blank')}
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
              <img 
                src="/lovable-uploads/495771be-804e-48df-8f77-e4316aff17fb.png" 
                alt="Refluxe mobile app demonstrating loyalty cards"
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
                style={{ marginBottom: '-12rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Why Digital Cards Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/lovable-uploads/955053ff-b18c-43de-bdb8-1ddceb318ca0.png" 
            alt="De ce carduri digitale acum - beneficiile platformei Refluxe"
            className="w-full h-auto"
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
                <img 
                  src={program.image} 
                  alt={`Program de fidelitate ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">
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
                  În doar 15 minute!
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
              <img 
                src="/lovable-uploads/2f049e99-bfad-4539-b644-1b4b2d83ba37.png" 
                alt="Push notifications pe telefon"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stores Counter Section */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
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
              <img 
                src="/lovable-uploads/ad1aad5f-00a2-4440-a28c-8d7c97a7b352.png" 
                alt="Integrări Zapier și aplicații"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
