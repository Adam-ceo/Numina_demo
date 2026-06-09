export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export const coffeeMenu: MenuSection[] = [
  {
    section: "Klasszikusok",
    items: [
      { name: "Espresso / Ristretto", price: "650 Ft", desc: "Szezonális single origin kávéból." },
      { name: "Espresso Macchiato", price: "750 Ft", desc: "Krémes tejhabbal koronázva." },
      { name: "Americano", price: "850 Ft", desc: "Dupla espresso forró vízzel." },
    ],
  },
  {
    section: "A vendégek kedvencei",
    items: [
      { name: "Flat White", price: "950 Ft", desc: "A tökéletes egyensúly kávé és tejhab között." },
      { name: "Cappuccino", price: "950 Ft", desc: "Lágy, krémes hab, ahogy Olaszországban tanultuk." },
      { name: "Caffe Latte", price: "1.150 Ft", desc: "Hosszabb élvezet, akár növényi tejjel is." },
    ],
  },
  {
    section: "Különlegességek",
    items: [
      { name: "Cold Brew Extrakt", price: "1.250 Ft", desc: "18 órán át hidegen áztatva, jegesen szervírozva." },
      { name: "Málnás-Rózsás Latte", price: "1.450 Ft", desc: "Aszalt málna és természetes rózsakivonat." },
    ],
  },
];

export const foodMenu: MenuSection[] = [
  {
    section: "Helyben készített",
    items: [
      { name: "Pisztáciás Sajttorta", price: "1.450 Ft", desc: "Kézzel rétegzett krémsajt alap, pörkölt pisztácia morzsával és házi karamellel." },
      { name: "Málnás-Belga Csokitorta", price: "1.550 Ft", desc: "70%-os étcsokoládé és friss málna ragu." },
      { name: "Vegán Almás-Diós Süti", price: "1.250 Ft", desc: "Hozzáadott cukor nélkül, hazai dióból." },
    ],
  },
  {
    section: "Brunch Válogatás",
    items: [
      { name: "Szarvasgombás Tojáslepény", price: "2.950 Ft", desc: "Friss fűszerekkel és kézműves kenyérrel." },
      { name: "Numina Bagel", price: "2.250 Ft", desc: "Lax, krémsajt, kapor és friss madársaláta." },
    ],
  },
  {
    section: "Hűsítők",
    items: [
      { name: "Házi Bodzaszörp", price: "950 Ft", desc: "A mi kertünkből szedett bodzából." },
      { name: "Uborkás Gintonik", price: "2.450 Ft", desc: "Tanqueray gin és prémium tonik." },
    ],
  },
];

export const menuPreviewItems: MenuItem[] = [
  { name: "Flat White", price: "950 Ft", desc: "A tökéletes egyensúly kávé és tejhab között." },
  { name: "Pisztáciás Sajttorta", price: "1.450 Ft", desc: "Kézzel rétegzett krémsajt alap, pörkölt pisztácia morzsával és házi karamellel." },
  { name: "Cold Brew Extrakt", price: "1.250 Ft", desc: "18 órán át hidegen áztatva, jegesen szervírozva." },
  { name: "Uborkás Gintonik", price: "2.450 Ft", desc: "Tanqueray gin és prémium tonik." },
];
