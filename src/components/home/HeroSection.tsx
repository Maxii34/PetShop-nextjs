import Link from "next/link";
import { FiArrowRight, FiStar, FiTruck, FiShield } from "react-icons/fi";
import { FaDog, FaCat } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(40rem_25rem_at_10%_110%,rgba(167,139,250,0.15),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            <FiStar className="h-3.5 w-3.5" />
            Nuevo: línea natural y premium
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            Todo para tu mascota,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              en un solo lugar
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Alimentos, juguetes, higiene y accesorios con envío en el día en
            Tucumán. Precios claros en cuotas y 10% off en efectivo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Ver catálogo
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#ofertas"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
            >
              Ver ofertas
            </Link>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              ["+2.500", "productos"],
              ["4.9/5", "valoración"],
              ["24 h", "envío local"],
            ].map(([valor, etiqueta]) => (
              <div key={etiqueta}>
                <dt className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {valor}
                </dt>
                <dd className="text-sm text-zinc-500 dark:text-zinc-400">
                  {etiqueta}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-1 shadow-2xl shadow-indigo-600/20 dark:border-zinc-800">
            <div className="rounded-[1.4rem] bg-white p-6 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Pack recomendado
                </p>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  -20% OFF
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 p-6 text-white">
                  <FaDog className="h-10 w-10" />
                  <span className="mt-2 text-xs font-semibold">Perros</span>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white">
                  <FaCat className="h-10 w-10" />
                  <span className="mt-2 text-xs font-semibold">Gatos</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 dark:bg-zinc-900">
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Alimento premium 15 kg
                  </p>
                  <p className="text-lg font-extrabold text-zinc-900 dark:text-white">
                    $43.999{" "}
                    <span className="text-sm font-medium text-zinc-400 line-through">
                      $54.999
                    </span>
                  </p>
                </div>
                <span className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                  Agregar
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:flex dark:border-zinc-800 dark:bg-zinc-900/90">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
              <FiTruck className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-zinc-900 dark:text-white">
                Envío gratis +$17.000
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                Tucumán y alrededores
              </p>
            </div>
          </div>
          <div className="absolute -top-5 -right-4 hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:flex dark:border-zinc-800 dark:bg-zinc-900/90">
            <FiShield className="h-5 w-5 text-emerald-500" />
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Compra protegida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
