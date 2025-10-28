"use client";

import Image from "next/image";
import styles from "./FeaturedProducts.module.css";
import { demoProducts } from "../data/products";

const fmt = (n: number) =>
  n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function FeaturedProducts() {
  return (
    <section className={styles.featureSection}>
      <h2 className={styles.title}>Featured Products</h2>

      <div className={styles.grid}>
        {demoProducts.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={600}
                className={styles.image}
                priority={false}
              />
              {p.badge && <span className={styles.badge}>{p.badge}</span>}
            </div>

            <div className={styles.info}>
              <h3 className={styles.name}>{p.title}</h3>

              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {p.currency ?? "AED"} {fmt(p.price)}
                </span>

                {typeof p.compareAtPrice === "number" && p.compareAtPrice > p.price && (
                  <span className={styles.oldPrice}>
                    {p.currency ?? "AED"} {fmt(p.compareAtPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
