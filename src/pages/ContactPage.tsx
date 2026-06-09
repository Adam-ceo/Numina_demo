import React, { useState } from "react";
import { Clock, MapPin, Instagram, Facebook, ChevronRight, Mail, Share2 } from "lucide-react";
import { motion } from "motion/react";
import PageLayout from "../components/layout/PageLayout";
import { SITE } from "../config/site";

export default function ContactPage() {
  const [form, setForm] = useState({ nev: "", email: "", uzenet: "" });
  const [errors, setErrors] = useState<{ nev?: string; email?: string; uzenet?: string }>({});
  const [sent, setSent] = useState(false);

  const validateField = (field: keyof typeof form, value: string): string | undefined => {
    if (field === "nev" && !value.trim()) return "A név megadása kötelező.";
    if (field === "email" && (!value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return "Adj meg egy érvényes e-mail címet.";
    if (field === "uzenet" && (!value.trim() || value.trim().length < 10)) return "Az üzenet legalább 10 karakter legyen.";
    return undefined;
  };

  const validate = () => {
    const e: typeof errors = {};
    const nevErr = validateField("nev", form.nev);
    const emailErr = validateField("email", form.email);
    const uzenetErr = validateField("uzenet", form.uzenet);
    if (nevErr) e.nev = nevErr;
    if (emailErr) e.email = emailErr;
    if (uzenetErr) e.uzenet = uzenetErr;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const mailto = `mailto:${SITE.email}?subject=Kapcsolatfelvétel – ${encodeURIComponent(form.nev)}&body=${encodeURIComponent(`Feladó: ${form.nev}\nE-mail: ${form.email}\n\n${form.uzenet}`)}`;
    const a = document.createElement("a");
    a.href = mailto;
    a.click();
    setSent(true);
  };

  const inputClass = (field: keyof typeof errors) =>
    `w-full bg-white px-5 py-4 rounded-xl outline-none focus:ring-4 focus:ring-numina-sage/10 border transition-[border-color,box-shadow] shadow-sm placeholder:text-numina-dark/20 ${errors[field] ? "border-red-300 focus:ring-red-100" : "border-numina-dark/5"}`;

  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="text-center lg:text-left">
          <span className="text-numina-sage font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 md:mb-6 block">Hol érsz el minket?</span>
          <h1 className="text-4xl md:text-6xl font-bold text-numina-dark leading-tight mb-8 md:mb-12">
            Lépj velünk <br /><span className="text-numina-sage italic lg:not-italic">kapcsolatba.</span>
          </h1>

          <div className="space-y-8 md:space-y-12 max-w-lg mx-auto lg:mx-0 text-left">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-numina-grey/50 rounded-2xl flex items-center justify-center shrink-0 border border-numina-dark/5">
                <MapPin className="text-numina-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-numina-dark mb-2">Címünk</h4>
                <p className="text-numina-dark/50 leading-relaxed text-base md:text-lg">{SITE.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-numina-sage hover:underline"
                >
                  Megnyitás térképen <ChevronRight size={12} />
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-numina-grey/50 rounded-2xl flex items-center justify-center shrink-0 border border-numina-dark/5">
                <Clock className="text-numina-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-numina-dark mb-4">Nyitvatartás</h4>
                <div className="text-numina-dark/60 text-sm md:text-base space-y-3">
                  {[
                    { days: "Hétfő – Csütörtök", hours: "08:00 – 22:00" },
                    { days: "Péntek – Szombat", hours: "08:00 – 00:00" },
                    { days: "Vasárnap", hours: "09:00 – 21:00" },
                  ].map(({ days, hours }) => (
                    <div key={days} className="flex justify-between w-full max-w-[320px] border-b border-numina-dark/5 pb-2 gap-8">
                      <span className="font-medium text-numina-dark/70 shrink-0">{days}</span>
                      <span className="font-medium text-numina-dark whitespace-nowrap">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-numina-grey/50 rounded-2xl flex items-center justify-center shrink-0 border border-numina-dark/5">
                <Share2 className="text-numina-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-numina-dark mb-2">Kövess minket</h4>
                <p className="text-numina-dark/50 mb-4 text-sm">Legfrissebb ajánlataink és eseményeink.</p>
                <div className="flex flex-col gap-3">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-numina-sage font-bold hover:underline group/link">
                    <Instagram size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-numina-dark/70 group-hover/link:text-numina-sage transition-colors">@numina_budapest</span>
                  </a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-numina-sage font-bold hover:underline group/link">
                    <Facebook size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-numina-dark/70 group-hover/link:text-numina-sage transition-colors">Numina Budapest</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-numina-grey/30 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-numina-dark/5 h-fit text-left shadow-inner">
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-16 h-16 bg-numina-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-numina-sage" />
              </div>
              <h3 className="text-2xl font-bold text-numina-dark mb-3">Megnyílt az e-mail kliensed</h3>
              <p className="text-numina-dark/50 text-sm leading-relaxed">
                Az üzeneted készen áll küldésre. Ha nem tudtad elküldeni, írj közvetlenül:{" "}
                <a href={`mailto:${SITE.email}`} className="text-numina-sage font-medium hover:underline">{SITE.email}</a>
              </p>
              <button
                onClick={() => { setSent(false); setForm({ nev: "", email: "", uzenet: "" }); }}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-numina-dark/40 hover:text-numina-sage transition-colors"
              >
                Új üzenet írása
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-8 italic text-numina-dark font-serif">Miben segíthetünk?</h3>
              <p className="text-numina-dark/50 mb-10 text-sm leading-relaxed font-light">Érdeklődnél rendezvényről, vagy csak köszönni szeretnél? Írj nekünk bátran!</p>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nev" className="text-[10px] uppercase font-bold text-numina-dark/40 tracking-widest ml-1">Név</label>
                  <input id="nev" type="text" value={form.nev}
                    onChange={e => { setForm(f => ({ ...f, nev: e.target.value })); setErrors(er => ({ ...er, nev: undefined })); }}
                    onBlur={e => { const err = validateField("nev", e.target.value); if (err) setErrors(er => ({ ...er, nev: err })); }}
                    className={inputClass("nev")} placeholder="Minta Péter" />
                  {errors.nev && <p className="text-red-400 text-xs ml-1">{errors.nev}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold text-numina-dark/40 tracking-widest ml-1">E-mail</label>
                  <input id="email" type="email" value={form.email}
                    onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: undefined })); }}
                    onBlur={e => { const err = validateField("email", e.target.value); if (err) setErrors(er => ({ ...er, email: err })); }}
                    className={inputClass("email")} placeholder="mintapeter@pelda.hu" />
                  {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="uzenet" className="text-[10px] uppercase font-bold text-numina-dark/40 tracking-widest ml-1">Üzenet</label>
                  <textarea id="uzenet" value={form.uzenet}
                    onChange={e => { setForm(f => ({ ...f, uzenet: e.target.value })); setErrors(er => ({ ...er, uzenet: undefined })); }}
                    onBlur={e => { const err = validateField("uzenet", e.target.value); if (err) setErrors(er => ({ ...er, uzenet: err })); }}
                    className={`${inputClass("uzenet")} h-32 resize-none`} placeholder="Miben segíthetünk?" />
                  {errors.uzenet && <p className="text-red-400 text-xs ml-1">{errors.uzenet}</p>}
                </div>
                <button type="submit" className="w-full py-5 bg-numina-dark text-white rounded-xl font-bold flex items-center justify-center gap-3 group hover:bg-numina-sage transition-all duration-300 shadow-xl hover:shadow-numina-sage/20 hover:-translate-y-1 active:scale-[0.98]">
                  <span>Üzenet küldése</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </PageLayout>
  );
}
