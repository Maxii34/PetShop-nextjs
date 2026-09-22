import Link from "next/link";
import { FiArrowUpRight, FiAlertTriangle } from "react-icons/fi";
import { ADMIN_STATS, MOCK_ORDENES } from "@/mocks/admin";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { formatoARS } from "@/lib/precios";

const tonos: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

export default function AdminResumen() {
  const stockBajo = MOCK_PRODUCTS.filter((p) => p.stock <= 8);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ADMIN_STATS.map((s) => (
          <div key={s.etiqueta} className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className={`inline-block rounded-xl px-2.5 py-1 text-xs font-bold ${tonos[s.tono]}`}>
              {s.delta}
            </span>
            <p className="mt-3 text-2xl font-extrabold text-zinc-900 dark:text-white">{s.valor}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{s.etiqueta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold text-zinc-900 dark:text-white">Últimas órdenes</h2>
            <Link href="/admin/ordenes" className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">
              Ver todas <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800">
            {MOCK_ORDENES.slice(0, 4).map((o) => (
              <li key={o._id} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">{o._id}</p>
                  <p className="text-xs text-zinc-500">{o.cliente} · {o.items} items</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-zinc-900 dark:text-white">{formatoARS(o.total)}</p>
                  <p className="text-xs text-zinc-500 capitalize">{o.estado}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-extrabold text-zinc-900 dark:text-white">
              <FiAlertTriangle className="h-4 w-4 text-amber-500" /> Stock bajo
            </h2>
            <Link href="/admin/productos" className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">
              Gestionar <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-4 space-y-2.5">
            {stockBajo.map((p) => (
              <li key={p._id} className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-2.5 text-sm dark:bg-zinc-950">
                <span className="truncate font-semibold text-zinc-800 dark:text-zinc-200">{p.nombre}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${p.stock <= 5 ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300" : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"}`}>
                  {p.stock} u.
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
