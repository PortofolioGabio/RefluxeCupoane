import { useEffect } from 'react';
import ScrollAnimatedElement from '@/components/ScrollAnimatedElement';
import { updatePageSEO, getOrganizationSchema, getWebPageSchema } from '@/utils/seo';

const PoliticaConfidentialitate = () => {
  useEffect(() => {
    const structuredData = [
      getOrganizationSchema(),
      getWebPageSchema(
        'Politica de Confidențialitate - Refluxe',
        'Consultă politica de confidențialitate pentru platforma Refluxe de cupoane digitale și programe de fidelitate. Protecția datelor personale conform GDPR.',
        'https://refluxe.io/politica-confidentialitate'
      )
    ];

    updatePageSEO({
      title: 'Politica de Confidențialitate - Refluxe | Protecția Datelor GDPR',
      description: 'Consultă politica de confidențialitate pentru platforma Refluxe de cupoane digitale și programe de fidelitate. Protecția datelor personale conform GDPR.',
      keywords: 'politica confidentialitate refluxe, protectia datelor, GDPR, date personale, politica privacy',
      canonical: 'https://refluxe.io/politica-confidentialitate',
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
              POLITICA DE CONFIDENȚIALITATE
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
                <p className="text-gray-600 text-sm mb-8">
                  Data ultimei actualizări: 18 iulie 2025
                </p>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Confidențialitatea datelor tale este importantă pentru noi. Această politică descrie modul în care Refluxe colectează, folosește, protejează și partajează informațiile tale personale în conformitate cu Regulamentul (UE) 2016/679 – Regulamentul general privind protecția datelor (GDPR).
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Cine suntem?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Refluxe este o platformă digitală care ajută afacerile să creeze și să gestioneze programe de fidelitate digitale prin portofele virtuale (Apple Wallet / Google Wallet).
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Operatorul de date este:<br />
                  <strong>REFLUXE LOIAL S.R.L.</strong><br />
                  str. Atelierelor, Moinești, Bacău, România<br />
                  Email: <a href="mailto:contact@refluxe.ro" className="text-blue-600 hover:text-blue-800 underline">contact@refluxe.ro</a>
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Ce date personale colectăm?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  În funcție de modul în care utilizezi platforma Refluxe (ca utilizator final al unui card digital sau ca reprezentant de afacere), putem colecta următoarele categorii de date:
                </p>
                <ul className="text-gray-700 mb-4 leading-relaxed list-disc ml-6">
                  <li><strong>Date de identificare:</strong> nume, prenume</li>
                  <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
                  <li><strong>Date tehnice:</strong> adresa IP, tip dispozitiv, sistem de operare</li>
                  <li><strong>Date de utilizare:</strong> locație, istoricul scanărilor, numărul de vizite, interacțiuni cu cardul</li>
                  <li><strong>Preferințe comerciale:</strong> interese legate de promoții, istoricul premiilor/cupoanelor</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nu colectăm sau procesăm date sensibile (precum CNP, informații despre sănătate, orientare politică sau religioasă etc.).
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Cum colectăm datele tale?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Datele sunt colectate în următoarele moduri:
                </p>
                <ul className="text-gray-700 mb-6 leading-relaxed list-disc ml-6">
                  <li>Prin completarea unui formular digital sau scanarea unui cod QR pentru activarea cardului digital</li>
                  <li>Prin interacțiunea cu cardul din portofelul tău digital (wallet)</li>
                  <li>Prin intermediul business-urilor partenere care folosesc Refluxe</li>
                  <li>Automat, prin module cookie sau servicii de analiză a comportamentului (ex: Google Analytics)</li>
                </ul>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. De ce colectăm aceste date?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Colectăm datele tale pentru a:
                </p>
                <ul className="text-gray-700 mb-6 leading-relaxed list-disc ml-6">
                  <li>Trimite notificări push personalizate legate de oferte, reduceri sau recompense</li>
                  <li>Oferi acces la cardurile de fidelitate digitale și gestionarea acestora</li>
                  <li>Trimite comunicări comerciale, doar dacă ai consimțit în prealabil</li>
                  <li>Îmbunătăți experiența utilizatorului în platformă și optimiza performanța</li>
                  <li>Respecta obligațiile legale</li>
                </ul>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Care este temeiul legal?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Conform GDPR, colectăm și procesăm datele tale pe baza următoarelor temeiuri:
                </p>
                <ul className="text-gray-700 mb-6 leading-relaxed list-disc ml-6">
                  <li><strong>Consimțământul explicit (Art. 6 alin. 1 lit. a)</strong> – pentru notificări comerciale și înscriere la card</li>
                  <li><strong>Executarea unui contract (Art. 6 alin. 1 lit. b)</strong> – pentru furnizarea serviciului de fidelitate digitală</li>
                  <li><strong>Interes legitim (Art. 6 alin. 1 lit. f)</strong> – pentru îmbunătățirea platformei și prevenirea abuzurilor</li>
                </ul>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cu cine partajăm datele?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Datele tale <strong>NU sunt vândute</strong>. Le putem partaja doar cu:
                </p>
                <ul className="text-gray-700 mb-6 leading-relaxed list-disc ml-6">
                  <li>Business-ul care ți-a emis cardul (ex: cafenea, restaurant, salon etc.) – pentru a putea oferi beneficii</li>
                  <li>Furnizori de servicii IT – pentru găzduire, trimitere notificări, analiză comportamentală</li>
                  <li>Autorități legale – doar în cazul în care ni se cere legal acest lucru</li>
                </ul>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Cât timp păstrăm datele?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Păstrăm datele tale doar pe perioada necesară scopurilor menționate, dar nu mai mult de:
                </p>
                <ul className="text-gray-700 mb-4 leading-relaxed list-disc ml-6">
                  <li>2 ani de la ultima utilizare a cardului digital</li>
                  <li>Sau până la retragerea consimțământului</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  După această perioadă, datele sunt șterse sau anonimizate în mod sigur.
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Drepturile tale conform GDPR:</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ai următoarele drepturi:
                </p>
                <ul className="text-gray-700 mb-4 leading-relaxed list-disc ml-6">
                  <li>Dreptul de acces – poți solicita informații despre datele stocate</li>
                  <li>Dreptul la rectificare – corectarea datelor inexacte</li>
                  <li>Dreptul la ștergere („dreptul de a fi uitat")</li>
                  <li>Dreptul la restricționare a prelucrării</li>
                  <li>Dreptul la portabilitate – să primești datele într-un format structurat</li>
                  <li>Dreptul de opoziție – poți opri comunicările comerciale în orice moment</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pentru exercitarea acestor drepturi, scrie-ne la: <a href="mailto:contact@refluxe.ro" className="text-blue-600 hover:text-blue-800 underline">contact@refluxe.ro</a>
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Protecția datelor</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Luăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale împotriva accesului neautorizat, pierderii, modificării sau divulgării accidentale.
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Politica de cookies</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Platforma Refluxe folosește cookie-uri funcționale, analitice și de marketing. Poți gestiona preferințele din setările browserului tău. Mai multe detalii în Politica de cookies.
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Actualizări</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Această Politică poate fi actualizată periodic. Orice modificare va fi publicată aici, iar dacă este relevant, vei fi notificat prin email sau notificare directă în aplicație.
                </p>

                <div className="border-t-2 border-gray-200 my-8"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Pentru orice întrebări privind politica de confidențialitate sau prelucrarea datelor:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Email: <a href="mailto:contact@refluxe.ro" className="text-blue-600 hover:text-blue-800 underline">contact@refluxe.ro</a>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Adresă: str. Atelierelor, Moinești, Bacău, România
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Răspundem în maximum 48 de ore.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
    </div>
  );
};


export default PoliticaConfidentialitate;
