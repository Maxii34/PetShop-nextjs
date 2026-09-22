import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiTruck, FiShield, FiCreditCard } from "react-icons/fi";
import { FaDog, FaCat, FaCrow, FaBone, FaPumpSoap, FaBoxOpen } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { DetalleCompra } from "@/components/products/DetalleCompra";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { formatoARS, getPrecios } from "@/lib/precios";

const ICONOS = {
  perro: FaDog,
  gato: FaCat,
  ave: FaCrow,
  juguete: FaBone,
  higiene: FaPumpSoap,
  accesorio: FaBoxOpen,
};

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ id: p._id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const producto = MOCK_PRODUCTS.find((p) => p._id === id);
  return {
    title: producto ? `${producto.nombre} | Apolo PetShop` : "Producto | Apolo PetShop",
    description: producto
      ? `${producto.marca} · ${producto.categoria} para ${producto.tipoAnimal}.`
      : "Detalle de producto.",
  };
}

export default async function DetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = MOCK_PRODUCTS.find((p) => p._id === id);
  if (!producto) notFound();

  const { original, final, enOferta, descuento, efectivo, cuota3 } =
    getPrecios(producto);
  const Icono = ICONOS[producto.icono];
  const relacionados = MOCK_PRODUCTS.filter(
    (p) => p._id !== producto._id && p.categoria === producto.categoria,
  ).slice(0, 4);
  const sugeridos =
    relacionados.length > 0
      ? relacionados
      : MOCK_PRODUCTS.filter((p) => p._id !== producto._id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="w-full bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="font-semibold text-indigo-600 dark:text-indigo-400">
              Inicio
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/productos" className="font-semibold text-indigo-600 dark:text-indigo-400">
              Catálogo
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500 dark:text-zinc-400">{producto.categoria}</span>
            <span className="text-zinc-300">/</span>
            <span className="max-w-60 truncate font-semibold text-zinc-900 dark:text-white">
              {producto.nombre}
            </span>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <div
                className={`relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br sm:h-96 ${producto.gradiente}`}
              >
                <Icono className="h-32 w-32 text-white/95 drop-shadow-xl" />
                <span className="absolute top-4 left-4 flex gap-2">
                  {enOferta && (
                    <span className="rounded-full bg-zinc-950/85 px-3 py-1 text-xs font-bold text-white">
                      -{descuento}% OFF
                    </span>
                  )}
                  {!enOferta && producto.esNuevo && (
                    <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                      ¡Nuevo!
                    </span>
                  )}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br opacity-70 ${producto.gradiente} ${i === 0 ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-zinc-950" : ""}`}
                  >
                    <Icono className="h-8 w-8 text-white/90" />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {[
                  ["Descripción", "Alimento formulado para una nutrición completa y balanceada, con ingredientes seleccionados y control de calidad."],
                  ["Características", "Presentación práctica, conservación del frescor y porcionado simple para el día a día."],
                ].map(([titulo, texto]) => (
                  <details
                    key={titulo}
                    open={titulo === "Descripción"}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/60 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50"
                  >
                    <summary className="cursor-pointer text-sm font-bold text-zinc-900 dark:text-white">
                      {titulo}
                    </summary>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{texto}</p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
                {producto.marca} · {producto.tipoAnimal}
              </p>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                {producto.nombre}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {producto.categoria}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  Stock: {producto.stock} u.
                </span>
                {producto.stock <= 5 && (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-red-700 dark:bg-red-500/15 dark:text-red-300">
                    ¡Quedan pocas!
                  </span>
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                {enOferta ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-zinc-400 line-through">
                      {formatoARS(original)}
                    </span>
                    <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                      {formatoARS(final)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                    {formatoARS(original)}
                  </span>
                )}
                <p className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  {formatoARS(efectivo)} en efectivo (-10%)
                </p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <FiCreditCard className="mr-1 inline h-4 w-4" />
                  3 cuotas sin interés de <strong>{formatoARS(cuota3)}</strong>
                </p>
              </div>

              <div className="mt-5">
                <DetalleCompra producto={producto} />
              </div>

              <div className="mt-6 space-y-2 border-t border-zinc-200 pt-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                <p>
                  <FiTruck className="mr-2 inline h-4 w-4 text-emerald-600" />
                  Envío <strong>gratis</strong> en compras superiores a $17.000
                </p>
                <p>
                  <FiShield className="mr-2 inline h-4 w-4 text-emerald-600" />
                  Compra protegida y devolución hasta 7 días
                </p>
              </div>
            </div>
          </div>

          <section className="mt-14">
            <h2 className="text-xl font-extrabold text-zinc-900 sm:text-2xl dark:text-white">
              También te puede interesar
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sugeridos.map((p) => (
                <ProductCard key={p._id} producto={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
