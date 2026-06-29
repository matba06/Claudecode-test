import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./AppCard.module.css";

/**
 * Visual interaction states. Normally driven by native CSS pseudo-classes;
 * `forceState` pins one for documentation / Storybook showcases.
 */
export type AppCardState = "hover" | "focused" | "pressed";

export interface AppCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  /** Card title. */
  title?: string;
  /** Supporting description. */
  description?: string;
  /**
   * Card background — themed on the app icon's colours.
   * Defaults to the Figma sample blue.
   */
  backgroundColor?: string;
  /** App icon content (e.g. an `<img>`). Defaults to an empty white tile. */
  icon?: ReactNode;
  /** Force a visual state for showcase purposes only. */
  forceState?: AppCardState;
}

/**
 * AppCard — card element that themes its background colour based on the colours
 * of the app icon.
 */
export function AppCard({
  title = "Better sleep",
  description = "Play your sound mix, create new mixes, and more.",
  backgroundColor = "#d8eefd",
  icon,
  forceState,
  type = "button",
  className,
  style,
  ...rest
}: AppCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      data-state={forceState}
      style={{ backgroundColor, ...style }}
      {...rest}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
    </button>
  );
}

export default AppCard;
