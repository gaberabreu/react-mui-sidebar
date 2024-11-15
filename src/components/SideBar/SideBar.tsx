import type { FC, ReactNode } from "react";

export interface SideBarProps {
  children: ReactNode;
  open?: boolean;
}

const SideBar: FC<SideBarProps> = ({ children, open }) => {
  return open && <aside>{children}</aside>;
};

export default SideBar;
