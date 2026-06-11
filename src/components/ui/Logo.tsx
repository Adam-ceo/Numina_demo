import logoUrl from "../../assets/logo.webp";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const px = size === "sm" ? 40 : size === "md" ? 52 : 72;
  return (
    <img
      src={logoUrl}
      alt="Numina Caffé"
      width={px}
      height={px}
      className="select-none transition-transform duration-700 group-hover:scale-110"
      draggable={false}
    />
  );
}
