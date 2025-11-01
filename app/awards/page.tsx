"use client";

import Image from "next/image";
import styles from "./Awards.module.css";

type Card = {
  id: string;
  img: string;   // path under /public
  alt: string;
  desc: string;  // collapsible body text
};

const awards: Card[] = [
  {
    id: "award-manufacturer-2024",
    img: "/media/awards/cert1.webp",
    alt: "Best Furniture Manufacturer 2024 certificate",
    desc:
      'Awarded “Best Furniture Manufacturer 2024” by Arabian Best of Best Awards for excellence and commitment to quality.',
  },
  {
    id: "award-winner-badge-2024",
    img: "/media/awards/certbadge.webp",
    alt: "Winner badge 2024",
    desc:
      "Recognized for outstanding performance and customer satisfaction across the UAE market.",
  },
];

const certificates: Card[] = [
  {
    id: "iso-9001-qms",
    img: "/media/awards/iso_qms.webp",
    alt: "ISO 9001:2015",
    desc:
      "Our ISO 9001:2015 certification guarantees our dedication to exceptional products and services.",
  },
  {
    id: "iso-14001-ems",
    img: "/media/awards/iso-ems.webp",
    alt: "ISO 14001:2015",
    desc:
      "Demonstrates our commitment to sustainable practices and environmental stewardship.",
  },
  {
    id: "iso-45001-ohsms",
    img: "/media/awards/iso-ohsms.webp",
    alt: "ISO 45001:2018",
    desc:
      "Ensures safe, healthy workplaces for our team and partners across all operations.",
  },
  {
    id: "gmp",
    img: "/media/awards/isogmp.webp",
    alt: "GMP",
    desc:
      "Confirms strict adherence to process controls and quality assurance standards.",
  },
];

export default function Page() {
  return (
    <main className={styles.wrap} aria-label="Awards & Certifications">
      {/* HERO */}
      <section className={styles.hero}>
  <div className={styles.heroImg}>
    <picture>
      {/* mobile first */}
      <source
        media="(max-width: 767px)"
        srcSet="/media/awards/Mobile-banner-Awards.webp"   // <-- your mobile banner
      />
      {/* desktop / default */}
      <img
        src="/media/awards/Landing-Awards.webp"
        alt="Awards & Certifications banner"
        className={styles.heroImgEl}
        loading="eager"
        fetchPriority="high"
      />
    </picture>
  </div>
</section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Our Milestones</h2>
        <p className={styles.lead}>
          Our journey has been marked by dedication, innovation, and excellence.
          Over the years, we have been honored with numerous awards and
          recognitions that reflect our commitment to quality and our passion
          for delivering outstanding results.
        </p>
      </section>

      <hr className={styles.divider} />

      {/* AWARDS GRID */}
      <section className={styles.section}>
        <h3 className={styles.h3} style={{ textAlign: "center" }}>
          Arabian Best Of Best Awards
        </h3>

        <div className={`${styles.grid} ${styles.grid2}`}>
          {awards.map((c) => (
            <article key={c.id} className={styles.card}>
              <details>
                <summary aria-label="Open award details">
                  <div className={styles.figure}>
                    <Image
                      src={c.img}
                      alt={c.alt}
                      width={800}
                      height={600}
                      sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 40vw"
                      priority
                    />
                  </div>
                </summary>

                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* CERTIFICATES GRID */}
      <section className={styles.section}>
        <h3 className={styles.h3} style={{ textAlign: "center" }}>
          Certificates
        </h3>

        <div className={`${styles.grid} ${styles.grid4}`}>
          {certificates.map((c) => (
            <article key={c.id} className={styles.card}>
              <details>
                <summary aria-label="Open certificate details">
                  <div className={styles.figure}>
                    <Image
                      src={c.img}
                      alt={c.alt}
                      width={800}
                      height={600}
                      sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 25vw"
                    />
                  </div>
                </summary>

                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
