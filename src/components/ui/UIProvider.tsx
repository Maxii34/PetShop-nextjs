"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { MOCK_PRODUCTS } from "@/mocks/products";
import { getPrecios } from "@/lib/precios";

export interface CartItem {
  productId: string;
  qty: number;
}

interface UIContextValue {
  loginOpen: boolean;
  cartOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openCart: () => void;
  closeCart: () => void;
  items: CartItem[];
  setQty: (productId: string, qty: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  count: number;
  subtotal: number;
}

const UIContext = createContext<UIContextValue | null>(null);

const INITIAL_CART: CartItem[] = [
  { productId: "mock-1", qty: 1 },
  { productId: "mock-3", qty: 2 },
];

export function UIProvider({ children }: { children: ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

  const openLogin = useCallback(() => setLoginOpen(true), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const setQty = useCallback((productId: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.productId !== productId)
        : prev.map((i) => (i.productId === productId ? { ...i, qty } : i)),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const item of items) {
      const prod = MOCK_PRODUCTS.find((p) => p._id === item.productId);
      if (!prod) continue;
      count += item.qty;
      subtotal += getPrecios(prod).final * item.qty;
    }
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      loginOpen,
      cartOpen,
      openLogin,
      closeLogin,
      openCart,
      closeCart,
      items,
      setQty,
      removeItem,
      clearCart,
      count,
      subtotal,
    }),
    [loginOpen, cartOpen, openLogin, closeLogin, openCart, closeCart, items, setQty, removeItem, clearCart, count, subtotal],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI debe usarse dentro de UIProvider");
  return ctx;
}
