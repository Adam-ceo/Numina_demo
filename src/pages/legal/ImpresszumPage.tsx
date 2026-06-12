import type { NavigateFn } from "../../types";
import LegalPage from "./LegalPage";

export default function ImpresszumPage({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <LegalPage title="Impresszum" onNavigate={onNavigate}>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">A vállalkozás adatai</h2>
      <div className="space-y-2">
        <p><span className="font-medium text-numina-dark">Cégnév:</span> Numina Caffè Kft.</p>
        <p><span className="font-medium text-numina-dark">Székhely:</span> 1052 Budapest, Numinás köz 7.</p>
        <p><span className="font-medium text-numina-dark">Cégjegyzékszám:</span> 01-09-123456</p>
        <p><span className="font-medium text-numina-dark">Adószám:</span> 12345678-2-41</p>
        <p><span className="font-medium text-numina-dark">Képviselő:</span> Anna Kovács (ügyvezető)</p>
      </div>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">Elérhetőség</h2>
      <div className="space-y-2">
        <p><span className="font-medium text-numina-dark">E-mail:</span> <a href="mailto:hello@numina.hu" className="text-numina-sage-deep hover:underline">hello@numina.hu</a></p>
        <p><span className="font-medium text-numina-dark">Telefon:</span> +36 1 123 4567</p>
      </div>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">Weboldal</h2>
      <p>A weboldal üzemeltetője: Numina Caffè Kft.</p>
      <p>Tárhelyszolgáltató: Vercel Inc. — 440 N Barranca Avenue #4133, Covina, CA 91723, USA</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">Szerzői jog</h2>
      <p>Az oldalon található tartalmak (szöveg, képek, arculat) szerzői jogi védelem alatt állnak. Engedély nélküli felhasználásuk tilos.</p>
      <h2 className="text-lg font-bold text-numina-dark mt-8 mb-3">Fényképek</h2>
      <p>Az oldalon szereplő egyes képek az Unsplash.com platformon keresztül licencelt, szabadon felhasználható fotók.</p>
    </LegalPage>
  );
}
