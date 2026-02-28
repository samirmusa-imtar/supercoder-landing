import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function PillButton({
  children,
  href,
  variant = "primary",
  className = "",
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary:
      "bg-gradient-to-l from-indigo-600 to-purple-600 text-white shadow-sm hover:opacity-95 hover:shadow",
    secondary:
      "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
    ghost:
      "border border-slate-300 bg-white text-slate-700 hover:border-purple-deep/40 hover:bg-slate-50",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
