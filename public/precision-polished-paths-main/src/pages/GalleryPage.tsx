import { useState, useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";

// Before/After pairs — replace with real before/after photos in production
const beforeAfterPairs = [
  {
    id: "ba-kulso",
    label: "Külső karosszéria — előtte & utána",
    beforeSrc:
      "https://images.pexels.com/photos/4116183/pexels-photo-4116183.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterSrc:
      "https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    beforeAlt: "Autó mosás előtt",
    afterAlt: "Tükörfényes karosszéria mosás után",
  },
  {
    id: "ba-karpit",
    label: "Kárpittisztítás — előtte & utána",
    beforeSrc:
      "https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterSrc:
      "https://images.pexels.com/photos/6873050/pexels-photo-6873050.jpeg?auto=compress&cs=tinysrgb&w=1200",
    beforeAlt: "Szennyezett autóülés kárpittisztítás előtt",
    afterAlt: "Tiszta ülések kárpittisztítás után",
  },
];

function useLightbox(items: typeof galleryItems) {
  const [index, setIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i !== null ? (i + 1) % items.length : null)),
    [items.length],
  );
  // ?? null guards against stale index after filtered array shrinks
  const current = index !== null ? (items[index] ?? null) : null;
  return { index, open, close, prev, next, current };
}

export default function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory>("osszes");
  const filtered = category === "osszes" ? galleryItems : galleryItems.filter((i) => i.category === category);
  const lb = useLightbox(filtered);
  const lightboxRef = useRef<HTMLDivElement>(null);

  function handleCategoryChange(cat: GalleryCategory) {
    lb.close();
    setCategory(cat);
  }

  // WCAG focus management: auto-focus the dialog when lightbox opens
  useEffect(() => {
    if (lb.index !== null) {
      lightboxRef.current?.focus();
    }
  }, [lb.index]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") lb.close();
    if (e.key === "ArrowLeft") lb.prev();
    if (e.key === "ArrowRight") lb.next();
  }

  return (
    <>
      <Helmet>
        <title>Galéria — Farkas Autókozmetika Győr</title>
        <meta
          name="description"
          content="Nézze meg elkészült munkáinkat: autótisztítás előtte-utána képek. Külső mosás, kárpittisztítás, műszerfal ápolás."
        />
        <link rel="canonical" href="https://farkas-autokozmetika.hu/galeria" />
      </Helmet>

      <PageHeader title="Galéria" lead="Elkészült munkáink — valódi eredmények." />

      {/* Before / After comparison sliders */}
      <section className="py-12 px-6 bg-[color:var(--color-surface-raised)] border-b border-[color:var(--color-border)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-2">
              Előtte — Utána
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.025em]">
              Látványos átalakulás
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-content-secondary)]">
              Húzza a csúszkát az összehasonlításhoz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterPairs.map(({ id, ...sliderProps }) => (
              <BeforeAfterSlider key={id} {...sliderProps} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-none pb-2" role="tablist">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={category === cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`shrink-0 min-h-[44px] px-4 rounded-lg text-sm font-medium transition-colors border ${
                  category === cat.value
                    ? "bg-[color:var(--color-accent)] text-white border-[color:var(--color-accent)]"
                    : "bg-[color:var(--color-surface-raised)] text-[color:var(--color-content-secondary)] hover:text-[color:var(--color-content-primary)] border-[color:var(--color-border)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => lb.open(i)}
                className="group relative overflow-hidden rounded-xl aspect-square bg-[color:var(--color-surface-raised)] border border-[color:var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)] focus-visible:ring-offset-2"
                aria-label={`Kép megtekintése: ${item.alt}`}
              >
                <img
                  src={item.thumb}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-[background-color] duration-[250ms] flex items-center justify-center">
                  <ZoomIn
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[200ms]"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lb.index !== null && lb.current !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[400] bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Képnézegető"
          onClick={lb.close}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <button
            onClick={lb.close}
            className="absolute top-4 right-4 inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Bezárás"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              lb.prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Előző kép"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lb.current.url}
              alt={lb.current.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="mt-4 flex items-center justify-between w-full px-1">
              <p className="text-sm text-white/70">{lb.current.caption}</p>
              <p className="text-sm text-white/40 tabular-nums">
                {lb.index + 1} / {filtered.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              lb.next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Következő kép"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
