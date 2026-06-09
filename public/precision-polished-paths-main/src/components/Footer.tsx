import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { to: "/", label: "Kezdőlap" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/velemenyek", label: "Vélemények" },
  { to: "/galeria", label: "Galéria" },
  { to: "/kapcsolat", label: "Kapcsolat" },
];

function getOpenStatus(): { open: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  const open8 = 8 * 60;
  const close17 = 17 * 60;
  const close16 = 16 * 60;
  const close12 = 12 * 60;

  if (day === 0) return { open: false, label: "Vasárnap zárva" };
  if (day === 5) {
    return totalMinutes >= open8 && totalMinutes < close16
      ? { open: true, label: "Nyitva · zár 16:00-kor" }
      : { open: false, label: "Ma zárva" };
  }
  if (day === 6) {
    return totalMinutes >= open8 && totalMinutes < close12
      ? { open: true, label: "Nyitva · zár 12:00-kor" }
      : { open: false, label: "Szombaton zárva" };
  }
  return totalMinutes >= open8 && totalMinutes < close17
    ? { open: true, label: "Nyitva · zár 17:00-kor" }
    : { open: false, label: "Ma zárva" };
}

export default function Footer() {
  const status = getOpenStatus();

  return (
    <footer className="bg-[color:var(--color-surface-inverse)] text-[color:var(--color-content-inverse)]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-[15px] font-semibold mb-1">Farkas Autókozmetika</p>
            <div className="flex items-center gap-1.5 mb-3">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full ${status.open ? "bg-emerald-400" : "bg-white/30"}`}
                aria-hidden="true"
              />
              <span className={`text-xs font-medium ${status.open ? "text-emerald-400" : "text-white/40"}`}>
                {status.label}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[240px]">
              Professzionális autókozmetika Győrben, 12 éve a szakmában. ★ 4.9/5
            </p>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 min-h-[44px] py-2 text-sm text-white/60 hover:text-white transition-colors"
              aria-label="Facebook oldal"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40 mb-4">
              Oldalak
            </p>
            <nav className="flex flex-col gap-1" aria-label="Lábléc navigáció">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center min-h-[44px] py-2 text-sm transition-colors w-fit ${
                      isActive ? "text-[color:var(--color-accent)]" : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40 mb-4">
              Elérhetőség
            </p>
            <div className="flex flex-col gap-1">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 min-h-[44px] py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={15} className="shrink-0 text-[color:var(--color-accent)]" />
                {contactInfo.phone}
              </a>
              <a
                href={contactInfo.emailHref}
                className="flex items-center gap-3 min-h-[44px] py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={15} className="shrink-0 text-[color:var(--color-accent)]" />
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 min-h-[44px] py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MapPin size={15} className="shrink-0 mt-1 text-[color:var(--color-accent)]" />
                {contactInfo.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Farkas Autókozmetika. Minden jog fenntartva.</p>
          <p>Győr, Szent Imre u. 70.</p>
        </div>
      </div>
    </footer>
  );
}
