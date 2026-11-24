"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioItem } from "@/data/portfolio";

/** Resolução "virtual" do monitor: o site é renderizado neste tamanho e reduzido. */
const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 800;

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LiveScreen({ url, title }: { url: string; title: string }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / SCREEN_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={screenRef}
      className="relative w-full overflow-hidden bg-slate-950"
      style={{ aspectRatio: `${SCREEN_WIDTH} / ${SCREEN_HEIGHT}` }}
    >
      {scale > 0 && (
        <iframe
          src={url}
          title={`Prévia ao vivo de ${title}`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            transform: `scale(${scale})`,
          }}
        />
      )}

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-blue-500" />
        </div>
      )}
    </div>
  );
}

function MonitorCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir o site ${item.name} em uma nova aba`}
      className="group block w-[85%] shrink-0 snap-start outline-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      {/* Monitor */}
      <div className="rounded-xl border border-slate-700 bg-slate-800 p-2 shadow-xl shadow-black/40 transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/60 group-focus-visible:border-blue-500">
        {/* Barra do navegador */}
        <div className="flex items-center gap-1.5 rounded-t-md bg-slate-900 px-2.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
          <span className="ml-2 flex-1 truncate rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
            {hostname(item.url)}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            ao vivo
          </span>
        </div>

        <div className="relative overflow-hidden rounded-b-md">
          <LiveScreen url={item.url} title={item.name} />
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
            <span className="mb-4 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white">
              Visitar site ↗
            </span>
          </div>
        </div>
      </div>

      {/* Pé do monitor */}
      <div className="mx-auto h-4 w-16 bg-gradient-to-b from-slate-700 to-slate-800" />
      <div className="mx-auto h-1.5 w-32 rounded-full bg-slate-700" />

      {/* Legenda */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        {item.description && (
          <p className="mt-1 text-sm text-slate-400">{item.description}</p>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-600/15 px-2.5 py-0.5 text-[11px] font-semibold text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setCanPrev(track.scrollLeft > 4);
      setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [items.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: "smooth" });
  };

  if (items.length === 0) return null;

  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
              Portfólio
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sites que já estão no ar
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Cada tela abaixo carrega o site real, ao vivo. Clique para visitar.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Projeto anterior"
              className={arrowClass}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Próximo projeto"
              className={arrowClass}
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <MonitorCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
