"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./NewArrivals.module.css";

export default function NewArrivals() {
  return (
    <section className={styles.section} aria-label="New arrivals">
      <div className={styles.grid}>
        {/* LEFT: Image */}
        <div className={styles.media}>
          <Image
            src="/banners/new-arrivals.webp"   // put the image here
            alt="New arrivals living room scene"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 992px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT: Content */}
        <div className={styles.contentCol}>
          <div className={styles.content}>
            <h2 className={styles.title}>NEW ARRIVALS</h2>
            <p className={styles.sub}>EXPLORE SIGNATURE PIECES</p>
            <span className={styles.rule} aria-hidden="true" />
            <Link href="/new-arrivals" className={styles.btn}>
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
