import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Crown, Zap, Rocket } from 'lucide-react';

const Planuri = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'START',
      clients: '100 clienți',
      monthlyPrice: '149',
      yearlyPrice: '1,650',
      yearlyMonthly: '138',
      yearlyBonus: '1 lună cadou',
      icon: Rocket,
      color: 'left',
    },
    {
      name: 'PLUS',
      clients: '250 clienți',
      monthlyPrice: '249',
      yearlyPrice: '2,500',
      yearlyMonthly: '208',
      yearlyBonus: '2 luni cadou',
      icon: Zap,
      recommended: true,
      color: 'right',
    },
    {
      name: 'PRO',
      clients: 'clienți nelimitați',
      monthlyPrice: '399',
      yearlyPrice: '3,200',
      yearlyMonthly: '266',
      yearlyBonus: '4 luni cadou',
      icon: Crown,
      color: 'left',
    },
  ];

  return (
    <section className="bg-[#0f1119] text-white py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            TRANSFORMĂ CLIENȚII OCAZIONALI<br />ÎN CLIENȚI FIDELI
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Construiește o comunitate în jurul brandului tău
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-lg scale-105'
                  : 'bg-[#1c1f2b] text-gray-300 hover:bg-[#252836]'
              }`}
            >
              Plată lunară
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 relative ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-lg scale-105'
                  : 'bg-[#1c1f2b] text-gray-300 hover:bg-[#252836]'
              }`}
            >
              Plată anuală
              <span className="absolute -top-2 -right-2 bg-emerald-400 text-gray-900 text-xs px-2 py-0.5 rounded-full font-bold">
                -33%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isRecommended = plan.recommended;
            const buttonColor = isRecommended
              ? 'bg-[#1ee0ff] text-black hover:bg-[#5de8ff]'
              : 'bg-transparent border border-[#1ee0ff] text-[#1ee0ff] hover:bg-[#1ee0ff] hover:text-black';
            const badgeColor = isRecommended
              ? 'bg-[#1ee0ff] text-black'
              : 'bg-[#1c1f2b] text-gray-200';

            return (
              <Card
                key={index}
                className={`bg-[#1a1c25] border border-[#2a2d3a] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  isRecommended ? 'relative ring-2 ring-[#1ee0ff]/60' : ''
                }`}
              >
                {isRecommended && (
                  <div className="absolute top-4 right-4 bg-[#1ee0ff] text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                    BEST CHOICE
                  </div>
                )}

                <CardHeader className="text-center pt-8 pb-4">
                  <div className="flex flex-col items-center">
                    <Icon className="w-10 h-10 mb-3 text-[#1ee0ff]" />
                    <CardTitle className="text-3xl font-extrabold tracking-wide">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-400 text-sm mt-2">{plan.clients}</p>
                  </div>
                </CardHeader>

                <CardContent className="text-center pb-8">
                  <div className="text-6xl font-black mb-2">${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}</div>
                  <p className="text-gray-400 mb-6">per month</p>
                  <Button
                    onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                    className={`w-3/4 mx-auto py-3 rounded-full font-bold transition-all duration-300 ${buttonColor}`}
                  >
                    SELECT
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Planuri;



