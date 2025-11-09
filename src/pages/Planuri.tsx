import { Star } from "lucide-react";

export default function PlanuriTabele() {
  const standard = {
    name: "STANDARD",
    price: "247",
    period: "lei / lună",
    tagline: "Tot ce ai nevoie ca să aduci clienții înapoi, automat.",
    features: [
      {
        title: "Bază de clienți nelimitată",
        desc: "Colectezi automat datele clienților și le ai pe toate într-un singur loc.",
      },
      {
        title: "Notificări automate",
        desc: "Trimite reamintiri și promoții la momentul potrivit, fără efort.",
      },
      {
        title: "Promoții nelimitate",
        desc: "Rulezi oferte oricând, fără costuri suplimentare per campanie.",
      },
      {
        title: "Design adaptat brandului",
        desc: "Card digital și materiale potrivite identității tale vizuale.",
      },
      {
        title: "Formulare personalizate",
        desc: "Strângi ușor date relevante: nume, email, preferințe și altele.",
      },
      {
        title: "Vezi cine revine și cât cheltuie",
        desc: "Monitorizezi revenirea clienților și valoarea comenzilor lor.",
      },
      {
        title: "Recenzii pe Google, automat",
        desc: "Primești recomandări reale care cresc vizibilitatea locală.",
      },
      {
        title: "Feedback direct",
        desc: "Află rapid ce a mers bine și ce poți îmbunătăți.",
      },
      {
        title: "Mesaje automate (inclusiv \"La mulți ani\")",
        desc: "Rămâi aproape de clienți în momentele importante.",
      },
      {
        title: "Program de recomandare",
        desc: "Transformi clienții mulțumiți în ambasadori ai brandului.",
      },
      {
        title: "8 tipuri de carduri digitale",
        desc: "Alegi formatul potrivit pentru businessul tău.",
      },
      {
        title: "3 oferte simultan",
        desc: "Rulezi mai multe campanii în paralel, ușor de gestionat.",
      },
      {
        title: "3 locații incluse",
        desc: "Adaugi puncte de lucru (75 lei / locație extra).",
      },
      {
        title: "3 zone de localizare",
        desc: "Trimiți mesaje când clienții sunt în apropiere.",
      },
    ],
  };

  const premium = {
    name: "PREMIUM",
    price: "497",
    period: "lei / lună",
    tagline:
      "Totul din STANDARD + funcții premium pentru creștere accelerată.",
    features: [
      {
        title: "Tot ce include STANDARD",
        desc: "Toate funcțiile esențiale de loializare și comunicare automată.",
      },
      {
        title: "10 oferte simultan",
        desc: "Mai multă acoperire și testare rapidă a mesajelor.",
      },
      {
        title: "10 locații incluse",
        desc: "Extinzi ușor operațiunile (50 lei / locație extra).",
      },
      {
        title: "10 zone de localizare",
        desc: "Campanii precise, bazate pe proximitatea clientului.",
      },
      {
        title: "Mesaje complet personalizate",
        desc: "Comunici 1‑la‑1 pe baza comportamentului și preferințelor.",
      },
      {
        title: "Admini multipli",
        desc: "Lucrezi cu toată echipa, cu drepturi separate pe cont.",
      },
      {
        title: "Manager de cont dedicat",
        desc: "Implementare ghidată, optimizări recurente și consultanță.",
      },
      {
        title: "Modificări nelimitate",
        desc: "Ceri oricând ajustări fără costuri suplimentare.",
      },
      {
        title: "Asistență prioritară",
        desc: "Răspuns rapid pe WhatsApp/telefon pentru întrebări și urgențe.",
      },
      {
        title: "Actualizări prioritare",
        desc: "Primești noile funcții înaintea celorlalți utilizatori.",
      },
      {
        title: "Integrare automată cu sistemele tale",
        desc: "Funcționează perfect cu CRM, POS sau site-ul existent.",
      },
    ],
  };

  const Table = ({ plan, highlighted }: any) => (
    <div
      className={`w-full rounded-3xl overflow-hidden shadow-xl border ${
        highlighted
          ? "border-[#a566ff]/40 bg-white/70 backdrop-blur-sm"
          : "border-white/20 bg-white/60 backdrop-blur-sm"
      }`}
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#f6efff] via-white to-[#fff]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              {plan.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl">
              {plan.tagline}
            </p>
          </div>
          {highlighted && (
            <div className="hidden sm:flex items-center gap-2 text-[#8733ff] font-bold bg-[#f3eaff] border border-[#e0c8ff] px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4" /> CEL MAI POPULAR
            </div>
          )}
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-5xl sm:text-6xl font-black bg-gradient-to-br from-[#8733ff] to-[#a566ff] bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-600">
            {plan.period}
          </span>
        </div>
      </div>

      {/* Body as modern table */}
      <div className="divide-y divide-gray-200/70">
        {plan.features.map((f: any, idx: number) => (
          <div
            key={idx}
            className="px-6 sm:px-8 py-4 sm:py-5 grid grid-cols-1"
            role="row"
          >
            <div className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
              {f.title}
            </div>
            <div className="text-sm sm:text-base text-gray-600 mt-1">
              {f.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 sm:p-8">
        <a
          href="https://app.refluxe.io/registration"
          target="_blank"
          className="block w-full text-center font-bold py-4 rounded-2xl text-base bg-gradient-to-r from-[#8733ff] to-[#a566ff] text-white shadow-lg hover:opacity-95 transition"
        >
          Alege {plan.name}
        </a>
      </div>
    </div>
  );

  return (
    <section className="purple-bg text-gray-900 py-16 sm:py-24">
      <style>{`
        @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}}
        .purple-bg{background:linear-gradient(-45deg,#2a0040,#8733ff,#1a0028,#3d0066);background-size:300% 300%;animation:gradientMove 12s ease infinite}
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Planuri Refluxe
          </h1>
          <p className="text-[#d6b5ff] text-base sm:text-lg mt-3">
            Alege pachetul potrivit—clar, modern și orientat spre rezultate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Table plan={standard} />
          <Table plan={premium} highlighted />
        </div>

        <p className="text-center text-xs sm:text-sm text-[#e9d9ff] mt-10">
          Neplătitor de TVA conform art. 310 Cod Fiscal. Prețurile sunt finale.
        </p>
      </div>
    </section>
  );
}
