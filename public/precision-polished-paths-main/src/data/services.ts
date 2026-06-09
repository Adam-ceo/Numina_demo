export interface PriceTier {
  size: string
  label: string
  price: number
}

export interface ServiceStep {
  step: number
  title: string
  description: string
}

export interface Service {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
  steps: ServiceStep[]
  includes: string[]
  excludes: string[]
  prices: PriceTier[]
  imageUrl: string
  badge?: string
}

export const services: Service[] = [
  {
    id: 'kulso-belso',
    slug: 'kulso-belso',
    name: 'Külső-belső tisztítás',
    shortDescription: 'Teljes karosszéria mosás aktívhabos előkezeléssel, bogároldással, viaszolással és szárazra törléssel.',
    fullDescription:
      'Professzionális külső-belső autótisztítás, amely az autó minden felületét gondozza. Az aktívhabos fellazító előmosás eltávolítja a makacs szennyeződéseket, a bogároldó szer megszabadít az útborítástól. A mosás a karosszéria összes külső felületét, az ablakokat, ajtók éleit, küszöböket és a középső oszlopot is magában foglalja.',
    icon: 'car',
    steps: [
      { step: 1, title: 'Aktívhabos előkezelés', description: 'Aktívhab felvitele, amely fellazítja és eltávolítja a makacs szennyeződéseket és bogármaradványokat.' },
      { step: 2, title: 'Karosszéria mosás', description: 'Kíméletes, pH-semleges autósamponnal végzett teljes külső mosás, beleértve a falcokat, küszöböket és oszlopokat.' },
      { step: 3, title: 'Viaszolás', description: 'Prémium autóviasz felvitele, amely védi a fényezést és tartós fényt ad.' },
      { step: 4, title: 'Szárazra törlés', description: 'Mikroszálas kendővel történő, karcmentes szárazra törlés.' },
      { step: 5, title: 'Belső takarítás', description: 'Műszerfal, konzol, ajtókárpit és üvegtisztítás belülről.' },
    ],
    includes: [
      'Karosszéria teljes külső mosása',
      'Ablakok külső tisztítása',
      'Ajtók élei, küszöbök, falcok',
      'Aktívhabos előkezelés',
      'Bogároldás',
      'Prémium viaszolás',
      'Mikroszálas szárazra törlés',
      'Műszerfal és konzol törlése',
      'Belső ablakok tisztítása',
    ],
    excludes: [
      'Kárpittisztítás (külön szolgáltatás)',
      'Fényszóró polírozás',
      'Karceltávolítás',
    ],
    prices: [
      { size: 'S', label: 'Kis autó (pl. Polo, Fabia)', price: 9990 },
      { size: 'M', label: 'Középkategória (pl. Golf, Focus)', price: 12990 },
      { size: 'L', label: 'Nagy autó (pl. Passat, Mondeo)', price: 15990 },
      { size: 'SUV', label: 'SUV / Kombi (pl. Tiguan, CRV)', price: 18990 },
    ],
    imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'muszerfal',
    slug: 'muszerfal',
    name: 'Műszerfal ápolás',
    shortDescription: 'Az összes műanyag belső felület professzionális tisztítása és ápolása, beleértve a szellőzőket és réseket.',
    fullDescription:
      'Speciális műanyagtisztító szerrel kezeljük az összes belső műanyag felületet: a műszerfalat, a mutatókat, a konzolt, az ajtóborításokat és a térképzsebeket. Különös figyelmet fordítunk az illesztési hézagokra, résekre és szellőzőrostélyokra, ahonnan kézzel nem elérhető a szennyeződés.',
    icon: 'gauge',
    steps: [
      { step: 1, title: 'Porszívózás', description: 'Az összes belső felület és rés alapos porszívózása.' },
      { step: 2, title: 'Rések és hézagok tisztítása', description: 'Speciális ecsettel és levegőfúvóval a nehezen elérhető helyek megtisztítása.' },
      { step: 3, title: 'Műanyag tisztítás', description: 'pH-semleges műanyagtisztítószer felvitele és törlése az összes műanyag felületre.' },
      { step: 4, title: 'Ápolás', description: 'UV-védő műanyagápoló felvitele, amely megelőzi az anyag kiszáradását és halványodását.' },
      { step: 5, title: 'Üveg tisztítás', description: 'Belső ablakok és visszapillantó tükrök csíkmentes tisztítása.' },
    ],
    includes: [
      'Műszerfal teljes felülete',
      'Sebességváltó konzol és kartámasz',
      'Ajtóborítások és zsebek',
      'Szellőzőrostélyok (ecsettel)',
      'Illesztési hézagok megtisztítása',
      'UV-védő műanyagápoló',
      'Belső ablakok és tükrök',
      'Biztonsági öv megtisztítása',
    ],
    excludes: [
      'Kárpittisztítás (külön szolgáltatás)',
      'Bőrápolás (csak műanyag)',
      'Karosszéria külső mosása',
    ],
    prices: [
      { size: 'S', label: 'Kis autó', price: 3990 },
      { size: 'M', label: 'Középkategória', price: 5490 },
      { size: 'L', label: 'Nagy autó', price: 6990 },
      { size: 'SUV', label: 'SUV / Kombi', price: 7990 },
    ],
    imageUrl: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'karpit',
    slug: 'karpit',
    name: 'Kárpittisztítás',
    shortDescription: 'Ülések és szőnyegek porszívózása, folteltávolítás, samponozás és teljes szárítás — télen is.',
    fullDescription:
      'Teljes körű kárpittisztítás, amely az üléseket és szőnyegeket mélyből tisztítja. A folyamat porszívózással kezdődik, majd kézi erővel és speciális kárpitsamponnal távolítjuk el a foltokat és összegyűlt szennyeződéseket. A szolgáltatás télen is elérhető, teljes szárítással garantálva, hogy az autó szárazon adható vissza.',
    icon: 'armchair',
    badge: 'Télen is, teljes szárítással!',
    steps: [
      { step: 1, title: 'Alapos porszívózás', description: 'Ülések, szőnyegek, lábterek és csomagtér teljes porszívózása.' },
      { step: 2, title: 'Foltkezelés', description: 'Makacs foltok előkezelése enzimes folteltávolítóval.' },
      { step: 3, title: 'Kárpit samponozás', description: 'Speciális kárpitsamponnal kézi erővel végzett mélyítisztítás.' },
      { step: 4, title: 'Öblítés', description: 'Maradék tisztítószer eltávolítása forró vizes extrakciós géppel.' },
      { step: 5, title: 'Szárítás', description: 'Ipari szárítóberendezéssel teljes szárítás, télen is garantálva.' },
    ],
    includes: [
      'Összes ülés (elöl és hátul)',
      'Padlószőnyegek és lábterek',
      'Csomagtér szőnyeg',
      'Ajtóborítások kárpit része',
      'Folteltávolítás enzimes szerrel',
      'Mélytisztítás samponnal',
      'Teljes szárítás (télen is)',
    ],
    excludes: [
      'Bőrülések kondicionálása (bőrápolás külön)',
      'Tetőkárpit',
      'Karosszéria külső mosása',
    ],
    prices: [
      { size: 'S', label: 'Kis autó', price: 14990 },
      { size: 'M', label: 'Középkategória', price: 18990 },
      { size: 'L', label: 'Nagy autó', price: 22990 },
      { size: 'SUV', label: 'SUV / Kombi (7 üléses)', price: 28990 },
    ],
    imageUrl: 'https://images.pexels.com/photos/6873050/pexels-photo-6873050.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

export const pricingExtras = [
  { name: 'Fényszóró polírozás (pár)', price: 8990 },
  { name: 'Karceltávolítás (kisebb karcolás)', price: 4990 },
  { name: 'Motortér tisztítás', price: 5990 },
  { name: 'Bőrülés ápolás', price: 6990 },
]
