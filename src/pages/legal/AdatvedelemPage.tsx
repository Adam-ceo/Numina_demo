import type { NavigateFn } from "../../types";
import LegalPage from "./LegalPage";

export default function AdatvedelemPage({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <LegalPage title="Adatvédelmi Tájékoztató" onNavigate={onNavigate}>
      <p className="text-xs text-numina-dark/70 mb-8">Utolsó módosítás: 2026. január 1. — Az EU 2016/679 rendeletének (GDPR) megfelelően</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">1. Az adatkezelő</h2>
      <p>Numina Caffè Kft. | 1052 Budapest, Numinás köz 7. | hello@numina.hu | +36 1 123 4567</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">2. Kezelt adatok és célok</h2>
      <p><strong>Kapcsolatfelvétel:</strong> Ön által megadott név és e-mail cím, kizárólag a megkeresés megválaszolásához. Megőrzési idő: 1 év.</p>
      <p><strong>Hírlevél:</strong> E-mail cím, önkéntes hozzájárulás alapján. Bármikor leiratkozhat a hírlevélben szereplő linkre kattintva.</p>
      <p><strong>Süti (cookie):</strong> Az oldal munkamenet-sütit és alapvető funkcionális sütit használ. Analitikai sütit kizárólag hozzájárulás esetén alkalmaz.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">3. Az érintett jogai</h2>
      <p>Ön jogosult hozzáférni az adataihoz, kérni azok helyesbítését, törlését, az adatkezelés korlátozását, valamint tiltakozhat az adatkezelés ellen. Kéréseit a hello@numina.hu e-mail-címre küldheti, amelyre 30 napon belül válaszolunk.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">4. Jogorvoslat</h2>
      <p>Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (naih.hu) fordulhat.</p>
    </LegalPage>
  );
}
