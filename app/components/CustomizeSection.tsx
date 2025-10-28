"use client";

import styles from "./CustomizeSection.module.css";

export default function CustomizeSection() {
  // YT needs playlist=<id> to loop an individual video
  const id = "3x56FX1ptlk";
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&fs=0&disablekb=1&enablejsapi=1`;

  return (
    <section className={styles.section}>
      <div className={styles.headingArea}>
        <h2 className={styles.title}>CUSTOMIZE FURNITURE</h2>
        <p className={styles.subtitle}>
          Choose fabric, color, style and dimensions to create furniture that’s truly yours.
        </p>
      </div>

      <div className={styles.videoWrapper}>
        <iframe
          src={src}
          title="Fully Customizable Curva Sofa | Comfort Meets Personal Style"
          allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
          allowFullScreen={false}
        />
      </div>
    </section>
  );
}
