"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryTiles.module.css";

export type CategoryItem = {
  src: string;
  label: string;
  href: string;
  alt?: string;
};

export default function CategoryTiles({ items }: { items: CategoryItem[] }) {
  return (
    <section className={styles.wrap} aria-label="Shop by category">
      <div className={styles.grid}>
        {items.map((it) => (
          <Link key={it.href} href={it.href} className={styles.card}>
            <figure className={styles.figure}>
              
              <Image
  src={it.src}
  alt={it.alt ?? it.label}
  sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, (max-width:1024px) 33vw, (max-width:1280px) 25vw, 16vw"
  width={0}
  height={0}
  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  priority
/>

            </figure>

            {/* Heading UNDER image */}
            <div className={styles.caption}>{it.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
