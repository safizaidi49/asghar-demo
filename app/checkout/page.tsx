"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import "./checkout.css";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  qty: number;
  attrs?: string;
};

type AddressForm = {
  email: string;
  first: string;
  last: string;
  phone: string;
  city: string;
  area: string;
  address1: string;
  address2: string;
};

const formatAED = (n: number) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 2,
  }).format(n);

const DEMO_CART: CartItem[] = [
  {
    id: "p-archie",
    title: "Archie Modular Sofa",
    image: "/media/demo-products/archie/archie-modular-sofa.webp",
    price: 2599,
    qty: 1,
    attrs: "Color: Denim Blue • Cherry 3 Cushions",
  },
];

export default function CheckoutPage() {
  const [cart] = useState<CartItem[]>(DEMO_CART);
  const [f, setF] = useState<AddressForm>({
    email: "",
    first: "",
    last: "",
    phone: "",
    city: "",
    area: "",
    address1: "",
    address2: "",
  });

  const [coupon, setCoupon] = useState("");
  const [couponOk, setCouponOk] = useState<null | { code: string; pct: number }>(null);
  const [pay, setPay] = useState<"tabby" | "tamara" | "ccavenue">("tabby");
  const [agree, setAgree] = useState(false);

  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);
  const delivery = 0;
  const discountPct = couponOk?.pct ?? 0;
  const discount = (subtotal * discountPct) / 100;
  const total = subtotal - discount + delivery;

  function applyCoupon() {
    const code = coupon.trim().toUpperCase();
    if (!code) return setCouponOk(null);
    if (code === "SAVE5") setCouponOk({ code, pct: 5 });
    else {
      setCouponOk(null);
      alert("Invalid coupon");
    }
  }

  function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!f.email || !f.first || !f.phone || !f.city || !f.address1) {
      alert("Please fill the required fields.");
      return;
    }
    if (!agree) {
      alert("Please accept the terms to continue.");
      return;
    }
    alert(`Order created (demo). Payment: ${pay}  Total: ${formatAED(total)}`);
  }

  return (
    <div className="checkout-wrap">
      <div className="af-breadcrumb-hero">
        <Image src="/media/banners/breadcrumbs.webp" alt="Checkout" fill priority className="af-hero-img" />
        <div className="af-hero-content">
          <div className="af-hero-crumbs">
            <Link href="/">Home</Link> <span>›</span> <span>Checkout</span>
          </div>
          <h1 className="af-hero-title">Checkout</h1>
        </div>
      </div>

      <div className="checkout-container">
        <div className="checkout-grid">
          {/* LEFT: Form */}
          <section className="checkout-main">
            <div className="af-card">
              <h2 className="af-h2">Contact information</h2>
              <div className="af-row">
                <div className="af-field">
                  <label className="af-label">Email address *</label>
                  <input
                    className="af-input"
                    type="email"
                    value={f.email}
                    onChange={(e) => setF({ ...f, email: e.target.value })}
                    placeholder="name@email.com"
                  />
                </div>

                <div className="coupon-bar">
                  <input
                    className="af-input"
                    placeholder="Coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button className="af-btn af-btn--primary" onClick={applyCoupon}>Apply</button>
                </div>

                {couponOk ? (
                  <div className="af-help af-success">Coupon <b>{couponOk.code}</b> applied: −{couponOk.pct}%.</div>
                ) : coupon ? (
                  <div className="af-help">Try code: <b>SAVE5</b> (demo)</div>
                ) : null}
              </div>
            </div>

            <div className="af-card">
              <h2 className="af-h2">Billing &amp; Delivery</h2>

              <div className="af-row af-grid-2">
                <div className="af-field">
                  <label className="af-label">First Name *</label>
                  <input className="af-input" value={f.first} onChange={(e) => setF({ ...f, first: e.target.value })} placeholder="First name" />
                </div>
                <div className="af-field">
                  <label className="af-label">Last Name</label>
                  <input className="af-input" value={f.last} onChange={(e) => setF({ ...f, last: e.target.value })} placeholder="Last name" />
                </div>
              </div>

              <div className="af-row af-grid-2">
                <div className="af-field">
                  <label className="af-label">Phone *</label>
                  <input className="af-input" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="+971 50 000 0000" />
                </div>
                <div className="af-field">
                  <label className="af-label">City / Emirate *</label>
                  <input className="af-input" value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} placeholder="Dubai" />
                </div>
              </div>

              <div className="af-row af-grid-2">
                <div className="af-field">
                  <label className="af-label">Area</label>
                  <input className="af-input" value={f.area} onChange={(e) => setF({ ...f, area: e.target.value })} placeholder="JVC, Marina, ..." />
                </div>
                <div className="af-field">
                  <label className="af-label">Address Line 1 *</label>
                  <input className="af-input" value={f.address1} onChange={(e) => setF({ ...f, address1: e.target.value })} placeholder="Street, Building, Flat" />
                </div>
              </div>

              <div className="af-row">
                <div className="af-field">
                  <label className="af-label">Address Line 2</label>
                  <input className="af-input" value={f.address2} onChange={(e) => setF({ ...f, address2: e.target.value })} placeholder="Landmark, etc." />
                </div>
              </div>
            </div>

            <div className="af-card">
              <h2 className="af-h2">Choose a Payment Gateway</h2>

              <div className="payment-list">
                <label className="payment-item">
                  <input type="radio" className="payment-radio" name="pay" checked={pay === "tabby"} onChange={() => setPay("tabby")} />
                  <span>Pay in 4 with <b>Tabby</b> <span className="payment-note">No interest, no fees</span></span>
                </label>

                <label className="payment-item">
                  <input type="radio" className="payment-radio" name="pay" checked={pay === "tamara"} onChange={() => setPay("tamara")} />
                  <span>Split in 4 with <b>Tamara</b> <span className="payment-note">No interest, no fees</span></span>
                </label>

                <label className="payment-item">
                  <input type="radio" className="payment-radio" name="pay" checked={pay === "ccavenue"} onChange={() => setPay("ccavenue")} />
                  <span><b>CCAvenue</b> <span className="payment-note">Visa / MasterCard / AMEX</span></span>
                </label>
              </div>

              <div className="af-divider" />

              <label className="af-check">
                <input type="checkbox" checked={agree} onChange={() => setAgree(v => !v)} />
                <span>
                  I agree to the <Link href="/terms" className="af-link">Terms & Conditions</Link> and{" "}
                  <Link href="/privacy" className="af-link">Privacy Policy</Link>.
                </span>
              </label>

              <div className="af-action-row">
                <button className="af-btn af-btn--primary" onClick={submitOrder}>Place Order</button>
              </div>
            </div>
          </section>

          {/* RIGHT: Summary */}
          <aside className="checkout-aside summary">
            <div className="af-card">
              {cart.map((it) => (
                <div key={it.id} className="mini-item">
                  <Image src={it.image} alt={it.title} width={64} height={64} className="mini-thumb" />
                  <div>
                    <div className="mini-title">{it.title}</div>
                    {it.attrs && <div className="mini-attr">{it.attrs}</div>}
                    <div className="mini-attr">Qty: {it.qty}</div>
                  </div>
                </div>
              ))}

              <div className="af-divider" />

              <div className="summary-list">
                <div className="summary-row"><span>Subtotal</span><span>{formatAED(subtotal)}</span></div>
                <div className="summary-row"><span>Delivery</span><span>{delivery === 0 ? "Free" : formatAED(delivery)}</span></div>
                {discount > 0 && <div className="summary-row"><span>Discount ({discountPct}%)</span><span>−{formatAED(discount)}</span></div>}
                <div className="summary-row summary-row--total"><span>Total (Incl. VAT)</span><span>{formatAED(total)}</span></div>
              </div>

              <div className="af-card af-card--muted" style={{ marginTop: 12 }}>
                <div className="af-help">As low as <b>{formatAED(total / 10)}</b>/month with Tabby over 10 months (illustrative).</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
