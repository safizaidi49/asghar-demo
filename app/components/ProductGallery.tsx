// app/components/ProductGallery.tsx
"use client";

import { useState } from "react";
import styles from "./ProductGallery.module.css";

type Img = { src: string; alt?: string };

export default function ProductGallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState(0);
  const main = images[active] || images[0];

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        {/* regular <img> because next export + unoptimized images */}
        <img src={main.src} alt={main.alt || ""} />
      </div>

      <div className={styles.thumbs}>
        {images.map((im, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === active ? styles.active : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Image ${i + 1}`}
          >
            <img src={im.src} alt={im.alt || ""} />
          </button>
        ))}
      </div>
    </div>
  );
}
