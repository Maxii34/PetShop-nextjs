"use client";

import Link from "next/link";
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingCart, FiTruck } from "react-icons/fi";
import { useUI } from "./UIProvider";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { formatoARS, getPrecios } from "@/lib/precios";

const ENVIO_GRATIS_DESDE = 17000;

export function CartModal() {
  const { cartOpen, closeCart, items, setQty, removeItem, subtotal, count } = useUI();

  if (!cartOpen) return null;

  const progreso = Math.min(1, subtotal / ENVIO_GRATIS_DESDE);
  const falta = Math.max(0, ENVIO_GRATIS_DESDE - subtotal);

  return (
    <div
      className="fixed inset-0 z-[100] bg-zinc-950/60 backdrop-blur-sm"
      onClick={closeCart}
      role="dialog"
      aria-modal="true"
      aria-label="Carrito de compras"
    >
      <aside
        className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <h2 className="flex items-center gap-2 text-base font-extrabold text-zinc-900 dark:text-white">
            <FiShoppingCart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            Tu carrito {count > 0 && <span className="text-sm font-semibold text-zinc-400">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-zinc-200 px-5 py-3 dark:border-zinc-800">
          <p className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            <FiTruck className="h-4 w-4 text-emerald-600" />
            {falta > 0 ? (
              <>Te faltan <strong>{formatoARS(falta)}</strong> para el envío gratis</>
            ) : (
              <>¡Tenés envío gratis!</>
            )}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all"
              style={{ width: `${Math.round(progreso * 100)}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
                <FiShoppingCart className="h-7 w-7" />
              </span>
              <p className="mt-4 font-bold text-zinc-900 dark:text-white">Carrito vacío</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Explorá el catálogo y sumá algo rico para tu mascota.
              </p>
              <Link
                href="/productos"
                onClick={closeCart}
                className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-500"
              >
                Ver catálogo
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => {
                const prod = MOCK_PRODUCTS.find((p) => p._id === item.productId);
                if (!prod) return null;
                const { final } = getPrecios(prod);
                return (
                  <li
                    key={item.productId}
                    className="flex gap-3 rounded-2xl border border-zinc-200/70 p-3 dark:border-zinc-800"
                  >
                    <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-extrabold text-white ${prod.gradiente}`}>
                      {prod.marca.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
                        {prod.nombre}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {formatoARS(final)} c/u
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-zinc-200 dark:border-zinc-700">
                          <button
                            type="button"
                            aria-label="Quitar uno"
                            onClick={() => setQty(item.productId, item.qty - 1)}
                            className="flex h-7 w-7 items-center justify-center text-zinc-600 dark:text-zinc-300"
                          >
                            <FiMinus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-zinc-900 dark:text-white">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Agregar uno"
                            onClick={() => setQty(item.productId, Math.min(prod.stock, item.qty + 1))}
                            className="flex h-7 w-7 items-center justify-center text-zinc-600 dark:text-zinc-300"
                          >
                            <FiPlus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-extrabold text-zinc-900 dark:text-white">
                          {formatoARS(final * item.qty)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={`Quitar ${prod.nombre}`}
                      onClick={() => removeItem(item.productId)}
                      className="self-start text-zinc-300 transition hover:text-red-500"
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500 dark:text-zinc-400">Subtotal</span>
              <span className="text-lg font-extrabold text-zinc-900 dark:text-white">
                {formatoARS(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Efectivo estimado: {formatoARS(Math.round(subtotal * 0.9))} (-10%)
            </p>
            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-[0.99]"
            >
              Finalizar compra
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
