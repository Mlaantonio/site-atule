import { prisma } from "@/lib/prisma";
import { SERVICES } from "@/data/services";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PORTFOLIO } from "@/data/portfolio";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const revalidate = 900;

async function getServices() {
  try {
    const dbServices = await prisma.service.findMany({
      where: { active: true },
      orderBy: { displayOrder: "asc" },
    });

    if (dbServices.length > 0) {
      return dbServices;
    }
  } catch {
    // Fallback estático
  }

  return SERVICES;
}

export default async function HomePage() {
  const servicesList = await getServices();

  return (
    <MarketingShell>
      <HeaderSection />
      <HeroSection />
      <ServicesSection services={servicesList} />
      <PortfolioSection items={PORTFOLIO} />
      <ProcessSection />
      <ContactSection services={servicesList} />
    </MarketingShell>
  );
}