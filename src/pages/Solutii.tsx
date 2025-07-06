import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Users, 
  Smartphone, 
  BarChart3, 
  Mail, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Database,
  Star,
  PieChart,
  Repeat
} from 'lucide-react';

const Solutii = () => {
  const consumerBenefits = [
    {
      icon: <Smartphone className="h-8 w-8 text-brand-purple" />,
      title: "Experiență Mobilă",
      description: "Accesează toate cuponul direct din telefon, fără aplicații complexe.",
      features: ["Design responsive", "Acces instant", "Sincronizare cloud"]
    },
    {
      icon: <Users className="h-8 w-8 text-brand-purple" />,
      title: "Comunitate Beneficii",
      description: "Descoperă oferte exclusive și conectează-te cu brandurile preferate.",
      features: ["Oferte personalizate", "Recomandări inteligente", "Istoric cupoane"]
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-purple" />,
      title: "Activare Instantanee",
      description: "Folosește cuponul cu un singur click, fără hârtie sau coduri complicate.",
      features: ["QR code scan", "Validare instantanee", "Istoric utilizare"]
    }
  ];

  const integrationFeatures = [
    "API REST completă pentru integrări personalizate",
    "Webhooks pentru sincronizarea în timp real",
    "SDK pentru aplicații mobile native",
    "Plugin-uri pentru platforme e-commerce populare",
    "Integrare cu sisteme POS existente",
    "Import/export date în format CSV și JSON"
  ];

  const businessFeatures = [
    {
      icon: <Calendar className="h-8 w-8 text-red-500" />,
      title: "Planuri de Abonament Personalizate",
      description: "Creează pachete personalizate care oferă valoare continuă clienților tăi, fie că sunt servicii regulate, produse exclusive sau acces privilegiat."
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: "Facturare Automată și Simplă",
      description: "Integrează cu Stripe pentru a automatiza plățile, oferind o experiență fără întreruperi, fără probleme pentru tine și clienții tăi."
    },
    {
      icon: <Star className="h-8 w-8 text-red-500" />,
      title: "Notificări Push Personalizate",
      description: "Păstrează clienții informați și implicați cu mementouri, promoții și campaniile de marketing țintite livrate direct pe dispozitivul lor mobil."
    },
    {
      icon: <PieChart className="h-8 w-8 text-red-500" />,
      title: "Segmentare Inteligentă cu RFM",
      description: "Folosește analiza Recency, Frequency și Monetary Value pentru a oferi campanii foarte eficiente și personalizate."
    },
    {
      icon: <Repeat className="h-8 w-8 text-red-500" />,
      title: "Reînnoire Automată",
      description: "Asigură continuitatea planurilor tale de abonament cu reînnoire automată, garantând un flux constant de venituri."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-8 lg:py-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 lg:col-span-2">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Soluția Recurentă pentru Afacerea Ta
                </h1>
              </div>
              
              <div className="pt-2">
                <Link to="/demonstratie">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3 text-lg">
                    PROGRAMEAZĂ O DEMONSTRAȚIE
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-start lg:col-span-3">
              <div className="relative w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl lg:mx-0">
                <img 
                  src="/lovable-uploads/solutii-hero.png" 
                  alt="Solutii Hero Refluxe"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Refluxe Can Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Ce poate face Refluxe pentru afacerea ta:
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-sm hover:-translate-y-1 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/demonstratie">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-12 py-4 text-lg rounded-full">
                PROGRAMEAZĂ O DEMONSTRAȚIE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consumer Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pentru Consumatori
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Câștigă și folosește cupoane digitale ușor, direct din telefon, fără complicații.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consumerBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-purple/10 text-brand-purple mb-6 px-4 py-2">
                Integrare Tehnologică
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Integrare Simplă în <span className="text-brand-purple">5 Minute</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nu îți schimba sistemele existente. Refluxe se integrează seamless cu infrastructura ta actuală.
              </p>
              <div className="space-y-3">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl border-0 bg-gradient-refluxe text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Shield className="h-6 w-6" />
                    <span className="font-semibold">Securitate Enterprise</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Protecție de Nivel Bancar</h3>
                  <ul className="space-y-3 text-white/90">
                    <li>• Encriptare end-to-end</li>
                    <li>• Conformitate GDPR</li>
                    <li>• Backup automat zilnic</li>
                    <li>• Monitoring 24/7</li>
                    <li>• Audit trails complete</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-refluxe text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Gata să implementezi soluția perfectă?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Alege planul potrivit pentru nevoile tale sau solicită o consultație gratuită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planuri">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
                Vezi Planurile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple font-semibold px-8 py-3 text-lg">
                Consultație Gratuită
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutii;