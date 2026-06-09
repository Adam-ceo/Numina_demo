import { Helmet } from "react-helmet-async";
import { ExternalLink, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import { reviews, aggregateRating } from "@/data/reviews";

function StarRatingLarge({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          fill={i < Math.floor(score) ? "#FBBF24" : "none"}
          className={i < Math.floor(score) ? "text-amber-400" : "text-[color:var(--color-border)]"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Vélemények — Farkas Autókozmetika Győr</title>
        <meta
          name="description"
          content="Olvassa el ügyfeleink valódi Google véleményeit. 4.9/5 csillag 47 értékelés alapján. Professzionális autókozmetika Győrben."
        />
        <link rel="canonical" href="https://farkas-autokozmetika.hu/velemenyek" />
      </Helmet>

      <PageHeader title="Vélemények" lead="Amit ügyfeleink mondanak — valódi Google vélemények." />

      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 p-8 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)]">
            <div className="text-center sm:text-left">
              <p
                className="text-6xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.03em]"
                aria-label={`${aggregateRating.score} csillag az 5-ből`}
              >
                {aggregateRating.score}
              </p>
              <StarRatingLarge score={aggregateRating.score} />
              <p className="mt-2 text-sm text-[color:var(--color-content-tertiary)]">
                {aggregateRating.count} Google vélemény alapján
              </p>
            </div>
            <div className="sm:ml-auto">
              <a
                href={aggregateRating.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[color:var(--color-accent)] text-white text-sm font-semibold hover:bg-[color:var(--color-accent-hover)] transition-colors"
              >
                Vélemény írása
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[color:var(--color-content-secondary)] mb-4">
              Ön is velünk dolgoztatott?
            </p>
            <a
              href={aggregateRating.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-sm font-semibold text-[color:var(--color-content-primary)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              Hagyjon véleményt Google-on
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
