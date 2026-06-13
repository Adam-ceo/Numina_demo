import { useState, useEffect, useRef, useMemo } from "react";
import { X, ChevronRight, Search } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../data/gallery";

export default function FullGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("mind");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number>(0);

  const filtered = useMemo(
    () => activeCategory === "mind" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === activeCategory),
    [activeCategory]
  );
  const isBento = activeCategory === "mind";

  useEffect(() => {
    if (lightboxIdx !== null) lightboxCloseRef.current?.focus();
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIdx(prev => prev !== null && prev < filtered.length - 1 ? prev + 1 : prev);
      if (e.key === "ArrowLeft") setLightboxIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev);
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, filtered.length]);

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-40 px-6 max-w-7xl mx-auto">
      <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}>
        <span className="text-numina-sage-deep font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Vizuális napló</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-numina-dark leading-tight">
            A Numina <span className="font-serif italic font-normal text-numina-sage">pillanatai.</span>
          </h1>
          <p className="text-numina-dark/70 font-light text-sm max-w-xs leading-relaxed">
            Betekintés a hétköznapjainkba és a különleges pillanatainkba.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setLightboxIdx(null); }}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-[background-color,color,box-shadow] duration-300 ${
                activeCategory === cat.id
                  ? "bg-numina-dark text-white shadow-md"
                  : "bg-numina-grey/60 text-numina-dark/70 hover:bg-numina-grey hover:text-numina-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </m.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <m.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`${isBento && img.featured ? "col-span-2" : "col-span-1"} group relative overflow-hidden rounded-2xl cursor-pointer h-52 md:h-64 lg:h-72`}
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-500">
                <p className="text-white font-bold text-sm">{img.title}</p>
                <p className="text-white/50 text-[11px] uppercase tracking-widest mt-0.5">{img.category}</p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Search className="w-3.5 h-3.5 text-white" />
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Képnézegető"
            className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxIdx(null)}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={e => {
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) < 50) return;
              if (delta < 0) setLightboxIdx(prev => prev !== null && prev < filtered.length - 1 ? prev + 1 : prev);
              if (delta > 0) setLightboxIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev);
            }}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-5 pointer-events-none">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {lightboxIdx + 1} / {filtered.length}
              </span>
              <button
                ref={lightboxCloseRef}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
                onClick={() => setLightboxIdx(null)}
                aria-label="Bezárás"
              >
                <X size={16} />
              </button>
            </div>

            {lightboxIdx > 0 && (
              <button
                className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={e => { e.stopPropagation(); setLightboxIdx(prev => prev !== null ? prev - 1 : null); }}
                aria-label="Előző kép"
              >
                <ChevronRight size={20} className="rotate-180" />
              </button>
            )}

            <m.div
              key={lightboxIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center gap-4 max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center">
                <p className="text-white/90 font-bold text-sm tracking-wide">{filtered[lightboxIdx].title}</p>
                <p className="text-white/30 text-[11px] uppercase tracking-widest mt-1">{filtered[lightboxIdx].category}</p>
              </div>
            </m.div>

            {lightboxIdx < filtered.length - 1 && (
              <button
                className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={e => { e.stopPropagation(); setLightboxIdx(prev => prev !== null ? prev + 1 : null); }}
                aria-label="Következő kép"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
