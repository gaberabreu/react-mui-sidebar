import type { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";

import SubMenu from "../SubMenu";
import MenuItem from "../MenuItem";
import MenuSubHeader from "../MenuSubHeader";
import SideBar from "./SideBar";

const meta = {
  title: "SideBar",
  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    open: true,
  },
  render: (args) => {
    return (
      <Box sx={[{ width: "240px", height: "400px" }]}>
        <SideBar open={args.open}>
          <List>
            <MenuSubHeader text="User items" />
            <SubMenu
              icon={<HelpIcon />}
              text="Help"
            >
              <MenuItem
                icon={<LockIcon />}
                text="Privacy"
              />
              <MenuItem
                icon={<NotificationsIcon />}
                text="Notification"
              />
            </SubMenu>
          </List>
        </SideBar>
      </Box>
    );
  },
};
