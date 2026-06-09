import LegalPage from "./LegalPage";
import type { Page } from "../../types";

export default function AszfPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <LegalPage title="Általános Szerződési Feltételek" onNavigate={onNavigate}>
      <p className="text-xs text-numina-dark/40 mb-8">Hatályos: 2026. január 1-től</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">1. Általános rendelkezések</h2>
      <p>Jelen Általános Szerződési Feltételek (ÁSZF) a Numina Caffè Kft. (székhely: 1052 Budapest, Numinás köz 7.; adószám: 12345678-2-41; cégjegyzékszám: 01-09-123456) és a vendégek közötti jogviszonyra vonatkoznak.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">2. A szolgáltatás tárgya</h2>
      <p>A Numina Caffè vendéglátó-ipari egységként kávét, italokat, ételeket és egyéb vendéglátós szolgáltatásokat nyújt a nyitvatartási időben. Az árlap és a kínálat előzetes értesítés nélkül változhat.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">3. Foglalás és rendezvények</h2>
      <p>Asztalt és privát rendezvényterületet a hello@numina.hu e-mail-címen vagy a +36 1 123 4567 telefonszámon lehet előre egyeztetni. A Numina Caffè fenntartja a jogot a foglalás visszautasítására kapacitás és alkalmassági feltételek alapján.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">4. Felelősség</h2>
      <p>A Numina Caffè nem vállal felelősséget az előre nem látható eseményekből (vis maior), a vendég gondatlanságából, vagy a külső körülményekből eredő károkért. Elveszett tárgyakért felelősséget nem vállalunk.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">5. Panaszkezelés</h2>
      <p>Észrevételeit és panaszait a hello@numina.hu e-mail-címen vagy személyesen a helyszínen jelezheti. Törekszünk minden visszajelzésre 3 munkanapon belül reagálni.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">6. Irányadó jog</h2>
      <p>Jelen ÁSZF-re a magyar jog az irányadó. Jogvita esetén a Budai Központi Kerületi Bíróság kizárólagos illetékességgel rendelkezik.</p>
    </LegalPage>
  );
}
