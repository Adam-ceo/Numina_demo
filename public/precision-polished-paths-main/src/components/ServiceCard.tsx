import { Link } from "react-router-dom";
import { Car, Gauge, Armchair, ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  car: <Car size={22} strokeWidth={1.5} />,
  gauge: <Gauge size={22} strokeWidth={1.5} />,
  armchair: <Armchair size={22} strokeWidth={1.5} />,
};

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  return (
    <Link
      to={`/szolgaltatasok#${service.slug}`}
      className="group flex flex-col bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow] duration-150 ease-[cubic-bezier(0,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)] focus-visible:ring-offset-2"
    >
      <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center mb-4">
        {iconMap[service.icon] ?? iconMap["car"]}
      </div>

      {/* Badge — FIX #3: rounded-full → rounded (4px) */}
      {service.badge && (
        <span className="inline-flex mb-2 text-xs font-medium text-[color:var(--color-accent)] bg-[color:var(--color-accent-subtle)] px-2 py-0.5 rounded w-fit">
          {service.badge}
        </span>
      )}

      <h3 className="text-base font-semibold text-[color:var(--color-content-primary)] tracking-[-0.01em] mb-2">
        {service.name}
      </h3>
      {variant === "default" && (
        <p className="text-sm text-[color:var(--color-content-secondary)] leading-relaxed flex-1">
          {service.shortDescription}
        </p>
      )}

      <p className="mt-4 text-xs font-medium text-[color:var(--color-content-secondary)]">
        <span className="text-[color:var(--color-content-tertiary)]">Kis autótól </span>
        {Math.min(...service.prices.map((p) => p.price)).toLocaleString("hu-HU")} Ft
      </p>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-accent)] transition-[gap] duration-150 group-hover:gap-2.5">
        Árak és részletek
        <ArrowRight size={15} />
      </div>
    </Link>
  );
}
