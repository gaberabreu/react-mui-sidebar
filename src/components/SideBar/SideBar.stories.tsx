import type { Meta, StoryObj } from "@storybook/react";
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

export const Open: Story = {
  args: {
    children: "Basic",
    open: true,
  },
};

export const Closed: Story = {
  args: {
    children: "Basic",
    open: false,
  },
};
