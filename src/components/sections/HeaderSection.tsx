import Link from "next/link";
import Image from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

/** Itens do menu principal. Para adicionar/remover links, edite esta lista. */
export const NAV_LINKS: NavLink[] = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

interface HeaderSectionProps {
  links?: NavLink[];
}

export function HeaderSection({ links = NAV_LINKS }: HeaderSectionProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Atule Soluções em Tecnologia"
            width={135}
            height={48}
            priority
            className="h-10 w-auto sm:h-11"
          />
          <span className="hidden border-l border-slate-300 pl-3 text-xs font-medium text-slate-600 lg:inline-block">
            Soluções em Tecnologia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#0088E8]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contato"
            className="hidden rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
          >
            Área do Cliente
          </Link>
          <Link
            href="#contato"
            className="rounded-lg bg-[#0088E8] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0073C6] sm:text-sm"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
