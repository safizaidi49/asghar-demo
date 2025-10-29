'use client';

import React, { useMemo, useState } from 'react';
import styles from './cart.module.css';
import Link from 'next/link';

// If you already have a Qty component, you can replace the inline qty UI below.
// Currency helper
const AED = (n: number) =>
  new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 2,
  }).format(n);

type CartItem = {
  id: string;
  title: string;
  color: string;
  cushions: string;
  price: number;      // single unit price
  qty: number;
  image: string;
};

export default function CartPage() {
  // Demo cart – replace with your real cart state later
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 'p-archie',
      title: 'Archie Modular Sofa',
      color: 'Denim Blue',
      cushions: '3 Cushions',
      price: 2599,
      qty: 1,
      image: '/media/demo-products/archie/archie-modular-sofa.webp',
    },
  ]);

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );

  const delivery = 0; // Free Delivery
  const total = subtotal + delivery;

  const dec = (id: string) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );

  const inc = (id: string) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );

  const remove = (id: string) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <main className={styles.wrapper}>
      {/* HERO / BREADCRUMB BANNER */}
      <section
        className={styles.hero}
        style={{
          // change the file name if yours is different
          backgroundImage:
            "url('/media/banners/breadcrumbs.webp')",
        }}
      >
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Cart</h1>
          <nav className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Cart</span>
          </nav>
        </div>
      </section>

      {/* Free delivery strip */}
      <div className={styles.freeStrip}>
        <span className={styles.truckIcon}>🚚</span>
        <span>Free Delivery – Few Days Only</span>
      </div>

      <section className={styles.grid}>
        {/* LEFT: Bag */}
        <div className={styles.bag}>
          <h2 className={styles.blockTitle}>MY SHOPPING BAG</h2>

          {items.map((it) => (
            <div key={it.id} className={styles.itemCard}>
              <img
                className={styles.itemThumb}
                src={it.image}
                alt={it.title}
                width={90}
                height={90}
              />
              <div className={styles.itemMain}>
                <div className={styles.itemTitle}>{it.title}</div>

                <div className={styles.metaRow}>
                  <div className={styles.meta}>
                    <div>
                      <span className={styles.metaKey}>Color: </span>
                      <span className={styles.metaVal}>{it.color}</span>
                    </div>
                    <div>
                      <span className={styles.metaKey}>Cushions: </span>
                      <span className={styles.metaVal}>{it.cushions}</span>
                    </div>
                  </div>

                  <div className={styles.priceQty}>
                    <div className={styles.price}>{AED(it.price)}</div>

                    <div className={styles.qtyWrap}>
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => dec(it.id)}
                        className={styles.qtyBtn}
                      >
                        –
                      </button>
                      <input
                        className={styles.qtyInput}
                        value={it.qty}
                        readOnly
                      />
                      <button
                        aria-label="Increase quantity"
                        onClick={() => inc(it.id)}
                        className={styles.qtyBtn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className={styles.remove}
                onClick={() => remove(it.id)}
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Promo input */}
          <div className={styles.promoRow}>
            <input
              className={styles.promoInput}
              placeholder="Unlock Offer"
              disabled
            />
            <button className={styles.promoBtn} disabled>
              APPLY
            </button>
          </div>

          {/* Continue shopping */}
          <div className={styles.moreRow}>
            <button className={styles.moreBtn}>
              ← WANT SOMETHING MORE
            </button>
          </div>
        </div>

        {/* RIGHT: Order summary */}
        <aside className={styles.summary}>
          <h3 className={styles.blockTitle}>ORDER SUMMARY</h3>

          <div className={styles.table}>
            <div className={styles.tr}>
              <div className={styles.tdKey}>Subtotal</div>
              <div className={styles.tdVal}>{AED(subtotal)}</div>
            </div>
            <div className={styles.tr}>
              <div className={styles.tdKey}>Delivery</div>
              <div className={styles.tdVal}>
                {delivery === 0 ? 'Free Delivery' : AED(delivery)}
              </div>
            </div>
            <div className={`${styles.tr} ${styles.totalRow}`}>
              <div className={styles.tdKey}>Order Total</div>
              <div className={styles.tdVal}>{AED(total)}</div>
            </div>
            <div className={styles.incVat}>Inclusive of VAT</div>
          </div>

          {/* Tabby / Tamara boxes (static placeholders) */}
          {/* <div className={styles.bnplBox}>
            <div>
              As low as <b>د.إ 253.40/month</b> or 4 interest-free payments.
              <button className={styles.linkBtn}>Learn more</button>
            </div>
            <img
              src="/media/ICONS/tabby.svg"
              alt="tabby"
              className={styles.bnplLogo}
            />
          </div>

          <div className={styles.bnplBoxLite}>
            <div>
              Or split in 4 payments of <b>د.إ 649.75</b> – No late fees,
              Sharia compliant!{' '}
              <button className={styles.linkBtn}>More options</button>
            </div>
            <img
              src="/media/ICONS/tamara.svg"
              alt="tamara"
              className={styles.bnplLogo}
            />
          </div> */}

          <button className={styles.checkoutBtn}>
            CONTINUE TO CHECKOUT
          </button>
        </aside>
      </section>
    </main>
  );
}
