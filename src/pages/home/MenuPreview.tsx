import { m } from "motion/react";
import type { NavigateFn } from "../../types";
import { menuPreviewItems } from "../../data/menu";

const menuImageUrl = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735";

interface MenuPreviewProps {
  onNavigate: NavigateFn;
}

export default function MenuPreview({ onNavigate }: MenuPreviewProps) {
  return (
    <section id="menu" className="py-20 md:py-32 bg-white text-numina-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative group overflow-hidden rounded-[2rem] shadow-xl order-last lg:order-first">
          <img
            srcSet={`${menuImageUrl}?auto=format&fit=crop&q=80&fm=webp&w=600 600w,
                     ${menuImageUrl}?auto=format&fit=crop&q=80&fm=webp&w=1200 1200w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={`${menuImageUrl}?auto=format&fit=crop&q=80&fm=webp&w=1200`}
            alt="Szezonális ajánlat"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            width={1200} height={600}
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-xs drop-shadow-lg">
            <p className="font-sans text-[11px] md:text-[10px] uppercase tracking-widest mb-3 md:mb-4 text-numina-sage font-bold">A nap ajánlata</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 drop-shadow-sm">Vaníliás Zab Latte</h3>
            <p className="text-xs md:text-sm text-white font-light leading-relaxed">Sima, krémes, és egy csipetnyi bio tengeri sóval fűszerezve.</p>
          </div>
        </div>

        <div>
          <span className="text-numina-sage font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold block mb-4">Mestermunkáink</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">A vendégeink <span className="text-numina-sage">kedvencei</span></h2>
          <div className="space-y-8 md:space-y-10">
            {menuPreviewItems.map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex justify-between items-start pb-5 md:pb-6 border-b border-numina-dark/5 group cursor-default"
              >
                <div className="max-w-[75%] transition-transform duration-500 group-hover:translate-x-2 text-left">
                  <h4 className="text-lg md:text-xl font-bold mb-1 group-hover:text-numina-sage transition-colors">{item.name}</h4>
                  <p className="text-[10px] md:text-xs text-numina-dark/60 font-sans leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-numina-sage font-bold text-sm shrink-0 ml-4">{item.price}</span>
              </m.div>
            ))}
          </div>
          <button
            onClick={() => onNavigate("menu")}
            className="mt-10 md:mt-12 text-numina-dark font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest border-b-2 border-numina-sage pb-1 hover:text-numina-sage transition-all"
          >
            Teljes kínálatunk felfedezése
          </button>
        </div>
      </div>
    </section>
  );
}
