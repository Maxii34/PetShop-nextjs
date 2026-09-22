import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductoForm } from "@/components/admin/ProductoForm";
import { MOCK_PRODUCTS } from "@/mocks/products";

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ id: p._id }));
}

export default async function AdminEditar({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = MOCK_PRODUCTS.find((p) => p._id === id);
  if (!producto) notFound();

  return (
    <div>
      <nav className="mb-2 flex items-center gap-2 text-sm">
        <Link href="/admin/productos" className="font-semibold text-indigo-600 dark:text-indigo-400">
          Productos
        </Link>
        <span className="text-zinc-300">/</span>
        <span className="text-zinc-500">Editar {producto.nombre.slice(0, 32)}…</span>
      </nav>
      <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">Editar producto</h1>
      <p className="mb-4 text-sm text-zinc-500">Modificá la ficha y guardá los cambios (mock).</p>
      <ProductoForm inicial={producto} />
    </div>
  );
}
