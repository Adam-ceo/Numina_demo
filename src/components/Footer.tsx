import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";
import Logo from "./ui/Logo";
import type { Page } from "../types";

interface FooterProps {
  onNavigate: (p: Page) => void;
}

const links: Array<{ id: Page; label: string }> = [
  { id: "home", label: "Kezdőlap" },
  { id: "about", label: "Történetünk" },
  { id: "menu", label: "Kínálat" },
  { id: "gallery", label: "Galéria" },
  { id: "contact", label: "Kapcsolat" },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-numina-dark/5 pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 text-numina-dark">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 md:mb-20 text-center md:text-left">
          <div className="md:col-span-2 space-y-8 md:space-y-10 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 group cursor-pointer w-fit" onClick={() => onNavigate("home")}>
              <Logo size="lg" />
            </div>
            <p className="text-numina-dark/70 leading-relaxed max-w-sm font-light text-sm italic">
              "Egy hely, ahol a természetes harmónia és a minőségi kávéköltemények találkoznak. Várunk Budapest legszebb botanikus cafféjában."
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/numina_budapest" target="_blank" rel="noopener noreferrer" aria-label="Numina Budapest Instagram" className="w-10 h-10 rounded-xl border border-numina-dark/10 flex items-center justify-center hover:bg-numina-sage hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/numinabudapest" target="_blank" rel="noopener noreferrer" aria-label="Numina Budapest Facebook" className="w-10 h-10 rounded-xl border border-numina-dark/10 flex items-center justify-center hover:bg-numina-sage hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-[11px] uppercase tracking-[0.2em] font-bold text-numina-sage mb-6 md:mb-8">Navigáció</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-numina-dark/60">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="w-fit hover:text-numina-sage transition-colors text-left mx-auto md:mx-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-[11px] uppercase tracking-[0.2em] font-bold text-numina-sage mb-6 md:mb-8">Elérhetőség</h4>
            <div className="space-y-6 font-light text-numina-dark/70 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-numina-sage w-4 h-4 shrink-0 mt-0.5" />
                <p>1052 Budapest, Váci utca 12.</p>
              </div>
              <a href="mailto:hello@numina.hu" className="flex gap-3 hover:text-numina-sage transition-colors">
                <Mail className="text-numina-sage w-4 h-4 shrink-0 mt-0.5" />
                <p>hello@numina.hu</p>
              </a>
              <a href="tel:+36301234567" className="flex gap-3 hover:text-numina-sage transition-colors">
                <Phone className="text-numina-sage w-4 h-4 shrink-0 mt-0.5" />
                <p>+36 30 123 4567</p>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-numina-dark/5 text-numina-dark/40 text-[10px] font-medium flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Numina Caffè. Minden jog fenntartva.</p>
          <div className="flex gap-10">
            <button onClick={() => onNavigate("adatvedelem")} className="hover:text-numina-dark transition-colors uppercase tracking-widest">Adatvédelem</button>
            <button onClick={() => onNavigate("impresszum")} className="hover:text-numina-dark transition-colors uppercase tracking-widest">Impresszum</button>
            <button onClick={() => onNavigate("aszf")} className="hover:text-numina-dark transition-colors uppercase tracking-widest">ÁSZF</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
