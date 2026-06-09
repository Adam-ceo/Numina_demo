import React, { useState, useEffect, Suspense } from "react";
import type { Page } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/home";

const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const FullMenuPage = React.lazy(() => import("./pages/FullMenuPage"));
const FullGalleryPage = React.lazy(() => import("./pages/FullGalleryPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const AszfPage = React.lazy(() => import("./pages/legal/AszfPage"));
const AdatvedelemPage = React.lazy(() => import("./pages/legal/AdatvedelemPage"));
const ImpresszumPage = React.lazy(() => import("./pages/legal/ImpresszumPage"));

const PAGE_TITLES: Record<Page, string> = {
  home: "Numina Caffé — Specialty kávé & botanical bar Budapest szívében",
  about: "Történetünk | Numina Caffé",
  menu: "Étel- és Itallapunk | Numina Caffé",
  gallery: "Galéria | Numina Caffé",
  contact: "Kapcsolat | Numina Caffé",
  aszf: "Általános Szerződési Feltételek | Numina Caffé",
  adatvedelem: "Adatvédelmi Tájékoztató | Numina Caffé",
  impresszum: "Impresszum | Numina Caffé",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "about": return <AboutPage />;
      case "menu": return <FullMenuPage />;
      case "gallery": return <FullGalleryPage />;
      case "contact": return <ContactPage />;
      case "aszf": return <AszfPage onNavigate={setCurrentPage} />;
      case "adatvedelem": return <AdatvedelemPage onNavigate={setCurrentPage} />;
      case "impresszum": return <ImpresszumPage onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen selection:bg-numina-sage selection:text-white overflow-x-hidden flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-grow">
          <Suspense fallback={null}>{renderPage()}</Suspense>
        </main>
        <Footer onNavigate={setCurrentPage} />
        <CookieBanner onNavigate={setCurrentPage} />
      </div>
    </ErrorBoundary>
  );
}
