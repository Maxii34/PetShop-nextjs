import { FiTruck, FiCreditCard, FiDollarSign, FiShield } from "react-icons/fi";

const BENEFICIOS = [
  {
    icono: FiTruck,
    titulo: "Envío gratis +$17.000",
    detalle: "Tucumán y alrededores en 24 h",
  },
  {
    icono: FiCreditCard,
    titulo: "3 y 6 cuotas sin interés",
    detalle: "Con todas las tarjetas",
  },
  {
    icono: FiDollarSign,
    titulo: "10% off en efectivo",
    detalle: "Pagando en el local",
  },
  {
    icono: FiShield,
    titulo: "Compra protegida",
    detalle: "Devolución hasta 7 días",
  },
];

export function BenefitsBar() {
  return (
    <section className="border-y border-zinc-200/70 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {BENEFICIOS.map((b) => (
          <div key={b.titulo} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
              <b.icono className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {b.titulo}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {b.detalle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
