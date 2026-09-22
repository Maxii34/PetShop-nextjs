"use client";

import { useMemo, useState } from "react";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { ProductCard } from "./ProductCard";

const FILTROS = ["Todos", "Perro", "Gato", "Ave", "Roedor", "Otro"] as const;

export function ProductsSection() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");
  const [soloOfertas, setSoloOfertas] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const filtrados = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => {
      if (filtro !== "Todos" && p.tipoAnimal !== filtro) return false;
      if (soloOfertas && !p.enOferta) return false;
      if (
        busqueda &&
        !`${p.nombre} ${p.marca} ${p.categoria}`
          .toLowerCase()
          .includes(busqueda.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filtro, soloOfertas, busqueda]);

  return (
    <section id="catalogo" className="scroll-mt-20 bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
            Catálogo
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Lo mejor para tus compañeros
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
            {filtrados.length}{" "}
            {filtrados.length === 1 ? "producto" : "productos"} para descubrir
            · maqueta con datos de ejemplo
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre, marca o categoría…"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-indigo-500/20"
          />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {FILTROS.map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => setFiltro(op)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filtro === op
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              }`}
            >
              {op === "Todos" ? "Todos" : op + "s"}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSoloOfertas((v) => !v)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              soloOfertas
                ? "bg-indigo-600 text-white dark:bg-indigo-500"
                : "border border-dashed border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300"
            }`}
          >
            % Solo ofertas
          </button>
        </div>

        {filtrados.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtrados.map((p) => (
              <ProductCard key={p._id} producto={p} />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
            No hay productos con esos filtros. Probá con otra combinación.
          </p>
        )}
      </div>
    </section>
  );
}
