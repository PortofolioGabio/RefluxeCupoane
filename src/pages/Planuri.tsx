import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const plans = [
    {
      name: "Plan 1",
      clients: "100 clienți",
      monthlyPrice: "249",
      yearlyPrice: "2,750",
      yearlyMonthly: "229",
      yearlyBonus: "1 lună cadou",
      icon: Rocket,
      features: [
        { text: "∞ Bază de clienți", highlight: true },
        { text: "∞ Notificări PUSH", highlight: true },
        { text: "∞ Promoții speciale", highlight: true },
        { text: "Design personalizat" },
        { text: "Formular personalizat" },
        { text: "", spacer: true },
        { text: "Vezi cine revine și cât cheltuie" },
        { text: "Află profilul de client" },
        { text: "Vezi media comenzilor" },
        { text: "Află orele de vârf" },
        { text: "", spacer: true },
        { text: "Recenzii Google" },
        { text: "Colectare feedback" },
        { text: "Reminder automat" },
        { text: "'La mulți ani' automat" },
        { text: "Program de recomandare" },
        { text: "Program de Happy-Hour" },
        { text: "", spacer: true },
        { text: "Manager de cont" },
        { text: "Modificări nelimitate" },
        { text: "Exclusivitate de ofertă" },
        { text: "", spacer: true },
        { text: "", spacer: true },
        { text: "Implementare gratuită" },
        { text: "", spacer: true },
        { text: "8 tipuri de carduri" },
        { text: "3 oferte simultane" },
        { text: "3 puncte de lucru (70 / extra)" },
        { text: "3 puncte de GEO-localizare" }
      ],
      disabledFeatures: [
        { text: "Campanii automate de notificări" },
        { text: "Automatizări personalizate" },
        { text: "Admini cu funcții multiple" },
        { text: "Integrare prin API" }
      ]
    },
    {
      name: "Plan 2",
      clients: "250 clienți",
      monthlyPrice: "497",
      yearlyPrice: "5,470",
      yearlyMonthly: "456",
      yearlyBonus: "2 luni cadou",
      recommended: true,
      icon: Zap,
      features: [
        { text: "∞ Bază de clienți", highlight: true },
        { text: "∞ Notificări PUSH", highlight: true },
        { text: "∞ Promoții speciale", highlight: true },
        { text: "Design personalizat" },
        { text: "Formular personalizat" },
        { text: "", spacer: true },
        { text: "Vezi cine revine și cât cheltuie" },
        { text: "Află profilul de client" },
        { text: "Vezi media comenzilor" },
        { text: "Vezi orele de vârf" },
        { text: "", spacer: true },
        { text: "Recenzii Google" },
        { text: "Colectare feedback" },
        { text: "Reminder automat" },
        { text: "'La mulți ani' automat" },
        { text: "Program de recomandare" },
        { text: "Program de Happy-Hour" },
        { text: "", spacer: true },
        { text: "Manager de cont" },
        { text: "Modificări nelimitate" },
        { text: "Exclusivitate de ofertă" },
        { text: "", spacer: true },
        { text: "", spacer: true },
        { text: "Implementare gratuită" },
        { text: "", spacer: true },
        { text: "8 tipuri de carduri" },
        { text: "10 oferte simultane" },
        { text: "10 puncte de lucru (50 / extra)" },
        { text: "10 puncte de GEO-localizare" },
        { text: "", spacer: true },
        { text: "Campanii automate de notificări" },
        { text: "Automatizări personalizate" },
        { text: "Admini cu funcții multiple" },
        { text: "Integrare prin API" }
      ],
      disabledFeatures: []
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

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .purple-bg {
          background: linear-gradient(-45deg, #2a0040, #8733ff, #1a0028, #3d0066);
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
            
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-[#8733ff] shadow-lg scale-105'
                    : 'bg-[#3a0060] text-[#e3ccff] hover:bg-[#4a007a]'
                }`}
              >
                Plan lunar
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 relative ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-[#8733ff] shadow-lg scale-105'
                    : 'bg-[#3a0060] text-[#e3ccff] hover:bg-[#4a007a]'
                }`}
              >
                Plan anual
                <span className="absolute -top-2 -right-2 bg-green-400 text-gray-900 text-xs px-2 py-0.5 rounded-full font-bold">
                  -33%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isRecommended = !!plan.recommended;
              const buttonClasses = isRecommended
                ? 'bg-gradient-to-r from-[#8733ff] to-[#a566ff] hover:from-[#7c2ee6] hover:to-[#9f5cff] text-white'
                : 'bg-transparent border border-[#d6b5ff] text-[#d6b5ff] hover:bg-[#8733ff] hover:text-white';

              return (
                <div key={index} className="relative group/card transition-all duration-500">
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
                    className={`shadow-2xl border-0 rounded-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 ${
                      plan.recommended 
                        ? 'bg-gradient-to-br from-[#f8f3ff] via-[#faf7ff] to-[#fff] ring-2 ring-[#8733ff] mt-4 relative' 
                        : 'bg-white mt-4'
                    }`}
                  >
                    <CardHeader className="text-center pb-4 pt-6 px-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8733ff] to-[#a566ff] flex items-center justify-center shadow-lg">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-3xl font-black text-gray-900 mb-1">
                              {plan.name}
                            </CardTitle>
                            <Badge className="bg-gradient-to-r from-[#8733ff] to-[#a566ff] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                              {plan.clients}
                            </Badge>
                          </div>
                        </div>
                        <Badge className="bg-[#f3eaff] text-[#8733ff] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#e0c8ff]">
                          1 magazin
                        </Badge>
                      </div>

                      <div className="mb-6 min-h-[140px]">
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-6xl font-black bg-gradient-to-br from-[#8733ff] to-[#a566ff] bg-clip-text text-transparent">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                          </span>
                          <span className="text-lg text-gray-600 font-semibold">/ lună</span>
                        </div>
                        {billingPeriod === 'yearly' && (
                          <div className="text-sm text-[#8733ff] font-medium mt-2">
                            Facturat anual: <span className="font-bold">{plan.yearlyPrice} RON</span>
                            <div className="text-green-600 font-bold mt-1">{plan.yearlyBonus}</div>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 flex flex-col">
                      <div className="space-y-1 text-left mb-6 flex-grow">
                        {[...plan.features, ...plan.disabledFeatures].map((feature, idx) => {
                          if (feature.spacer) {
                            return <div key={idx} className="h-4"></div>;
                          }
                          
                          const isEnabled = idx < plan.features.length;
                          const isHighlight = feature.highlight;
                          
                          return (
                            <div 
                              key={idx} 
                              className={`flex items-center gap-2 text-sm py-1 ${
                                !isEnabled
                                  ? 'text-gray-300 opacity-50'
                                  : isHighlight
                                  ? 'text-[#8733ff] font-bold'
                                  : 'text-gray-700'
                              }`}
                            >
                              <span className="text-base">{isEnabled ? '✓' : '✗'}</span>
                              <span>{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <Button 
                        className={`w-full font-bold py-6 rounded-2xl text-base shadow-lg transform transition-all duration-500 hover:scale-105 ${buttonClasses}`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        Alege {plan.name}
                      </Button>

                      <div className="text-center mt-4 bg-[#f8f3ff] rounded-xl p-4 border border-[#e0c8ff]">
                        <div className="font-bold text-sm text-[#8733ff]">
                          {index === 0 && "Suport STANDARD"}
                          {index === 1 && "Suport PREMIUM"}
                        </div>
                        <div className="text-xs text-[#a566ff] mt-1">
                          {index === 0 && "asistență directă pe WhatsApp"}
                          {index === 1 && "prioritar, telefonic sau WhatsApp"}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

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
