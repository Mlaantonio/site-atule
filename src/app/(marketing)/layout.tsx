import Link from "next/link";
import Image from "next/image";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar clara para destacar o logotipo Atule */}
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
            <Link href="#solucoes" className="transition hover:text-[#0088E8]">
              Soluções
            </Link>
            <Link
              href="#como-funciona"
              className="transition hover:text-[#0088E8]"
            >
              Como Funciona
            </Link>
            <Link href="#contato" className="transition hover:text-[#0088E8]">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Na Fase 2, este link apontará para /login */}
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

      {/* Conteúdo Principal */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Atule"
              width={100}
              height={36}
              className="h-8 w-auto"
            />
            <span className="text-xs text-slate-500">
              — Soluções em Tecnologia
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © 2026 Atule Soluções em Tecnologia. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}