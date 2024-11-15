import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";

import SubMenu from "./SubMenu";
import MenuItem from "../MenuItem";

const icons = {
  NoIcon: null,
  DashboardIcon: <DashboardIcon />,
  ExpandLessIcon: <ExpandLessIcon />,
  ExpandMoreIcon: <ExpandMoreIcon />,
  HelpIcon: <HelpIcon />,
  SettingsIcon: <SettingsIcon />,
  WorkIcon: <WorkIcon />,
};

type IconName = keyof typeof icons;

const meta = {
  title: "SubMenu",
  component: SubMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof SubMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: "SettingsIcon",
    text: "Settings",
  },
  render: (args) => {
    const icon = icons[args.icon as IconName];

    return (
      <Box sx={[{ width: "240px" }]}>
        <SubMenu
          icon={icon}
          text={args.text}
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
      </Box>
    );
  },
};
