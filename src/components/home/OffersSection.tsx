"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { ProductCard } from "./ProductCard";

export function OffersSection() {
  const ofertas = MOCK_PRODUCTS.filter((p) => p.enOferta);
  const trackRef = useRef<HTMLDivElement>(null);

  if (ofertas.length === 0) return null;

  const mover = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="ofertas" className="scroll-mt-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-rose-600 uppercase dark:text-rose-400">
              <FiClock className="h-3.5 w-3.5" /> Solo por hoy
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Ofertas exclusivas
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {ofertas.length} productos con descuento esperando a tu mascota
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {ofertas.map((p) => (
            <div
              key={p._id}
              className="w-64 shrink-0 snap-start sm:w-72"
            >
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
