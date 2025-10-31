"use client";

import styles from "./footerSwitch.module.css";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  return (
    <>
      {/* Desktop / Tablet ≥ 769px */}
      <div className={styles.desktop}>
        <FooterDesktop />
      </div>

      {/* Mobile ≤ 768px */}
      <div className={styles.mobile}>
        <FooterMobile />
      </div>
    </>
  );
}
