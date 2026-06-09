import { Helmet } from "react-helmet-async";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import ServicesPreview from "./home/ServicesPreview";
import ReviewsPreview from "./home/ReviewsPreview";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Farkas Autókozmetika Győr — Professzionális autótisztítás</title>
        <meta
          name="description"
          content="Farkas Autókozmetika Győr — külső-belső tisztítás, kárpittisztítás, műszerfal ápolás. 12 éve a szakmában. Győr, Szent Imre u. 70."
        />
        <meta property="og:title" content="Farkas Autókozmetika Győr" />
        <meta property="og:description" content="Professzionális autókozmetika Győrben — külső-belső tisztítás, kárpittisztítás, műszerfal ápolás." />
        <meta property="og:url" content="https://farkas-autokozmetika.hu/" />
        <link rel="canonical" href="https://farkas-autokozmetika.hu/" />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <ReviewsPreview />
      <CTABanner />
    </>
  );
}
