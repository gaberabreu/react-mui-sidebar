import type { FC, ReactNode } from "react";

import Typography from "@mui/material/Typography";

export interface SideBarProps {
  children: ReactNode;
  open?: boolean;
}

const SideBar: FC<SideBarProps> = ({ children, open }) => {
  return (
    open && (
      <aside>
        <Typography variant="caption">{children}</Typography>
      </aside>
    )
  );
};

export default SideBar;
