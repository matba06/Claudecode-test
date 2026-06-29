import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ClockIcon } from "../icons/Icons";
import { SpaceIllustration } from "./SpaceIllustration";
import styles from "./ActionPresentationCard.module.css";

/**
 * Visual interaction states. Normally driven by native CSS pseudo-classes;
 * `forceState` pins one for documentation / Storybook showcases.
 */
export type ActionPresentationCardState = "hover" | "focused" | "pressed";

export interface ActionPresentationCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Card label. */
  label?: string;
  /** Leading icon shown inside the round holder. Defaults to a clock. */
  icon?: ReactNode;
  /** Decorative illustration on the right. Defaults to the space scene. */
  illustration?: ReactNode;
  /** Force a visual state for showcase purposes only. */
  forceState?: ActionPresentationCardState;
}

/**
 * ActionPresentationCard — an actionable card that presents an illustration.
 */
export function ActionPresentationCard({
  label = "add",
  icon,
  illustration,
  forceState,
  type = "button",
  className,
  ...rest
}: ActionPresentationCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      data-state={forceState}
      {...rest}
    >
      <span className={styles.illustration} aria-hidden="true">
        {illustration ?? <SpaceIllustration className={styles.illustrationSvg} />}
      </span>

      <span className={styles.iconHolder}>
        <span className={styles.icon}>{icon ?? <ClockIcon />}</span>
      </span>

      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default ActionPresentationCard;
