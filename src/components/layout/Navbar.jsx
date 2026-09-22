"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useUI } from "@/components/ui/UIProvider";

export const Navbar = () => {
  const { openLogin, openCart, count } = useUI();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            Apolo
          </span>
          <span>PetShop</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Inicio
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/productos"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Catálogo
          </Link>
        </nav>

        {/* Action Buttons & Cart */}
        <div className="flex items-center gap-3">
          {/* Greeting / User Info (opcional) */}
          <span className="hidden text-sm font-medium text-emerald-600 sm:inline-block dark:text-emerald-400">
            ¡Hola, Usuario!
          </span>

          {/* Botones de autenticación */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={openLogin}
              className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Iniciar sesión
            </button>
            <Link
              href="/registro"
              className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-500 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Registrarse
            </Link>
          </div>

          {/* Cart Icon Button */}
          <button
            type="button"
            onClick={openCart}
            aria-label="Carrito de compras"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <FiShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[11px] font-bold text-white shadow-sm dark:bg-indigo-500">
                {count}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden dark:border-zinc-800 dark:text-zinc-300"
          >
            {menuAbierto ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuAbierto && (
        <div className="border-t border-zinc-200/70 bg-white px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuAbierto(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200"
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              onClick={() => setMenuAbierto(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200"
            >
              Catálogo
            </Link>
            <Link
              href="/admin"
              onClick={() => setMenuAbierto(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200"
            >
              Dashboard
            </Link>
            <div className="mt-2 flex gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => {
                  setMenuAbierto(false);
                  openLogin();
                }}
                className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
              >
                Iniciar sesión
              </button>
              <Link
                href="/registro"
                onClick={() => setMenuAbierto(false)}
                className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Registrarse
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
