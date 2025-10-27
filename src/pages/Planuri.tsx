import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Crown, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const plans = [
    {
      name: "PRO",
      clients: "clienți nelimitați",
      monthlyPrice: "399",
      yearlyPrice: "3,990",
      recommended: true,
      icon: Crown,
      features: [
        { text: "Design personalizat cu logo-ul tău", emoji: "🎨" },
        { text: "Notificări PUSH nelimitate", emoji: "🔔" },
        { text: "Vezi cine revine și cât cheltuie", emoji: "📊" },
        { text: "Toate paginile sociale într-un loc", emoji: "🔗" },
        { text: "Transformă clienții în ambasadori", emoji: "⭐" },
        { text: "Link direct pentru recenzii Google", emoji: "💬" },
        { text: "Primește vizite spontane, fără efort", emoji: "📍" },
        { text: "Mesaje automate trimise periodic", emoji: "⏰" },
        { text: "Mesaj automat de 'La mulți ani'", emoji: "🎂" },
        { text: "", emoji: "" },
        { text: "Implementare gratuită (150 LEI)", emoji: "🎁" },
        { text: "Modificări extra nelimitate", emoji: "✨" }
      ],
      disabledFeatures: []
    },
    {
      name: "PLUS",
      clients: "250 clienți",
      monthlyPrice: "249",
      yearlyPrice: "2,490",
      icon: Zap,
      features: [
        { text: "Design personalizat cu logo-ul tău", emoji: "🎨" },
        { text: "Notificări PUSH nelimitate", emoji: "🔔" },
        { text: "Vezi cine revine și cât cheltuie", emoji: "📊" },
        { text: "Toate paginile sociale într-un loc", emoji: "🔗" },
        { text: "Transformă clienții în ambasadori", emoji: "⭐" },
        { text: "Link direct pentru recenzii Google", emoji: "💬" },
        { text: "Primește vizite spontane, fără efort", emoji: "📍" }
      ],
      disabledFeatures: [
        { text: "Mesaje automate trimise periodic", emoji: "⏰" },
        { text: "Mesaj de 'La mulți ani' automat", emoji: "🎂" },
        { text: "", emoji: "" },
        { text: "Implementare gratuită (150 LEI)", emoji: "🎁" },
        { text: "Modificări extra nelimitate", emoji: "✨" }
      ]
    },
    {
      name: "START",
      clients: "100 clienți",
      monthlyPrice: "149",
      yearlyPrice: "1,490",
      icon: Rocket,
      features: [
        { text: "Design personalizat cu logo-ul tău", emoji: "🎨" },
        { text: "Notificări PUSH nelimitate", emoji: "🔔" },
        { text: "Vezi cine revine și cât cheltuie", emoji: "📊" },
        { text: "Toate paginile sociale într-un loc", emoji: "🔗" }
      ],
      disabledFeatures: [
        { text: "Transformă clienții în ambasadori", emoji: "⭐" },
        { text: "Link direct pentru recenzii Google", emoji: "💬" },
        { text: "Primește vizite spontane, fără efort", emoji: "📍" },
        { text: "Mesaje automate trimise periodic", emoji: "⏰" },
        { text: "Mesaj de 'La mulți ani' automat", emoji: "🎂" },
        { text: "", emoji: "" },
        { text: "Implementare gratuită (150 LEI)", emoji: "🎁" },
        { text: "Modificări extra nelimitate", emoji: "✨" }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 px-4">
            TRANSFORMĂ CLIENȚII ÎN FANI CHIAR ASTĂZI
          </h1>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Alege planul perfect pentru afacerea ta și începe să construiești relații de durată cu clienții tăi
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            // Toate planurile au aceeași înălțime totală pentru features (12 itemi)
            const totalFeatures = 12;
            const allFeatures = [...plan.features, ...plan.disabledFeatures];
            
            return (
              <div key={index} className="relative group">
                {plan.recommended && (
                  <div className="absolute -top-3 sm:-top-4 left-0 right-0 z-10 flex justify-center transition-all duration-300 group-hover:-top-5 sm:group-hover:-top-6">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg">
                      <Star className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden xs:inline">CEL MAI POPULAR</span>
                      <span className="xs:hidden">CEL MAI POPULAR</span>
                      <Star className="inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Badge>
                  </div>
                )}
                
                <Card 
                  className={`shadow-2xl border-0 rounded-2xl sm:rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                    plan.recommended 
                      ? 'bg-gradient-to-br from-amber-50 via-purple-50 to-pink-50 ring-2 sm:ring-4 ring-amber-400 mt-3 sm:mt-4 relative' 
                      : 'bg-white mt-3 sm:mt-4'
                  }`}
                  style={plan.recommended ? {
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
                    `
                  } : {}}
                >
                  <CardHeader className="text-center pb-3 sm:pb-4 pt-4 sm:pt-6 px-4 sm:px-6">
                  {/* Header with badges */}
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                        {plan.name}
                      </CardTitle>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 mb-1 rounded-full border border-purple-200">
                        🏪 1 magazin
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 block rounded-full shadow-md whitespace-nowrap">
                        👥 {plan.clients}
                      </Badge>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed font-medium h-auto sm:h-10 flex items-center justify-center px-2">
                    {index === 0 && (
                      <>
                        🚀 Dacă vrei control total și<br />
                        șanse reale de reușită
                      </>
                    )}
                    {index === 1 && "📈 Dacă vrei mai mult control și creștere constantă"}
                    {index === 2 && "🌱 Dacă vrei minimul necesar ca să pornești"}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-end justify-center gap-1 sm:gap-2">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-base sm:text-lg md:text-xl text-gray-600 mb-1 sm:mb-2 font-semibold">RON / lună</span>
                    </div>
                    <div className="text-xs sm:text-sm text-purple-600 font-medium mt-2 px-2">
                      Anual = <span className="font-bold">{plan.yearlyPrice} RON</span> + 2 luni CADOU
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col">
                  {/* Features List - Fixed height pentru simetrie */}
                  <div className="space-y-1.5 sm:space-y-2 text-left mb-4 sm:mb-6 flex-grow">
                    {allFeatures.map((feature, idx) => (
                      feature.text ? (
                        <div 
                          key={idx} 
                          className={`flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm ${
                            idx < plan.features.length 
                              ? 'text-gray-800' 
                              : 'text-gray-400 line-through opacity-70'
                          }`}
                        >
                          <span className={`text-sm sm:text-base flex-shrink-0 ${idx >= plan.features.length ? 'grayscale opacity-60' : ''}`}>
                            {feature.emoji}
                          </span>
                          <span className="leading-relaxed">{feature.text}</span>
                        </div>
                      ) : (
                        <div key={idx} className="h-1 sm:h-2"></div>
                      )
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base shadow-lg transform transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                  >
                    Alege {plan.name}
                  </Button>

                  {/* Support Info */}
                  <div className="text-center mt-3 sm:mt-4 bg-purple-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-purple-100">
                    <div className="font-bold text-xs sm:text-sm text-purple-700">
                      {index === 0 && "💎 Suport PREMIUM"}
                      {index === 1 && "⚡ Suport RAPID"}
                      {index === 2 && "📧 Suport STANDARD"}
                    </div>
                    <div className="text-xs text-purple-600 mt-1">
                      {index === 0 && "prioritar, telefonic sau WhatsApp"}
                      {index === 1 && "asistență directă pe WhatsApp"}
                      {index === 2 && "max. 48h prin mail"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex justify-center gap-4 sm:gap-8 flex-wrap px-4">
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Fără obligații contractuale</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Anulare oricând</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planuri;
