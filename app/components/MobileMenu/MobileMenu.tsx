"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./MobileMenu.module.css";
import { BEDROOM_MENU, LIVING_MENU, type MegaItem } from "../MegaMenu/data";

export type MobileSection = null | "bedroom" | "living";

type Props = {
  open: boolean;
  section: MobileSection;
  onClose: () => void;
  onOpenSection: (s: MobileSection) => void;
};

export default function MobileMenu({ open, section, onClose, onOpenSection }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const main = [
    { label: "BEDROOMS", href: "/category/bedrooms", isSection: true, sec: "bedroom" as const },
    { label: "LIVING ROOM", href: "/category/living-room", isSection: true, sec: "living" as const },
    { label: "NEW ARRIVALS", href: "/new-arrivals" },
    { label: "ASGHAR DEALS", href: "/deals" },
    { label: "FURNITURE PACKAGES", href: "/category/furniture-packages" },
  ];

  const items: MegaItem[] =
    section === "bedroom" ? BEDROOM_MENU :
    section === "living"  ? LIVING_MENU  : [];

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* top yellow bar */}
        <div className={styles.topbar} style={{ backgroundColor: "#f7be2f" }}>
          {section ? (
            <>
              {/* back on the left */}
              <button className={styles.navIcon} aria-label="Back" onClick={() => onOpenSection(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className={styles.title}>{section === "bedroom" ? "BEDROOMS" : "LIVING ROOM"}</div>
              <button className={styles.close} aria-label="Close" onClick={onClose}>✕</button>
            </>
          ) : (
            <>
              {/* empty left cell so the X stays on the far right */}
             
              <div className={styles.titleLeft}>CLOSE</div>
               <span />
              <button className={styles.close} aria-label="Close" onClick={onClose}>✕</button>
            </>
          )}
        </div>

        {/* MAIN LIST */}
        {!section && (
          <nav className={styles.mainList} aria-label="Mobile main">
            <ul>
              {main.map((m) => (
                <li key={m.label}>
                  {m.isSection ? (
                    <button className={styles.row} onClick={() => onOpenSection(m.sec!)}>
                      <span>{m.label}</span>
                      <svg viewBox="0 0 24 24" className={styles.right} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  ) : (
                    <Link href={m.href} className={styles.row} onClick={onClose}>
                      <span>{m.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* SECTION VIEW */}
        {section && (
          <div className={styles.sectionWrap}>
            <ul className={styles.sectionList}>
              {items.map((it) => (
                <li key={it.label}>
                  <Link href={it.href} className={styles.item} onClick={onClose}>
                    <span className={styles.iconWrap} aria-hidden>
                      <Image src={it.icon} alt="" width={28} height={28} className={styles.icon} />
                    </span>
                    <span className={styles.txt}>
                      <span className={styles.titleText}>{it.label}</span>
                      <span className={styles.desc}>{it.desc}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </>
  );
}
