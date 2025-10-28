"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TopBar.module.css";

type Props = {
  messages?: string[];
  /** ms; pass 0 to disable autoplay */
  interval?: number;
};

export default function TopBar({
  messages = [
    "Easy payment plans",
    "Free delivery & installation",
    "Made in UAE",
  ],
  interval = 3500,
}: Props) {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setI((p) => (p + 1) % messages.length);
  const prev = () => setI((p) => (p - 1 + messages.length) % messages.length);

  useEffect(() => {
    if (!interval) return;
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(next, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [interval, messages.length]);

  return (
    <div className={styles.bar} role="region" aria-label="Site announcement">
      <div className={styles.group}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous announcement"
          onClick={prev}
        >
          <svg viewBox="0 0 24 24"><path d="M14 6 L8 12 L14 18" /></svg>
        </button>

        <div className={styles.msgWrap}>
          <span className={styles.msg}>{messages[i]}</span>
        </div>

        <button
          type="button"
          className={styles.arrow}
          aria-label="Next announcement"
          onClick={next}
        >
          <svg viewBox="0 0 24 24"><path d="M10 6 L16 12 L10 18" /></svg>
        </button>
      </div>
    </div>
  );
}
