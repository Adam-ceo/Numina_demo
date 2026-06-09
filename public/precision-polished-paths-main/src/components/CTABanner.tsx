import { Phone, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "@/data/contact";
import { aggregateRating } from "@/data/reviews";

export default function CTABanner() {
  return (
    <section className="bg-[color:var(--color-accent)] py-16 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <Star size={14} fill="white" className="text-white opacity-80" />
            <span className="text-sm font-medium text-white/80">
              {aggregateRating.score} · {aggregateRating.count} elégedett ügyfél Google-on
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em]">
            Szabad időpontok — foglaljon még ma
          </h2>
          <p className="mt-2 text-white/75 text-[15px]">
            Hívjon bennünket, vagy töltse ki az online foglalóűrlapot pár perc alatt.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 h-12 px-5 rounded-xl bg-white text-[color:var(--color-accent)] text-[15px] font-semibold hover:bg-white/92 active:bg-white/85 transition-colors"
          >
            <Phone size={16} strokeWidth={2.5} />
            {contactInfo.phone}
          </a>
          <Link
            to="/kapcsolat"
            className="flex items-center gap-2 h-12 px-5 rounded-xl bg-white/15 text-white text-[15px] font-semibold hover:bg-white/25 transition-colors border border-white/30"
          >
            Online foglalás
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
