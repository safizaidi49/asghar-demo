import Image from "next/image";
import styles from "./FeatureSplit.module.css";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
  contentBg?: string;
  align?: "center" | "start";
  reverse?: boolean;
};

export default function FeatureSplit({
  imageSrc,
  imageAlt = "",
  eyebrow = "CURATED BY OUR DESIGN EXPERTS",
  title,
  ctaLabel = "SHOP NOW",
  ctaHref = "#",
  contentBg = "#F7F3EF",
  align = "center",
  reverse = false,
}: Props) {
  return (
    <section className={`${styles.wrap} ${reverse ? styles.reverse : ""}`} aria-label={title}>
      {/* image panel */}
      <div className={styles.media}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={900}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.image}
          priority
        />
      </div>

      {/* content panel */}
      <div className={styles.content} style={{ background: contentBg }}>
        <div className={`${styles.inner} ${align === "start" ? styles.alignStart : ""}`}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.rule} />
          {ctaLabel && <a href={ctaHref} className={styles.cta}>{ctaLabel}</a>}
        </div>
      </div>
    </section>
  );
}
