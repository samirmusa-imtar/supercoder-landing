import Link from "next/link";
import { footerContent } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-800 py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-semibold">{footerContent.partner}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {footerContent.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
