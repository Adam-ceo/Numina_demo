import React from "react";
import { Coffee, Martini, Flower2 } from "lucide-react";
import { m } from "motion/react";
import type { Page, NavigateFn } from "../../types";

interface Experience {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  img: string;
  align: "left" | "right";
  page: Page;
}

interface ExperienceSectionProps {
  onNavigate: NavigateFn;
}

const experiences: Experience[] = [
  {
    id: "01",
    icon: <Coffee size={20} />,
    title: "Mesteri Specialty",
    desc: "Saját pörkölésű, válogatott kávébabokból készült italok minden reggel Budapest szívében. Precíz technológia és szakértelem találkozása.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    align: "left",
    page: "menu",
  },
  {
    id: "02",
    icon: <Flower2 size={20} />,
    title: "Botanikus Oázis",
    desc: "Sűrű növényzet és természetes fény – a nyugalom és a feltöltődés szigete nálunk, ahol a természet beköltözik a városi térbe.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    align: "right",
    page: "about",
  },
  {
    id: "03",
    icon: <Martini size={20} />,
    title: "Szezonális Koktélok",
    desc: "Kézműves italok és botanikus spritzek az esti közösségi élményekhez. Egyedi receptek, amelyek minden évszakban megújulnak.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    align: "left",
    page: "menu",
  },
];

export default function ExperienceSection({ onNavigate }: ExperienceSectionProps) {
  return (
    <section className="py-20 md:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 xl:mb-32">
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-numina-sage font-bold mb-4 md:mb-6"
          >
            A Numina Filozófia
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-numina-dark max-w-3xl leading-tight md:leading-[1.05] tracking-tight"
          >
            Ahol a természet és a <br />
            <span className="font-serif italic font-normal text-numina-sage">városi elegancia</span> találkozik.
          </m.h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32 xl:gap-48">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`flex flex-col ${exp.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20 xl:gap-32`}
            >
              <div className={`w-full md:w-[48%] lg:w-1/2 relative order-1 ${exp.align === "left" ? "md:order-1" : "md:order-2"}`}>
                <m.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                  className="aspect-[4/5] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-2xl relative z-10 shadow-2xl"
                >
                  <img
                    srcSet={`${exp.img}?auto=format&fit=crop&q=70&fm=webp&w=480 480w,
                             ${exp.img}?auto=format&fit=crop&q=70&fm=webp&w=800 800w,
                             ${exp.img}?auto=format&fit=crop&q=70&fm=webp&w=1200 1200w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={`${exp.img}?auto=format&fit=crop&q=70&fm=webp&w=1200`}
                    alt={exp.title}
                    referrerPolicy="no-referrer"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={1200} height={900}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-numina-dark/5 mix-blend-multiply" />
                </m.div>

                <m.div
                  initial={{ opacity: 0, x: exp.align === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 0.5, x: exp.align === "left" ? -20 : 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className={`absolute -bottom-8 md:-bottom-10 ${exp.align === "left" ? "-left-8 md:-left-10" : "-right-8 md:-right-10"} w-2/3 h-2/3 border border-numina-sage/20 rounded-2xl -z-0`}
                />
              </div>

              <div className={`w-full md:w-[52%] lg:w-1/2 order-2 ${exp.align === "left" ? "md:order-2" : "md:order-1"}`}>
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="text-5xl md:text-6xl xl:text-8xl font-serif italic text-numina-sage/10 mb-4 md:mb-6 xl:mb-8 block select-none">
                    {exp.id}
                  </span>
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="text-numina-sage p-2.5 md:p-3 bg-numina-sage/5 rounded-full">
                      {exp.icon}
                    </div>
                    <div className="h-px w-8 md:w-12 bg-numina-sage/20" />
                  </div>
                  <h3 className="text-2xl md:text-4xl xl:text-5xl font-bold text-numina-dark mb-4 md:mb-8 tracking-tight">{exp.title}</h3>
                  <p className="text-numina-dark/70 text-base xl:text-lg leading-relaxed font-light mb-8 md:mb-12 max-w-md">
                    {exp.desc}
                  </p>
                  <button
                    onClick={() => onNavigate(exp.page)}
                    className="group flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-numina-dark hover:text-numina-sage transition-colors duration-300"
                  >
                    Fedezd fel
                    <div className="w-8 h-px bg-numina-dark/20 group-hover:w-12 group-hover:bg-numina-sage transition-[width,background-color] duration-500" />
                  </button>
                </m.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
