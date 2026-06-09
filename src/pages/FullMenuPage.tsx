import { Coffee, Martini } from "lucide-react";
import { motion } from "motion/react";
import { coffeeMenu, foodMenu } from "../data/menu";

export default function FullMenuPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-40 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-numina-dark tracking-tight">Étel- és Itallapunk</h1>
        <p className="text-center text-numina-dark/60 mb-12 md:mb-20 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
          Gondosan válogatott alapanyagok, szezonalitás és odaadás minden egyes kortyban és falatban.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-numina-dark flex items-center gap-4">
              <Coffee className="text-numina-sage" /> Espresso & Specialty
            </h2>
            <div className="space-y-12">
              {coffeeMenu.map((sec, si) => (
                <div key={si}>
                  <h3 className="uppercase text-[11px] md:text-[10px] font-bold tracking-[0.2em] text-numina-dark/30 mb-6 border-b border-black/5 pb-2">{sec.section}</h3>
                  <div className="space-y-6">
                    {sec.items.map((item, k) => (
                      <div key={k} className="group cursor-default">
                        <div className="flex justify-between items-end mb-1">
                          <span className="font-bold text-numina-dark group-hover:text-numina-sage transition-colors duration-300">{item.name}</span>
                          <span className="font-bold text-numina-sage">{item.price}</span>
                        </div>
                        <p className="text-xs text-numina-dark/60 font-light group-hover:text-numina-dark/80 transition-colors duration-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-numina-dark flex items-center gap-4">
              <Martini className="text-numina-sage" /> Konyhánk & Desszertek
            </h2>
            <div className="space-y-12">
              {foodMenu.map((sec, si) => (
                <div key={si}>
                  <h3 className="uppercase text-[11px] md:text-[10px] font-bold tracking-[0.2em] text-numina-dark/30 mb-6 border-b border-black/5 pb-2">{sec.section}</h3>
                  <div className="space-y-6">
                    {sec.items.map((item, k) => (
                      <div key={k} className="group cursor-default">
                        <div className="flex justify-between items-end mb-1">
                          <span className="font-bold text-numina-dark group-hover:text-numina-sage transition-colors duration-300">{item.name}</span>
                          <span className="font-bold text-numina-sage">{item.price}</span>
                        </div>
                        <p className="text-xs text-numina-dark/60 font-light group-hover:text-numina-dark/80 transition-colors duration-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
