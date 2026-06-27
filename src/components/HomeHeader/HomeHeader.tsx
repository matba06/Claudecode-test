import { Avatar } from "../Avatar/Avatar";
import { NotificationBell } from "../NotificationBell/NotificationBell";
import styles from "./HomeHeader.module.css";

export interface HomeHeaderProps {
  avatarSrc?: string;
  hasNotification?: boolean;
  className?: string;
}

/**
 * HomeHeader — the product header: user avatar, the habitz brand logo, and the
 * notification bell.
 */
export function HomeHeader({
  avatarSrc,
  hasNotification = true,
  className,
}: HomeHeaderProps) {
  const classes = [styles.header, className].filter(Boolean).join(" ");
  return (
    <header className={classes}>
      <Avatar src={avatarSrc} alt="Your profile" />
      <div className={styles.logo}>
        <span className={styles.logoHighlight} aria-hidden="true" />
        <span className={styles.logoText}>habitz</span>
      </div>
      <NotificationBell hasNotification={hasNotification} />
    </header>
  );
}

export default HomeHeader;
