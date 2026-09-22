import { MOCK_ORDENES, type EstadoOrden } from "@/mocks/admin";
import { formatoARS } from "@/lib/precios";

const pill: Record<EstadoOrden, string> = {
  pendiente: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  pagado: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  enviado: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  entregado: "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200",
  cancelado: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300",
};

export default function AdminOrdenes() {
  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">Órdenes</h1>
      <p className="text-sm text-zinc-500">{MOCK_ORDENES.length} pedidos recientes (mock)</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-160 text-left text-sm">
          <thead>
            <tr className="text-xs tracking-wide text-zinc-400 uppercase">
              <th className="px-3 py-2 font-bold">Orden</th>
              <th className="px-3 py-2 font-bold">Cliente</th>
              <th className="px-3 py-2 font-bold">Total</th>
              <th className="px-3 py-2 font-bold">Estado</th>
              <th className="px-3 py-2 text-right font-bold">Cambiar estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {MOCK_ORDENES.map((o) => (
              <tr key={o._id} className="transition hover:bg-zinc-50 dark:hover:bg-zinc-950/60">
                <td className="px-3 py-2.5">
                  <p className="font-bold text-zinc-900 dark:text-white">{o._id}</p>
                  <p className="text-xs text-zinc-400">{o.fecha} · {o.items} items</p>
                </td>
                <td className="px-3 py-2.5">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{o.cliente}</p>
                  <p className="text-xs text-zinc-400">{o.email}</p>
                </td>
                <td className="px-3 py-2.5 font-extrabold text-zinc-900 dark:text-white">{formatoARS(o.total)}</td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold capitalize ${pill[o.estado]}`}>
                    {o.estado}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right">
                  <select
                    defaultValue={o.estado}
                    aria-label={`Estado de ${o._id}`}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1.5 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    {(["pendiente", "pagado", "enviado", "entregado", "cancelado"] as EstadoOrden[]).map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-400">Maqueta: el cambio de estado pegará a <code>PATCH /api/ordenes/:id</code>.</p>
    </div>
  );
}
