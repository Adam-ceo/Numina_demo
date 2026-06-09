export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[600] focus:px-4 focus:py-2 focus:bg-[color:var(--color-accent)] focus:text-white focus:rounded-md focus:outline-none"
    >
      Ugrás a tartalomra
    </a>
  );
}
