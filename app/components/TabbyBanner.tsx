"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  price: number;
  currency?: "AED";
  sku?: string;
  locale?: "en_AE" | "ar_AE";
};

/**
 * Renders Tabby's promo node and opens Tabby's official modal by
 * clicking the link/button that Tabby injects after hydration.
 */
export default function TabbyBanner({
  price,
  currency = "AED",
  sku = "",
  locale = "en_AE",
}: Props) {
  const promoRef = useRef<HTMLDivElement | null>(null);
  const [tabbyLink, setTabbyLink] = useState<HTMLElement | null>(null);

  // Find Tabby's injected anchor/button once the widget hydrates
  useEffect(() => {
    const el = promoRef.current;
    if (!el) return;

    const findLink = () => {
      const nodes = el.querySelectorAll<HTMLElement>("a,button,[role='button']");
      // Prefer something that looks like "Learn more"
      for (const n of nodes) {
        if ((n.textContent || "").toLowerCase().includes("learn")) return n;
      }
      return nodes[0] || null;
    };

    // Try immediately (sometimes already hydrated)
    const existing = findLink();
    if (existing) {
      setTabbyLink(existing);
      return;
    }

    // Otherwise observe for hydration
    const mo = new MutationObserver(() => {
      const l = findLink();
      if (l) {
        setTabbyLink(l);
        mo.disconnect();
      }
    });
    mo.observe(el, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [price, currency, sku, locale]);

  const openModal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    // click Tabby’s own element so the official modal opens
    tabbyLink?.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  };

  return (
    <div
      onClick={openModal}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal()}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: 14,
        background: "#fff",
        margin: "12px 0",
        cursor: "pointer",
      }}
      aria-label="Learn more about Tabby installments"
    >
      {/* The node Tabby hydrates */}
      <div
        ref={promoRef}
        className="tabby-promo"
        data-amount={price}
        data-currency={currency}
        data-locale={locale}
        data-source="product"
        {...(sku ? { "data-sku": sku } : {})}
      >
        {/* Fallback while the script initializes */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <img
  src="/media/banners/logo_green.png"
            alt="Tabby"
            style={{ height: 20, width: "auto", display: "block" }}
            onError={(ev) => ((ev.target as HTMLImageElement).style.display = "none")}
          />
          <span style={{ fontSize: 14, color: "#111" }}>
            As low as AED {(price / 12).toFixed(2)}/month or 4 interest-free payments.
          </span>
          <span
            onClick={openModal}
            style={{
              marginLeft: "auto",
              fontSize: 14,
              textDecoration: "underline",
              cursor: "pointer",
              color: "#111",
              whiteSpace: "nowrap",
            }}
          >
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
}
