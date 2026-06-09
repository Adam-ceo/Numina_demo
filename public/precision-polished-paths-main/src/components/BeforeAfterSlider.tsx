import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(48);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(Math.max(2, Math.min(98, ((clientX - left) / width) * 100)));
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
  };
  const stopDrag = () => {
    dragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mouseup", stopDrag);
    return () => window.removeEventListener("mouseup", stopDrag);
  }, []);

  // Keyboard accessibility: ← → arrow keys move the divider
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(2, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(98, p + 2));
  };

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-content-tertiary)]">
          {label}
        </p>
      )}
      <div
        ref={containerRef}
        role="slider"
        aria-valuemin={2}
        aria-valuemax={98}
        aria-valuenow={Math.round(position)}
        aria-label="Előtte-Utána összehasonlítás — húzza a csúszkát"
        tabIndex={0}
        className="relative overflow-hidden rounded-xl select-none cursor-col-resize aspect-[16/9] border border-[color:var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)] focus-visible:ring-offset-2"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
        onTouchMove={onTouchMove}
        onKeyDown={onKeyDown}
      >
        {/* After image — full background */}
        <img
          src={afterSrc}
          alt={afterAlt}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image — clipped to reveal position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Drag handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-[color:var(--color-accent)]"
              aria-hidden="true"
            >
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        {/* Corner labels */}
        <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/55 px-2 py-1 rounded pointer-events-none">
          Előtte
        </span>
        <span className="absolute bottom-3 right-3 text-[11px] font-bold text-white bg-black/55 px-2 py-1 rounded pointer-events-none">
          Utána
        </span>
      </div>
      <p className="text-xs text-[color:var(--color-content-tertiary)] text-center">
        Húzza a csúszkát az összehasonlításhoz
      </p>
    </div>
  );
}
