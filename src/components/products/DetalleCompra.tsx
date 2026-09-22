"use client";

import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { formatoARS, getPrecios } from "@/lib/precios";
import type { MockProduct } from "@/mocks/products";

export function DetalleCompra({ producto }: { producto: MockProduct }) {
  const [cantidad, setCantidad] = useState(1);
  const { final } = getPrecios(producto);
  const max = Math.max(1, producto.stock);

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Cantidad
        </span>
        <div className="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700">
          <button
            type="button"
            aria-label="Quitar uno"
            disabled={cantidad <= 1}
            onClick={() => setCantidad((c) => Math.max(1, c - 1))}
            className="flex h-10 w-10 items-center justify-center text-zinc-600 transition hover:text-zinc-900 disabled:opacity-30 dark:text-zinc-300"
          >
            <FiMinus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-bold text-zinc-900 dark:text-white">
            {cantidad}
          </span>
          <button
            type="button"
            aria-label="Agregar uno"
            disabled={cantidad >= max}
            onClick={() => setCantidad((c) => Math.min(max, c + 1))}
            className="flex h-10 w-10 items-center justify-center text-zinc-600 transition hover:text-zinc-900 disabled:opacity-30 dark:text-zinc-300"
          >
            <FiPlus className="h-4 w-4" />
          </button>
        </div>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {producto.stock} disponibles
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <span className="flex-1 cursor-pointer rounded-xl bg-indigo-600 px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400">
          Comprar ahora · {formatoARS(final * cantidad)}
        </span>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 active:scale-95 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          <FiShoppingCart className="h-4 w-4" />
          Agregar
        </button>
      </div>
      <p className="mt-3 text-xs text-zinc-400">
        Maqueta: los botones aún no conectan con el carrito ni con Mercado Pago.
      </p>
    </div>
  );
}
