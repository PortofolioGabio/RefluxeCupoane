import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Rocket, Zap, Star } from "lucide-react";

const Planuri = () => {
  // ⭐ Lista completă Premium (fără locație și oferte simultane)
  const premiumFeatures = [
    "50 conturi manager",
    "∞ Bază de clienți",
    "∞ Notificări PUSH",
    "∞ Promoții speciale",
    "Vezi cine cumpără și când. Media bonului și orele de activitate",
    "Colectez Recenzii",
    "Happy-Hour",
    "Formular personal",
    "Program Recom.",
    "4 Mesaje Autom.",
    "Manager de cont",
    "Mesaje custom",
    "Integrare API",
    "Cont manager personal",
    "Implementare cadou",
  ];

  // ⭐ Structură completă cu location + offers distincte
  const plans = [
    {
      name: "Basic",
      price: "149",
      icon: Rocket,
      recommended: false,
      location: "1 locație",
      offers: "1 ofertă simultană",
      features: [
        "∞ Bază de clienți",
        "∞ Notificări PUSH",
        "∞ Promoții speciale",
        "Vezi cine cumpără și când. Media bonului și orele de activitate",
        "Colectez Recenzii",
        "Happy-Hour",
        "Formular personal",
        "Program Recom.",
      ],
    },
    {
      name: "Standard",
      price: "249",
      icon: Zap,
      recommended: true,
      location: "1 locație",
      offers: "3 oferte simultane",
      features: [
        "∞ Bază de clienți",
        "∞ Notificări PUSH",
        "∞ Promoții speciale",
        "Vezi cine cumpără și când. Media bonului și orele de activitate",
        "Colectez Recenzii",
        "Happy-Hour",
        "Formular personal",
        "Program Recom.",
        "4 Mesaje Autom.",
        "Manager de cont",
      ],
    },
    {
      name: "Premium",
      price: "399",
      icon: Star,
      recommended: false,
      location: "1 locație",
      offers: "10 oferte simultane",
      features: premiumFeatures,
    },
  ];

  return (
    <section className="purple-bg text-white py-24 pb-36 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <h1 className="text-center text-5xl font-black mb-16 leading-tight">
          Alege planul potrivit afacerii tale
        </h1>

        {/* Grid planuri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Card
                key={index}
                className={`flex flex-col rounded-3xl overflow-hidden shadow-2xl ${
                  plan.recommended ? "ring-4 ring-purple-400 bg-white" : "bg-white"
                }`}
              >
                {/* Badge recomandat */}
                {plan.recommended && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center z-20">
                    <Badge className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-gray-900 font-black text-sm px-6 py-2.5 rounded-full shadow-xl border-2 border-yellow-200">
                      🔥 Cel mai popular
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <CardHeader className="text-center pt-10 pb-6 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <CardTitle className="text-4xl font-black tracking-tight">
                    {plan.name}
                  </CardTitle>

                  <div className="mt-6">
                    <span className="text-6xl font-black">{plan.price}</span>
                    <span className="text-xl ml-2 font-semibold">Lei</span>
                    <div className="text-sm mt-1 opacity-80">pe lună</div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="bg-white text-gray-700 px-8 py-8 flex flex-col flex-grow">

                  {/* 🔹 Locație + oferte simultane (NE-comparabile) */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3 text-[15px]">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                      <span className="font-medium">{plan.location}</span>
                    </div>

                    <div className="flex items-start gap-3 text-[15px]">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                      <span className="font-medium">{plan.offers}</span>
                    </div>
                  </div>

                  {/* 🔹 Lista completă comparată cu Premium */}
                  <div className="space-y-3 mb-10 flex-grow">
                    {premiumFeatures.map((feature, i) => {
                      const available = plan.features.includes(feature);

                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-3 text-[15px] py-2 ${
                            available
                              ? "text-gray-800 font-medium"
                              : "opacity-50 line-through text-gray-400"
                          }`}
                        >
                          {available ? (
                            <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mt-0.5" />
                          )}

                          <span className="leading-snug">{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* 🔹 Buton egal pentru toate planurile */}
                  <button className="w-full mt-auto bg-purple-600 hover:bg-purple-700 text-white font-black py-5 rounded-2xl text-lg shadow-xl transition-all">
                    Alege {plan.name}
                  </button>

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
