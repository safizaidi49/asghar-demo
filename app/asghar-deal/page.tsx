"use client";

import Image from "next/image";
import styles from "./deals.module.css";
import FeaturedProducts from "../components/FeaturedProducts";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

/** Cover image helper — supports object-fit override */
function FillImg({
  src,
  alt,
  priority = false,
  className,
  fit = "cover",                 // "cover" | "contain"
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      priority={priority}
      className={className}
      style={{ objectFit: fit, objectPosition: "center" }}
    />
  );
}

/** Square tile; caption is hidden ONLY for promo grid via CSS */
function CaptionTile({ src, label }: { src: string; label: string }) {
  return (
    <figure className={styles.tile}>
      <div className={styles.tileImgWrap}>
        <FillImg src={src} alt={label} />
      </div>
      <figcaption className={styles.tileCaption}>{label}</figcaption>
    </figure>
  );
}

export default function DealsPage() {
  /* === Top promo tiles === */
  const promoSquares = [
    { src: "/media/deals/Sale-300x300.webp", label: "SALE" },
    { src: "/media/deals/50OFF-1-300x300.webp", label: "50% OFF" },
    { src: "/media/deals/Online-Exclusives-300x300.webp", label: "ONLINE EXCLUSIVES" },
    { src: "/media/deals/Instore-Exclusives-300x300.webp", label: "IN STORE EXCLUSIVES" },
    { src: "/media/deals/Sofa-Deals-1-300x300.webp", label: "SOFA DEALS" },
    { src: "/media/deals/Bed-Deals-1-300x300.webp", label: "BED DEALS" },
  ];

  /* === Bedroom Essentials (right grid) === */
  const bedroomTiles = [
    { src: "/media/deals/Nightstand.webp", label: "Nightstands" },
    { src: "/media/deals/Dressing-Table.webp", label: "Dressing Tables" },
    { src: "/media/deals/Wardrobe.webp", label: "Wardrobes" },
    { src: "/media/deals/Mirrors-1.webp", label: "Mirrors" },
    { src: "/media/deals/Nest-of-tables.webp", label: "Ottomans" },
    { src: "/media/deals/Chest-of-Drawer-1.webp", label: "Chest of Drawers" },
  ];

  /* === Living Room Essentials (left grid) === */
  const livingTiles = [
    { src: "/media/deals/Center-Table.webp", label: "Center Tables" },
    { src: "/media/deals/Nest-of-tables.webp", label: "Nest of Tables" },
    { src: "/media/deals/Armchair.webp", label: "Armchairs" },
    { src: "/media/deals/Loveseat.webp", label: "Daybeds" },
    { src: "/media/deals/Loveseat.webp", label: "Loveseats" },
    { src: "/media/deals/TV-Cabinet.webp", label: "Tv Cabinets" },
  ];

  return (
    <main className={styles.page}>
      {/* ===== Hero (full bleed). Use contain so NOTHING crops on both desk & mobile ===== */}
      <section className={styles.herobanner}>
        <div className={styles.herobannerImg}>
          {/* desktop */}
          <FillImg
            className={styles.deskOnly}
            src="/media/deals/Deals-banner.webp"
            alt="Asghar Deals"
            priority
            fit="cover"
          />
          {/* mobile */}
          <FillImg
            className={styles.mobiOnly}
            src="/media/deals/Deals-banner-Mobile.webp"
            alt="Asghar Deals"
            priority
            fit="contain"
          />
        </div>
      </section>

      {/* ===== Promo squares (no captions here) ===== */}
      <section className={styles.section}>
        <div className={styles.promoGrid}>
          {promoSquares.map((t) => (
            <CaptionTile key={t.label} {...t} />
          ))}
        </div>
      </section>

      {/* ===== Featured products ===== */}
      <section className={styles.section}>
        <div className={styles.noPadFP}>
          <FeaturedProducts />
        </div>
      </section>

      {/* ===== Sectional Sofas banner ===== */}
      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg
            className={styles.deskOnly}
            src="/media/deals/sectional-sofas.webp"
            alt="Sectional Sofas"
            fit="contain"
          />
          <FillImg
            className={styles.mobiOnly}
            src="/media/deals/sectional-sofas.webp"  /* replace with mobile asset when ready */
            alt="Sectional Sofas"
            fit="contain"
          />
        </div>
      </section>

      {/* ===== Premium Beds banner ===== */}
      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg
            className={styles.deskOnly}
            src="/media/deals/premium-beds.webp"
            alt="Premium Beds"
            fit="contain"
          />
          <FillImg
            className={styles.mobiOnly}
            src="/media/deals/premium-beds.webp"     /* swap once you have a mobile version */
            alt="Premium Beds"
            fit="contain"
          />
        </div>
      </section>

      {/* ===== ADCB banner ===== */}
      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg
            className={styles.deskOnly}
            src="/media/deals/ADCB-1-1.webp"
            alt="ADCB Offers"
            fit="contain"
          />
          <FillImg
            className={styles.mobiOnly}
            src="/media/deals/ADCB-1-1.webp"         /* dedicated mobile also OK here */
            alt="ADCB Offers"
            fit="contain"
          />
        </div>
      </section>

      {/* ===== Bedroom Essentials ===== */}
      <section className={styles.section}>
        <h2 className={styles.blockTitle}>Bedroom Essentials</h2>
        <div className={`${styles.essentials} ${styles.essentialsBedroom}`}>
          <figure className={styles.hero}>
            <div className={styles.heroImg}>
              <FillImg src="/media/deals/Bedroom-essential.webp" alt="Bedroom Essentials" />
            </div>

<figcaption className={`${styles.heroCaption} ${cinzel.className}`}>
  BEDROOM<br/>ESSENTIALS
</figcaption>

            {/* <figcaption className={styles.heroCaption}>
              BEDROOM<br />ESSENTIALS
            </figcaption> */}
          </figure>

          <div className={styles.tilesGrid}>
            {bedroomTiles.map((t) => (
              <CaptionTile key={t.label} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Living Room Essentials ===== */}
      <section className={styles.section}>
        <h2 className={styles.blockTitle}>Living Room Essentials</h2>
        <div className={`${styles.essentials} ${styles.essentialsLiving}`}>
          <div className={styles.tilesGrid}>
            {livingTiles.map((t) => (
              <CaptionTile key={t.label} {...t} />
            ))}
          </div>

          <figure className={styles.hero}>
            <div className={styles.heroImg}>
              <FillImg src="/media/deals/Living-Room_essential.webp" alt="Living Room Essentials" />
            </div>
            <figcaption className={`${styles.heroCaption} ${cinzel.className}`}>
              LIVING ROOM<br />ESSENTIALS
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== Remaining banners ===== */}
      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg className={styles.deskOnly} src="/media/deals/Fazaa-1.webp" alt="Fazaa" fit="contain" />
          <FillImg className={styles.mobiOnly} src="/media/deals/Fazaa-1.webp" alt="Fazaa" fit="contain" />
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg className={styles.deskOnly} src="/media/deals/Bedroom-Set.webp" alt="Bedroom Set" fit="contain" />
          <FillImg className={styles.mobiOnly} src="/media/deals/Bedroom-Set.webp" alt="Bedroom Set" fit="contain" />
        </div>
      </section>

      <section className={styles.banner}>
        <div className={styles.bannerImg}>
          <FillImg className={styles.deskOnly} src="/media/deals/In-Store-Exclusives-1.webp" alt="In-Store Exclusives" fit="contain" />
          <FillImg className={styles.mobiOnly} src="/media/deals/In-Store-Exclusives-1.webp" alt="In-Store Exclusives" fit="contain" />
        </div>
      </section>
      
    </main>
  );
}
