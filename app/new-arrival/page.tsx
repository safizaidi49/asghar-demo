"use client";

import Image from "next/image";
import styles from "./newArrivals.module.css";
import FeaturedProducts from "../components/FeaturedProducts";

/** Simple square image tile used inside the 2×2 grid */
function SquareImg({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={styles.sqTile}>
      <div className={styles.sqImgWrap}>
        <Image src={src} alt={alt} fill sizes="50vw" style={{ objectFit: "cover" }} />
      </div>
    </figure>
  );
}

/** Hero LEFT: big hero + 2×2 grid */
function MosaicHeroLeft({
  hero,
  tiles,
  title,
  sublink,
}: {
  hero: { src: string; alt: string };
  tiles: { src: string; alt: string }[];
  title: string;
  sublink: string;
}) {
  return (
    <div className={styles.duo}>
      <div
        className={styles.heroTile}
        style={{ backgroundImage: `url(${hero.src})` }}
        aria-label={hero.alt}
        role="img"
      >
        {/* Mobile-only real image to avoid background stretch */}
        <div className={styles.heroImgMobile}>
          <Image src={hero.src} alt={hero.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>

        <div className={styles.centerOverlay}>
          <div className={styles.centerTitle}>{title}</div>
          <div className={styles.centerLink}>{sublink}</div>
        </div>
      </div>

      <div className={styles.quad}>
        {tiles.slice(0, 4).map((t) => (
          <SquareImg key={t.src} {...t} />
        ))}
      </div>
    </div>
  );
}

/** Hero RIGHT: 2×2 grid + big hero (hero renders first on mobile via CSS order) */
function MosaicHeroRight({
  hero,
  tiles,
  title,
  sublink,
}: {
  hero: { src: string; alt: string };
  tiles: { src: string; alt: string }[];
  title: string;
  sublink: string;
}) {
  return (
    <div className={`${styles.duo} ${styles.duoReverse}`}>
      <div className={styles.quad}>
        {tiles.slice(0, 4).map((t) => (
          <SquareImg key={t.src} {...t} />
        ))}
      </div>

      <div
        className={styles.heroTile}
        style={{ backgroundImage: `url(${hero.src})` }}
        aria-label={hero.alt}
        role="img"
      >
        {/* Mobile-only real image to avoid background stretch */}
        <div className={styles.heroImgMobile}>
          <Image src={hero.src} alt={hero.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>

        <div className={styles.centerOverlay}>
          <div className={styles.centerTitle}>{title}</div>
          <div className={styles.centerLink}>{sublink}</div>
        </div>
      </div>
    </div>
  );
}

export default function NewArrivalsPage() {
  const A = "/media/Arrivals";

  // Sectional (hero on left)
  const sectionalHero = { src: `${A}/sofa.webp`, alt: "Sectional Sofa" };
  const sectionalTiles = [
    { src: `${A}/sofa-img1.webp`, alt: "Sectional 1" },
    { src: `${A}/sofa-img2.webp`, alt: "Sectional 2" },
    { src: `${A}/sofa-img3.webp`, alt: "Sectional 3" },
    { src: `${A}/sofa-img4.webp`, alt: "Sectional 4" },
  ];

  // Bedroom (hero on right)
  const bedroomHero = { src: `${A}/bedroom.webp`, alt: "Bedroom" };
  const bedroomTiles = [
    { src: `${A}/bedroom-img1.webp`, alt: "Dressing Table" },
    { src: `${A}/bedroom-img2.webp`, alt: "Nightstand" },
    { src: `${A}/bedroom-img3.webp`, alt: "Console" },
    { src: `${A}/bedroom-img4.webp`, alt: "Accent Chair" },
  ];

  // Living (hero on left)
  const livingHero = { src: `${A}/living.webp`, alt: "Living Room" };
  const livingTiles = [
    { src: `${A}/living-img1.webp`, alt: "Armchair" },
    { src: `${A}/living-img2.webp`, alt: "TV Cabinet" },
    { src: `${A}/living-img3.webp`, alt: "Coffee Table" },
    { src: `${A}/living-img4.webp`, alt: "Bench" },
  ];

  return (
    <main className={styles.page}>
      {/* ===== Hero banner (desktop + mobile landing) ===== */}
      <section className={styles.herobanner}>
        <div className={styles.herobannerImg}>
          {/* Desktop hero */}
          <Image
            className={styles.deskOnly}
            src={`${A}/New-Arrivals-Banner.webp`}
            alt="The Latest Collections"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          {/* Mobile landing hero — replace filename if yours differs */}
          <Image
            className={styles.mobiOnly}
            src={`${A}/New-Arrivals-Mobile-Banner.webp`}
            alt="The Latest Collections"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ===== Sectional Sofa (hero left) ===== */}
      <section className={styles.section}>
        <MosaicHeroLeft
          hero={sectionalHero}
          tiles={sectionalTiles}
          title="SECTIONAL SOFA"
          sublink="VIEW ALL"
        />
      </section>

      {/* ===== Premium Beds (right-aligned overlay) ===== */}
      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <Image
            src={`${A}/premium_bed.webp`}
            alt="Premium Beds"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.centerOverlay} ${styles.rightCenter}`}>
            <div className={styles.centerBlock}>
              <div className={styles.centerTitle}>PREMIUM BEDS</div>
              <div className={styles.centerLink}>VIEW COLLECTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bedroom (hero right) ===== */}
      <section className={styles.section}>
        <MosaicHeroRight
          hero={bedroomHero}
          tiles={bedroomTiles}
          title="BEDROOM"
          sublink="VIEW COLLECTION"
        />
      </section>

      {/* ===== Cabinet split (image + text column) ===== */}
      <section className={styles.section}>
        <div className={styles.cabinetSplit}>
          <figure className={styles.sqTile}>
            <div className={styles.cabImgWrap}>
              <Image
                src={`${A}/curveedge-minimal-tv-unit.webp`}
                alt="Cabinet"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </figure>
          <div className={styles.cabinetText}>
            <h3>
              FUNCTIONAL &amp;
              <br />
              STYLISH CABINETS
            </h3>
            <p className={styles.centerLink}>VIEW COLLECTION</p>
          </div>
        </div>
      </section>

      {/* ===== Living (hero left) ===== */}
      <section className={styles.section}>
        <MosaicHeroLeft hero={livingHero} tiles={livingTiles} title="LIVING ROOM" sublink="VIEW COLLECTION" />
      </section>

      {/* ===== Featured products ===== */}
      <section className={styles.section}>
        <div className={styles.noPadFP}>
          <FeaturedProducts />
        </div>
      </section>
    </main>
  );
}
