import { ChevronRight } from "lucide-react";
import type { NavigateFn } from "../../types";
import { GALLERY_HOME_ITEMS } from "../../data/gallery";

interface GallerySectionProps {
  onNavigate: NavigateFn;
}

export default function GallerySection({ onNavigate }: GallerySectionProps) {
  return (
    <section className="py-20 md:py-32 bg-numina-grey/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-numina-dark mb-4">Pillanatok a Numinából</h2>
            <p className="text-sm md:text-base text-numina-dark/60 font-light leading-relaxed">
              Válogatás kedvenc momentumainkból, amik visszaadják a hely szellemét és a vendégeink mosolyát.
            </p>
          </div>
          <button
            onClick={() => onNavigate("gallery")}
            className="group flex items-center gap-4 md:gap-5 py-2 pr-2 pl-1 relative self-start md:self-end"
          >
            <span className="text-[11px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-numina-dark group-hover:text-numina-sage transition-colors duration-500">
              Galéria megnyitása
            </span>
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-numina-dark transition-all duration-500 group-hover:scale-110">
                <ChevronRight className="w-4 h-4 text-numina-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <svg viewBox="0 0 48 48" className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none text-numina-sage">
                <circle
                  cx="24" cy="24" r="23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="10 144"
                  className="animate-[spin_4s_linear_infinite]"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_HOME_ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 md:gap-5 group cursor-default">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-black/5">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <p className="font-semibold text-numina-dark/60 text-[10px] md:text-xs tracking-widest uppercase px-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
