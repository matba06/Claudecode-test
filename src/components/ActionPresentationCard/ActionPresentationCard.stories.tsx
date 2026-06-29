import type { Meta, StoryObj } from "@storybook/react";
import {
  ActionPresentationCard,
  type ActionPresentationCardState,
} from "./ActionPresentationCard";

const meta = {
  title: "Components/ActionPresentationCard",
  component: ActionPresentationCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card element that is actionable and presents an illustration. All " +
          "styling is driven by design tokens (`tokens.css`). Interaction states " +
          "(hover, focus, pressed) work natively; `forceState` pins a state for " +
          "these showcases.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    label: "add",
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    forceState: {
      control: "inline-radio",
      options: [undefined, "hover", "focused", "pressed"],
      description:
        "Pin a visual state for documentation. Leave empty for real interaction.",
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    icon: { control: false },
    illustration: { control: false },
  },
} satisfies Meta<typeof ActionPresentationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ----------------------------------------------------------- single states */

export const Default: Story = {};

export const Hover: Story = { args: { forceState: "hover" } };

export const Focused: Story = { args: { forceState: "focused" } };

export const Pressed: Story = { args: { forceState: "pressed" } };

/* --------------------------------------------------------------- showcase */

const STATES: { label: string; state?: ActionPresentationCardState }[] = [
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
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {STATES.map((s) => (
        <div
          key={s.label}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <span style={headerStyle}>{s.label}</span>
          <ActionPresentationCard forceState={s.state} />
        </div>
      ))}
    </div>
  ),
};
