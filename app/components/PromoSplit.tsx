import Image from "next/image";
import styles from "./PromoSplit.module.css";

type Props = {
  bg?: string;                  // shared background for the whole section
  bedSrc: string;               // left transparent image (e.g. /banners/glam.webp)
  bedAlt?: string;
  logosSrc: string;             // SVG (can be remote URL)
  eyebrow?: string;
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PromoSplit({
  bg = "#EFF9F5",
  bedSrc,
  bedAlt = "",
  logosSrc,
  eyebrow = "UP TO 12 MONTHS EMI PLANS",
  title,
  ctaLabel = "SHOP NOW",
  ctaHref = "#",
}: Props) {
  return (
    <section className={styles.wrap} style={{ background: bg }} aria-label={title}>
      {/* LEFT: transparent product image on same background */}
      <div className={styles.left}>
        <div className={styles.figure}>
          <Image
            src={bedSrc}
            alt={bedAlt}
            width={0}
            height={0}
            sizes="(max-width: 900px) 90vw, 48vw"
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
            priority
          />
        </div>
      </div>

      {/* RIGHT: logos + text + CTA */}
      <div className={styles.right}>
        {/* logos SVG (use <img> so external URL works without Next config) */}
        <img src={logosSrc} alt="Bank & pay-later partners" className={styles.logos} />

        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rule} />
        {ctaLabel && (
          <a href={ctaHref} className={styles.cta} aria-label={ctaLabel}>
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
