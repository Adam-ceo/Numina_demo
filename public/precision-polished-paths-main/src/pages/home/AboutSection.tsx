import { ShieldCheck, Users, Thermometer } from "lucide-react";

const stats = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    value: "12+",
    label: "év tapasztalat",
    description: "Győrben szerzett valódi szaktudás — nem tankönyvből.",
    highlight: true,
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    value: "500+",
    label: "visszatérő ügyfél",
    description: "Az elégedett ügyfél a legjobb reklám. Nálunk ez az alap.",
    highlight: false,
  },
  {
    icon: <Thermometer size={22} strokeWidth={1.5} />,
    value: "100%",
    label: "garantált szárítás",
    description: "Kárpittisztítás télen is — szárazon adja vissza az autóját.",
    highlight: false,
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[color:var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-3">
              Miért minket válasszon?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.025em] leading-snug">
              Az autója visszakapja
              <br />
              az eredeti ragyogását
            </h2>
            <p className="mt-6 text-base text-[color:var(--color-content-secondary)] leading-relaxed">
              Nem egyszerű autómosóról van szó. Minden jármű egyedi figyelmet kap — az
              aktívhabos előkezeléstől a mikroszálas befejezésig. 12 éve ezt csináljuk
              Győrben, és tudjuk, hogy a részletek számítanak.
            </p>
            <p className="mt-4 text-base text-[color:var(--color-content-secondary)] leading-relaxed">
              Az ügyfelek 90%-a visszatér — és sokan barátaikat is hozzánk küldik. Ezt
              nem reklámmal értük el, hanem következetes, alapos munkával.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex items-start gap-4 p-6 rounded-xl border transition-colors ${
                  stat.highlight
                    ? "border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent-subtle)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)]"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.02em]">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-[color:var(--color-content-primary)]">{stat.label}</p>
                  <p className="text-sm text-[color:var(--color-content-tertiary)] mt-1">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
