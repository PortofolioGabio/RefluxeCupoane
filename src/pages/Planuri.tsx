import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Planuri = () => {
  const plans = [
    {
      name: "PRO",
      clients: "clienți nelimitați",
      monthlyPrice: "399",
      yearlyPrice: "3,990",
      features: [
        "Design personalizabil",
        "Notificări PUSH nelimitate",
        "Cine revine, cât cheltuie și când",
        "Linkuri social media",
        "Clienții ambasadori",
        "Recenzii Google",
        "Geo-localizare 100m",
        "Reminder automat",
        "'La mulți ani' automat",
        "Implementare gratuită (250)",
        "Modificări extra gratuite",
        "Suport PREMIUM"
      ]
    },
    {
      name: "PLUS",
      clients: "250 clienți",
      monthlyPrice: "249",
      yearlyPrice: "2,490",
      features: [
        "Design personalizabil",
        "Notificări PUSH nelimitate",
        "Cine revine, cât cheltuie și când",
        "Linkuri social media",
        "Clienții ambasadori",
        "Recenzii Google"
      ],
      disabledFeatures: [
        "Geo-localizare 100m",
        "Reminder automat",
        "'La mulți ani' automat",
        "Implementare gratuită (250)",
        "Modificări extra gratuite",
        "Suport PREMIUM"
      ]
    },
    {
      name: "START",
      clients: "100 clienți",
      monthlyPrice: "149",
      yearlyPrice: "1,490",
      features: [
        "Design personalizabil",
        "Notificări PUSH nelimitate",
        "Cine revine, cât cheltuie și când"
      ],
      disabledFeatures: [
        "Linkuri social media",
        "Clienții ambasadori",
        "Recenzii Google",
        "Geo-localizare 100m",
        "Reminder automat",
        "'La mulți ani' automat",
        "Implementare gratuită (250)",
        "Modificări extra gratuite",
        "Suport PREMIUM"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      name: "Promoții disponibile",
      description: "Poți folosi până la 4 tipuri de cupoane pentru promoții",
      start: "1",
      plus: "5", 
      pro: "10"
    },
    {
      name: "Acces pentru manageri/echipa",
      description: "Daca aveti mai multe puncte de vânzare si mai multi asistenti de vânzări sau casieri, această functie este pentru dvs.! Rapoarte separate pentru fiecare manager/echipă si punct de vânzare. Recompensati cei mai eficienti manageri/echipe din companie!",
      start: "1",
      plus: "3", 
      pro: "5"
    }
  ];

  const renderFeatureStatus = (status) => {
    if (typeof status === 'boolean') {
      return status ? (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="h-4 w-4 text-white" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <X className="h-4 w-4 text-white" />
          </div>
        </div>
      );
    }
    return <div className="text-center text-sm font-medium">{status}</div>;
  };

  return (
    <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            TRANSFORMĂ CLIENȚII ÎN FANI CHIAR ASTĂZI
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-white text-gray-900 shadow-xl border-0 rounded-3xl">
              <CardHeader className="text-center pb-6 pt-8">
                <div className="mb-4">
                  <div className="text-xs text-gray-600 mb-1">1 magazin</div>
                  <div className="text-sm font-semibold text-gray-900">{plan.clients}</div>
                </div>

                <CardTitle className="text-4xl font-black text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>

                <div className="mb-6">
                  <div className="text-6xl font-black text-gray-900 mb-2">
                    {plan.monthlyPrice}
                    <span className="text-xl font-normal">/ lună</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    sau {plan.yearlyPrice} / an + 2 luni cadou
                  </div>
                </div>

                <div className="space-y-2 text-left mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-900 font-medium">
                      {feature}
                    </div>
                  ))}
                  {plan.disabledFeatures && plan.disabledFeatures.map((feature, idx) => (
                    <div key={`disabled-${idx}`} className="text-sm text-gray-400 line-through">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planuri;
