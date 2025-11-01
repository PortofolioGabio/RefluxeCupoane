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
    },
    {
      name: "PRO",
      clients: "clienți nelimitați",
      monthlyPrice: "399",
      yearlyPrice: "3,200",
      yearlyMonthly: "266",
      yearlyBonus: "4 luni cadou",
      icon: Crown,
    },
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

      <section className="bg-black text-white py-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              TRANSFORMĂ CLIENȚII OCAZIONALI<br />ÎN CLIENȚI FIDELI
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Construiește o comunitate în jurul brandului tău
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-blue-700 shadow-md scale-105'
                    : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#2b2b2b]'
                }`}
              >
                Plată lunară
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-5 py-2 rounded-lg font-bold transition-all duration-300 relative text-sm sm:text-base ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-blue-700 shadow-md scale-105'
                    : 'bg-[#1e1e1e] text-gray-300 hover:bg-[#2b2b2b]'
                }`}
              >
                Plată anuală
                <span className="absolute -top-2 -right-2 bg-green-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  -33%
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isRecommended = plan.recommended;

              return (
                <Card
                  key={index}
                  className={`bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 hover:scale-105 ${
                    isRecommended ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  {/* Badge */}
                  {isRecommended && (
                    <div className="absolute top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-blue-600 text-white font-bold text-xs sm:text-sm px-5 py-1.5 rounded-full shadow-md">
                        <Star className="inline-block w-3 h-3 mr-1" />
                        CEL MAI POPULAR
                        <Star className="inline-block w-3 h-3 ml-1" />
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pt-10 pb-5 px-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-extrabold mb-1">{plan.name}</CardTitle>
                      <p className="text-gray-400 text-xs sm:text-sm">{plan.clients}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 text-center">
                    <div className="mb-4">
                      <div className="flex items-end justify-center gap-2">
                        {/* Mărit fontul prețurilor */}
                        <span className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-br from-blue-500 to-blue-800 bg-clip-text text-transparent">
                          {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyMonthly}
                        </span>
                        <span className="text-sm sm:text-base text-gray-400 mb-2 font-semibold">RON/lună</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-xs sm:text-sm text-blue-400 font-medium mt-2">
                          Facturat anual: <span className="font-bold">{plan.yearlyPrice} RON</span>
                          <div className="text-green-500 font-bold mt-1">{plan.yearlyBonus}</div>
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <Button
                      className={`w-3/4 mx-auto py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                        isRecommended
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:scale-105'
                          : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }`}
                      onClick={() => window.open('https://app.refluxe.io/registration', '_blank')}
                    >
                      Alege {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Planuri;
