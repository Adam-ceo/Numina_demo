export interface Review {
  id: string
  name: string
  initials: string
  rating: number
  date: string
  text: string
  service?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Kovács Péter',
    initials: 'KP',
    rating: 5,
    date: '2026-04-15',
    text: 'Nagyon elégedett vagyok! Az autóm teljesen megújult, a kárpittisztítás tökéletes lett. Ajánlom mindenkinek.',
    service: 'Kárpittisztítás',
  },
  {
    id: '2',
    name: 'Nagy Eszter',
    initials: 'NE',
    rating: 5,
    date: '2026-04-08',
    text: 'Profi munka, gyors kiszolgálás. A külső-belső tisztítás után az autóm olyan volt, mintha új lenne. Visszatérek!',
    service: 'Külső-belső tisztítás',
  },
  {
    id: '3',
    name: 'Szabó András',
    initials: 'SzA',
    rating: 5,
    date: '2026-03-22',
    text: 'Évek óta járok ide, mindig megbízható és alapos munka. A műszerfal ápolás után a belső is teljesen megváltozott.',
    service: 'Műszerfal ápolás',
  },
  {
    id: '4',
    name: 'Horváth Katalin',
    initials: 'HK',
    rating: 5,
    date: '2026-03-10',
    text: 'Télen hozattam kárpittisztításra, és valóban teljesen szárazon adták vissza. Fantasztikus eredmény!',
    service: 'Kárpittisztítás',
  },
  {
    id: '5',
    name: 'Tóth Gábor',
    initials: 'TG',
    rating: 5,
    date: '2026-02-28',
    text: 'Kiváló minőség, nagyon ügyes kezek. Az árlista is teljesen fair, semmi rejtett költség.',
  },
  {
    id: '6',
    name: 'Fekete Zsuzsanna',
    initials: 'FZs',
    rating: 5,
    date: '2026-02-14',
    text: 'Már többször jártam itt, mindig tökéletes eredmény. A gyerekek után maradt foltok is mind eltűntek.',
    service: 'Kárpittisztítás',
  },
  {
    id: '7',
    name: 'Varga Csaba',
    initials: 'VC',
    rating: 4,
    date: '2026-01-30',
    text: 'Nagyon jó munkát végeztek, az egyetlen apróság hogy a várakozási idő kicsit hosszabb volt a tervezettnél.',
    service: 'Külső-belső tisztítás',
  },
  {
    id: '8',
    name: 'Kiss Mária',
    initials: 'KM',
    rating: 5,
    date: '2026-01-20',
    text: 'Profi csapat, precíz munka. A fényszóró polírozás eredménye lélegzetelállító volt.',
  },
  {
    id: '9',
    name: 'Molnár Tamás',
    initials: 'MT',
    rating: 5,
    date: '2025-12-18',
    text: 'Karácsony előtt hoztam be az autómat ajándékba a feleségemnek. El sem hitte, hogy nem új autó. Köszönöm!',
    service: 'Külső-belső tisztítás',
  },
  {
    id: '10',
    name: 'Balogh Réka',
    initials: 'BR',
    rating: 5,
    date: '2025-12-05',
    text: 'Első alkalom volt, de biztosan nem az utolsó. Igazi szakemberek, az eredmény önmagáért beszél.',
  },
  {
    id: '11',
    name: 'Papp László',
    initials: 'PL',
    rating: 5,
    date: '2025-11-22',
    text: 'Már vagy tíz éve csak ide járok. Megbízható, precíz, barátságos. Győrben ez a legjobb kozmetika.',
  },
  {
    id: '12',
    name: 'Simon Nikolett',
    initials: 'SzN',
    rating: 5,
    date: '2025-11-10',
    text: 'A műszerfal ápolás teljesen feltámasztotta a belső teret. Mindenki azt kérdezte, új autót vettem-e.',
    service: 'Műszerfal ápolás',
  },
]

export const aggregateRating = {
  score: 4.9,
  count: 47,
  // Replace with the real numeric CID from Google Business Profile once verified.
  // Example real CID format: https://maps.google.com/?cid=12345678901234567890
  googleMapsUrl: 'https://www.google.com/maps/search/Farkas+Autókozmetika/@47.6875,17.6504,17z',
}
