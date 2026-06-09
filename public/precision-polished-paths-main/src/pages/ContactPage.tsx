import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { contactInfo, openingHours } from "@/data/contact";
import { services } from "@/data/services";
import { toast } from "@/components/ui/sonner";

// EmailJS integration — uncomment and configure when ready:
// import emailjs from "@emailjs/browser";
// const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormState = "idle" | "submitting" | "success";

interface FormData {
  nev: string;
  telefon: string;
  szolgaltatas: string;
  datum: string;
  uzenet: string;
  website: string; // honeypot — bots fill this, humans don't see it
}

interface FormErrors {
  nev?: string;
  telefon?: string;
  szolgaltatas?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nev.trim()) errors.nev = "A név megadása kötelező.";
  if (!data.telefon.trim()) {
    errors.telefon = "A telefonszám megadása kötelező.";
  } else if (!/^[0-9\s+\-()]{7,}$/.test(data.telefon)) {
    errors.telefon = "Érvényes telefonszámot adjon meg.";
  }
  if (!data.szolgaltatas) errors.szolgaltatas = "Kérjük válasszon szolgáltatást.";
  return errors;
}

export default function ContactPage() {
  const mountedAt = useRef(Date.now());
  const [form, setForm] = useState<FormData>({
    nev: "",
    telefon: "",
    szolgaltatas: "",
    datum: "",
    uzenet: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const name = e.target.name;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = { nev: true, telefon: true, szolgaltatas: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Spam protection: silently succeed if honeypot filled or submitted too fast
    if (form.website !== "" || Date.now() - mountedAt.current < 3000) {
      setState("success");
      return;
    }

    setState("submitting");

    // EmailJS integration (uncomment when SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY are set):
    // try {
    //   await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    //     nev: form.nev,
    //     telefon: form.telefon,
    //     szolgaltatas: form.szolgaltatas,
    //     datum: form.datum,
    //     uzenet: form.uzenet,
    //   }, EMAILJS_PUBLIC_KEY);
    // } catch {
    //   setState("idle");
    //   toast.error("Hiba történt", { description: "Kérjük hívjon minket közvetlenül." });
    //   return;
    // }

    setTimeout(() => {
      setState("success");
      toast.success("Köszönjük!", {
        description: "Hamarosan felhívjuk a megadott telefonszámon.",
        duration: 6000,
      });
    }, 1200);
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full h-11 px-3 rounded-md border text-sm text-[color:var(--color-content-primary)] bg-[color:var(--color-surface-sunken)] outline-none transition-colors placeholder:text-[color:var(--color-content-tertiary)] focus-visible:ring-2 focus-visible:ring-offset-0 ${
      touched[field] && errors[field]
        ? "border-[color:var(--color-error)] focus-visible:ring-[color:var(--color-error)]/30"
        : touched[field] && !errors[field]
        ? "border-[color:var(--color-success)] focus-visible:ring-[color:var(--color-success)]/30"
        : "border-[color:var(--color-border)] focus:border-[color:var(--color-accent)] focus-visible:ring-[color:var(--color-border-focus)]/30"
    }`;

  return (
    <>
      <Helmet>
        <title>Kapcsolat — Farkas Autókozmetika Győr</title>
        <meta
          name="description"
          content="Vegye fel velünk a kapcsolatot, vagy foglaljon időpontot online. Telefon: +36 30 395 1007. Cím: Győr, Szent Imre u. 70."
        />
        <link rel="canonical" href="https://farkas-autokozmetika.hu/kapcsolat" />
      </Helmet>

      <PageHeader title="Kapcsolat" lead="Hívjon minket vagy töltse ki az alábbi űrlapot." />

      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)] hover:border-[color:var(--color-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.06em] text-[color:var(--color-content-tertiary)] mb-1">Telefon</p>
                    <p className="text-sm font-semibold text-[color:var(--color-content-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={contactInfo.emailHref}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)] hover:border-[color:var(--color-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.06em] text-[color:var(--color-content-tertiary)] mb-1">E-mail</p>
                    <p className="text-sm font-semibold text-[color:var(--color-content-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
                <a
                  href={contactInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)] hover:border-[color:var(--color-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-accent-subtle)] text-[color:var(--color-accent)] flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.06em] text-[color:var(--color-content-tertiary)] mb-1">Cím</p>
                    <p className="text-sm font-semibold text-[color:var(--color-content-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
                      {contactInfo.address}
                    </p>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)]">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[color:var(--color-accent)]" />
                  <p className="text-sm font-semibold text-[color:var(--color-content-primary)]">Nyitvatartás</p>
                </div>
                <table className="w-full" aria-label="Nyitvatartás">
                  <tbody>
                    {openingHours.map((row) => (
                      <tr key={row.day} className="border-b border-[color:var(--color-border-subtle)] last:border-0">
                        <td className="py-2 text-sm text-[color:var(--color-content-secondary)]">{row.day}</td>
                        <td
                          className={`py-2 text-sm text-right font-medium ${
                            row.hours === "Zárva"
                              ? "text-[color:var(--color-content-tertiary)]"
                              : "text-[color:var(--color-content-primary)]"
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)] aspect-[4/3]">
                <iframe
                  title="Farkas Autókozmetika térképen"
                  src={contactInfo.googleMapsEmbed}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </div>

            <div>
              <div className="p-8 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-raised)]">
                <h2 className="text-xl font-bold text-[color:var(--color-content-primary)] tracking-[-0.015em] mb-2">
                  Időpontfoglalás
                </h2>
                <p className="text-sm text-[color:var(--color-content-secondary)] mb-6">
                  Töltse ki az alábbi űrlapot, és hamarosan felhívjuk.
                </p>

                {state === "success" ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[color:var(--color-success)]/10 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-[color:var(--color-success)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-[color:var(--color-content-primary)] mb-2">
                      Köszönjük!
                    </h3>
                    <p className="text-sm text-[color:var(--color-content-secondary)] leading-relaxed max-w-[280px]">
                      Megkaptuk üzenetét. Hamarosan felhívjuk a megadott telefonszámon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Honeypot: off-screen, aria-hidden, tabIndex=-1 — bots fill, humans skip */}
                    <div
                      className="absolute -left-[9999px] top-0 overflow-hidden h-0 w-0"
                      aria-hidden="true"
                    >
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        value={form.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label htmlFor="nev" className="block text-sm font-medium text-[color:var(--color-content-primary)] mb-2">
                        Név <span className="text-[color:var(--color-error)]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="nev"
                        name="nev"
                        type="text"
                        value={form.nev}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Pl. Kovács Péter"
                        autoComplete="name"
                        className={inputClass("nev")}
                        aria-required="true"
                        aria-invalid={touched.nev && !!errors.nev}
                        aria-describedby={errors.nev ? "nev-error" : undefined}
                      />
                      {touched.nev && errors.nev && (
                        <p id="nev-error" role="alert" className="mt-2 text-xs text-[color:var(--color-error)]">
                          {errors.nev}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-[color:var(--color-content-primary)] mb-2">
                        Telefonszám <span className="text-[color:var(--color-error)]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={form.telefon}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+36 30 000 0000"
                        autoComplete="tel"
                        className={inputClass("telefon")}
                        aria-required="true"
                        aria-invalid={touched.telefon && !!errors.telefon}
                        aria-describedby={errors.telefon ? "telefon-error" : undefined}
                      />
                      {touched.telefon && errors.telefon && (
                        <p id="telefon-error" role="alert" className="mt-2 text-xs text-[color:var(--color-error)]">
                          {errors.telefon}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="szolgaltatas" className="block text-sm font-medium text-[color:var(--color-content-primary)] mb-2">
                        Szolgáltatás <span className="text-[color:var(--color-error)]" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="szolgaltatas"
                        name="szolgaltatas"
                        value={form.szolgaltatas}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass("szolgaltatas")} appearance-none`}
                        aria-required="true"
                        aria-invalid={touched.szolgaltatas && !!errors.szolgaltatas}
                        aria-describedby={errors.szolgaltatas ? "szolgaltatas-error" : undefined}
                      >
                        <option value="">Válasszon szolgáltatást...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {touched.szolgaltatas && errors.szolgaltatas && (
                        <p id="szolgaltatas-error" role="alert" className="mt-2 text-xs text-[color:var(--color-error)]">
                          {errors.szolgaltatas}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="datum" className="block text-sm font-medium text-[color:var(--color-content-primary)] mb-2">
                        Preferált időpont
                      </label>
                      <input
                        id="datum"
                        name="datum"
                        type="date"
                        value={form.datum}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full h-11 px-3 rounded-md border border-[color:var(--color-border)] text-sm text-[color:var(--color-content-primary)] bg-[color:var(--color-surface-sunken)] outline-none transition-colors focus:border-[color:var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)]/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="uzenet" className="block text-sm font-medium text-[color:var(--color-content-primary)] mb-2">
                        Üzenet{" "}
                        <span className="text-[color:var(--color-content-tertiary)] font-normal">(opcionális)</span>
                      </label>
                      <textarea
                        id="uzenet"
                        name="uzenet"
                        rows={4}
                        value={form.uzenet}
                        onChange={handleChange}
                        placeholder="Esetleges megjegyzések, speciális kérések..."
                        className="w-full px-3 py-3 rounded-md border border-[color:var(--color-border)] text-sm text-[color:var(--color-content-primary)] bg-[color:var(--color-surface-sunken)] outline-none transition-colors placeholder:text-[color:var(--color-content-tertiary)] focus:border-[color:var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)]/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="w-full h-12 rounded-xl bg-[color:var(--color-accent)] text-white font-semibold hover:bg-[color:var(--color-accent-hover)] active:bg-[color:var(--color-accent-active)] disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-border-focus)] focus-visible:ring-offset-2"
                    >
                      {state === "submitting" ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 size={16} className="animate-spin" />
                          Küldés...
                        </span>
                      ) : (
                        "Időpontot kérek"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
