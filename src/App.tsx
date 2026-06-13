import { useState, useEffect } from "react";
import type { Page } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/home";
import AboutPage from "./pages/AboutPage";
import FullMenuPage from "./pages/FullMenuPage";
import FullGalleryPage from "./pages/FullGalleryPage";
import ContactPage from "./pages/ContactPage";
import AszfPage from "./pages/legal/AszfPage";
import AdatvedelemPage from "./pages/legal/AdatvedelemPage";
import ImpresszumPage from "./pages/legal/ImpresszumPage";

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
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
        <CookieBanner onNavigate={setCurrentPage} />
      </div>
    </ErrorBoundary>
  );
}
