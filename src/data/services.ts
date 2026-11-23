export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  badge?: string | null;
  features: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-sites-institucionais",
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
  },
  {
    id: "srv-sistemas-pedidos",
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
  },
  {
    id: "srv-sistemas-sob-medida",
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
  },
];