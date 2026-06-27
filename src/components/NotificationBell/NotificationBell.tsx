import { BellIcon } from "../icons/Icons";
import styles from "./NotificationBell.module.css";

export interface NotificationBellProps {
  /** Whether to show the "unread" ping indicator. */
  hasNotification?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * NotificationBell — provides access to notifications and signals unread items
 * via a ping indicator.
 */
export function NotificationBell({
  hasNotification = true,
  className,
  onClick,
}: NotificationBellProps) {
  const classes = [styles.bell, className].filter(Boolean).join(" ");
  const content = (
    <>
      <BellIcon className={styles.icon} />
      {hasNotification ? <span className={styles.ping} aria-hidden="true" /> : null}
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} aria-label="Notifications">
        {content}
      </button>
    );
  }
  return (
    <span className={classes} role="img" aria-label="Notifications">
      {content}
    </span>
  );
}

export default NotificationBell;
