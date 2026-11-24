import Image from "next/image";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>

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
            © 2026 Atule Soluções em Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}