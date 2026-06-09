import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import { reviews, aggregateRating } from "@/data/reviews";

export default function ReviewsPreview() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-[color:var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-2">
              Vélemények
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.025em]">
              Mit mondanak ügyfeleink
            </h2>
          </div>

          <a
            href={aggregateRating.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 min-h-[44px] px-4 py-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)] hover:border-[color:var(--color-accent)] transition-colors shrink-0"
            aria-label={`${aggregateRating.score} csillag ${aggregateRating.count} vélemény alapján — Google Maps`}
          >
            <Star size={15} className="text-amber-400" fill="#FBBF24" />
            <span className="text-sm font-bold text-[color:var(--color-content-primary)]">
              {aggregateRating.score}
            </span>
            <span className="text-sm text-[color:var(--color-content-secondary)]">
              · {aggregateRating.count} vélemény
            </span>
            <span className="text-xs text-[color:var(--color-content-tertiary)] font-medium">Google</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/velemenyek"
            className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-sm font-medium text-[color:var(--color-content-secondary)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            Összes vélemény megtekintése
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
