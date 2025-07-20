import { useEffect } from 'react';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';
import { updatePageSEO, getOrganizationSchema, getWebPageSchema } from '@/utils/seo';

const TermeniUtilizare = () => {
  useEffect(() => {
    const structuredData = [
      getOrganizationSchema(),
      getWebPageSchema(
        'Termeni și Condiții de Utilizare - Refluxe',
        'Consultă termenii și condițiile de utilizare pentru platforma Refluxe de cupoane digitale și programe de fidelitate.',
        'https://refluxe.io/termeni-utilizare'
      )
    ];

    updatePageSEO({
      title: 'Termeni și Condiții de Utilizare - Refluxe | Reguli Utilizare Platformă',
      description: 'Consultă termenii și condițiile de utilizare pentru platforma Refluxe de cupoane digitale și programe de fidelitate. Informații legale și reguli de utilizare.',
      keywords: 'termeni utilizare refluxe, conditii utilizare, reguli platforma, termeni legali, conditii servicii digitale',
      canonical: 'https://refluxe.io/termeni-utilizare',
      ogImage: 'https://refluxe.io/gabio-uploads/495771be-804e-48df-8f77-e4316aff17fb.png',
      structuredData: structuredData
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <ScrollAnimatedElement animation="fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider">
              TERMENI ȘI CONDIȚII
            </h1>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <ScrollAnimatedElement animation="slideUp" delay={100}>
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Termeni și Condiții de Utilizare</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Bine ai venit pe <a href="https://app.refluxe.io" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://app.refluxe.io</a> („Site-ul"), operat de Refluxe SRL. Prin accesarea sau folosirea acestui Site, accepți acești termeni. Dacă nu ești de acord, te rugăm să nu folosești Site-ul.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acord de abonament</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Serviciile digitale oferite de Refluxe sunt guvernate de un contract separat, disponibil la <a href="https://app.refluxe.io/promo/gdpr/subscription-agreement" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">link</a>.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Drepturi de autor și conținut</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tot conținutul de pe Site este proprietatea Refluxe și este protejat legal. Ai dreptul să îl folosești doar personal, fără să copiezi sau să distribui fără permisiune.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mărci comerciale</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Logo-urile și mărcile de pe Site sunt proprietatea Refluxe sau a terților și nu pot fi folosite fără acord.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Servicii terțe</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Site-ul poate conține link-uri către servicii ale unor terți. Refluxe nu răspunde pentru acestea și pentru conținutul lor.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Confidențialitate</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Consultă Politica de Confidențialitate la <a href="https://app.refluxe.io/promo/gdpr/privacy-policy" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">link</a> pentru detalii despre datele colectate.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Utilizare responsabilă</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nu folosi Site-ul în mod abuziv. Dacă observi abuzuri, raportează-ne la contact@refluxe.com.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Respectarea legilor</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Trebuie să respecți toate legile aplicabile în utilizarea Site-ului.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitarea răspunderii</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Site-ul este oferit „așa cum este", fără garanții. Refluxe nu răspunde pentru daune directe sau indirecte rezultate din utilizarea Site-ului.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Încetarea accesului</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  În caz de încălcare a termenilor, Refluxe poate suspenda sau închide accesul tău la Site.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modificări</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Acești termeni pot fi modificați oricând. Continuarea utilizării Site-ului implică acceptul acestor modificări.
                </p>

                <p className="text-gray-700 leading-relaxed mt-8">
                  Pentru întrebări, contactează-ne la contact@refluxe.com.
                </p>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default TermeniUtilizare;