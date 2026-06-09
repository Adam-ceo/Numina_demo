import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, X, Car, Gauge, Armchair } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { services, pricingExtras } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  car: <Car size={20} strokeWidth={1.5} />,
  gauge: <Gauge size={20} strokeWidth={1.5} />,
  armchair: <Armchair size={20} strokeWidth={1.5} />,
};

const tabs = [
  { id: "kulso-belso", label: "Külső-belső" },
  { id: "muszerfal", label: "Műszerfal" },
  { id: "karpit", label: "Kárpittisztítás" },
  { id: "arlista", label: "Árlista" },
];

export default function ServicesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveTab(hash);
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Helmet>
        <title>Szolgáltatások — Farkas Autókozmetika Győr</title>
        <meta
          name="description"
          content="Professzionális autókozmetika: külső-belső tisztítás, műszerfal ápolás, kárpittisztítás. Győr, 12 éve. Árlista autóméretek szerint."
        />
        <link rel="canonical" href="https://farkas-autokozmetika.hu/szolgaltatasok" />
      </Helmet>

      <PageHeader
        title="Szolgáltatásaink"
        lead="Professzionális autókozmetika — minden, amire az autódnak szüksége van."
      />

      {/* Sticky anchor tabs */}
      <div className="sticky top-16 z-[100] bg-white/95 backdrop-blur-[12px] border-b border-[color:var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-2" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`shrink-0 px-4 min-h-[44px] rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)]"
                    : "text-[color:var(--color-content-secondary)] hover:text-[color:var(--color-content-primary)] hover:bg-[color:var(--color-surface-raised)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.slug}
          role="tabpanel"
          aria-labelledby={`tab-${service.slug}`}
          tabIndex={0}
          className={`py-20 px-6 scroll-mt-32 focus:outline-none ${
            index % 2 === 0 ? "bg-[color:var(--color-surface)]" : "bg-[color:var(--color-surface-raised)]"
          }`}
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] border border-[color:var(--color-border)]">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover object-[center_40%]"
                    loading="lazy"
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 bg-[color:var(--color-accent)] text-white text-xs font-semibold px-3 py-1.5 rounded">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.02em]">
                    {service.name}
                  </h2>
                </div>

                <p className="text-base text-[color:var(--color-content-secondary)] leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-content-tertiary)] mb-4">
                    A folyamat lépései
                  </p>
                  <ol className="space-y-4">
                    {service.steps.map((step) => (
                      <li key={step.step} className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] text-xs font-bold shrink-0 mt-0.5">
                          {step.step}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[color:var(--color-content-primary)]">{step.title}</p>
                          <p className="text-sm text-[color:var(--color-content-secondary)] mt-1">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-content-tertiary)] mb-3">
                      Tartalmazza
                    </p>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-content-secondary)]">
                          <Check size={14} className="text-[color:var(--color-success)] shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-content-tertiary)] mb-3">
                      Nem tartalmazza
                    </p>
                    <ul className="space-y-2">
                      {service.excludes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-content-secondary)]">
                          <X size={14} className="text-[color:var(--color-content-tertiary)] shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing table */}
      <section
        id="arlista"
        role="tabpanel"
        aria-labelledby="tab-arlista"
        tabIndex={0}
        className="py-20 px-6 scroll-mt-32 bg-[color:var(--color-surface)] focus:outline-none"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-2">
              Árak
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.025em]">
              Árlista
            </h2>
            <p className="mt-3 text-base text-[color:var(--color-content-secondary)]">
              Az árak az autó méretétől függnek. Kedvezményes kombinált csomagok igény esetén elérhetők.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[color:var(--color-border)]">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="bg-[color:var(--color-surface-raised)]">
                  <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-content-tertiary)] border-b border-[color:var(--color-border)]">
                    Szolgáltatás
                  </th>
                  {[
                    { label: "S", note: "Pl. Polo" },
                    { label: "M", note: "Legnépszerűbb" },
                    { label: "L", note: "Pl. Passat" },
                    { label: "SUV", note: "SUV / Kombi" },
                  ].map(({ label, note }) => (
                    <th
                      key={label}
                      className="text-right px-5 py-3.5 border-b border-[color:var(--color-border)]"
                    >
                      <span className={`text-xs font-bold uppercase tracking-[0.08em] ${label === "M" ? "text-[color:var(--color-accent)]" : "text-[color:var(--color-content-tertiary)]"}`}>
                        {label}
                      </span>
                      {label === "M" && (
                        <span className="block text-[10px] font-medium text-[color:var(--color-accent)]/70 normal-case tracking-normal">
                          {note}
                        </span>
                      )}
                      {label !== "M" && (
                        <span className="block text-[10px] font-normal text-[color:var(--color-content-tertiary)] normal-case tracking-normal">
                          {note}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <tr key={service.id} className={i % 2 === 0 ? "bg-[color:var(--color-surface)]" : "bg-[color:var(--color-surface-raised)]"}>
                    <td className="px-5 py-4 text-sm font-medium text-[color:var(--color-content-primary)]">
                      {service.name}
                    </td>
                    {service.prices.map((p) => (
                      <td
                        key={p.size}
                        className={`px-5 py-4 text-sm text-right tabular-nums ${
                          p.size === "M"
                            ? "font-semibold text-[color:var(--color-accent)]"
                            : "text-[color:var(--color-content-primary)]"
                        }`}
                      >
                        {p.price.toLocaleString("hu-HU")} Ft
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-[color:var(--color-content-primary)] mb-4">Kiegészítő szolgáltatások</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {pricingExtras.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-center justify-between px-4 py-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)]"
                >
                  <span className="text-sm text-[color:var(--color-content-secondary)]">{extra.name}</span>
                  <span className="text-sm font-semibold text-[color:var(--color-content-primary)] tabular-nums ml-3 shrink-0">
                    {extra.price.toLocaleString("hu-HU")} Ft
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[color:var(--color-content-tertiary)]">
              * Az árak tájékoztató jellegűek. Súlyosan szennyezett jármű esetén felár lehetséges.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
