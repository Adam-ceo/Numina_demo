export type Page =
  | "home"
  | "about"
  | "menu"
  | "gallery"
  | "contact"
  | "aszf"
  | "adatvedelem"
  | "impresszum";

export const NAV_LINKS = [
  { id: "home", label: "Kezdőlap" },
  { id: "about", label: "Történetünk" },
  { id: "menu", label: "Kínálat" },
  { id: "gallery", label: "Galéria" },
  { id: "contact", label: "Kapcsolat" },
] as const;
