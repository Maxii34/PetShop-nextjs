"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { CATEGORIAS, MOCK_PRODUCTS } from "@/mocks/products";
import { getPrecios } from "@/lib/precios";
import { ProductCard } from "@/components/home/ProductCard";

const ANIMALES = ["Todos", "Perro", "Gato", "Ave", "Roedor", "Otro"] as const;
const ORDENES = ["Relevancia", "Menor precio", "Mayor precio", "Mayor descuento"] as const;
const POR_PAGINA = 6;

export function CatalogoClient() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState<string>("Todas");
  const [animal, setAnimal] = useState<(typeof ANIMALES)[number]>("Todos");
  const [soloOfertas, setSoloOfertas] = useState(false);
  const [orden, setOrden] = useState<(typeof ORDENES)[number]>("Relevancia");
  const [pagina, setPagina] = useState(1);

  const filtrados = useMemo(() => {
    const lista = MOCK_PRODUCTS.filter((p) => {
      if (categoria !== "Todas" && p.categoria !== categoria) return false;
      if (animal !== "Todos" && p.tipoAnimal !== animal) return false;
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
    const conPrecio = lista.map((p) => ({ p, ...getPrecios(p) }));
    switch (orden) {
      case "Menor precio":
        conPrecio.sort((a, b) => a.final - b.final);
        break;
      case "Mayor precio":
        conPrecio.sort((a, b) => b.final - a.final);
        break;
      case "Mayor descuento":
        conPrecio.sort((a, b) => b.descuento - a.descuento);
        break;
    }
    return conPrecio.map((x) => x.p);
  }, [busqueda, categoria, animal, soloOfertas, orden]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const paginaSegura = Math.min(pagina, totalPaginas);
  const visibles = filtrados.slice(
    (paginaSegura - 1) * POR_PAGINA,
    paginaSegura * POR_PAGINA,
  );

  const hayFiltros =
    busqueda !== "" || categoria !== "Todas" || animal !== "Todos" || soloOfertas;

  const limpiar = () => {
    setBusqueda("");
    setCategoria("Todas");
    setAnimal("Todos");
    setSoloOfertas(false);
    setPagina(1);
  };

  const cambiar = (fn: (v: string) => void) => (valor: string) => {
    fn(valor);
    setPagina(1);
  };

  return (
    <div>
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-3 lg:flex-row">
          <label className="flex flex-1 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950">
            <FiSearch className="h-4 w-4 shrink-0 text-zinc-400" />
            <input
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPagina(1);
              }}
              placeholder="Buscar por nombre, marca o categoría…"
              className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
            />
            {busqueda && (
              <button
                type="button"
                onClick={() => {
                  setBusqueda("");
                  setPagina(1);
                }}
                aria-label="Limpiar búsqueda"
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <FiX className="h-4 w-4" />
              </button>
            )}
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={animal}
              onChange={(e) =>
                cambiar(setAnimal as (v: string) => void)(e.target.value)
              }
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {ANIMALES.map((a) => (
                <option key={a} value={a}>
                  {a === "Todos" ? "Todas las mascotas" : `${a}s`}
                </option>
              ))}
            </select>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as typeof orden)}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {ORDENES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Todas", ...CATEGORIAS.map((c) => c.nombre)].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCategoria(c);
                setPagina(1);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                categoria === c
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
              }`}
            >
              {c}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setSoloOfertas((v) => !v);
              setPagina(1);
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              soloOfertas
                ? "bg-indigo-600 text-white dark:bg-indigo-500"
                : "border border-dashed border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300"
            }`}
          >
            % Solo ofertas
          </button>
        </div>

        {hayFiltros && (
          <button
            type="button"
            onClick={limpiar}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <FiX className="h-4 w-4" /> Limpiar filtros
          </button>
        )}
      </div>

      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        {filtrados.length}{" "}
        {filtrados.length === 1 ? "producto encontrado" : "productos encontrados"}
      </p>

      {visibles.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p) => (
            <ProductCard key={p._id} producto={p} />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-12 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          Sin resultados con esos filtros. Probá limpiando la búsqueda.
        </p>
      )}

      {totalPaginas > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={paginaSegura <= 1}
            onClick={() => setPagina((v) => Math.max(1, v - 1))}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition enabled:hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            Anterior
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPagina(n)}
              className={`h-10 w-10 rounded-xl text-sm font-bold transition ${
                n === paginaSegura
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={paginaSegura >= totalPaginas}
            onClick={() => setPagina((v) => Math.min(totalPaginas, v + 1))}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition enabled:hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
