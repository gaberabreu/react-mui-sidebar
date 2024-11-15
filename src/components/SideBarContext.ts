import { createContext, useContext } from "react";

export interface SideBarContextProps {
  open?: boolean;
  subMenuWidth?: string;
}

export const SideBarContext = createContext<SideBarContextProps>({ open: true });

export const useSideBarContext = () => {
  return useContext(SideBarContext);
};
