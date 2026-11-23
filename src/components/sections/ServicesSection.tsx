import Link from "next/link";

export interface ServiceCardData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  badge?: string | null;
  features: string[];
  idealFor: string;
}

interface ServicesSectionProps {
  services: ServiceCardData[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="solucoes" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
            O que desenvolvemos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluções digitais para cada estágio da sua empresa
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Desde a presença profissional na internet até sistemas completos com
            painel administrativo, pedidos e perfis de acesso.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/50 hover:bg-slate-900/80"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="shrink-0 rounded-full bg-blue-600/20 px-2.5 py-0.5 text-[11px] font-semibold text-blue-400">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.shortDescription}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-800 pt-5 text-sm text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-4">
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Indicado para:</strong>{" "}
                  {service.idealFor}
                </p>
                <Link
                  href={`?servico=${service.slug}#contato`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Contratar esta solução
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}