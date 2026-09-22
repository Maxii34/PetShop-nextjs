"use client";

import type { ReactNode } from "react";
import { UIProvider } from "./UIProvider";
import { LoginModal } from "./LoginModal";
import { CartModal } from "./CartModal";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <UIProvider>
      {children}
      <LoginModal />
      <CartModal />
    </UIProvider>
  );
}
