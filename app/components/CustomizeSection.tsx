"use client";

import styles from "./CustomizeSection.module.css";

export default function CustomizeSection() {
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
          src="https://www.youtube.com/embed/3x56FX1ptlk?autoplay=0&mute=0&loop=1&controls=1&modestbranding=1&playsinline=1"
          title="Fully Customizable Curva Sofa | Comfort Meets Personal Style"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
