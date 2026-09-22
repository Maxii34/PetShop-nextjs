import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiCreditCard } from "react-icons/fi";

const paymentMethods = [
  "Visa",
  "Mastercard",
  "American Express",
  "Cabal",
  "Naranja",
  "Mercado Pago",
];

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 pt-12 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Categorías / Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
              Categorías & Ayuda
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/contacto" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Trabajá con nosotros
                </Link>
              </li>
              <li>
                <Link href="/como-comprar" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Cómo Comprar
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Política de Devolución
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
              Contáctanos
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>+54 381 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>PetShopApolo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>Sucursales: San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Banda del Río Salí.</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
              Sigamos conectados
            </h3>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Novedades, ofertas exclusivas y consejos para el cuidado de tus mascotas.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-pink-500 hover:text-pink-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-pink-400 dark:hover:text-pink-400"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Medios de Pago en Texto */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
              <FiCreditCard className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Medios de pago
            </h3>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Aceptamos pagos online y presenciales con:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-200/80 py-6 text-center text-xs text-zinc-500 sm:flex sm:justify-between sm:text-left dark:border-zinc-800/80 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Apolo PetShop. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center gap-4 sm:mt-0">
            <Link href="/privacidad" className="hover:underline">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:underline">
              Términos
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};