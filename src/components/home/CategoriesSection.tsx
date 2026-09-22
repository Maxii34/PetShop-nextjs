import { CATEGORIAS } from "@/mocks/products";
import { FiArrowUpRight } from "react-icons/fi";

export function CategoriesSection() {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
              Explorá por necesidad
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Comprá por categoría
            </h2>
          </div>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            5 mundos, una sola tienda
          </span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIAS.map((cat) => (
            <a
              key={cat.nombre}
              href="#catalogo"
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradiente} text-lg font-extrabold text-white shadow-md`}
              >
                {cat.nombre.charAt(0)}
              </div>
              <p className="mt-4 font-bold text-zinc-900 dark:text-white">
                {cat.nombre}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {cat.descripcion}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Explorar
                <FiArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
