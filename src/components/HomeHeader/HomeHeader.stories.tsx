import type { Meta, StoryObj } from "@storybook/react";
import { HomeHeader } from "./HomeHeader";

const meta = {
  title: "Components/HomeHeader",
  component: HomeHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Product header: user avatar, the habitz brand logo, and the notification bell. Used at the top of pages.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    hasNotification: true,
  },
  argTypes: {
    hasNotification: { control: "boolean" },
    avatarSrc: { control: "text" },
  },
} satisfies Meta<typeof HomeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutNotification: Story = {
  args: { hasNotification: false },
};
