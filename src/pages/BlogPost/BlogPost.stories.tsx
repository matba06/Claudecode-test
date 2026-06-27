import type { Meta, StoryObj } from "@storybook/react";
import { BlogPost } from "./BlogPost";

const meta = {
  title: "Pages/BlogPost",
  component: BlogPost,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Responsive blog post page built from the Habitz design system. One " +
          "implementation serves both desktop and mobile — switch the Storybook " +
          "viewport to compare. Typography scales via responsive design tokens; " +
          "on desktop the header spans a wide band, the text sits in a 600px " +
          "column, and the hero image breaks out wider.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "responsive" },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
