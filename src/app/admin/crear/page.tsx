import { ProductoForm } from "@/components/admin/ProductoForm";

export default function AdminCrear() {
  return (
    <div>
      <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">Crear producto</h1>
      <p className="mb-4 text-sm text-zinc-500">Completá la ficha y publicala en el catálogo (mock).</p>
      <ProductoForm />
    </div>
  );
}
