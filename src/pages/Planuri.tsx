import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Crown, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const plans = [
    {
      name: "Basic",
      subtitle: "Alege Basic",
      icon: Rocket,
      price: "149",
      locations: "1 magazin",
      clients: "100 clienți",
      features: [
        { text: "1 locație", enabled: true },
        { text: "1 ofertă simultană", enabled: true },
        { text: "1 cont de utilizator", enabled: true },
        { text: "∞ Bază de clienți", enabled: true },
        { text: "∞ Notificări PUSH", enabled: true },
        { text: "∞ Promoții speciale", enabled: true },
        { text: "Vezi cine cumpără și când. Media bonului și orele de activitate", enabled: true }
      ]
    },
    {
      name: "Standard",
      subtitle: "Alege Standard",
      recommended: true,
      icon: Zap,
      price: "249",
      locations: "1 magazin",
      clients: "250 clienți",
      features: [
        { text: "1 locație", enabled: true },
        { text: "3 oferte simultane", enabled: true },
        { text: "10 conturi manager", enabled: true },
        { text: "∞ Bază de clienți", enabled: true },
        { text: "∞ Notificări PUSH", enabled: true },
        { text: "∞ Promoții speciale", enabled: true },
        { text: "Vezi cine cumpără și când. Media bonului și orele de activitate", enabled: true },
        { text: "Colectez Recenzii", enabled: true },
        { text: "Happy-Hour", enabled: true },
        { text: "Formular personal", enabled: true },
        { text: "Program Recom.", enabled: true },
        { text: "4 Mesaje Autom.", enabled: true },
        { text: "Manager de cont", enabled: true },
        { text: "Mesaje custom", enabled: false },
        { text: "Integrare API", enabled: false },
        { text: "Cont manager personal", enabled: false },
        { text: "Implementare cadou", enabled: false }
      ]
    },
    {
      name: "Premium",
      subtitle: "Alege Premium",
      icon: Crown,
      price: "399",
      locations: "1 magazin",
      clients: "clienți nelimitați",
      features: [
        { text: "1 locație", enabled: true },
        { text: "10 oferte simultane", enabled: true },
        { text: "50 conturi manager", enabled: true },
        { text: "∞ Bază de clienți", enabled: true },
        { text: "∞ Notificări PUSH", enabled: true },
        { text: "∞ Promoții speciale", enabled: true },
        { text: "Vezi cine cumpără și când. Media bonului și orele de activitate", enabled: true },
        { text: "Colectez Recenzii", enabled: true },
        { text: "Happy-Hour", enabled: true },
        { text: "Formular personal", enabled: true },
        { text: "Program Recom.", enabled: true },
        { text: "4 Mesaje Autom.", enabled: true },
        { text: "Manager de cont", enabled: true },
        { text: "Mesaje custom", enabled: true },
        { text: "Integrare API", enabled: true },
        { text: "Cont manager personal", enabled: true },
        { text: "Implementare cadou", enabled: true }
      ]
    }
  ];

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Helvetica Now';
          src: url('/fonts/helveticanowtext-bold-demo.ttf') format('truetype');
        }

        * {
          font-family: 'Helvetica Now', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        /* Efect subtil mov animat */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .purple-bg {
          background: linear-gradient(-45deg, #1a0028, #2a0a3d, #0f0018, #1f0a33);
          background-size: 300% 300%;
          animation: gradientMove 12s ease infinite;
        }
      `}</style>
      
      <section className="purple-bg text-white py-20 pb-32 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 px-4">
              TRANSFORMĂ CLIENȚII OCAZIONALI<br/>ÎN CLIENȚI FIDELI
            </h1>
            <p className="text-[#d6b5ff] text-base sm:text-lg max-w-2xl mx-auto px-4 mb-8">
              Construiește o comunitate în jurul brandului tău
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isRecommended = !!plan.recommended;

              return (
                <div key={index} className="relative group/card transition-all duration-500 flex flex-col h-full">
                  {plan.recommended && (
                    <div className="absolute -top-3 sm:-top-4 left-0 right-0 z-10 flex justify-center">
                      <Badge className="bg-gradient-to-r from-[#c69eff] to-[#a566ff] text-gray-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg">
                        <Star className="inline-block w-4 h-4 mr-1" />
                        CEL MAI POPULAR
                        <Star className="inline-block w-4 h-4 ml-1" />
                      </Badge>
                    </div>
                  )}
                  
                  <Card 
                    className={`shadow-2xl border-0 rounded-3xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 flex flex-col h-full ${
                      plan.recommended 
                        ? 'bg-gradient-to-br from-[#6b2fb5] via-[#8733ff] to-[#6b2fb5] ring-2 ring-[#a566ff] mt-4' 
                        : 'bg-gradient-to-br from-[#3d1b5c] to-[#4a2370] mt-4'
                    }`}
                  >
                    <CardHeader className="text-center pb-6 pt-8 px-6">
                      <CardTitle className="text-4xl font-black text-white mb-2">
                        {plan.name}
                      </CardTitle>
                      
                      <div className="flex justify-center gap-3 mb-2">
                        <Badge className="bg-purple-500/30 text-white border border-purple-400/50 text-xs px-3 py-1">
                          {plan.locations}
                        </Badge>
                        <Badge className="bg-purple-500/30 text-white border border-purple-400/50 text-xs px-3 py-1">
                          {plan.clients}
                        </Badge>
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-5xl font-black text-white">{plan.price}</span>
                        <span className="text-lg text-gray-300 ml-2">RON / lună</span>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-8 flex flex-col flex-grow">
                      <div className="space-y-3 text-left mb-6 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-start gap-3 text-sm font-medium ${
                              feature.enabled 
                                ? 'text-white' 
                                : isRecommended 
                                  ? 'text-gray-300 line-through opacity-50' 
                                  : 'text-gray-500 line-through opacity-60'
                            }`}
                          >
                            <span className={`mt-0.5 ${feature.enabled ? 'text-green-400' : isRecommended ? 'text-gray-400' : 'text-gray-600'}`}>
                              {feature.enabled ? '✓' : '✕'}
                            </span>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full font-bold py-6 rounded-2xl text-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${
                          isRecommended
                            ? 'bg-gradient-to-r from-[#a566ff] to-[#c69eff] hover:from-[#9f5cff] hover:to-[#bb8fff] text-gray-900'
                            : 'bg-gradient-to-r from-[#6b2fb5] to-[#8733ff] hover:from-[#7c2ee6] hover:to-[#9f5cff] text-white'
                        }`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        {plan.subtitle}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* TRUST BADGES */}
          <div className="text-center mt-16">
            <div className="flex justify-center gap-16 flex-wrap items-center">
              <div className="flex flex-col items-center gap-3">
                <img src="/gabio-uploads/1.png" alt="GDPR Compliance" className="w-48 h-24 object-contain" />
                <span className="text-sm font-bold text-white">Securitate<br/>GDPR</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src="/gabio-uploads/2.png" alt="Metode de plată" className="w-48 h-24 object-contain" />
                <span className="text-sm font-bold text-white">Plăți sigure<br/>Banca Transilvania</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src="/gabio-uploads/3.png" alt="SSL Securizat" className="w-48 h-24 object-contain" />
                <span className="text-sm font-bold text-white">100% Sigur<br/>& Protejat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planuri;
