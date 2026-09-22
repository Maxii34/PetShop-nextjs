import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CatalogoClient } from "@/components/products/CatalogoClient";

export const metadata: Metadata = {
  title: "Catálogo | Apolo PetShop",
  description:
    "Explorá el catálogo completo: alimentos, juguetes, higiene y accesorios para tu mascota.",
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-zinc-50/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
            Tienda
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Catálogo completo
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base dark:text-zinc-400">
            Filtrá por categoría, mascota y ofertas. Maqueta con datos de
            ejemplo, lista para conectar al backend.
          </p>
          <div className="mt-6">
            <CatalogoClient />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
