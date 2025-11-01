import styles from "./ComingSoon.module.css";

export const metadata = {
  title: "Coming Soon • Asghar Furniture",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className={styles.cs_wrap} aria-label="Coming soon">
      <picture className={styles.picture}>
        {/* Mobile first */}
        <source
          media="(max-width: 767px)"
          srcSet="/media/banners/comingsoonmobile.webp"
        />
        {/* Desktop default */}
        <img
          src="/media/banners/comingsoon.webp"
          alt="Coming soon • Asghar Furniture"
          className={styles.cs_bg}
          loading="eager"
          fetchPriority="high"
        />
      </picture>
    </main>
  );
}
