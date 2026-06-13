import { m } from "motion/react";
import PageLayout from "../components/layout/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout maxWidth="4xl">
      <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}>
        <span className="text-numina-sage-deep font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8 block text-center md:text-left">A mi történetünk</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-numina-dark leading-[1.1] mb-12 md:mb-16 text-center md:text-left">
          Budapest szívében, <br /><span className="text-numina-sage italic">szívvel lélekkel.</span>
        </h1>

        <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl mb-12 md:mb-24">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&fm=webp&w=1400"
            width={1400} height={875}
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Numina Caffè kávézó belső tere Budapesten"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="prose prose-lg text-numina-dark/70 font-light leading-relaxed space-y-8 md:space-y-12 max-w-none text-base md:text-lg">
          <p>
            A Numina története nem egy üzleti tervvel, hanem két budapesti barát álmával kezdődött 2019-ben. Anna és Márk évekig Európa nagyvárosait járták, ahol a helyi kávéházi kultúra legjavát figyelték meg – de valahogy Budapestről mindig hiányzott az a hely, ami nem csak egy kávézó, hanem egy "harmadik otthon" is.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 py-8 md:py-10 border-y border-numina-dark/5 my-8 md:my-12">
            <div className="text-left">
              <h2 className="text-numina-dark font-bold mb-4 uppercase tracking-wider text-xs">A „Numen" jelenléte</h2>
              <p className="text-sm leading-relaxed">A név - Numina - a latin numen szóból ered, ami a természetben lakozó, tiszta szellemi jelenlétet jelöli. Ezt a békét hoztuk el a budapesti belváros szívébe.</p>
            </div>
            <div className="text-left">
              <h2 className="text-numina-dark font-bold mb-4 uppercase tracking-wider text-xs">Mindent a minőségért</h2>
              <p className="text-sm leading-relaxed">Saját pörkölésű kávénk mellett minden süteményünk helyi kistermelők alapanyagaiból, tartósítószer-mentesen készül minden nap.</p>
            </div>
          </div>

          <p>
            Hiszünk abban, hogy a rohanó világunkban szükség van olyan terekre, ahol a technológia háttérbe szorul, és az emberi kapcsolódások kerülnek előtérbe. A Numina kényelmes bőr foteljei, a sűrű növényzet és a lágy jazz zene mind azt szolgálja, hogy nálunk mindenki megtalálja a belső békéjét.
          </p>

          <p className="font-medium text-numina-dark italic text-center text-xl md:text-2xl pt-6 md:pt-10">
            "Nem csak kávét főzünk – közösséget építünk."
          </p>
        </div>
      </m.div>
    </PageLayout>
  );
}
