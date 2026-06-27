import type { Preview } from "@storybook/react";
import "../src/styles/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "app",
      values: [
        { name: "app", value: "#f4f4f6" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
