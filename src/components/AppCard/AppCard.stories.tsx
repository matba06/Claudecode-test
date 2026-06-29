import type { Meta, StoryObj } from "@storybook/react";
import { AppCard, type AppCardState } from "./AppCard";

const meta = {
  title: "Components/AppCard",
  component: AppCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card element that themes its background colour based on the colours " +
          "of the app icon. All styling is driven by design tokens (`tokens.css`). " +
          "Interaction states (hover, focus, pressed) work natively; `forceState` " +
          "pins a state for these showcases.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    title: "Better sleep",
    description: "Play your sound mix, create new mixes, and more.",
    backgroundColor: "#d8eefd",
    disabled: false,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    backgroundColor: { control: "color" },
    forceState: {
      control: "inline-radio",
      options: [undefined, "hover", "focused", "pressed"],
      description:
        "Pin a visual state for documentation. Leave empty for real interaction.",
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    icon: { control: false },
  },
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ----------------------------------------------------------- single states */

export const Default: Story = {};

export const Hover: Story = { args: { forceState: "hover" } };

export const Focused: Story = { args: { forceState: "focused" } };

export const Pressed: Story = { args: { forceState: "pressed" } };

/* --------------------------------------------------------------- showcase */

const STATES: { label: string; state?: AppCardState }[] = [
  { label: "default" },
  { label: "hover", state: "hover" },
  { label: "focused", state: "focused" },
  { label: "pressed", state: "pressed" },
];

const headerStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: "#6b6b76",
};

/** Every state, matching the Figma component set. */
export const AllStates: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 28,
      }}
    >
      {STATES.map((s) => (
        <div
          key={s.label}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <span style={headerStyle}>{s.label}</span>
          <AppCard forceState={s.state} />
        </div>
      ))}
    </div>
  ),
};

/** The background colour themes to the app icon — a few examples. */
export const Themed: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      <AppCard backgroundColor="#d8eefd" title="Better sleep" />
      <AppCard
        backgroundColor="#fdcae4"
        title="Focus timer"
        description="Stay on task with gentle focus sessions."
      />
      <AppCard
        backgroundColor="#d9f7e0"
        title="Daily walk"
        description="Track your steps and build a daily habit."
      />
    </div>
  ),
};
