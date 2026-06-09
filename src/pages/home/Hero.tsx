import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../../types";

interface HeroProps {
  onNavigate: (p: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-32 flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-1 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-numina-dark mb-6 md:mb-8 leading-[1.1] tracking-tight">
            A napi <span className="text-numina-sage">menedéked</span> kávéhoz és pihenéshez.
          </h1>
          <p className="text-base md:text-lg text-numina-dark/70 max-w-lg mb-8 md:mb-12 leading-relaxed mx-auto lg:mx-0 font-light">
            Egy világos, botanikus kuckó Budapest szívében, ahol a kézműves kávé és a minőségi italkultúra találkozik. Gyere a koffeinért, maradj a hangulatért.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button onClick={() => onNavigate("menu")} className="btn-primary group">
              Nézd meg a kínálatot <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => onNavigate("contact")} className="btn-secondary">
              Hol találsz minket?
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative order-2 lg:order-2"
        >
          <div className="absolute inset-0 bg-numina-sage/5 rounded-[2.5rem] rotate-3 -z-10 translate-x-2 translate-y-2 md:translate-x-0 md:translate-y-0 max-w-[95%] md:max-w-none mx-auto" />
          <img
            src="https://images.unsplash.com/photo-1759244328512-e4a9128150f4?auto=format&fit=crop&q=80&w=1200"
            alt="Numina Caffè belső tér — botanikus kávézó Budapest szívében"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
            className="rounded-[2rem] object-cover w-full aspect-[4/3] shadow-2xl relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
