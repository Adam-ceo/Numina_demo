import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, Instagram, Facebook } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import Logo from "./ui/Logo";
import type { Page, NavigateFn } from "../types";
import { NAV_LINKS } from "../types";
import { SITE } from "../config/site";

interface NavbarProps {
  currentPage: Page;
  onNavigate: NavigateFn;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isMobileMenuOpen]);

  return (
    <div ref={navRef} className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
      <nav className="mt-4 md:mt-6 w-[94%] max-w-[1100px] bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[20px] px-6 md:px-10 flex flex-col text-numina-dark border border-white/20 pointer-events-auto ring-1 ring-black/[0.03]">
        <div className="py-2 md:py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onNavigate("home")}>
            <Logo size="sm" />
          </div>

          <div className="hidden md:flex gap-10 items-center text-[13px] font-medium">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as Page)}
                className={`transition-all duration-300 relative py-1 group/link ${
                  currentPage === link.id ? "text-numina-sage" : "text-numina-dark opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-numina-sage transition-transform duration-500 origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 ${
                  currentPage === link.id ? "scale-x-100" : ""
                }`} />
              </button>
            ))}
          </div>

          <button
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <m.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </m.div>
              ) : (
                <m.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </m.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-6 border-t border-black/5 flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <m.button
                    key={link.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.055, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => { onNavigate(link.id as Page); setIsMobileMenuOpen(false); }}
                    className={`group flex items-center justify-between py-3.5 border-b border-black/5 last:border-0 transition-colors duration-300 ${
                      currentPage === link.id ? "text-numina-sage" : "text-numina-dark/60 hover:text-numina-dark"
                    }`}
                  >
                    <span className="text-base font-medium tracking-tight">{link.label}</span>
                    <ChevronRight
                      size={14}
                      className={`transition-all duration-300 group-hover:translate-x-1 ${
                        currentPage === link.id ? "opacity-100 text-numina-sage" : "opacity-0 group-hover:opacity-40"
                      }`}
                    />
                  </m.button>
                ))}

                <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-numina-sage font-bold mb-1">Nyitva ma</p>
                    <p className="text-xs text-numina-dark/60 font-light">{SITE.hours.weekday}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Numina Caffé Instagram"
                      className="w-9 h-9 rounded-xl border border-numina-dark/10 flex items-center justify-center text-numina-dark/40 hover:bg-numina-sage hover:text-white hover:border-numina-sage transition-all duration-300">
                      <Instagram size={15} />
                    </a>
                    <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Numina Caffé Facebook"
                      className="w-9 h-9 rounded-xl border border-numina-dark/10 flex items-center justify-center text-numina-dark/40 hover:bg-numina-sage hover:text-white hover:border-numina-sage transition-all duration-300">
                      <Facebook size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
