"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";
import type { Product } from "@/app/data/products";

export default function ProductCard({ p }: { p: Product }) {
  const fmt = (n: number) =>
    n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const hasCompare = p.compareAtPrice && p.compareAtPrice > p.price;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 900px) 90vw, 360px"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        {p.badge && <span className={styles.badge}>{p.badge}</span>}
        <button className={styles.wish} aria-label="Add to wishlist">❤</button>
      </div>

      <h3 className={styles.title}>{p.title}</h3>

      <div className={styles.priceRow}>
        <span className={styles.price}>
          {p.currency ?? "AED"} {fmt(p.price)}
        </span>
        {hasCompare && (
          <>
            <span className={styles.compare}>
              {p.currency ?? "AED"} {fmt(p.compareAtPrice!)}
            </span>
          </>
        )}
      </div>
    </article>
  );
}
