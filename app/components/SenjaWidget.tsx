"use client";

import Script from "next/script";
import clsx from "clsx";
import styles from "./SenjaWidget.module.css";

type Props = {
  /** Your Senja widget id */
  id: string;
  /** true => use Senja's lazyload */
  lazy?: boolean;
  /** Optional heading & subheading text */
  title?: string;
  subtitle?: string;
  /** Optional wrapper class */
  className?: string;
};

export default function SenjaWidget({
  id,
  lazy = false,
  title = "WHAT OUR CUSTOMERS SAY",
  subtitle = "See genuine feedback from customers about their experience with Asghar Furniture",
  className,
}: Props) {
  return (
    <section className={clsx(styles.section, className)} aria-labelledby="senja-title">
      {/* Heading block */}
      <div className={styles.head}>
        <h2 id="senja-title" className={styles.title}>
          {title}
        </h2>
        {subtitle && <p className={styles.sub}>{subtitle}</p>}
        <span aria-hidden className={styles.rule} />
      </div>

      {/* Load Senja platform script (do not SSR) */}
      <Script
        src={`https://widget.senja.io/widget/${id}/platform.js`}
        strategy="afterInteractive"
      />

      {/* The container Senja looks for — don't style internally */}
      <div
        className="senja-embed"
        data-id={id}
        data-lazyload={lazy ? "true" : "false"}
        style={{ display: "block", width: "100%" }}
      />
    </section>
  );
}
