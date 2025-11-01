"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["af-footer"]}>
      {/* ===== Top Partner Bar ===== */}
      <section className={styles["af-partners-wrap"]}>
        <p className={styles["af-partners-title"]}>PARTNERED WITH</p>
        <div className={styles["af-partners-grid"]}>
          <div className={styles["af-partners-left"]}>
            <Image src="/media/footer/noon-ae.webp" alt="Noon" width={140} height={64} />
            <Image src="/media/footer/Amazon.webp" alt="Amazon" width={140} height={64} />
            <Image src="/media/footer/Fazaa.webp" alt="Fazaa" width={140} height={64} />
          </div>
          <div className={styles["af-partners-mid"]}></div>
          <div className={styles["af-partners-right"]}>
            <Image src="/media/footer/Certificates.webp" alt="Certificates" width={360} height={64} />
          </div>
        </div>
      </section>

      {/* ===== Main Grid ===== */}
      
      <section className={styles["af-grid"]}>
        {/* <div className={styles["brand"]}>
          <Image src="/media/footer/AF-Logo.png" alt="Asghar Furniture" width={240} height={120} />
          <Image src="/media/footer/Footer-Logos-1.webp" alt="Since 1977" width={190} height={90} />
        </div> */}
        <div className={styles.brand}>
  <div className={styles.brandBlock}>
    <Image
      src="/media/footer/AF-Logo.png"
      alt="Asghar Furniture"
      width={240}
      height={120}
      style={{ width: "100%", height: "auto" }}
    />
  </div>

  {/* NEW: thin separator between the two images */}
  <div className={styles.brandDivider} />

  <div className={`${styles.brandBlock} ${styles.brandBadges}`}>
    <Image
      src="/media/footer/Footer-Logos-1.webp"
      alt="Awards & Years"
      width={240}
      height={120}
      style={{ width: "100%", height: "auto" }}
    />
  </div>
</div>

        <div className={styles["know"]}>
          <h4>Know More</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="#">Furniture Blogs</Link></li>
            <li><Link href="#">Bespoke Furniture</Link></li>
            <li><Link href="#">Track Your Order</Link></li>
            <li><Link href="/shipping">Delivery / Shipping</Link></li>
            <li><Link href="/work-with-us">Work With Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/frequently-asked-questions">FAQs</Link></li>
          </ul>
        </div>

        <div className={styles["quick"]}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#">Accent / Arm Chairs</Link></li>
            <li><Link href="#">Storage Furniture</Link></li>
            <li><Link href="#">Chest of Drawers</Link></li>
            <li><Link href="#">Dressing Tables</Link></li>
            <li><Link href="#">TV Cabinets</Link></li>
            <li><Link href="#">Mattresses</Link></li>
            <li><Link href="#">Wardrobes</Link></li>
            <li><Link href="#">Mirrors</Link></li>
          </ul>
        </div>

        <div className={styles["branches"]}>
          <h4>Our Branches</h4>
          <ul className={styles["branch-list"]}>
            {["Asghar Furniture – Dubai", "Asghar Furniture – Abu Dhabi", "Asghar Furniture – Dubai JVC", "Asghar Furniture – Ajman"].map((t) => (
              <li key={t}>
                <Image src="/media/footer/Location.svg" alt="" width={16} height={16} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["contact"]}>
          <h4>Contact Us</h4>
          <div className={styles["contactStack"]}>
            <div className={`${styles["cta"]} ${styles["ctaPhone"]}`}>
              <div className={styles["ctaIcon"]}>
                <Image src="/media/footer/Call.svg" alt="Call" width={20} height={20} />
              </div>
              <div className={styles["ctaText"]}>
                <small>TOLL FREE</small>
                <strong>800 27 44 27</strong>
              </div>
            </div>

            <div className={`${styles["cta"]} ${styles["ctaEmail"]}`}>
              <div className={styles["ctaIcon"]}>
                <Image src="/media/footer/Email.svg" alt="Email" width={20} height={20} />
              </div>
              <div className={styles["ctaText"]}>info@asgharfurniture.ae</div>
            </div>
          </div>

          <h4 className={styles["follow-title"]}>Follow Us</h4>
          <div className={styles["socials"]}>
            {["facebook", "instagram", "x", "youtube", "tik-tok", "linkedin", "pinterest", "Untitled-design-2"].map((n) => (
              <Image key={n} src={`/media/footer/${n}.png`} alt={n} width={20} height={20} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom Bar ===== */}
      <section className={styles["af-bottom"]}>
        <nav className={styles["policies"]}>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <span className={styles["sep"]} />
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <span className={styles["sep"]} />
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div className={styles["payments"]}>
          <Image src="/media/footer/payment-methods-D.png" alt="Payment Methods" width={260} height={36} />
        </div>
        <p className={styles["copy"]}>© Copyright 2025 Asghar Furniture LLC – All Rights Reserved.</p>
      </section>
    </footer>
  );
}
