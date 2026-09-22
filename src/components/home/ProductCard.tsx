import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaDog, FaCat, FaCrow, FaBone, FaPumpSoap, FaBoxOpen } from "react-icons/fa";
import type { MockProduct } from "@/mocks/products";
import { formatoARS, getPrecios } from "@/lib/precios";

const ICONOS = {
  perro: FaDog,
  gato: FaCat,
  ave: FaCrow,
  juguete: FaBone,
  higiene: FaPumpSoap,
  accesorio: FaBoxOpen,
};

export function ProductCard({ producto }: { producto: MockProduct }) {
  const { original, final, enOferta, descuento, efectivo, cuota3 } =
    getPrecios(producto);
  const Icono = ICONOS[producto.icono];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <Link
        href={`/productos/${producto._id}`}
        className="relative flex h-44 items-center justify-center bg-gradient-to-br p-6 text-white/95"
        aria-label={producto.nombre}
      >
        <span className={`absolute inset-0 bg-gradient-to-br ${producto.gradiente} opacity-90`} />
        <Icono className="relative h-16 w-16 drop-shadow-lg transition group-hover:scale-110" />
        <span className="absolute top-3 left-3 flex flex-col gap-1.5">
          {enOferta && (
            <span className="rounded-full bg-zinc-950/85 px-2.5 py-1 text-[11px] font-bold text-white">
              -{descuento}% OFF
            </span>
          )}
          {!enOferta && producto.esNuevo && (
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-bold text-white">
              ¡Nuevo!
            </span>
          )}
        </span>
        {producto.stock <= 5 && (
          <span className="absolute top-3 right-3 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white">
            ¡Últimas!
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          {producto.marca} · {producto.tipoAnimal}
        </p>
        <Link href={`/productos/${producto._id}`}>
          <h3
            title={producto.nombre}
            className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold text-zinc-900 transition group-hover:text-indigo-700 dark:text-zinc-100 dark:group-hover:text-indigo-300"
          >
            {producto.nombre}
          </h3>
        </Link>
        <div className="mt-2">
          {enOferta && (
            <p className="text-xs text-zinc-400 line-through">
              {formatoARS(original)}
            </p>
          )}
          <p className="text-xl font-extrabold text-zinc-900 dark:text-white">
            {formatoARS(final)}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            3 cuotas de <strong>{formatoARS(cuota3)}</strong> · Efectivo{" "}
            <strong>{formatoARS(efectivo)}</strong>
          </p>
        </div>
        <div className="mt-4 flex gap-2 pt-1">
          <span className="flex-1 cursor-pointer rounded-xl bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400">
            Comprar
          </span>
          <button
            type="button"
            aria-label={`Agregar ${producto.nombre} al carrito`}
            className="flex h-9 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
          >
            <FiShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
