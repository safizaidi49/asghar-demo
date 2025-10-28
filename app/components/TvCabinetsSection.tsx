"use client";

import Image from "next/image";
import styles from "./TvCabinetsSection.module.css";

export default function TvCabinetsSection() {
  return (
    <section className={styles.section} aria-label="Premium TV Centers">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Premium TV Centers</p>

        <h2 className={styles.title}>ENTERTAIN IN STYLE</h2>

        <span className={styles.rule} aria-hidden="true" />

        <a href="/category/tv-cabinets" className={styles.cta}>
          Shop Now
        </a>
      </div>

      <div className={styles.figure}>
        {/* transparent image, centered below the text */}
        <Image
          src="/banners/tvcabinets.webp"  /* put the file here */
          alt="Premium TV cabinet"
          width={1600}
          height={420}
          priority
          className={styles.img}
        />
      </div>
    </section>
  );
}
