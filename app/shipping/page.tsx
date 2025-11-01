import styles from "./Shipping.module.css";
import ShippingForm from "./ShippingForm"; // client component for the form

export const metadata = {
  title: "Shipping • Asghar Furniture",
  description:
    "Free delivery & installation across the UAE. Learn how our home delivery works and contact us for any questions.",
};

export default function ShippingPage() {
  return (
    <main className={styles.page}>
      {/* ===== Hero / Breadcrumbs ===== */}
      <section className={styles.hero} aria-label="Shipping banner">
        <img
          src="/media/banners/breadcrumbs.webp"
          alt="Shipping banner"
          className={styles.heroImg}
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Shipping</h1>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/" className={styles.crumb}>Home</a>
            <span className={styles.sep}>›</span>
            <span className={styles.crumbCurrent}>Shipping</span>
          </nav>
        </div>
      </section>

      {/* ===== Intro + Map ===== */}
      <section className={styles.intro}>
        <h2 className={styles.h2}>
          Our Home Delivery Service is Absolutely Free!
        </h2>

        <div className={styles.leadGrid}>
          <div className={styles.leadText}>
            <h3 className={styles.h3}>We Deliver Everywhere Around UAE</h3>
            <p>
              We deliver across the UAE. Your furniture will arrive at your
              doorstep within <strong>5–7 working days</strong> from the date of
              purchase and approval. Our process is designed to be smooth,
              reliable, and convenient—making your experience effortless.
            </p>
            <p>
              Simply select your product, place your order and confirm it
              through our Track Your Order service or by contacting us via your
              preferred channel. Any customization requests will also be
              confirmed with you directly.
            </p>
            <p>
              For more details on deliveries, please visit our{" "}
              <a href="/faqs">FAQs</a>.
            </p>
          </div>

          <div className={styles.mapWrap}>
            <img
              src="/media/banners/uae-map.jpg"
              alt="UAE delivery coverage map"
              className={styles.mapImg}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== Form + Side Content ===== */}
      <section className={styles.formSection}>
        <div className={styles.formGrid}>
          <ShippingForm />

          <aside className={styles.aside}>
            <div className={styles.card}>
              <h3 className={styles.h3}>Installation</h3>
              <p>
                Don’t worry about the hassle of assembling your new furniture.
                Our delivery team is fully equipped to professionally install
                your product exactly where you want it. We’ll handle the entire
                setup, so you can just sit back and relax.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.h3}>Customer Support</h3>
              <p>
                We are committed to providing exceptional customer support. Feel
                free to reach out via your preferred platform. For email
                inquiries, please use our <a href="/contact">Contact Us</a>{" "}
                page. For a more direct conversation, you can contact us via
                WhatsApp or use Live Chat for immediate help.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
