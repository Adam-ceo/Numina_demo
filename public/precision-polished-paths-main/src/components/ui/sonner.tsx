import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

// next-themes is not installed; this project uses light mode only (Tailwind class-based dark mode is not activated).
const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    theme="light"
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-slate-500",
        actionButton:
          "group-[.toast]:bg-[#0ea5e9] group-[.toast]:text-white",
        cancelButton:
          "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500",
      },
    }}
    {...props}
  />
);

export { Toaster, toast };
