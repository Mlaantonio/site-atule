"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let targetTime = 0;
    let animationFrameId: number;

    // Calcula o progresso da rolagem dentro da seção (0 a 1)
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Quanto já foi rolado a partir do topo da seção
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      if (video.duration && !Number.isNaN(video.duration)) {
        targetTime = progress * video.duration;
      }
    };

    // Loop contínuo que aproxima suavemente o currentTime do targetTime
    const renderLoop = () => {
      if (video && video.readyState >= 2 && video.duration) {
        const diff = targetTime - video.currentTime;
        // Atualiza apenas quando houver variação perceptível
        if (Math.abs(diff) > 0.01) {
          video.currentTime += diff * 0.25;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Garante que os metadados (duração) estejam carregados e desbloqueia o primeiro frame no mobile
    const handleLoadedMetadata = () => {
      video.pause();
      handleScroll();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      // A altura de 260vh define o "tempo" de rolagem enquanto o vídeo fica fixo na tela
      className="relative h-[260vh] border-b border-slate-800/70 bg-slate-950"
    >
      {/* Container Sticky que permanece travado na viewport durante a rolagem */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Vídeo em tela cheia no fundo */}
        <video
          ref={videoRef}
          src="/hero-scroll.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Filtro escuro em camadas para destacar perfeitamente o texto branco */}
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />

        {/* Conteúdo textual sobreposto */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0088E8]/50 bg-[#0088E8]/15 px-3.5 py-1 text-xs font-semibold text-[#52B6FF] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0088E8]" />
              Atule Soluções em Tecnologia
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Sites rápidos e sistemas de pedidos que{" "}
              <span className="text-[#0088E8]">impulsionam seu negócio.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
              Desenvolvemos páginas institucionais otimizadas para o Google,
              catálogos de pedidos online e plataformas personalizadas com
              controle de clientes e perfis de acesso.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contato"
                className="rounded-lg bg-[#0088E8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0088E8]/30 transition hover:bg-[#0073C6]"
              >
                Solicitar orçamento gratuito
              </Link>
              <Link
                href="#solucoes"
                className="rounded-lg border border-slate-500/60 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-slate-900/90"
              >
                Explorar soluções
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador discreto de rolagem na base da tela */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
          <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
            Role para explorar
          </span>
        </div>
      </div>
    </section>
  );
}