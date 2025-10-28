"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

export default function HeroSlider({
  images,
  interval = 4000,
}: {
  images: Slide[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);

  return (
    <div style={{ position: "relative" }}>
      {/* Single visible image — keeps natural height */}
      <div
        key={images[i].src} // key triggers fade-in on change
        style={{
          position: "relative",
          transition: "opacity 450ms ease",
          opacity: 1,
        }}
      >
        <Image
          src={images[i].src}
          alt={images[i].alt}
          // natural height: width 100%, height auto
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: 12,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,.5)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "8px 10px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: 12,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,.5)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "8px 10px",
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
        }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: idx === i ? "#fff" : "rgba(255,255,255,.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
