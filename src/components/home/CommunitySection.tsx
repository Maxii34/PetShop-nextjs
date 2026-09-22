"use client";

import { FiInstagram, FiStar, FiSend } from "react-icons/fi";

const TESTIMONIOS = [
  {
    nombre: "Lucía G.",
    mascota: "Simón · Caniche",
    texto: "El envío llegó en el día y el alimento vino con regalito. Mi favorito lejos.",
  },
  {
    nombre: "Marcos P.",
    mascota: "Mishi · Gata",
    texto: "La torre rascadora es de gran calidad. Buen precio en cuotas sin interés.",
  },
  {
    nombre: "Sofía R.",
    mascota: "Rocky · Mestizo",
    texto: "Atención por WhatsApp rapidísima y el descuento en efectivo es real.",
  },
];

export function CommunitySection() {
  return (
    <section className="bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-indigo-600/20 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              <FiInstagram className="h-3.5 w-3.5" /> Comunidad
            </p>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              Tips, ofertas y mucho más en Instagram
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Sumate a la comunidad Apolo: sorteos mensuales y consejos de
              cuidado para perros y gatos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="cursor-pointer rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100 active:scale-95">
                Seguir en Instagram
              </span>
              <span className="cursor-pointer rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Ver novedades
              </span>
            </div>
            <div className="mt-6 flex items-center gap-1 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
              ))}
              <span className="ml-2 text-white/85">4.9 · +1.200 reseñas</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {TESTIMONIOS.map((t) => (
              <figure
                key={t.nombre}
                className="rounded-2xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {t.nombre} · {t.mascota}
                </figcaption>
              </figure>
            ))}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 rounded-2xl border border-zinc-200/70 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <input
                placeholder="Tu email para recibir ofertas"
                className="w-full bg-transparent px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <FiSend className="h-4 w-4" />
                Unirme
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
