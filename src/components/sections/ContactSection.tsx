"use client";

import { useState } from "react";
import type { ServiceCardData } from "./ServicesSection";

interface ContactSectionProps {
  services: ServiceCardData[];
  defaultServiceSlug?: string;
}

export function ContactSection({
  services,
  defaultServiceSlug,
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Na próxima etapa, substituiremos este handler por uma Server Action com Prisma
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
            Solicite uma proposta
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Vamos estruturar o projeto da sua empresa
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Preencha os dados abaixo. Retornamos com uma avaliação técnica e
            prazo estimado.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <p className="text-base font-semibold text-emerald-300">
                Solicitação recebida com sucesso!
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Nossa equipe analisará as informações e entrará em contato pelo
                WhatsApp informado.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Seu nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Mendes"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-xs font-medium text-slate-300"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(00) 90000-0000"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    E-mail profissional
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="contato@suaempresa.com.br"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Solução de interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={defaultServiceSlug}
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  >
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.slug}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-medium text-slate-300"
                >
                  Detalhes do projeto
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  placeholder="Descreva o que sua empresa precisa (ex: site institucional, catálogo com pedidos online, área restrita para clientes...)"
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
              >
                Enviar solicitação de orçamento
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}