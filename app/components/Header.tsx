"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import styles from "./Header.module.css";

import MegaMenu from "./MegaMenu/MegaMenu";
import type { MegaSection } from "./MegaMenu/MegaMenu";

/* 👇 new mobile drawer */
import MobileMenu, { type MobileSection } from "./MobileMenu/MobileMenu";

type Props = { cartCount?: number; wishCount?: number };

export default function Header({ cartCount = 0, wishCount = 0 }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);

  const [mega, setMega] = useState<MegaSection | null>(null);

  // small delay so moving from tab → panel doesn't close it
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setMega(null), 120); };

  const nav = [
    { label: "Bedrooms", href: "/category/bedrooms", chevron: true },
    { label: "Living Room", href: "/category/living-room", chevron: true },
    { label: "New Arrivals", href: "/new-arrival" },
    { label: "Asghar Deals", href: "/asghar-deal" },
    { label: "Furniture Packages", href: "/coming-soon" },
  ];

  const openIfMega = useCallback((label: string) => {
    cancelClose();
    if (label === "Bedrooms") setMega("bedroom");
    else if (label === "Living Room") setMega("living");
    else setMega(null);
  }, []);

  return (
    <header className={styles.wrap} onKeyDown={(e) => e.key === "Escape" && (setMega(null), setMobileOpen(false))}>
      {/* ============== MOBILE TOP ROW ============== */}
      <div className={styles.mTop}>
        <button
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => { setMobileOpen(true); setMobileSection(null); }}
        >
          <span /><span /><span />
        </button>

        <Link href="/" className={styles.logoLink} aria-label="Asghar Furniture Home">
          <Image src="/media/logo.svg" alt="Asghar Furniture" width={120} height={42} priority />
        </Link>

        <div className={styles.mIcons}>
          <Link href="/search" aria-label="Search" className={styles.iconBtn}>
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-3.8-3.8" />
            </svg>
          </Link>

          <Link href="/cart" aria-label="Cart" className={styles.iconBtn}>
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <circle cx="9" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" />
              <path d="M1 1h3l3.6 12.1a2 2 0 0 0 2 1.4H19a2 2 0 0 0 2-1.6l1.3-7.9H6.2" />
            </svg>
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* ============== MOBILE SECOND ROW (TABS) ============== */}
      <nav className={styles.mTabs} aria-label="Primary">
        <ul className={styles.mTabsList}>
          {["Bedrooms", "Living Room", "Furniture Packages", "New Arrivals"].map((l) => (
            <li key={l}><a href="#" className={styles.mTab}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* ============== DESKTOP ROW ============== */}
      <div className={styles.dRow}>
        <Link href="/" className={styles.dLogo} aria-label="Asghar Furniture Home">
          <Image src="/media/logo.svg" alt="Asghar Furniture" width={165} height={58} priority />
        </Link>

        {/* HOVER ZONE: wraps nav + mega */}
        <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <nav className={styles.dNav} aria-label="Primary">
            <ul>
              {nav.map((item) => {
                const isMega = item.label === "Bedrooms" || item.label === "Living Room";
                return (
                  <li
                    key={item.label}
                    onMouseEnter={() => openIfMega(item.label)}
                    onFocus={() => openIfMega(item.label)}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={isMega ? "menu" : undefined}
                      aria-expanded={isMega ? mega !== null : undefined}
                    >
                      <span>{item.label}</span>
                      {item.chevron && (
                        <svg viewBox="0 0 24 24" className={styles.chev} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 10l4 4 4-4" />
                        </svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <MegaMenu section={mega} onRequestClose={() => setMega(null)} />
        </div>

        <form className={styles.dSearch} action="/search">
          <input name="q" placeholder="Search..." aria-label="Search" />
          <button aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-3.8-3.8" />
            </svg>
          </button>
        </form>

        <div className={styles.dActions}>
          <Link href="/account" className={styles.account}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M4 20c2.5-4.5 13.5-4.5 16 0" />
            </svg>
            <span>Account</span>
          </Link>

          <Link href="/wishlist" className={styles.dIcon} aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </Link>

          <Link href="/cart" className={styles.dIcon} aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="19" cy="21" r="1.5" />
              <path d="M1 1h3l3.6 12.1a2 2 0 0 0 2 1.4H19a2 2 0 0 0 2-1.6l1.3-7.9H6.2" />
            </svg>
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* 🔶 Mobile slide-in menu */}
      <MobileMenu
        open={mobileOpen}
        section={mobileSection}
        onClose={() => setMobileOpen(false)}
        onOpenSection={(s) => setMobileSection(s)}
      />
    </header>
  );
}
