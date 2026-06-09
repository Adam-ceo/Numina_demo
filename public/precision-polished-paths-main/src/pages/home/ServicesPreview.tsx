import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-[color:var(--color-surface-raised)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-2">
              Szolgáltatások
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.025em]">
              Mit kínálunk
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-content-tertiary)]">
              Árak S mérettől — nincs rejtett felár
            </p>
          </div>
          <Link
            to="/szolgaltatasok"
            className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-sm font-medium text-[color:var(--color-content-secondary)] hover:text-[color:var(--color-accent)] transition-colors shrink-0"
          >
            Teljes árlista
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
