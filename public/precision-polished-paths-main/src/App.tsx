import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ReviewsPage from "@/pages/ReviewsPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/szolgaltatasok" element={<ServicesPage />} />
          <Route path="/velemenyek" element={<ReviewsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/kapcsolat" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}
