import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Crown, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
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
          font-weight: 400 900;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Milker';
          src: url('/fonts/Milker.ttf') format('truetype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }

        * { font-family: 'Helvetica Now', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        
        .price-text { font-family: 'Milker', sans-serif; letter-spacing: -0.02em; }
        .gold-gradient { background-image: linear-gradient(135deg, #FACC15 0%, #FBBF24 35%, #F59E0B 65%, #D97706 100%); }
        .silver-gradient { background-image: linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 40%, #9CA3AF 100%); }
        
        /* Subtle noise overlay */
        .noise:before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: url('/textures/noise.png');
          opacity: .04; mix-blend-mode: overlay;
        }
      `}</style>
      
      {/* Premium background with radial accents */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B0C10] text-white py-20 pb-32">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
             style={{background: 'radial-gradient(closest-side, #1E3A8A 0%, rgba(30,58,138,0) 70%)'}} />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
             style={{background: 'radial-gradient(closest-side, #F59E0B 0%, rgba(245,158,11,0) 70%)'}} />
        <div className="noise absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              TRANSFORMĂ CLIENȚII OCAZIONALI<br/>ÎN CLIENȚI FIDELI
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Construiește o comunitate în jurul brandului tău
            </p>

            {/* Billing Toggle – glass / premium pill */}
            <div className="mx-auto w-fit rounded-2xl p-1.5 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap border border-transparent ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-slate-200 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  Plată lunară
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 relative whitespace-nowrap border border-transparent ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-slate-200 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  Plată anuală
                  <span className="absolute -top-2 -right-2 bg-emerald-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold border border-emerald-600/20">
                    -33%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const allFeatures = [...plan.features, ...plan.disabledFeatures];
              const isRecommended = !!plan.recommended;
              
              return (
                <div key={index} className="relative group/card transition-all duration-500">
                  {/* Top badge */}
                  {isRecommended && (
                    <div className="absolute -top-3 left-0 right-0 z-10 flex justify-center">
                      <Badge className="gold-gradient text-gray-900 font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full shadow-[0_10px_40px_rgba(245,158,11,0.35)] border border-amber-200/60">
                        <Star className="inline-block w-4 h-4 mr-1" />
                        CEL MAI POPULAR
                        <Star className="inline-block w-4 h-4 ml-1" />
                      </Badge>
                    </div>
                  )}

                  {/* Card */}
                  <Card
                    className={`relative shadow-2xl border-0 rounded-3xl overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] ${
                      isRecommended
                        ? 'bg-gradient-to-br from-[#0B0C10] via-[#111827] to-[#0F172A] ring-1 ring-amber-400/40'
                        : 'bg-gradient-to-br from-[#0B0C10] via-[#0F172A] to-[#111827] ring-1 ring-white/10'
                    }`}
                  >
                    {/* Gradient border glow */}
                    {isRecommended && (
                      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-transparent" style={{
                        background: 'linear-gradient(120deg, rgba(250,204,21,0.6), rgba(245,158,11,0.35), rgba(30,58,138,0.35))',
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }} />
                    )}

                    <CardHeader className="text-center pb-5 pt-7 px-6">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-lg shadow-blue-900/40 ring-1 ring-white/10">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-4xl font-extrabold text-white tracking-tight">
                            {plan.name}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-white/10 text-slate-100 text-xs font-semibold px-3 py-1 mb-1 rounded-full border border-white/20">
                            1 magazin
                          </Badge>
                          <Badge className="silver-gradient text-gray-900 text-xs font-semibold px-3 py-1 block rounded-full shadow-md border border-white/40">
                            {plan.clients}
                          </Badge>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-sm text-slate-300/90 mb-6 font-medium">
                        {index === 0 && "Minimul necesar ca să pornești"}
                        {index === 1 && "Stabilitate și evoluție constantă"}
                        {index === 2 && "Control total și succes real"}
                      </p>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-end justify-center gap-3">
                          <span className="price-text text-7xl sm:text-8xl md:text-9xl font-black bg-clip-text text-transparent gold-gradient drop-shadow-[0_10px_30px_rgba(245,158,11,0.35)]">
                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                          </span>
                          <span className="text-lg text-slate-300 mb-3 font-semibold">RON / lună</span>
                        </div>
                        {billingPeriod === 'yearly' && (
                          <div className="text-sm text-amber-300 font-medium mt-2">
                            Facturat anual: <span className="font-bold text-amber-200">{plan.yearlyPrice} RON</span>
                            <div className="text-emerald-300 font-bold mt-1">{plan.yearlyBonus}</div>
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
                                ? 'text-slate-100'
                                : 'text-slate-400 line-through opacity-70'
                            }`}
                          >
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button
                        className={`w-full text-white font-bold py-4 rounded-2xl text-base shadow-lg transform transition-all duration-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] ${
                          isRecommended
                            ? 'bg-gradient-to-r from-[#F59E0B] to-[#B45309] hover:shadow-[0_0_35px_rgba(245,158,11,0.45)]'
                            : 'bg-gradient-to-r from-blue-700 to-blue-900 hover:shadow-[0_0_35px_rgba(30,64,175,0.45)]'
                        }`}
                        onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                      >
                        Alege {plan.name}
                      </Button>

                      {/* Support Info */}
                      <div className="text-center mt-4 bg-white/5 rounded-xl p-3 border border-white/10">
                        <div className="font-bold text-sm text-amber-300">
                          {index === 0 && "Suport STANDARD"}
                          {index === 1 && "Suport RAPID"}
                          {index === 2 && "Suport PREMIUM"}
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
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
            <div className="flex justify-center gap-10 sm:gap-16 flex-wrap items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-24 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <img src="/gabio-uploads/1.png" alt="GDPR Compliance" className="max-w-full max-h-full object-contain opacity-90" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200">Securitate<br/>GDPR</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-24 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <img src="/gabio-uploads/2.png" alt="Metode de plată" className="max-w-full max-h-full object-contain opacity-90" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200">Plăți sigure<br/>Banca Transilvania</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-24 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <img src="/gabio-uploads/3.png" alt="SSL Securizat" className="max-w-full max-h-full object-contain opacity-90" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-200">100% Sigur<br/>& Protejat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planuri;



