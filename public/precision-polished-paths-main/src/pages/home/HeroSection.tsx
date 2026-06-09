import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { aggregateRating } from "@/data/reviews";
import heroImage from "@/assets/hero.jpg";

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[center_40%]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 w-full">
        <div className="max-w-[580px]">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-5">
            Győr, Szent Imre u. 70. · 12 éve a szakmában
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.08] tracking-[-0.03em]">
            Tükörfényes eredmény.
            <br />
            <span className="text-[color:var(--color-accent)]">Minden alkalommal.</span>
          </h1>

          <p className="mt-6 text-[15px] text-white/75 leading-relaxed max-w-[460px]">
            Győr legtöbbet visszatérő autósa is nálunk tisztíttat. Külső-belső mosás,
            kárpittisztítás és műszerfal ápolás — prémium minőségben, megfizethető áron.
          </p>

          {/* Social proof badge */}
          <a
            href={aggregateRating.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2 hover:bg-white/15 transition-colors"
            aria-label={`${aggregateRating.score} csillag, ${aggregateRating.count} Google vélemény alapján`}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-[13px] font-semibold text-white">{aggregateRating.score}</span>
            <span className="text-[13px] text-white/60">· {aggregateRating.count} Google vélemény</span>
          </a>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/kapcsolat"
              className="relative flex items-center gap-2 h-12 px-6 rounded-xl bg-[color:var(--color-accent)] text-white font-semibold hover:bg-[color:var(--color-accent-hover)] active:bg-[color:var(--color-accent-active)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Időpontot kérek
            </Link>

            <Link
              to="/szolgaltatasok"
              className="flex items-center gap-2 h-12 px-6 rounded-xl bg-white/15 backdrop-blur-sm text-white font-semibold hover:bg-white/25 transition-colors border border-white/30"
            >
              Szolgáltatások és árak
              <ArrowRight size={16} />
            </Link>
          </div>

          <a
            href={contactInfo.phoneHref}
            className="mt-6 inline-flex items-center gap-2 min-h-[44px] py-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <Phone size={14} />
            {contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5" aria-hidden="true">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30">Görgetés</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
