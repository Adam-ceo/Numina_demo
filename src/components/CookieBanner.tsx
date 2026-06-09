import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Page } from "../types";

interface CookieBannerProps {
  onNavigate: (p: Page) => void;
}

export default function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [visible, setVisible] = useState(() => localStorage.getItem("numina_cookie") !== "accepted");

  const accept = () => {
    localStorage.setItem("numina_cookie", "accepted");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-2xl bg-numina-dark text-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl"
      >
        <p className="text-xs font-light leading-relaxed text-white/70 flex-1">
          Az oldal funkcionális sütiket használ. Részletek az{" "}
          <button
            onClick={() => onNavigate("adatvedelem")}
            className="underline text-white/90 hover:text-numina-sage transition-colors"
          >
            Adatvédelmi tájékoztatóban
          </button>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-numina-sage hover:bg-numina-sage/80 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all"
        >
          Elfogadom
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
