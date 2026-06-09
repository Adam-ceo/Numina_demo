import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Oldal nem található | Farkas Autókozmetika</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6 bg-[color:var(--color-surface)]">
        <div className="text-center max-w-sm">
          <p className="text-6xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.03em] mb-4">404</p>
          <h2 className="text-xl font-semibold text-[color:var(--color-content-primary)] mb-3">
            Az oldal nem található
          </h2>
          <p className="text-sm text-[color:var(--color-content-secondary)] mb-8">
            A keresett oldal nem létezik, vagy áthelyezésre került.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[color:var(--color-accent)] text-white text-sm font-semibold hover:bg-[color:var(--color-accent-hover)] transition-colors"
          >
            <ArrowLeft size={16} />
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </>
  );
}
