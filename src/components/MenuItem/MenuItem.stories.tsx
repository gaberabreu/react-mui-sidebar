import type { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";

import MenuItem from "./MenuItem";

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
  title: "MenuItem",
  component: MenuItem,
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
    suffix: {
      options: Object.keys(icons),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: "HelpIcon",
    text: "Help",
  },
  render: (args) => {
    const icon = icons[args.icon as IconName];
    const suffix = icons[args.suffix as IconName];

    return (
      <Box sx={[{ width: "240px" }]}>
        <MenuItem
          icon={icon}
          text={args.text}
          suffix={suffix}
        />
      </Box>
    );
  },
};
