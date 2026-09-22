"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch, FiEdit3, FiTrash2, FiPlus } from "react-icons/fi";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { formatoARS, getPrecios } from "@/lib/precios";

export default function AdminProductos() {
  const [busqueda, setBusqueda] = useState("");

  const lista = useMemo(
    () =>
      MOCK_PRODUCTS.filter((p) =>
        `${p.nombre} ${p.marca} ${p.categoria}`.toLowerCase().includes(busqueda.toLowerCase()),
      ),
    [busqueda],
  );

  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">Productos</h1>
          <p className="text-sm text-zinc-500">{lista.length} productos en catálogo (mock)</p>
        </div>
        <Link
          href="/admin/crear"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-500"
        >
          <FiPlus className="h-4 w-4" /> Nuevo producto
        </Link>
      </div>

      <label className="mt-4 flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950">
        <FiSearch className="h-4 w-4 text-zinc-400" />
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, marca o categoría…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:text-zinc-100"
        />
      </label>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-160 text-left text-sm">
          <thead>
            <tr className="text-xs tracking-wide text-zinc-400 uppercase">
              <th className="px-3 py-2 font-bold">Producto</th>
              <th className="px-3 py-2 font-bold">Categoría</th>
              <th className="px-3 py-2 font-bold">Precio</th>
              <th className="px-3 py-2 font-bold">Stock</th>
              <th className="px-3 py-2 font-bold">Estado</th>
              <th className="px-3 py-2 text-right font-bold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {lista.map((p) => {
              const { final, enOferta } = getPrecios(p);
              return (
                <tr key={p._id} className="transition hover:bg-zinc-50 dark:hover:bg-zinc-950/60">
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-extrabold text-white ${p.gradiente}`}>
                        {p.marca.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <p className="max-w-56 truncate font-semibold text-zinc-900 dark:text-white">{p.nombre}</p>
                        <p className="text-xs text-zinc-400">{p.marca}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-zinc-600 dark:text-zinc-300">{p.categoria}</td>
                  <td className="px-3 py-2.5 font-bold text-zinc-900 dark:text-white">
                    {formatoARS(final)}
                    {enOferta && <span className="ml-1.5 rounded-full bg-rose-100 px-2 py-0.5 text-[11px] text-rose-700">OFF</span>}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p.stock <= 5 ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>
                      {p.stock} u.
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-zinc-500">
                    {[p.esNuevo && "Nuevo", p.destacado && "Destacado", enOferta && "Oferta"].filter(Boolean).join(" · ") || "—"}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex justify-end gap-1.5">
                      <Link
                        href={`/admin/editar/${p._id}`}
                        aria-label={`Editar ${p.nombre}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-700"
                      >
                        <FiEdit3 className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        aria-label={`Eliminar ${p.nombre}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:border-red-300 hover:text-red-500 dark:border-zinc-700"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
