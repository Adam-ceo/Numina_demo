## Cél

A feltöltött `autokozmetika-build` projekt integrálása a Lovable repóba (5 oldalas React Router alkalmazás a Farkas Autókozmetika Győr számára), majd a felsorolt 7 ismert hiba javítása és teljes önaudit végrehajtása.

## 1. Projekt integráció

- A jelenlegi `src/` placeholder tartalmát lecserélem a feltöltött zip tartalmára:
  - `src/App.tsx` — React Router 5 oldallal (Home, Services, Gallery, Reviews, Contact, NotFound)
  - `src/index.css` — design tokenek a `.design/DESIGN_TOKENS.css`-ből, plus `prefers-reduced-motion` blokk
  - `src/components/` — Navbar, Footer, ServiceCard, ReviewCard, CTABanner, PageHeader, SkipLink
  - `src/data/` — services, reviews, gallery, contact (változatlanul)
  - `src/pages/` — 5 oldal + `home/` szekciók
- `index.html` meta/title frissítés magyar nyelvre
- Szükség esetén `tailwindcss-animate` eltávolítása helyett natív CSS megoldás (lásd #6)

## 2. Ismert hibák javítása

| # | Fájl | Változtatás |
|---|------|-------------|
| 1 | Navbar.tsx | Telefon CTA `h-9` → `h-11` (44px WCAG) |
| 2 | ServiceCard.tsx | `transition-all` → `transition-[transform,box-shadow]` |
| 3 | ServiceCard.tsx | Badge `rounded-full` → `rounded` (4px) |
| 4 | HeroSection.tsx | Pexels CDN URL → lokális `src/assets/hero.jpg` (megbízható autókozmetika kép), `object-position: center 40%` marad |
| 5 | Navbar.tsx | Hamburger `p-2` → `min-w-[44px] min-h-[44px]` |
| 6 | Navbar.tsx | Drawer `animate-in slide-in-from-right` → natív `translate-x-full` ↔ `translate-x-0` `transition-transform duration-250` |
| 7 | ContactPage.tsx | Map embed → `https://maps.google.com/maps?q=Farkas+Autokozmetika+Gyor+Szent+Imre+u+70&output=embed` |

## 3. Általános önaudit (minden tsx-en)

- **Tipográfia:** Inter ellenőrzés, body ≤16px, heading hierarchia (H1 csak hero), uppercase labelek `tracking-[0.06em]`
- **Színek:** arbitrary hex → token, accent (ice blue) csak CTA + aktív állapot
- **Spacing:** csak 8pt-multiple értékek (8/12/16/20/24…), section py ≥ 64px desktop
- **Animáció:** csak `transform`, `box-shadow`, `color`, `background-color` átmenet; `transition: all` tilos sehol; `animate-ping` pulse dot a hero CTA-n marad; `prefers-reduced-motion` letiltja
- **Kártyák:** egységes `rounded-xl` (12px) + `border border-[--color-border]`, hover `translateY(-2px)` + shadow
- **Form/A11y:** látható `<label>`, `focus-visible:ring-2`, disabled `opacity-60`, `aria-describedby` hibákhoz
- **Mobil tap target:** minden interaktív elem ≥44×44px (footer linkek `py-2`)
- **Árnyékok:** nagy egyrétegű fekete shadow tilos — szeparációhoz 1px border

## 4. Kimenet

A javítás végén egy összefoglaló a chatben:
- kategóriánként (ismert hibák / tipográfia / szín / spacing / animáció / kártya / form-a11y / tap target) hány problémát találtam és javítottam
- külön szekció: ha akadt javíthatatlan probléma a core concept sérülése nélkül

## Amit nem érintek

5 oldalas struktúra, `src/data/` tartalom, CSS token nevek/értékek, komponens prop interfészek, magyar szövegek, valós cégadatok, navbar scroll transparency, hero pulse dot.
