export interface GalleryImage {
  src: string;
  title: string;
  category: string;
  featured: boolean;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", title: "Botanikus belső tér", category: "belső", featured: true },
  { src: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80&w=800", title: "Reggeli hangulat", category: "belső", featured: false },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", title: "Specialty pörkölés", category: "kávé", featured: false },
  { src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800", title: "Tejhab művészet", category: "kávé", featured: true },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", title: "Botanikus koktél", category: "koktél", featured: false },
  { src: "https://images.unsplash.com/photo-1759244328512-e4a9128150f4?auto=format&fit=crop&q=80&w=800", title: "Közösség a Numinában", category: "hangulat", featured: true },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", title: "Latte art mesterfokon", category: "kávé", featured: false },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800", title: "Budapest szívében", category: "belső", featured: false },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "mind", label: "Minden" },
  { id: "belső", label: "Belső tér" },
  { id: "kávé", label: "Kávé" },
  { id: "koktél", label: "Koktél" },
  { id: "hangulat", label: "Hangulat" },
];

export const GALLERY_HOME_ITEMS: Pick<GalleryImage, 'src' | 'title'>[] = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", title: "Botanikus belső tér" },
  { src: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80&w=800", title: "Kézműves koktélok" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", title: "Latte art mesterfokon" },
];
