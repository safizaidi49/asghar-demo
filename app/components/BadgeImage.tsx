"use client";

import styles from "./BadgeImage.module.css";

type Props = {
  /** External SVG (or local /public file) */
  src?: string;
  alt?: string;
  /**
   * "center" = centered at given width
   * "full"   = stretch edge-to-edge with aspect preserved
   */
  mode?: "center" | "full";
  /** Outer padding around the image */
  padding?: number;
  /** Section background */
  bg?: string;
  /** Target width when mode="center". Accepts px number or CSS string. */
  width?: number | string;
};

export default function BadgeImage({
  src = "https://www.asgharfurniture.ae/wp-content/uploads/2025/09/Badge-1.svg",
  alt = "Warranty Badge",
  mode = "center",
  padding = 0,
  bg = "#fff",
  width = 560, // ← big by default
}: Props) {
  // allow numbers or CSS strings (e.g., "50vw")
  const computedWidth =
    typeof width === "number" ? `${width}px` : width;

  return (
    <section
      className={styles.section}
      style={{ padding: `${padding}px`, background: bg }}
      aria-label={alt}
    >
      <div className={mode === "full" ? styles.fullWrap : styles.centerWrap}>
        <img
          src={src}
          alt={alt}
          className={mode === "full" ? styles.fullImg : styles.centerImg}
          style={mode === "center" ? { width: computedWidth } : undefined}
          loading="lazy"
        />
      </div>
    </section>
  );
}
