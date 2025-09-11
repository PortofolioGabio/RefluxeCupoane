import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Planuri = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "START",
      description: "Pentru afacerile mici care doresc să înceapă cu programele de fidelitate",
      monthlyPrice: "249",
      yearlyPrice: "2.976",
      yearlyDiscount: "Gratis 2 meses gratis (pagamento anual, 6 mês)",
      features: [
        "1 Loja",
        "200 Clientes"
      ]
    },
    {
      name: "PLUS", 
      description: "Para negócios em crescimento com mais necessidades de vendas",
      monthlyPrice: "349",
      yearlyPrice: "4.188",
      yearlyDiscount: "Gratis 2 meses gratis (pagamento anual, 6 mês)",
      features: [
        "1 Loja",
        "500 Clientes"
      ]
    },
    {
      name: "PRO",
      description: "Para empresas avançadas que se preocupam com o crescimento das vendas",
      monthlyPrice: "499", 
      yearlyPrice: "5.988",
      yearlyDiscount: "Gratis 2 meses gratis (pagamento anual, 6 mês)",
      features: [
        "1 Loja",
        "Clientes ilimitados"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      name: "Promoções disponíveis",
      description: "Você pode usar até 4 tipos de cupons para as promoções",
      start: "1",
      plus: "5", 
      pro: "10"
    },
    {
      name: "Cartões de visita",
      description: "Cartões digitais finalizados - disponível em cartões públicos",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de assinatura",
      description: "Cartões múltiplos disponíveis",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de cashback",
      description: "Cartões de cashback finalizados com ferramentas de economia personalizadas",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de desconto",
      description: "Cartões digitais de desconto directo finalizados",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartão presente",
      description: "Cartões digitais de certificado pré - pago finalizados",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de cupom",
      description: "Cartões digitais de cupons finalizados com descontos para a primeira visita",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de membros",
      description: "Cartões digitais finalizados para membros",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de recompensas",
      description: "Cartões digitais de recompensas finalizados",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Cartões de recompensas",
      description: "Cartões digitais de recompensas finalizados",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Geolocalizações",
      description: "111 Modelos de cartões prontos para usar para diferentes tipos de negócios, incluindo o setor de serviços, como com um design individual em alguns negócios",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Personalização dos cartões",
      description: "Crie um projeto, cartes com um design exclusivo em 5 minutos. Personalize cores, logotipos, imagens de seu e estrutura do cartão. Aproveite os modelos mais criativos de cartões personalizados",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "CRM",
      description: "CRM avançado, a capacidade de segmentar seus clientes para correspondência direcionada e aumento de vendas em até 200%",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Push livre",
      description: "Notificação completa de SMS. Clientes que querem podem receber notificação push ilimitada. Automaticamente. Envie sua mensagem na história do telefone e não necessita o cliente. Gerar um",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Geolocalizações inteligentes",
      description: "Use o mapa automaticamente para seus clientes quando eles chegarem a 100 metros de sua empresa. Suas ofertas serão por gestão remota na consulta dos seus clientes para sua loja",
      start: "Geolocalizações",
      plus: "Geolocalizações",
      pro: "Geolocalizações"
    },
    {
      name: "Personalização de notificações push",
      description: "Crie um projeto, cartes de push automatizado. Crie mensagens finalizadas automaticamente, gratuitamente",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "PWA Scanner App",
      description: "Aplicativo opcional scanner CRM/PWA para conectar pontos e prêmios aos seus clientes com facilidade e rapidez",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Programa de Indicação",
      description: "Seus clientes podem indicar pontos e recompensas por convidar amigos para sua promoção. Aumente sua base de clientes com custo de publicidade",
      start: false,
      plus: true,
      pro: true
    },
    {
      name: "Controle duplicado",
      description: "Seus clientes não podem usar outros cartões de fidelidade para uma promoção e obter mais pontos do que deveriam. Controle apenas aplicado exclusivo de clientes",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Relatórios inteligentes",
      description: "Relatórios completos e feedbacks para você analisar a performance integrada de seus programas e clientes",
      start: true,
      plus: true,
      pro: true
    },
    {
      name: "Análise para gerenciamento",
      description: "Veja qual item deve ganhar de segmento e outros vendedores na cidade, para mostrar e para visitar. Recomendação para melhorar suas vendas de empresa",
      start: "1",
      plus: "3",
      pro: "5"
    },
    {
      name: "API e Integração",
      description: "Integração com sua software para automação automática de cartões, pontos e prêmios",
      start: false,
      plus: false,
      pro: true
    },
    {
      name: "Os campos personalizáveis",
      description: "Pegue seus próprios campos com cobrança personalizada: seu nome e telefone. Adicione mais campos para seus clientes",
      start: false,
      plus: true,
      pro: true
    },
    {
      name: "Configuração gratuita do programa de fidelidade",
      description: "Configuramos todos os programas de fidelidade",
      start: false,
      plus: false,
      pro: true
    }
  ];

  const handleDemoClick = () => {
    navigate('/demonstratie');
  };

  const renderFeatureStatus = (status: boolean | string) => {
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
    return <div className="text-center text-sm">{status}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              TRANSFORME CLIENȚII ÎN FANI CHIAR ASTĂZI
            </h1>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-white text-gray-900 shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-sm text-gray-500 mb-2">A partir de</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    R${plan.monthlyPrice}<span className="text-lg font-normal">/mês</span>
                  </div>
                  <div className="text-sm text-red-500 mb-2">
                    ou R$ {plan.yearlyPrice}ano. Ganhe 2 meses grátis
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    (pagamento anual, 6 mês)
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={handleDemoClick}
                  >
                    AFLĂ MAI MULTE ACUM
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-8 mb-8">
            <h2 className="text-3xl font-bold text-center">
              DESCOPERĂ FUNCȚIONALITĂȚILE FIECĂRUI PLAN
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                    Funcționalitate
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    START
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    PLUS
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold">
                    PRO
                  </th>
                </tr>
                <tr className="bg-orange-400 text-white">
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                    Costuri pe lună
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    R$249
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    R$349
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-center font-semibold">
                    R$499
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="font-semibold text-gray-900 mb-1">{feature.name}</div>
                      <div className="text-sm text-gray-600">{feature.description}</div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.start)}
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.plus)}
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      {renderFeatureStatus(feature.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planuri;