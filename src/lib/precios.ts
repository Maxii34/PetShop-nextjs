interface PrecioProducto {
  precio?: number | null;
  descuento?: number | null;
  enOferta?: boolean | null;
}

export function getPrecios(producto: PrecioProducto) {
  const original = Number(producto?.precio) || 0;
  const descuento = Number(producto?.descuento) || 0;
  const enOferta = Boolean(producto?.enOferta) && descuento > 0;
  const final = enOferta ? Math.round(original * (1 - descuento / 100)) : original;
  return {
    original,
    final,
    enOferta,
    descuento,
    efectivo: Math.round(final * 0.9),
    cuota3: Math.round(final / 3),
  };
}

export function formatoARS(valor: number) {
  return `$${valor.toLocaleString("es-AR")}`;
}
