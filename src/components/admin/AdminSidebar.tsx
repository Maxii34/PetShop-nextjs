"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiBox,
  FiClipboard,
  FiUsers,
  FiPlusCircle,
  FiExternalLink,
} from "react-icons/fi";

const LINKS = [
  { href: "/admin", etiqueta: "Resumen", icono: FiGrid, exacto: true },
  { href: "/admin/productos", etiqueta: "Productos", icono: FiBox, exacto: false },
  { href: "/admin/ordenes", etiqueta: "Órdenes", icono: FiClipboard, exacto: false },
  { href: "/admin/usuarios", etiqueta: "Usuarios", icono: FiUsers, exacto: false },
  { href: "/admin/crear", etiqueta: "Crear producto", icono: FiPlusCircle, exacto: false },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 rounded-3xl bg-zinc-950 p-4 text-zinc-300 lg:w-64 dark:bg-zinc-900 dark:border dark:border-zinc-800">
      <Link href="/" className="flex items-center gap-2 px-2 py-3 text-lg font-extrabold text-white">
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Apolo
        </span>
        <span className="text-sm font-semibold text-zinc-400">Admin</span>
      </Link>
      <nav className="flex gap-1 overflow-x-auto lg:flex-col">
        {LINKS.map((l) => {
          const activo = l.exacto ? pathname === l.href : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                activo
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <l.icono className="h-4 w-4" />
              {l.etiqueta}
            </Link>
          );
        })}
      </nav>
      <div className="mt-4 hidden border-t border-white/10 pt-4 lg:block">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 text-xs font-semibold text-zinc-500 transition hover:text-zinc-200"
        >
          <FiExternalLink className="h-3.5 w-3.5" /> Ver tienda
        </Link>
        <p className="mt-3 px-3 text-[11px] text-zinc-600">
          Maqueta sin permisos reales: el control por rol llega con el backend.
        </p>
      </div>
    </aside>
  );
}
