import { prisma } from "@/lib/prisma";
import { SERVICES } from "@/data/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface HomePageProps {
  searchParams: Promise<{ servico?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { servico } = await searchParams;

  let servicesList = SERVICES;

  try {
    const dbServices = await prisma.service.findMany({
      where: { active: true },
      orderBy: { displayOrder: "asc" },
    });

    if (dbServices.length > 0) {
      servicesList = dbServices;
    }
  } catch {
    // Mantém fallback estático caso o banco esteja inacessível durante o build
  }

  return (
    <>
      <HeroSection />
      <ServicesSection services={servicesList} />
      <ProcessSection />
      <ContactSection services={servicesList} defaultServiceSlug={servico} />
    </>
  );
}