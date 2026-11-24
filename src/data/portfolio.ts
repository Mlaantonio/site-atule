export interface PortfolioItem {
  /** Nome exibido abaixo do monitor */
  name: string;
  /** URL completa do site (abre em nova aba e é carregada ao vivo no card) */
  url: string;
  /** Frase curta sobre o projeto (opcional) */
  description?: string;
  /** Etiquetas exibidas no card (opcional) */
  tags?: string[];
}

/**
 * Para adicionar um novo site ao portfólio, basta incluir um item nesta lista.
 * Obs.: o site precisa permitir ser exibido em iframe (sem X-Frame-Options
 * DENY/SAMEORIGIN ou CSP frame-ancestors restritivo).
 */
export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Legumina",
    url: "https://www.legumina.com.br",
    description: "Site institucional e catálogo de produtos.",
    tags: ["Site", "Catálogo"],
  },
  {
    name: "Different Pipocas",
    url: "https://differentpipocas.com.br",
    description: "Presença digital e vitrine de produtos.",
    tags: ["Site", "Vitrine"],
  },
];
