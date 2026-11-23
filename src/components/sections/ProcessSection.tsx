const STEPS = [
  {
    number: "01",
    title: "Diagnóstico e Escopo",
    description:
      "Mapeamos o fluxo do seu negócio, público-alvo e funcionalidades prioritárias para lançar rápido sem custos desnecessários.",
  },
  {
    number: "02",
    title: "Design e Desenvolvimento",
    description:
      "Construímos a interface e o banco de dados com foco em velocidade, segurança e facilidade de uso no celular ou computador.",
  },
  {
    number: "03",
    title: "Publicação e Suporte",
    description:
      "Configuramos domínio, SSL e hospedagem em produção, deixando a arquitetura preparada para novos módulos no futuro.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="como-funciona"
      className="border-y border-slate-800/70 bg-slate-900/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
            Metodologia Atule
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Do planejamento ao sistema no ar
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-6"
            >
              <span className="text-sm font-bold text-blue-500">
                ETAPA {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}