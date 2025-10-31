"use client";

import Image from "next/image";
import Link from "next/link";
import s from "./footerMobile.module.css";

export default function FooterMobile() {
  return (
    <footer className={s.wrap}>
      {/* ========== Section 1: Partnered With ========== */}
      <section className={s.partnerBar}>
        <p className={s.partnerTitle}>PARTNERED WITH</p>
        <div className={s.partnerRow}>
          <div className={s.partnerLeft}>
            <Image src="/media/footer/noon-ae.webp" alt="Noon" width={50} height={28} />
            <Image src="/media/footer/Amazon.webp" alt="Amazon" width={50} height={28} />
            <Image src="/media/footer/Fazaa.webp" alt="Fazaa" width={31} height={28} />
          </div>
          <div className={s.partnerRight}>
            <Image
              src="/media/footer/Certificates.webp"
              alt="Certificates"
              width={160}
              height={50} /* height governs equal height */
            />
          </div>
        </div>
      </section>

      {/* ========== Section 2: Brand + Menus (3 columns) ========== */}
      <section className={s.topGrid}>
        {/* Brand col with inner separator between the 2 badges */}
        <div className={s.brandCol}>
          <Image
            src="/media/footer/AF-Logo.png"
            alt="Asghar Furniture"
            width={100}
            height={60}
            style={{ height: "auto", width: "100%" }}
          />
          <div className={s.brandDivider} />
          <div className={s.badges}>
            <Image src="/media/footer/Footer-Logos-1.webp" alt="Awards" width={110} height={52} />
          </div>
        </div>

        {/* Know More */}
        <nav className={s.menuCol}>
          <h4 className={s.head}>Know More</h4>
          <ul className={s.menu}>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Furniture Blogs</Link></li>
            <li><Link href="#">Bespoke Furniture</Link></li>
            <li><Link href="#">Track Your Order</Link></li>
            <li><Link href="#">Delivery / Shipping</Link></li>
            <li><Link href="#">Work With Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav className={s.menuCol}>
          <h4 className={s.head}>Quick Links</h4>
          <ul className={s.menu}>
            <li><Link href="#">Accent / Arm Chairs</Link></li>
            <li><Link href="#">Storage Furniture</Link></li>
            <li><Link href="#">Chest of Drawers</Link></li>
            <li><Link href="#">Dressing Tables</Link></li>
            <li><Link href="#">TV Cabinets</Link></li>
            <li><Link href="#">Mattresses</Link></li>
            <li><Link href="#">Wardrobes</Link></li>
            <li><Link href="#">Mirrors</Link></li>
          </ul>
        </nav>
      </section>

      {/* separator between section 2 and 3 */}
      <div className={s.hr} />

      {/* ========== Section 3: Contact (left) + Branches (right) ========== */}
      <section className={s.midGrid}>
        {/* Contact */}
        <div>
          <h4 className={s.head}>Contact Us</h4>

          <div className={`${s.cta} ${s.phone}`}>
            <Image src="/media/footer/Call.svg" alt="" width={16} height={16} />
            <span className={s.ctaText}>TOLL FREE 800 27 44 27</span>
          </div>

          <div className={`${s.cta} ${s.email}`}>
            <Image src="/media/footer/Email.svg" alt="" width={16} height={16} />
            <span className={s.ctaText}>info@asgharfurniture.ae</span>
          </div>
        </div>

        {/* Branches */}
        <div>
          <h4 className={s.head}>Our Branches</h4>
          <ul className={s.branches}>
            {[
              "Asghar Furniture – Dubai",
              "Asghar Furniture – Abu Dhabi",
              "Asghar Furniture – Dubai JVC",
              "Asghar Furniture – Ajman",
            ].map((t) => (
              <li key={t} className={s.branchItem}>
                <Image src="/media/footer/Location.svg" className={s.loc} alt="" width={12} height={12} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 4: Socials + Policies + Payments + Copyright ========== */}
      <section className={s.bottomStack}>
        <h4 className={s.head}>Follow Us</h4>
        <div className={s.socials}>
          {["facebook","instagram","x","youtube","tik-tok","linkedin","pinterest","Untitled-design-2"].map(n => (
            <Image key={n} src={`/media/footer/${n}.png`} alt={n} width={20} height={20} />
          ))}
        </div>

        <div className={s.policies}>
          <Link href="#">Cookie Policy</Link><span className={s.sep}>|</span>
          <Link href="#">Terms and Conditions</Link><span className={s.sep}>|</span>
          <Link href="#">Privacy Policy</Link>
        </div>

        <div className={s.payments}>
          <Image src="/media/footer/payment-methods-D.png" alt="Payments" width={210} height={28} />
        </div>

        <p className={s.copy}>
          © Copyright 2025 Asghar Furniture LLC – All Rights Reserved.
        </p>
      </section>
    </footer>
  );
}
