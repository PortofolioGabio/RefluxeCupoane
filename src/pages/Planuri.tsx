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
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            TRANSFORMĂ CLIENȚII ÎN FANI CHIAR ASTĂZI
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
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
                  <div className="absolute -top-4 left-0 right-0 z-10 flex justify-center transition-all duration-300 group-hover:-top-6">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 font-bold text-sm px-6 py-2 rounded-full shadow-lg">
                      <Star className="inline-block w-4 h-4 mr-1" />
                      CEL MAI POPULAR
                      <Star className="inline-block w-4 h-4 ml-1" />
                    </Badge>
                  </div>
                )}
                
                <Card 
                  className={`shadow-2xl border-0 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                    plan.recommended 
                      ? 'bg-gradient-to-br from-amber-50 via-purple-50 to-pink-50 ring-4 ring-amber-400 mt-4 relative' 
                      : 'bg-white mt-4'
                  }`}
                  style={plan.recommended ? {
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
                    `
                  } : {}}
                >
                  <CardHeader className="text-center pb-4 pt-6 px-6">
                  {/* Header with badges */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-5xl font-black text-gray-900">
                        {plan.name}
                      </CardTitle>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 mb-1 rounded-full border border-purple-200">
                        🏪 1 magazin
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-semibold px-3 py-1 block rounded-full shadow-md">
                        👥 {plan.clients}
                      </Badge>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed font-medium h-10 flex items-center justify-center">
                    {index === 0 && "🚀 Dacă vrei control total și șanse reale de reușită"}
                    {index === 1 && "📈 Dacă vrei mai mult control și creștere constantă"}
                    {index === 2 && "🌱 Dacă vrei minimul necesar ca să pornești"}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-7xl font-black bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-xl text-gray-600 mb-2 font-semibold">RON / lună</span>
                    </div>
                    <div className="text-sm text-purple-600 font-medium mt-2">
                      💰 Anual = <span className="font-bold">{plan.yearlyPrice} RON</span> + 2 luni CADOU 🎁
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 flex flex-col">
                  {/* Features List - Fixed height pentru simetrie */}
                  <div className="space-y-2 text-left mb-6 flex-grow">
                    {allFeatures.map((feature, idx) => (
                      feature.text ? (
                        <div 
                          key={idx} 
                          className={`flex items-start gap-2 text-sm ${
                            idx < plan.features.length 
                              ? 'text-gray-800' 
                              : 'text-gray-300 line-through opacity-50'
                          }`}
                        >
                          <span className={`text-base flex-shrink-0 ${idx >= plan.features.length ? 'grayscale' : ''}`}>
                            {feature.emoji}
                          </span>
                          <span className="leading-relaxed">{feature.text}</span>
                        </div>
                      ) : (
                        <div key={idx} className="h-2"></div>
                      )
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-2xl text-base shadow-lg transform transition-all duration-200 hover:scale-105">
                    Alege {plan.name}
                  </Button>

                  {/* Support Info */}
                  <div className="text-center mt-4 bg-purple-50 rounded-xl p-3 border border-purple-100">
                    <div className="font-bold text-sm text-purple-700">
                      {index === 0 && "💎 Suport PREMIUM"}
                      {index === 1 && "⚡ Suport RAPID"}
                      {index === 2 && "📧 Suport STANDARD"}
                    </div>
                    <div className="text-xs text-purple-600 mt-1">
                      {index === 0 && "personal, telefonic sau WhatsApp"}
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
        <div className="text-center mt-16">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">Fără obligații contractuale</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">Anulare oricând</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">Migrare gratuită</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planuri;
