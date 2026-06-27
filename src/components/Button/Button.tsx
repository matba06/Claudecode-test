import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

/**
 * Visual interaction states. In normal use these are driven automatically by
 * native CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`, `:disabled`).
 * `forceState` lets you pin a state for documentation / Storybook showcases.
 */
export type ButtonState = "hover" | "focused" | "pressed";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual hierarchy of the button.
   * - `primary`: one per page, the main action.
   * - `secondary`: non-critical actions, multiple per page if needed.
   * - `tertiary`: always-visible page actions (like "Edit").
   */
  variant?: ButtonVariant;
  /** Button label / content. */
  children?: ReactNode;
  /**
   * Force a visual state for showcase purposes only. Leave undefined for
   * normal interactive behavior.
   */
  forceState?: ButtonState;
}

export function Button({
  variant = "primary",
  forceState,
  type = "button",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      data-state={forceState}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
}

export default Button;
