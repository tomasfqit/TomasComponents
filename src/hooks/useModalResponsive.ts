import { createContext, useContext } from "react";
import type { ModalResponsiveContextValue } from "../providers/modalResponsive.types";

export const ModalResponsiveContext = createContext<ModalResponsiveContextValue | null>(null);

export const useModal = (): ModalResponsiveContextValue => {
  const context = useContext(ModalResponsiveContext);

  if (!context) {
    throw new Error("useModalResponsive must be used within a ModalProvider.");
  }

  return context;
};
