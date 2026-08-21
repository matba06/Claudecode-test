import type { Meta, StoryObj } from "@storybook/react";
import { DropdownInput } from "./DropdownInput";

const meta = {
  title: "Components/DropdownInput",
  component: DropdownInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input field for dropdowns. Shows a placeholder or a selected value, " +
          "with an optional leading icon. All styling is driven by design tokens " +
          "(`tokens.css`). Hover and focus work natively; the `open` prop drives " +
          "the open state (pink border + caret up); `forceState` pins hover/focus " +
          "for these showcases.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    placeholder: "select item...",
    open: false,
    showSelectedIcon: false,
    disabled: false,
  },
  argTypes: {
    value: { control: "text", description: "Selected value (empty = placeholder)." },
    placeholder: { control: "text" },
    open: { control: "boolean" },
    showSelectedIcon: { control: "boolean" },
    forceState: {
      control: "inline-radio",
      options: [undefined, "hover", "focused"],
      description: "Pin hover/focus for documentation.",
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    icon: { control: false },
  },
} satisfies Meta<typeof DropdownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ----------------------------------------------------------- single stories */

export const Placeholder: Story = {};

export const Selected: Story = {
  args: { value: "selected item" },
};

export const SelectedWithIcon: Story = {
  args: { value: "selected item", showSelectedIcon: true },
};

export const Open: Story = {
  args: { open: true },
};

/* --------------------------------------------------------------- showcase */

const ROWS = [
  { label: "default", props: {} },
  { label: "hover", props: { forceState: "hover" as const } },
  { label: "focused", props: { forceState: "focused" as const } },
  { label: "open", props: { open: true } },
];

const headerStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: "#6b6b76",
};

/** Every state, for both the placeholder and the selected-value patterns. */
export const AllVariants: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "90px auto auto",
        gap: 24,
        alignItems: "center",
      }}
    >
      <span />
      <span style={headerStyle}>placeholder</span>
      <span style={headerStyle}>selected</span>

      {ROWS.map((row) => (
        <>
          <span key={row.label} style={headerStyle}>
            {row.label}
          </span>
          <DropdownInput {...row.props} />
          <DropdownInput {...row.props} value="selected item" />
        </>
      ))}
    </div>
  ),
};
