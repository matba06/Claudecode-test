import styles from "./Avatar.module.css";

export interface AvatarProps {
  /** Image URL. When omitted, a branded gradient placeholder is shown. */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * Avatar — shows a user's avatar at the design-system "reg" size (48px).
 */
export function Avatar({ src, alt = "", className }: AvatarProps) {
  const classes = [styles.avatar, className].filter(Boolean).join(" ");
  return (
    <div className={classes} role={src ? undefined : "img"} aria-label={src ? undefined : alt || "avatar"}>
      {src ? <img className={styles.image} src={src} alt={alt} /> : null}
    </div>
  );
}

export default Avatar;
