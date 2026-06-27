import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonState, type ButtonVariant } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Buttons communicate actions. **Primary**: one per page, the main action. " +
          "**Secondary**: non-critical actions, multiple per page if needed. " +
          "**Tertiary**: always-visible page actions (like *Edit*). All styling is " +
          "driven by design tokens defined in `src/styles/tokens.css`.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "button",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary"],
      description: "Visual hierarchy of the button.",
    },
    forceState: {
      control: "inline-radio",
      options: [undefined, "hover", "focused", "pressed"],
      description:
        "Pin a visual state for documentation. Leave empty for real interaction.",
    },
    disabled: { control: "boolean" },
    children: { control: "text", description: "Button label." },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ----------------------------------------------------------- Single variants */

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true },
};

/* --------------------------------------------------------------- Showcases */

const VARIANTS: ButtonVariant[] = ["primary", "secondary", "tertiary"];
const STATES: { label: string; state?: ButtonState; disabled?: boolean }[] = [
  { label: "default" },
  { label: "hover", state: "hover" },
  { label: "focused", state: "focused" },
  { label: "pressed", state: "pressed" },
  { label: "disabled", disabled: true },
];

const cell: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 8,
};

const headerStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: "#6b6b76",
};

/**
 * The full matrix of variants × states, mirroring the Figma component set.
 */
export const AllVariantsAndStates: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `120px repeat(${STATES.length}, auto)`,
        gap: 28,
        alignItems: "center",
      }}
    >
      <span />
      {STATES.map((s) => (
        <span key={s.label} style={headerStyle}>
          {s.label}
        </span>
      ))}

      {VARIANTS.map((variant) => (
        <>
          <span key={variant} style={headerStyle}>
            {variant}
          </span>
          {STATES.map((s) => (
            <div key={`${variant}-${s.label}`} style={cell}>
              <Button
                variant={variant}
                forceState={s.state}
                disabled={s.disabled}
              >
                button
              </Button>
            </div>
          ))}
        </>
      ))}
    </div>
  ),
};
