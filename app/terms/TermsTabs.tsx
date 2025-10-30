// app/terms/TermsTabs.tsx
"use client";

import { useState } from "react";

type TabId =
  | "product"
  | "delivery"
  | "return"
  | "refund"
  | "promo"
  | "warehouse"
  | "warranty";

/** Font Awesome class names (same as your WordPress site) */
const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: "product",   label: "Product Policy",     icon: "fas fa-box" },
  { id: "delivery",  label: "Delivery Policy",    icon: "fas fa-truck-loading" },
  { id: "return",    label: "Return Policy",      icon: "fas fa-undo-alt" },
  { id: "refund",    label: "Refund Policy",      icon: "fas fa-hand-holding-usd" },
  { id: "promo",     label: "Promotional Policy", icon: "fas fa-tags" },
  { id: "warehouse", label: "Warehouse Policy",   icon: "fas fa-warehouse" },
  { id: "warranty",  label: "Warranty Policy",    icon: "fas fa-shield-alt" },
];

export default function TermsTabs() {
  const [active, setActive] = useState<TabId>("product");

  return (
    <section className="tnt-tabs">
      {/* DESKTOP: one-row tabs (scroll if needed) */}
      <div className="tnt-tabrow" role="tablist" aria-label="Policies">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            className={`tnt-tab ${active === t.id ? "is-active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            <i className={`tnt-ico ${t.icon}`} aria-hidden="true" />
            <span className="tnt-tab-label">{t.label}</span>
          </button>
        ))}
      </div>

      {/* DESKTOP panel */}
      <div className="tnt-panel">{renderPanel(active)}</div>

      {/* MOBILE: accordion (single source content) */}
      <div className="tnt-acc" aria-label="Policies (mobile)">
        {tabs.map((t) => {
          const open = active === t.id;
          return (
            <div className="tnt-acc-item" key={t.id}>
              <button
                id={`btn-${t.id}`}
                type="button"
                className={`tnt-acc-btn ${open ? "is-open" : ""}`}
                aria-expanded={open}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
              >
                <i className={`tnt-ico ${t.icon}`} aria-hidden="true" />
                <span>{t.label}</span>
              </button>

              {open && (
                <div
                  id={`panel-${t.id}`}
                  className="tnt-acc-panel"
                  role="region"
                  aria-labelledby={`btn-${t.id}`}
                >
                  {renderPanel(t.id)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Single source of content (used by both desktop and mobile) */
function renderPanel(id: TabId) {
  switch (id) {
    case "product":
      return (
        <div className="tnt-copy">
          <h3>Product Policy</h3>
          <p>
            All products sold by Asghar Furniture are brand new, unused, and primarily handcrafted, with some imported items.
            Ownership of products remains with Asghar Furniture until full payment is received. While we strive for accuracy
            in product dimensions, colors and images (within a 5% tolerance), minor variations may occur due to screen settings
            and material finishes. Any concerns about color, size or material must be clarified before placing an order. Asghar
            Furniture is not liable for differences that fall within the acceptable margin.
          </p>

          <h4>Product Categories</h4>
          <ol className="tnt-list">
            <li>
              <strong>Ready-to-Ship Items:</strong> These products are available in selected sizes and colors and are stored in our warehouse.
              Delivery usually takes place within 2 working days. Larger or more complex orders may take up to 4 working days. Any stock-related
              delay will be communicated through email, WhatsApp, or a phone call.
            </li>
            <li>
              <strong>Made-to-Order Items:</strong> Custom products are crafted at our in-house facility, supervised by professionals.
              Customization options include size, fabric, color, wood type (MDF, solid wood, veneer), and leg design. Standard production
              and delivery take about 7 working days, though delays may occur due to material unavailability. In such cases, we will notify you accordingly.
            </li>
          </ol>
        </div>
      );

    case "delivery":
      return (
        <div className="tnt-copy">
          <h3>Delivery Policy</h3>

          <h4>Delivery Methods</h4>
          <ol className="tnt-list">
            <li>
              <strong>Self-Delivery:</strong> Our professional delivery team will deliver, unpack, assemble the items in the room of your choice,
              and remove all packaging materials.
            </li>
            <li>
              <strong>Courier Delivery:</strong> For smaller or remote deliveries, we use third-party couriers. These deliveries are made to your building
              entrance only. You are responsible for carrying and placing the item inside your premises.
            </li>
          </ol>

          <h4>Delivery Guidelines</h4>
          <p>
            Our delivery team ensures safe placement of products. However, tight hallways, staircases, or elevators can pose challenges.
            If needed, we may request a limited liability approval from you before proceeding. Customers must ensure that elevator sizes are suitable
            for the purchased furniture.
          </p>

          <h4>Delivery Approvals</h4>
          <p>
            If your building or community requires delivery approval (move-in permit or gate pass), you are responsible for arranging this.
            Please submit the required documents at least 24 working hours in advance to your sales executive or email them to{" "}
            <a href="mailto:info@asgharfurniture.ae">info@asgharfurniture.ae</a>.
          </p>

          <h4>Delivery Scheduling</h4>
          <ul className="tnt-bullets">
            <li>Confirm delivery date with logistics at least 48 hours in advance.</li>
            <li>Missed or re-scheduled within 24h may incur re-delivery charges.</li>
          </ul>

          <h4>Customer Pick-Up</h4>
          <ul className="tnt-bullets">
            <li>48 hours’ prior notice for warehouse pickup.</li>
            <li>Bring invoice copy & government ID.</li>
            <li>Transport/handling is the customer’s or their courier’s responsibility.</li>
          </ul>

          <h4>Delivery Timeline & Exceptions</h4>
          <p>
            Timelines are estimates. Delays may occur (weather, technical, traffic, etc.). We’ll call on delivery morning. If unreachable,
            a re-delivery fee may apply. Cancellation due to delay requires management approval.
          </p>

          <h4>Delivery Refusals</h4>
          <p>
            Don’t reject deliveries for minor delays/defects—report within 24 hours for resolution. Unjustified refusals may result in storage charges.
          </p>

          <h4>Behavior</h4>
          <p>Zero tolerance for abuse or threats towards staff—may result in legal action.</p>

          <h4>Shipping Limitations</h4>
          <ul className="tnt-bullets">
            <li>Location inaccessible by standard vehicles,</li>
            <li>Alternative transport required (e.g., boat),</li>
            <li>Carrying above two flights of stairs without elevator access.</li>
          </ul>

          <h4>Paid Delivery Areas</h4>
          <p>Some areas incur extra charges (shown at checkout or communicated in-store).</p>

          <h4>Delivery Preparation / Measuring</h4>
          <ul className="tnt-bullets">
            <li>Accurate address & contact details.</li>
            <li>Adult (18+) present at delivery time.</li>
            <li>Clear hallways & access; arrange parking.</li>
            <li>Keep pets away from delivery area.</li>
            <li>Ensure access points fit the furniture; failed delivery due to size isn’t our responsibility.</li>
          </ul>
        </div>
      );

    case "return":
      return (
        <div className="tnt-copy">
          <h3>Return Policy</h3>
          <p>Most items are custom-made; returns are therefore limited and managed fairly.</p>

          <h4>Items Not Eligible for Return</h4>
          <ul className="tnt-bullets">
            <li><strong>Customized / Made-to-Order</strong> items (size/fabric/color/style).</li>
            <li><strong>Assembled / Disassembled</strong> items after delivery.</li>
            <li><strong>Used mattresses, bedding & linens</strong> (opened/used).</li>
            <li><strong>Installed or altered</strong> products after delivery.</li>
            <li>Not in original, unused condition with complete packaging.</li>
          </ul>

          <h4>Return Eligibility & Process</h4>
          <ul className="tnt-bullets">
            <li>Manufacturing issues inspected by our technical team.</li>
            <li>Delivery damage reported within 24h with clear photo/video.</li>
          </ul>
        </div>
      );

    case "refund":
      return (
        <div className="tnt-copy">
          <h3>Refund Policy</h3>
          <ol className="tnt-list">
            <li>Purchases are final; refunds subject to management approval.</li>
            <li>Approved refunds within 14 business days (minus fees, if any).</li>
            <li>Refund to the original payment source (bank/card/gateway/EPP).</li>
            <li>Review orders carefully—custom products limit cancellations/refunds.</li>
          </ol>

          <h4>Order Cancellation</h4>
          <ol className="tnt-list">
            <li>Cancel within 24 hours via official channels.</li>
            <li>Card/gateway/EPP: 5% non-refundable processing fee deduction.</li>
            <li>Cash/bank transfer: full refund, no deduction.</li>
            <li>After production starts: no cancellation possible.</li>
          </ol>

          <p className="tnt-note">
            <strong>Note:</strong> Custom-made products aren’t eligible for return, exchange, or refund under any condition.
          </p>
        </div>
      );

    case "promo":
      return (
        <div className="tnt-copy">
          <h3>Promotional Policy</h3>

          <h4>Free Customization</h4>
          <ul className="tnt-bullets">
            <li>Up to AED 500 (MDF excluded).</li>
            <li>Fabric upgrades only from the designated label list.</li>
          </ul>

          <h4>Spin the Wheel Promotion</h4>
          <ul className="tnt-bullets">
            <li>Applies to Summer Offers and ongoing promotions.</li>
            <li>Minimum invoice value AED 2,999.</li>
          </ul>

          <h4>Next Bill Discount Offers</h4>
          <ul className="tnt-bullets">
            <li>AED 200 off next bill — no minimum purchase.</li>
            <li>AED 500 off next bill — no minimum purchase.</li>
          </ul>
        </div>
      );

    case "warehouse":
      return (
        <div className="tnt-copy">
          <h3>Warehouse Policy</h3>

          <h4>Storage Duration</h4>
          <ul className="tnt-bullets">
            <li>Free storage up to 30 days after readiness.</li>
            <li>After 30 days: AED 15 per m³ per day.</li>
            <li>Extended storage subject to capacity & approval.</li>
          </ul>

          <h4>Storage Conditions</h4>
          <p>Secure, climate-controlled facility. No liability for deterioration beyond the free period.</p>

          <h4>Damage & Liability</h4>
          <p>
            During free storage, damages by our staff will be repaired/replaced at our discretion.
            After release for delivery/collection, we aren’t liable for transit/handling/external storage damage.
          </p>

          <h4>Abandoned Orders</h4>
          <p>
            Not delivered/collected within 30 days (without arrangement) may be considered abandoned; storage/handling fees may be deducted or order forfeited.
          </p>
        </div>
      );

    case "warranty":
      return (
        <div className="tnt-copy">
          <h3>Warranty Policy</h3>

          <h4>Warranty Duration</h4>
          <p>2-year structural warranty from date of purchase.</p>

          <h4>What is Covered</h4>
          <ul className="tnt-bullets">
            <li>Defects in materials/workmanship under normal residential use.</li>
            <li>Structural integrity of frames and supporting structures.</li>
          </ul>

          <h4>What is NOT Covered</h4>
          <ul className="tnt-bullets">
            <li>Foam, fabric, cushions, fillings, upholstery (wear items).</li>
            <li>Scratches, dents, stains, fading, minor color/texture variance.</li>
            <li>Misuse/neglect, poor maintenance, moves/relocation, moisture or direct sunlight.</li>
            <li>Unauthorized modifications or repairs by third parties.</li>
          </ul>

          <h4>Claim Process</h4>
          <ul className="tnt-bullets">
            <li>Report within the 2-year warranty period.</li>
            <li>Provide valid invoice/receipt.</li>
            <li>Share clear photos/videos of the defect for assessment.</li>
          </ul>

          <h4>Resolution</h4>
          <p>If approved, we will repair or replace with same/equivalent product. All services free of charge.</p>

          <p><strong>Customer Commitment:</strong> We’re dedicated to quality products and reliable support.</p>
        </div>
      );

    default:
      return null;
  }
}
