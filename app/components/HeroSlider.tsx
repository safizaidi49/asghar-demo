"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

export default function HeroSlider({
  images,
  interval = 1000,
}: {
  images: Slide[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval]);

  useEffect(() => {
    setFade(true);
    const id = requestAnimationFrame(() => setFade(false));
    return () => cancelAnimationFrame(id);
  }, [i]);

  const start = () => {
    stop();
    timer.current = setInterval(() => {
      setI((p) => (p + 1) % images.length);
    }, interval);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        contain: "layout paint", // optional: isolates tiny reflows
      }}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* keep one image in normal flow, but DON'T remount the wrapper */}
      <div
        /* key removed */
        style={{
          transition: "opacity 800ms ease",
          opacity: fade ? 0 : 1,
          willChange: "opacity",
        }}
      >
        <Image
          src={images[i].src}
          alt={images[i].alt}
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* dots */}
      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          alignItems: "center",
          zIndex: 2,
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,.35))",
        }}
      >
        {images.map((_, idx) => {
          const active = idx === i;
          return (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: active ? 28 : 12,
                height: 8,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: active ? "#fff" : "rgba(255,255,255,.55)",
                transition: "width 250ms ease, background 250ms ease",
                padding: 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
