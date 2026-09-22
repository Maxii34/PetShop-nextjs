export type RolUsuario = "admin" | "moderador" | "usuario";
export type EstadoOrden = "pendiente" | "pagado" | "enviado" | "entregado" | "cancelado";

export interface MockUsuario {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: RolUsuario;
  ultimoAcceso: string;
}

export interface MockOrden {
  _id: string;
  cliente: string;
  email: string;
  total: number;
  estado: EstadoOrden;
  fecha: string;
  items: number;
}

export const MOCK_USUARIOS: MockUsuario[] = [
  { _id: "u1", nombre: "Lucía", apellido: "Gómez", email: "lucia@ejemplo.com", rol: "admin", ultimoAcceso: "Hoy 09:24" },
  { _id: "u2", nombre: "Marcos", apellido: "Pérez", email: "marcos@ejemplo.com", rol: "moderador", ultimoAcceso: "Ayer 18:02" },
  { _id: "u3", nombre: "Sofía", apellido: "Ruiz", email: "sofia@ejemplo.com", rol: "usuario", ultimoAcceso: "Hoy 08:11" },
  { _id: "u4", nombre: "Diego", apellido: "Torres", email: "diego@ejemplo.com", rol: "usuario", ultimoAcceso: "20/09 21:40" },
  { _id: "u5", nombre: "Camila", apellido: "Sosa", email: "camila@ejemplo.com", rol: "usuario", ultimoAcceso: "19/09 12:05" },
];

export const MOCK_ORDENES: MockOrden[] = [
  { _id: "ORD-1042", cliente: "Sofía Ruiz", email: "sofia@ejemplo.com", total: 43999, estado: "pagado", fecha: "Hoy 10:15", items: 2 },
  { _id: "ORD-1041", cliente: "Diego Torres", email: "diego@ejemplo.com", total: 12998, estado: "pendiente", fecha: "Hoy 09:02", items: 3 },
  { _id: "ORD-1040", cliente: "Camila Sosa", email: "camila@ejemplo.com", total: 74999, estado: "enviado", fecha: "Ayer 17:44", items: 1 },
  { _id: "ORD-1039", cliente: "Lucía Gómez", email: "lucia@ejemplo.com", total: 21497, estado: "entregado", fecha: "Ayer 11:20", items: 4 },
  { _id: "ORD-1038", cliente: "Marcos Pérez", email: "marcos@ejemplo.com", total: 8999, estado: "cancelado", fecha: "20/09 16:31", items: 1 },
];

export const ADMIN_STATS = [
  { etiqueta: "Ventas del mes", valor: "$1.284.500", delta: "+12,4%", tono: "emerald" },
  { etiqueta: "Órdenes", valor: "186", delta: "+8,1%", tono: "indigo" },
  { etiqueta: "Productos", valor: "248", delta: "12 con stock bajo", tono: "amber" },
  { etiqueta: "Usuarios", valor: "1.932", delta: "+46 nuevos", tono: "violet" },
] as const;
