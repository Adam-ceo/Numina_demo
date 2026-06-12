export const SITE = {
  name: "Numina Caffé",
  address: "Váci utca 12., Budapest, 1052",
  phone: "+36 30 123 4567",
  email: "hello@numina.hu",
  instagram: "https://instagram.com/numina.caffe",
  facebook: "https://facebook.com/numina.caffe",
} as const;

export const OPENING_HOURS = [
  { days: "Hétfő – Csütörtök", hours: "08:00 – 22:00", from: 1, to: 4 },
  { days: "Péntek – Szombat", hours: "08:00 – 00:00", from: 5, to: 6 },
  { days: "Vasárnap", hours: "09:00 – 21:00", from: 0, to: 0 },
] as const;
