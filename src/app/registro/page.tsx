import type { Metadata } from "next";
import Link from "next/link";
import { FiTruck, FiCreditCard, FiShield } from "react-icons/fi";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegistroForm } from "@/components/auth/RegistroForm";

export const metadata: Metadata = {
  title: "Crear cuenta | Apolo PetShop",
  description: "Registrate gratis para comprar más rápido y seguir tus pedidos.",
};

export default function RegistroPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-zinc-50/60 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
          <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
              Crear cuenta
            </p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Unite a Apolo PetShop
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Comprá en 1 clic, guardá tus mascotas favoritas y seguí tus envíos.
            </p>
            <RegistroForm />
          </div>

          <aside className="flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-indigo-600/20 sm:p-10">
            <div>
              <Link href="/" className="text-xl font-extrabold">
                Apolo <span className="font-medium">PetShop</span>
              </Link>
              <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                Beneficios de tener tu cuenta
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  { icono: FiTruck, titulo: "Envíos prioritarios", detalle: "Seguimiento en tiempo real de tu pedido" },
                  { icono: FiCreditCard, titulo: "Checkout en 1 clic", detalle: "Tus datos y tarjetas guardadas" },
                  { icono: FiShield, titulo: "Historial y garantías", detalle: "Devoluciones simples hasta 7 días" },
                ].map((b) => (
                  <li key={b.titulo} className="flex gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <b.icono className="h-5 w-5" />
                    </span>
                    <span>
                      <strong className="block text-sm">{b.titulo}</strong>
                      <span className="text-sm text-white/80">{b.detalle}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 rounded-2xl bg-white/10 p-4 text-xs text-white/85">
              Maqueta: el formulario se conectará a <code>POST /api/usuarios</code> en la etapa de integración.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
