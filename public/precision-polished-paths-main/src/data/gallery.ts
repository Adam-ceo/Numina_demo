export type GalleryCategory = 'osszes' | 'kulso' | 'karpit' | 'muszerfal'

export interface GalleryItem {
  id: string
  url: string
  thumb: string
  alt: string
  category: GalleryCategory
  caption?: string
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'osszes', label: 'Összes' },
  { value: 'kulso', label: 'Külső tisztítás' },
  { value: 'karpit', label: 'Kárpittisztítás' },
  { value: 'muszerfal', label: 'Műszerfal ápolás' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó karosszéria mosás aktívhabbal',
    category: 'kulso',
    caption: 'Aktívhabos előkezelés',
  },
  {
    id: 'g2',
    url: 'https://images.pexels.com/photos/6873050/pexels-photo-6873050.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/6873050/pexels-photo-6873050.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Kárpittisztítás gőzöléssel',
    category: 'karpit',
    caption: 'Kárpit mélytisztítás',
  },
  {
    id: 'g3',
    url: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó belső tér műszerfal ápolás',
    category: 'muszerfal',
    caption: 'Műszerfal ápolás eredménye',
  },
  {
    id: 'g4',
    url: 'https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó fényes karosszéria viaszolás után',
    category: 'kulso',
    caption: 'Viaszolás utáni fény',
  },
  {
    id: 'g5',
    url: 'https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó belső ülések kárpittisztítás',
    category: 'karpit',
    caption: 'Hátsó ülések tisztítás előtt és után',
  },
  {
    id: 'g6',
    url: 'https://images.pexels.com/photos/4116183/pexels-photo-4116183.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/4116183/pexels-photo-4116183.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Részletes autó kerék tisztítás',
    category: 'kulso',
    caption: 'Kerék és felnye tisztítás',
  },
  {
    id: 'g7',
    url: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Prémium autó részletező polírozás',
    category: 'kulso',
    caption: 'Polírozás prémium viaszolással',
  },
  {
    id: 'g8',
    url: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'SUV belső kárpit samponozás',
    category: 'karpit',
    caption: 'SUV kárpit mélytisztítás',
  },
  {
    id: 'g9',
    url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó részletező belső fényesítés',
    category: 'muszerfal',
    caption: 'Konzol és műszerfal részletes ápolás',
  },
  {
    id: 'g10',
    url: 'https://images.pexels.com/photos/6872039/pexels-photo-6872039.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/6872039/pexels-photo-6872039.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó ablakok csíkmentes tisztítása',
    category: 'muszerfal',
    caption: 'Belső ablakok csíkmentes tisztítás',
  },
  {
    id: 'g11',
    url: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fényes fekete autó mosás után',
    category: 'kulso',
    caption: 'Végeredmény — tükörfényes karosszéria',
  },
  {
    id: 'g12',
    url: 'https://images.pexels.com/photos/4307571/pexels-photo-4307571.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumb: 'https://images.pexels.com/photos/4307571/pexels-photo-4307571.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Autó ülések extrakciós kárpittisztítás',
    category: 'karpit',
    caption: 'Extrakciós kárpittisztítás',
  },
]
