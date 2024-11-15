import type { Meta, StoryObj } from "@storybook/react";

import MenuSubHeader from "./MenuSubHeader";

const meta = {
  title: "MenuSubHeader",
  component: MenuSubHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuSubHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "Help",
  },
};
