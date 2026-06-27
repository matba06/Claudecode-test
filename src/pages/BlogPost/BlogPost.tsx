import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { BackArrowIcon } from "../../components/icons/Icons";
import styles from "./BlogPost.module.css";

export interface BlogPostProps {
  title?: string;
  date?: string;
  /** Paragraphs of the article body. */
  paragraphs?: string[];
  /** Caption shown under the hero image. */
  caption?: string;
  /** Optional hero image URL; falls back to the brand-pink placeholder block. */
  imageSrc?: string;
  onBack?: () => void;
}

const DEFAULT_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar dignissim massa. Nunc eget dapibus lectus. Pellentesque eu eros mollis, vestibulum leo in, varius urna. Praesent a dignissim dui, nec volutpat orci. Aenean in urna at nulla tincidunt eleifend id a magna. Mauris posuere vehicula ultricies. Quisque placerat sem at pharetra luctus. Nullam ac ipsum urna. Fusce sagittis arcu ac pharetra scelerisque. Fusce et laoreet nunc.",
  "Aliquam odio orci, facilisis vitae condimentum et, mollis at lacus. Duis tempor, turpis id convallis finibus, purus nibh laoreet arcu, eu commodo felis est non nisi. Morbi luctus cursus congue. Nullam volutpat lorem ac massa vehicula, ut pellentesque velit elementum. In nec ultrices ex. Nam ante ante, faucibus nec ante ut, tincidunt interdum urna. Suspendisse tincidunt tellus justo, sit amet tempor dolor egestas nec. Phasellus quis tortor vitae arcu luctus vestibulum.",
  "Vestibulum in turpis eu orci ultricies ornare. Vivamus sed diam eget nibh pulvinar lobortis. Ut molestie ipsum ut rutrum tincidunt. Phasellus finibus eu erat nec porttitor. Etiam vel cursus risus. Donec pharetra enim sit amet ullamcorper interdum. Etiam dignissim elit a orci interdum ornare. Praesent congue, nunc ac egestas scelerisque, orci quam faucibus justo, vel lacinia orci elit a leo. Praesent maximus diam quis turpis egestas, sed fermentum lectus venenatis. Donec enim quam, interdum vitae nisl eget, condimentum auctor dui. Integer tincidunt bibendum odio, vel venenatis mauris fringilla sit amet. Aenean quis elementum orci.",
  "Ut sollicitudin urna eget tincidunt rutrum. Quisque quis libero vehicula, auctor nunc at, rhoncus elit. In pulvinar blandit neque vel sagittis. Phasellus efficitur dapibus tellus id venenatis. Nunc ex elit, lacinia eget ultricies non, cursus id erat. Duis tempor lectus sit amet tincidunt euismod. Sed facilisis a ipsum nec consectetur. Curabitur luctus porttitor cursus. Quisque convallis, orci a auctor feugiat, turpis lacus vehicula ante, in placerat augue arcu ac ipsum. Nunc at libero tortor. Suspendisse porta sed magna in pellentesque.",
];

/**
 * BlogPost — a responsive blog post page built from the Habitz design system.
 * Desktop and mobile share one implementation; the responsive typography tokens
 * and CSS handle the breakpoint differences.
 */
export function BlogPost({
  title = "blog title that is about an interesting subject",
  date = "February, 20, 2024",
  paragraphs = DEFAULT_PARAGRAPHS,
  caption = "Hello, I am a caption look at me. I have a lot of things to say about this picture so you had better listen up.",
  imageSrc,
  onBack,
}: BlogPostProps) {
  const [lead, ...rest] = paragraphs;

  return (
    <div className={styles.page}>
      <HomeHeader className={styles.header} />

      <article className={styles.post}>
        <button type="button" className={styles.back} onClick={onBack}>
          <BackArrowIcon className={styles.backIcon} />
          <span className={styles.backText}>back</span>
        </button>

        <header className={styles.postHeader}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{date}</p>
        </header>

        <div className={styles.body}>
          {lead ? <p className={styles.paragraph}>{lead}</p> : null}

          <figure className={styles.figure}>
            {imageSrc ? (
              <img className={styles.image} src={imageSrc} alt={caption} />
            ) : (
              <div className={styles.image} role="img" aria-label={caption} />
            )}
            <figcaption className={styles.caption}>{caption}</figcaption>
          </figure>

          {rest.map((text, i) => (
            <p key={i} className={styles.paragraph}>
              {text}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
