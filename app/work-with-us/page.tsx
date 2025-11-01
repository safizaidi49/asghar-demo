import styles from "./WorkWithUs.module.css";

export const metadata = {
  title: "Work With Us • Asghar Furniture",
  description:
    "Partner with Asghar Furniture: influencer collaborations, B2B wholesale, affiliates, and career opportunities across the UAE.",
  robots: { index: true, follow: true },
};

export default function WorkWithUsPage() {
  return (
    <main className={styles.page}>
      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Work with us banner">
        <img
          src="/media/banners/Work-With-Us.png"
          alt="Work with us"
          className={styles.heroImg}
          loading="eager"
          fetchPriority="high"
        />

        <div className={styles.heroContent}>
          <h1 className={styles.title}>Interested to work with us? Let us know.</h1>
          <p className={styles.kicker}>
            As a local furniture manufacturer in the United Arab Emirates, we serve
            individuals and organizations alike.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="/contact">Contact Us</a>
            <a className={styles.btnGhost} href="mailto:care@asgharfurniture.ae">
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* ===== Tracks (cards) ===== */}
      <section className={styles.blocks} aria-labelledby="workTracks">
        <h2 id="workTracks" className={styles.sectionTitle}>Ways to collaborate</h2>

        <div className={styles.grid}>
          {/* 1. Influencers */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* chat-bubble + stars */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-5 5v-5H5a3 3 0 0 1-3-3V5z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Social Influencer Collaborations</h3>
            <p>
              Are you a Social Media Influencer looking to grow your reach?
              Let’s partner on creative campaigns and bring curated home ideas
              to your audience.
            </p>
            <ul className={styles.bullets}>
              <li>Sponsored shoots & reels</li>
              <li>Exclusive coupon codes</li>
              <li>New-collection previews</li>
            </ul>
            <a className={styles.link} href="/contact?topic=influencer">Apply as an influencer →</a>
          </article>

          {/* 2. B2B */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* warehouse / boxes */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>B2B – Wholesale Distribution</h3>
            <p>
              Retailers, designers, and organizations can source from our catalog
              or request custom branding. Bulk pricing and dedicated support available.
            </p>
            <ul className={styles.bullets}>
              <li>Volume pricing & invoicing</li>
              <li>Custom finishes & SKUs</li>
              <li>Door-to-door UAE delivery</li>
            </ul>
            <a className={styles.link} href="/contact?topic=b2b">Start a B2B conversation →</a>
          </article>

          {/* 3. Affiliate */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* link/chain */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M10.6 13.4a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0z"/>
                <path d="M7 17a3 3 0 0 1 0-6h2a1 1 0 1 0 0-2H7a5 5 0 0 0 0 10h2a1 1 0 1 0 0-2H7zm10-8h-2a1 1 0 1 0 0 2h2a3 3 0 0 1 0 6h-2a1 1 0 1 0 0 2h2a5 5 0 0 0 0-10z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Affiliate Program</h3>
            <p>
              Earn with your network by promoting our products. Trackable links,
              transparent payouts, and creative assets provided.
            </p>
            <ul className={styles.bullets}>
              <li>Dashboard & tracking</li>
              <li>Tiered commissions</li>
              <li>Marketing assets pack</li>
            </ul>
            <a className={styles.link} href="/contact?topic=affiliate">Join the affiliate list →</a>
          </article>

          {/* 4. Careers */}
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {/* briefcase */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M9 3h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v3H1V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm6 3V5H9v1h6zM1 12h22v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Career Opportunities</h3>
            <p>
              We’re growing. Share your CV or LinkedIn profile and we’ll reach out
              when a suitable role opens.
            </p>
            <ul className={styles.bullets}>
              <li>Retail & ops roles</li>
              <li>Design & marketing</li>
              <li>Tech & e-commerce</li>
            </ul>
            <a className={styles.link} href="/contact?topic=careers">Send your CV →</a>
          </article>
        </div>
      </section>
    </main>
  );
}
