export type TipoAnimal = "Perro" | "Gato" | "Ave" | "Roedor" | "Otro";

export type Categoria =
  | "Alimentos"
  | "Juguetes"
  | "Higiene"
  | "Accesorios"
  | "Medicamentos";

export interface MockProduct {
  _id: string;
  nombre: string;
  marca: string;
  precio: number;
  descuento: number;
  enOferta: boolean;
  esNuevo: boolean;
  destacado: boolean;
  categoria: Categoria;
  tipoAnimal: TipoAnimal;
  stock: number;
  gradiente: string;
  icono: "perro" | "gato" | "ave" | "juguete" | "higiene" | "accesorio";
}

export const CATEGORIAS: { nombre: Categoria; descripcion: string; gradiente: string }[] = [
  { nombre: "Alimentos", descripcion: "Balanceados premium y naturales", gradiente: "from-amber-400 to-orange-500" },
  { nombre: "Juguetes", descripcion: "Diversión sin fin", gradiente: "from-violet-500 to-purple-600" },
  { nombre: "Higiene", descripcion: "Cuidado y bienestar", gradiente: "from-sky-400 to-cyan-500" },
  { nombre: "Accesorios", descripcion: "Paseos y descanso", gradiente: "from-emerald-400 to-teal-500" },
  { nombre: "Medicamentos", descripcion: "Salud protegida", gradiente: "from-rose-400 to-red-500" },
];

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    _id: "mock-1",
    nombre: "Alimento Premium Perro Adulto x 15 kg",
    marca: "Apolo Selection",
    precio: 54999,
    descuento: 20,
    enOferta: true,
    esNuevo: false,
    destacado: true,
    categoria: "Alimentos",
    tipoAnimal: "Perro",
    stock: 32,
    gradiente: "from-amber-300 via-orange-400 to-orange-600",
    icono: "perro",
  },
  {
    _id: "mock-2",
    nombre: "Alimento Gato Castrado Salmón x 7.5 kg",
    marca: "Felino Vital",
    precio: 38999,
    descuento: 0,
    enOferta: false,
    esNuevo: true,
    destacado: true,
    categoria: "Alimentos",
    tipoAnimal: "Gato",
    stock: 24,
    gradiente: "from-violet-300 via-purple-400 to-indigo-600",
    icono: "gato",
  },
  {
    _id: "mock-3",
    nombre: "Pelota Interactiva con Sonido",
    marca: "PlayPet",
    precio: 8999,
    descuento: 15,
    enOferta: true,
    esNuevo: false,
    destacado: false,
    categoria: "Juguetes",
    tipoAnimal: "Perro",
    stock: 58,
    gradiente: "from-lime-300 via-green-400 to-emerald-600",
    icono: "juguete",
  },
  {
    _id: "mock-4",
    nombre: "Rascador Torre 3 Niveles con Cueva",
    marca: "GatHome",
    precio: 74999,
    descuento: 0,
    enOferta: false,
    esNuevo: true,
    destacado: true,
    categoria: "Accesorios",
    tipoAnimal: "Gato",
    stock: 8,
    gradiente: "from-rose-300 via-pink-400 to-fuchsia-600",
    icono: "gato",
  },
  {
    _id: "mock-5",
    nombre: "Shampoo Hipoalergénico Avena x 500 ml",
    marca: "DermaPet",
    precio: 12499,
    descuento: 10,
    enOferta: true,
    esNuevo: false,
    destacado: false,
    categoria: "Higiene",
    tipoAnimal: "Perro",
    stock: 41,
    gradiente: "from-sky-300 via-cyan-400 to-blue-600",
    icono: "higiene",
  },
  {
    _id: "mock-6",
    nombre: "Cucha Acolchada Antiestrés Talle M",
    marca: "CozyPaws",
    precio: 32999,
    descuento: 0,
    enOferta: false,
    esNuevo: false,
    destacado: true,
    categoria: "Accesorios",
    tipoAnimal: "Perro",
    stock: 15,
    gradiente: "from-orange-300 via-amber-400 to-yellow-600",
    icono: "accesorio",
  },
  {
    _id: "mock-7",
    nombre: "Snack Dental Natural x 12 unidades",
    marca: "FreshBite",
    precio: 6999,
    descuento: 25,
    enOferta: true,
    esNuevo: false,
    destacado: false,
    categoria: "Alimentos",
    tipoAnimal: "Perro",
    stock: 3,
    gradiente: "from-teal-300 via-emerald-400 to-green-600",
    icono: "perro",
  },
  {
    _id: "mock-8",
    nombre: "Jaula Voladera con Comederos",
    marca: "Aviario Pro",
    precio: 89999,
    descuento: 0,
    enOferta: false,
    esNuevo: true,
    destacado: false,
    categoria: "Accesorios",
    tipoAnimal: "Ave",
    stock: 6,
    gradiente: "from-indigo-300 via-sky-400 to-cyan-600",
    icono: "ave",
  },
];
