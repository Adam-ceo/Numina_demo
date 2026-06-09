import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../types";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
  onNavigate: (p: Page) => void;
}

export default function LegalPage({ title, children, onNavigate }: LegalPageProps) {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-40 px-6 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-numina-dark/40 hover:text-numina-sage transition-colors mb-10"
        >
          <ChevronRight size={12} className="rotate-180" /> Vissza a főoldalra
        </button>
        <span className="text-numina-sage font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Jogi információk</span>
        <h1 className="text-4xl md:text-5xl font-bold text-numina-dark mb-12 leading-tight">{title}</h1>
        <div className="prose prose-sm max-w-none text-numina-dark/70 font-light leading-relaxed space-y-6 text-sm md:text-base">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
