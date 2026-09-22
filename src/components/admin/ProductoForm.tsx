"use client";

import { useState } from "react";
import { FiImage, FiSave } from "react-icons/fi";
import { CATEGORIAS, type MockProduct } from "@/mocks/products";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100";
const labelCls = "text-sm font-semibold text-zinc-700 dark:text-zinc-200";

export function ProductoForm({ inicial }: { inicial?: MockProduct }) {
  const [enOferta, setEnOferta] = useState(inicial?.enOferta ?? false);
  const [esNuevo, setEsNuevo] = useState(inicial?.esNuevo ?? false);
  const [destacado, setDestacado] = useState(inicial?.destacado ?? false);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="font-extrabold text-zinc-900 dark:text-white">
          <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-extrabold text-white">1</span>
          Información básica
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="pf-nombre" className={labelCls}>Nombre *</label>
            <input id="pf-nombre" defaultValue={inicial?.nombre} placeholder="Ej: Alimento Premium Perro Adulto x 15 kg" className={inputCls} />
          </div>
          <div>
            <label htmlFor="pf-marca" className={labelCls}>Marca</label>
            <input id="pf-marca" defaultValue={inicial?.marca} placeholder="Ej: Apolo Selection" className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pf-precio" className={labelCls}>Precio *</label>
              <input id="pf-precio" type="number" min={0} defaultValue={inicial?.precio} placeholder="0" className={inputCls} />
            </div>
            <div>
              <label htmlFor="pf-stock" className={labelCls}>Stock *</label>
              <input id="pf-stock" type="number" min={0} defaultValue={inicial?.stock} placeholder="0" className={inputCls} />
            </div>
          </div>
          <div>
            <label htmlFor="pf-cat" className={labelCls}>Categoría *</label>
            <select id="pf-cat" defaultValue={inicial?.categoria} className={inputCls}>
              {CATEGORIAS.map((c) => (
                <option key={c.nombre} value={c.nombre}>{c.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pf-animal" className={labelCls}>Tipo de animal</label>
            <select id="pf-animal" defaultValue={inicial?.tipoAnimal} className={inputCls}>
              {["Perro", "Gato", "Ave", "Roedor", "Otro"].map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="pf-desc" className={labelCls}>Descripción</label>
            <textarea id="pf-desc" rows={3} placeholder="Contá qué lo hace especial…" className={inputCls} />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="font-extrabold text-zinc-900 dark:text-white">
          <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-extrabold text-white">2</span>
          Imágenes y visibilidad
        </h2>
        <label
          htmlFor="pf-imgs"
          className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-center transition hover:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-950"
        >
          <FiImage className="h-8 w-8 text-zinc-300" />
          <span className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
            Arrastrá o tocá para subir hasta 10 imágenes
          </span>
          <span className="text-xs text-zinc-400">PNG, JPG o WEBP · se suben a Cloudinary al conectar el backend</span>
          <input id="pf-imgs" type="file" accept="image/*" multiple className="hidden" />
        </label>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {[
            { label: "En oferta", value: enOferta, set: setEnOferta },
            { label: "Es nuevo", value: esNuevo, set: setEsNuevo },
            { label: "Destacado", value: destacado, set: setDestacado },
          ].map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => t.set(!t.value)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-bold transition ${t.value ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300" : "border-zinc-200 text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"}`}
            >
              {t.value ? "✓ " : ""}{t.label}
            </button>
          ))}
        </div>
        {enOferta && (
          <div className="mt-4 max-w-48">
            <label htmlFor="pf-desc2" className={labelCls}>Descuento % (0-90)</label>
            <input id="pf-desc2" type="number" min={0} max={90} defaultValue={inicial?.descuento ?? 10} className={inputCls} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button type="button" className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300">
          Cancelar
        </button>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-[0.99]">
          <FiSave className="h-4 w-4" /> {inicial ? "Guardar cambios" : "Crear producto"}
        </button>
      </div>
    </form>
  );
}
