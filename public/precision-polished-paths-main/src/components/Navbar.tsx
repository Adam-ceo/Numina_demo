import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { to: "/", label: "Kezdőlap" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/velemenyek", label: "Vélemények" },
  { to: "/galeria", label: "Galéria" },
  { to: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // WCAG 2.1.2: focus trap + Escape key for the mobile drawer dialog
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = Array.from(
      drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    focusable[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;
  const navBg = transparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-[12px] border-b border-[color:var(--color-border)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] h-16 transition-[background-color,border-color] duration-[250ms] ${navBg}`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <NavLink
            to="/"
            className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
              transparent ? "text-white" : "text-[color:var(--color-content-primary)]"
            }`}
          >
            Farkas Autókozmetika
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Főmenü">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[color:var(--color-accent)]"
                      : transparent
                      ? "text-white/80 hover:text-white"
                      : "text-[color:var(--color-content-secondary)] hover:text-[color:var(--color-content-primary)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={contactInfo.phoneHref}
            className="hidden md:flex items-center gap-2 h-11 px-4 rounded-lg bg-[color:var(--color-accent)] text-white text-sm font-semibold hover:bg-[color:var(--color-accent-hover)] active:bg-[color:var(--color-accent-active)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)] focus-visible:ring-offset-2"
          >
            <Phone size={15} strokeWidth={2.5} />
            {contactInfo.phone}
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-[color:var(--color-content-primary)] hover:bg-[color:var(--color-surface-raised)]"
            }`}
            aria-label="Menü megnyitása"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-haspopup="dialog"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[300] md:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        role="dialog"
        id="mobile-nav-panel"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Navigációs menü"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-[250ms] ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel — focus trap target */}
        <div
          ref={drawerRef}
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white flex flex-col border-l border-[color:var(--color-border)] transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[color:var(--color-border)]">
            <span className="text-[15px] font-semibold text-[color:var(--color-content-primary)]">
              Farkas Autókozmetika
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md text-[color:var(--color-content-secondary)] hover:bg-[color:var(--color-surface-raised)] transition-colors"
              aria-label="Menü bezárása"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 flex flex-col gap-1" aria-label="Mobilmenü">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center min-h-[44px] px-4 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)]"
                      : "text-[color:var(--color-content-secondary)] hover:bg-[color:var(--color-surface-raised)] hover:text-[color:var(--color-content-primary)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-4 pb-8">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[color:var(--color-accent)] text-white text-[15px] font-semibold hover:bg-[color:var(--color-accent-hover)] transition-colors"
            >
              <Phone size={18} strokeWidth={2.5} />
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
