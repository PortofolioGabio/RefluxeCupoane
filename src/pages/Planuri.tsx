import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Crown, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'
  
  const plans = [
    {
      name: "START",
      clients: "100 clienți",
      monthlyPrice: "149",
      yearlyPrice: "1,650",
      yearlyMonthly: "138",
      yearlyBonus: "1 lună cadou",
      icon: Rocket,
      features: [
        { text: "Design personalizat cu logo-ul tău" },
        { text: "Notificări PUSH nelimitate" },
        { text: "Vezi cine revine și cât cheltuie" },
        { text: "Toate paginile sociale într-un loc" }
      ],
      disabledFeatures: [
        { text: "Transformă clienții în ambasadori" },
        { text: "Link direct pentru recenzii Google" },
        { text: "Primește vizite spontane, fără efort" },
        { text: "Remindere automate trimise periodic" },
        { text: "Mesaj automat de 'La mulți ani'" },
        { text: "Umple mesele cu happy hour" },
        { text: "Mesaje automate și personalizate" },
        { text: "Implementare gratuită (150 LEI)" },
        { text: "Modificări extra nelimitate" }
      ]
    },
    {
      name: "PLUS",
      clients: "250 clienți",
      monthlyPrice: "249",
      yearlyPrice: "2,500",
      yearlyMonthly: "208",
      yearlyBonus: "2 luni cadou",
      recommended: true,
      icon: Zap,
      features: [
        { text: "Design personalizat cu logo-ul tău" },
        { text: "Notificări PUSH nelimitate" },
        { text: "Vezi cine revine și cât cheltuie" },
        { text: "Toate paginile sociale într-un loc" },
        { text: "Transformă clienții în ambasadori" },
        { text: "Link direct pentru recenzii Google" },
        { text: "Primește vizite spontane, fără efort" },
        { text: "Remindere automate trimise periodic" },
        { text: "Mesaj automat de 'La mulți ani'" }
      ],
      disabledFeatures: [
        { text: "Umple mesele cu happy hour" },
        { text: "Mesaje automate și personalizate" },
        { text: "Implementare gratuită (150 LEI)" },
        { text: "Modificări extra nelimitate" }
      ]
    },
    {
      name: "PRO",
      clients: "clienți nelimitați",
      monthlyPrice: "399",
      yearlyPrice: "3,200",
      yearlyMonthly: "266",
      yearlyBonus: "4 luni cadou",
      icon: Crown,
      features: [
        { text: "Design personalizat cu logo-ul tău" },
        { text: "Notificări PUSH nelimitate" },
        { text: "Vezi cine revine și cât cheltuie" },
        { text: "Toate paginile sociale într-un loc" },
        { text: "Transformă clienții în ambasadori" },
        { text: "Link direct pentru recenzii Google" },
        { text: "Primește vizite spontane, fără efort" },
        { text: "Remindere automate trimise periodic" },
        { text: "Mesaj automat de 'La mulți ani'" },
        { text: "Umple mesele cu happy hour" },
        { text: "Mesaje automate și personalizate" },
        { text: "Implementare gratuită (150 LEI)" },
        { text: "Modificări extra nelimitate" }
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

        /* Efect subtil mov animat */
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
            
            {/* TOGGLE */}
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

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const allFeatures = [...plan.features, ...plan.disabledFeatures];
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
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8733ff] to-[#a566ff] flex items-center justify-center shadow-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-4xl font-black text-gray-900">
                            {plan.name}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-[#f3eaff] text-[#8733ff] text-xs font-semibold px-3 py-1 mb-1 rounded-full border border-[#e0c8ff]">
                            1 magazin
                          </Badge>
                          <Badge className="bg-gradient-to-r from-[#8733ff] to-[#a566ff] text-white text-xs font-semibold px-3 py-1 block rounded-full shadow-md">
                            {plan.clients}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-6 font-medium">
                        {index === 0 && "Minimul necesar ca să pornești"}
                        {index === 1 && "Stabilitate și evoluție constantă"}
                        {index === 2 && "Control total și succes real"}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-end justify-center gap-2">
                          <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br from-[#8733ff] to-[#a566ff] bg-clip-text text-transparent">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                          </span>
                          <span className="text-lg text-gray-600 mb-2 font-semibold">RON / lună</span>
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
                      <div className="space-y-2 text-left mb-6 flex-grow">
                        {allFeatures.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-start gap-2 text-sm ${
                              idx < plan.features.length 
                                ? 'text-gray-800' 
                                : 'text-gray-400 line-through opacity-70'
                            }`}
                          >
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full font-bold py-4 rounded-2xl text-base shadow-lg transform transition-all duration-500 hover:scale-105 ${buttonClasses}`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        Alege {plan.name}
                      </Button>

                      <div className="text-center mt-4 bg-[#f8f3ff] rounded-xl p-3 border border-[#e0c8ff]">
                        <div className="font-bold text-sm text-[#8733ff]">
                          {index === 0 && "Suport STANDARD"}
                          {index === 1 && "Suport RAPID"}
                          {index === 2 && "Suport PREMIUM"}
                        </div>
                        <div className="text-xs text-[#a566ff] mt-1">
                          {index === 0 && "max. 24h prin mail"}
                          {index === 1 && "asistență directă pe WhatsApp"}
                          {index === 2 && "prioritar, telefonic sau WhatsApp"}
                        </div>
                      </div>
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
