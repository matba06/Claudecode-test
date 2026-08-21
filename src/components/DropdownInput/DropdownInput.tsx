import type { ButtonHTMLAttributes, ReactNode } from "react";
import { CaretDownIcon } from "../icons/Icons";
import styles from "./DropdownInput.module.css";

/**
 * Visual interaction states. `hover` and `focused` are normally driven by
 * native pseudo-classes; `forceState` pins one for showcases. The `open` state
 * (dropdown expanded) is driven by the `open` prop.
 */
export type DropdownInputState = "hover" | "focused";

export interface DropdownInputProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  /** Selected value. When omitted, the placeholder is shown instead. */
  value?: string;
  /** Placeholder shown when no value is selected. */
  placeholder?: string;
  /** Whether the associated dropdown is open (pink border + caret up). */
  open?: boolean;
  /** Show a leading icon next to the selected value. */
  showSelectedIcon?: boolean;
  /** Leading icon for the selected value. Falls back to a small dot. */
  icon?: ReactNode;
  /** Force a visual state for showcase purposes only. */
  forceState?: DropdownInputState;
}

const DefaultSelectedIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="5" fill="var(--icon-primary)" />
  </svg>
);

/**
 * DropdownInput — input field that triggers a dropdown. Shows either a
 * placeholder or a selected value, with an optional leading icon.
 */
export function DropdownInput({
  value,
  placeholder = "select item...",
  open = false,
  showSelectedIcon = false,
  icon,
  forceState,
  type = "button",
  className,
  ...rest
}: DropdownInputProps) {
  const hasValue = value != null && value !== "";
  const classes = [styles.trigger, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      data-state={forceState}
      data-open={open || undefined}
      aria-haspopup="listbox"
      aria-expanded={open}
      {...rest}
    >
      {hasValue ? (
        <>
          {showSelectedIcon ? (
            <span className={styles.selectedIcon}>
              {icon ?? <DefaultSelectedIcon />}
            </span>
          ) : null}
          <span className={styles.value}>{value}</span>
        </>
      ) : (
        <span className={styles.placeholder}>{placeholder}</span>
      )}

      <CaretDownIcon className={styles.caret} data-open={open || undefined} />
    </button>
  );
}

export default DropdownInput;
