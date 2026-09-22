"use client";

import { useState } from "react";
import Link from "next/link";
import { FiX, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import { useUI } from "./UIProvider";

export function LoginModal() {
  const { loginOpen, closeLogin } = useUI();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!loginOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
      onClick={closeLogin}
      role="dialog"
      aria-modal="true"
      aria-label="Iniciar sesión"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-5 text-white">
          <div>
            <h2 className="text-lg font-extrabold">Bienvenido de vuelta</h2>
            <p className="text-sm text-white/80">
              Iniciá sesión para comprar y ver tus pedidos
            </p>
          </div>
          <button
            type="button"
            onClick={closeLogin}
            aria-label="Cerrar"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 transition hover:bg-white/25"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 px-6 py-6"
        >
          <div>
            <label htmlFor="login-email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              Correo electrónico
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@ejemplo.com"
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              Contraseña
            </label>
            <div className="relative mt-1.5">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 pr-11 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-1 text-right">
              <span className="cursor-pointer text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
                ¿Olvidaste tu contraseña?
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-[0.98] dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            <FiLogIn className="h-4 w-4" />
            Iniciar sesión
          </button>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            ¿No tenés cuenta?{" "}
            <Link
              href="/registro"
              onClick={closeLogin}
              className="font-bold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Registrate gratis
            </Link>
          </p>
          <p className="rounded-xl bg-zinc-100 px-4 py-2.5 text-center text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            Maqueta: el envío al backend se conecta en la próxima etapa.
          </p>
        </form>
      </div>
    </div>
  );
}
