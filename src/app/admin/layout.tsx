import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <AdminSidebar />
        <div className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-zinc-200/70 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
                Panel de control
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Gestioná tienda, stock, pedidos y usuarios
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] text-white">A</span>
              Hola, Admin
            </span>
          </header>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
