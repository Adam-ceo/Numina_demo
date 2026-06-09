import type { NavigateFn } from "../../types";
import Hero from "./Hero";
import ExperienceSection from "./ExperienceSection";
import MenuPreview from "./MenuPreview";
import GallerySection from "./GallerySection";

interface HomePageProps {
  onNavigate: NavigateFn;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ExperienceSection onNavigate={onNavigate} />
      <MenuPreview onNavigate={onNavigate} />
      <GallerySection onNavigate={onNavigate} />
    </>
  );
}
