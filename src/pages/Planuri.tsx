import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Rocket, Check, X } from 'lucide-react';

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
          background: linear-gradient(-45deg, #1a0028, #8733ff, #0f001a, #3d0066);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
      
      <section className="purple-bg text-white py-24 pb-36 min-h-screen transition-all duration-1000 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 px-4 tracking-tight leading-tight">
              TRANSFORMĂ CLIENȚII OCAZIONALI<br/>
              <span className="bg-gradient-to-r from-purple-200 via-purple-100 to-white bg-clip-text text-transparent">
                ÎN CLIENȚI FIDELI
              </span>
            </h1>
            <p className="text-purple-200 text-lg sm:text-xl max-w-3xl mx-auto px-4 mb-12 font-light">
              Construiește o comunitate puternică în jurul brandului tău
            </p>
            
            <div className="flex justify-center items-center gap-3 mb-12">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 text-base ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-purple-600 shadow-2xl scale-105 shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                Plată lunară
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 relative text-base ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-purple-600 shadow-2xl scale-105 shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                Plată anuală
                <span className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-400 to-green-400 text-gray-900 text-xs px-3 py-1 rounded-full font-black shadow-lg">
                  ECONOMISEȘTI 33%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isRecommended = !!plan.recommended;

              return (
                <div key={index} className="relative group transition-all duration-500 float-animation" style={{animationDelay: `${index * 0.2}s`}}>
                  {plan.recommended && (
                    <div className="absolute -top-5 left-0 right-0 z-20 flex justify-center">
                      <Badge className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-gray-900 font-black text-sm px-6 py-2.5 rounded-full shadow-2xl shadow-amber-500/50 border-2 border-yellow-200">
                        <Star className="inline-block w-4 h-4 mr-2 fill-current" />
                        CEL MAI POPULAR
                        <Star className="inline-block w-4 h-4 ml-2 fill-current" />
                      </Badge>
                    </div>
                  )}
                  
                  <Card 
                    className={`shadow-2xl border-0 rounded-3xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-purple-500/30 h-full flex flex-col ${
                      plan.recommended 
                        ? 'bg-gradient-to-br from-white via-purple-50 to-purple-100/50 ring-4 ring-purple-400 shadow-purple-500/40 mt-6' 
                        : 'bg-white mt-6'
                    }`}
                  >
                    <CardHeader className="text-center pb-6 pt-10 px-8 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white relative overflow-hidden">
                      <div className="absolute inset-0 shimmer"></div>
                      
                      <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl border-2 border-white/30">
                            <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-4xl font-black text-white mb-2 tracking-tight drop-shadow-lg">
                              {plan.name}
                            </CardTitle>
                            <Badge className="bg-white/30 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/40">
                              {plan.clients}
                            </Badge>
                          </div>
                        </div>
                        <Badge className="bg-white text-purple-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-purple-200 shadow-xl">
                          1 magazin
                        </Badge>
                      </div>

                      <div className="mb-8 relative z-10">
                        <div className="flex items-baseline justify-center gap-3 mb-3">
                          <span className="text-7xl font-black text-white drop-shadow-2xl">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                          </span>
                          <div className="text-left">
                            <span className="text-xl text-white/90 font-bold block">RON</span>
                            <span className="text-sm text-white/80 font-medium">pe lună</span>
                          </div>
                        </div>
                        {billingPeriod === 'yearly' && (
                          <div className="text-sm text-white/95 font-semibold mt-3 bg-white/20 backdrop-blur-sm rounded-2xl py-3 px-4 inline-block">
                            Facturat anual: <span className="font-black text-lg">{plan.yearlyPrice} RON</span>
                            <div className="text-emerald-300 font-black mt-1.5 text-base">🎁 {plan.yearlyBonus}</div>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="px-8 py-8 flex flex-col flex-grow bg-white">
                      <div className="space-y-0 text-left mb-8 flex-grow">
                        {[...plan.features, ...plan.disabledFeatures].map((feature, idx) => {
                          if (feature.spacer) {
                            return <div key={idx} className="h-5 border-b border-gray-100"></div>;
                          }
                          
                          const isEnabled = idx < plan.features.length;
                          const isHighlight = feature.highlight;
                          
                          return (
                            <div 
                              key={idx} 
                              className={`flex items-start gap-3 text-[15px] py-3 transition-all duration-200 hover:bg-purple-50/50 px-3 rounded-lg -mx-3 ${
                                !isEnabled
                                  ? 'text-gray-300'
                                  : isHighlight
                                  ? 'text-purple-600 font-bold'
                                  : 'text-gray-700 font-medium'
                              }`}
                            >
                              <span className={`text-lg mt-0.5 flex-shrink-0 ${
                                isEnabled 
                                  ? 'text-emerald-500' 
                                  : 'text-gray-300'
                              }`}>
                                {isEnabled ? (
                                  <Check className="w-5 h-5" strokeWidth={3} />
                                ) : (
                                  <X className="w-5 h-5" strokeWidth={2} />
                                )}
                              </span>
                              <span className="leading-relaxed">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <Button 
                        className={`w-full font-black py-7 rounded-2xl text-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 ${
                          isRecommended
                            ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-700 hover:via-purple-600 hover:to-purple-700 text-white shadow-purple-500/50'
                            : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-600 hover:to-purple-700 text-white'
                        }`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Alege {plan.name}
                          <Zap className="w-5 h-5" />
                        </span>
                      </Button>

                      <div className="text-center mt-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-5 border-2 border-purple-200 shadow-lg">
                        <div className="font-black text-base text-purple-700 mb-1">
                          {index === 0 && "✨ Suport STANDARD"}
                          {index === 1 && "⚡ Suport PREMIUM"}
                        </div>
                        <div className="text-sm text-purple-600 font-semibold">
                          {index === 0 && "Asistență directă pe WhatsApp"}
                          {index === 1 && "Răspuns prioritar, telefonic sau WhatsApp"}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-24">
            <div className="flex justify-center gap-20 flex-wrap items-center">
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
                  <img src="/gabio-uploads/1.png" alt="GDPR Compliance" className="w-56 h-28 object-contain" />
                </div>
                <span className="text-base font-bold text-white drop-shadow-lg">Securitate<br/>GDPR</span>
              </div>
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
                  <img src="/gabio-uploads/2.png" alt="Metode de plată" className="w-56 h-28 object-contain" />
                </div>
                <span className="text-base font-bold text-white drop-shadow-lg">Plăți sigure<br/>Banca Transilvania</span>
              </div>
              <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
                  <img src="/gabio-uploads/3.png" alt="SSL Securizat" className="w-56 h-28 object-contain" />
                </div>
                <span className="text-base font-bold text-white drop-shadow-lg">100% Sigur<br/>& Protejat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planuri;
