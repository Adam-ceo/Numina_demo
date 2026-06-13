import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { m } from "motion/react";
import type { NavigateFn } from "../../types";
import PageLayout from "../../components/layout/PageLayout";

interface LegalPageProps {
  title: string;
  children: ReactNode;
  onNavigate: NavigateFn;
}

export default function LegalPage({ title, children, onNavigate }: LegalPageProps) {
  return (
    <PageLayout maxWidth="3xl">
      <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}>
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-numina-dark/70 hover:text-numina-sage-deep transition-colors mb-10"
        >
          <ChevronRight size={12} className="rotate-180" /> Vissza a főoldalra
        </button>
        <span className="text-numina-sage-deep font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Jogi információk</span>
        <h1 className="text-4xl md:text-5xl font-bold text-numina-dark mb-12 leading-tight">{title}</h1>
        <div className="prose prose-sm max-w-none text-numina-dark/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
          {children}
        </div>
      </m.div>
    </PageLayout>
  );
}
