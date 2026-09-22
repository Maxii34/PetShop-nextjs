"use client";

import { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff, FiCheckCircle, FiUserPlus } from "react-icons/fi";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100";
const labelCls = "text-sm font-semibold text-zinc-700 dark:text-zinc-200";

export function RegistroForm() {
  const [showPass, setShowPass] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const coincide = confirm === "" || password === confirm;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-nombre" className={labelCls}>Nombre</label>
          <input id="reg-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Máximo" className={inputCls} />
        </div>
        <div>
          <label htmlFor="reg-apellido" className={labelCls}>Apellido</label>
          <input id="reg-apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="González" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="reg-email" className={labelCls}>Correo electrónico</label>
        <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="usuario@ejemplo.com" className={inputCls} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-pass" className={labelCls}>Contraseña</label>
          <div className="relative mt-1.5">
            <input
              id="reg-pass"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 pr-11 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
            <button
              type="button"
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              {showPass ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="reg-confirm" className={labelCls}>Repetir contraseña</label>
          <input
            id="reg-confirm"
            type={showPass ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repetila para confirmar"
            className={`${inputCls} ${!coincide ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
          />
        </div>
      </div>
      {!coincide && (
        <p className="text-xs font-semibold text-red-500">Las contraseñas no coinciden.</p>
      )}
      <ul className="space-y-1.5 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
        <li className="flex items-center gap-2"><FiCheckCircle className="h-3.5 w-3.5 text-emerald-500" /> Mayúscula, minúscula, número y símbolo (@$!%*?&)</li>
        <li className="flex items-center gap-2"><FiCheckCircle className="h-3.5 w-3.5 text-emerald-500" /> Al registrarte aceptás términos y condiciones</li>
      </ul>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 active:scale-[0.99]"
      >
        <FiUserPlus className="h-4 w-4" />
        Crear mi cuenta
      </button>
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        ¿Ya tenés cuenta?{" "}
        <Link href="/" className="font-bold text-indigo-600 hover:underline dark:text-indigo-400">
          Volver al inicio
        </Link>
      </p>
    </form>
  );
}
