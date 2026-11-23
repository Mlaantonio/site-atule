import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const INITIAL_SERVICES = [
  {
    slug: "sites-para-pequenas-empresas",
    title: "Sites Profissionais & Landing Pages",
    shortDescription:
      "Presença digital rápida, responsiva e otimizada para o Google (SEO) para atrair clientes locais e gerar orçamentos todos os dias.",
    badge: "Mais procurado",
    features: [
      "Design moderno adaptado para celular e desktop",
      "Otimização de velocidade e SEO local",
      "Integração direta com WhatsApp e formulários",
      "Certificado SSL e hospedagem de alta disponibilidade",
    ],
    idealFor: "Prestadores de serviço, clínicas, escritórios e comércios locais",
    displayOrder: 1,
  },
  {
    slug: "sistemas-de-pedidos-online",
    title: "Sistemas de Pedidos & Catálogo Digital",
    shortDescription:
      "Receba pedidos sem depender de taxas abusivas de marketplaces. Controle produtos, variações, frete e status em um painel exclusivo.",
    badge: null,
    features: [
      "Cardápio ou catálogo digital interativo",
      "Painel administrativo para gestão de pedidos em tempo real",
      "Cálculo automático de entrega e formas de pagamento",
      "Histórico de clientes e relatórios de vendas",
    ],
    idealFor: "Distribuidoras, restaurantes, lojas de bairro e atacadistas",
    displayOrder: 2,
  },
  {
    slug: "sistemas-web-sob-medida",
    title: "Sistemas Web & Automação Sob Medida",
    shortDescription:
      "Substitua planilhas manuais por plataformas web seguras com cadastro de clientes, ordens de serviço e perfis de acesso.",
    badge: null,
    features: [
      "Controle de acesso por perfil (Administrador, Equipe, Cliente)",
      "Banco de dados relacional seguro e escalável",
      "Geração de relatórios, PDFs e integração via API",
      "Suporte contínuo e evolução modular",
    ],
    idealFor: "Assistências técnicas, pequenas indústrias e operações B2B",
    displayOrder: 3,
  },
];

async function main() {
  for (const service of INITIAL_SERVICES) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log("Serviços iniciais sincronizados com sucesso.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });