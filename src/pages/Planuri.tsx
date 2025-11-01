import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Crown, Zap, Rocket } from 'lucide-react';

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
      `}</style>
      
      {/* FUNDAL NEGRU */}
      <section className="bg-black text-white py-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 px-4">
              TRANSFORMĂ CLIENȚII OCAZIONALI<br/>ÎN CLIENȚI FIDELI
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto px-4 mb-8">
              Construiește o comunitate în jurul brandului tău
            </p>
            
            {/* toggle */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-blue-700 shadow-lg scale-105'
                    : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                }`}
              >
                Plată lunară
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 relative ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-blue-700 shadow-lg scale-105'
                    : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                }`}
              >
                Plată anuală
                <span className="absolute -top-2 -right-2 bg-green-400 text-gray-900 text-xs px-2 py-0.5 rounded-full font-bold">
                  -33%
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const totalFeatures = 12;
              const allFeatures = [...plan.features, ...plan.disabledFeatures];

              // stil BUTON: outline pt START+PRO, plin pt PLUS
              const isRecommended = !!plan.recommended;
              const buttonClasses = isRecommended
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';

              return (
                <div key={index} className="relative group/card transition-all duration-500">
                  {plan.recommended && (
                    <div className="absolute -top-3 sm:-top-4 left-0 right-0 z-10 flex justify-center">
                      <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg">
                        <Star className="inline-block w-4 h-4 mr-1" />
                        CEL MAI POPULAR
                        <Star className="inline-block w-4 h-4 ml-1" />
                      </Badge>
                    </div>
                  )}
                  
                  <Card 
                    className={`shadow-2xl border-0 rounded-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 ${
                      plan.recommended 
                        ? 'bg-gradient-to-br from-amber-50 via-blue-50 to-pink-50 ring-2 ring-amber-400 mt-4 relative' 
                        : 'bg-white mt-4'
                    }`}
                    style={plan.recommended ? {
                      backgroundImage: `
                        radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
                      `
                    } : {}}
                  >
                    <CardHeader className="text-center pb-4 pt-6 px-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-4xl font-black text-gray-900">
                            {plan.name}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 mb-1 rounded-full border border-blue-200">
                            1 magazin
                          </Badge>
                          <Badge className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold px-3 py-1 block rounded-full shadow-md">
                            {plan.clients}
                          </Badge>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-sm text-gray-600 mb-6 font-medium">
                        {index === 0 && "Minimul necesar ca să pornești"}
                        {index === 1 && "Stabilitate și evoluție constantă"}
                        {index === 2 && "Control total și succes real"}
                      </p>

                      {/* Pricing (mare pentru impact) */}
                      <div className="mb-6">
                        <div className="flex items-end justify-center gap-2">
                          <span className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                          </span>
                          <span className="text-lg text-gray-600 mb-2 font-semibold">RON / lună</span>
                        </div>
                        {billingPeriod === 'yearly' && (
                          <div className="text-sm text-blue-600 font-medium mt-2">
                            Facturat anual: <span className="font-bold">{plan.yearlyPrice} RON</span>
                            <div className="text-green-600 font-bold mt-1">{plan.yearlyBonus}</div>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 flex flex-col">
                      {/* Features */}
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

                      {/* CTA – outline pentru START/PRO, plin pentru PLUS */}
                      <Button 
                        className={`w-full font-bold py-4 rounded-2xl text-base shadow-lg transform transition-all duration-500 hover:scale-105 ${buttonClasses}`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        Alege {plan.name}
                      </Button>

                      {/* Support Info */}
                      <div className="text-center mt-4 bg-blue-50 rounded-xl p-3 border border-blue-100">
                        <div className="font-bold text-sm text-blue-700">
                          {index === 0 && "Suport STANDARD"}
                          {index === 1 && "Suport RAPID"}
                          {index === 2 && "Suport PREMIUM"}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
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

          {/* Trust badges */}
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
