// app/terms/page.tsx
import Link from "next/link";
import "./terms.css";
import TermsTabs from "./TermsTabs";

export const metadata = {
  title: "Terms & Conditions | Asghar Furniture",
  description:
    "Official Terms & Conditions covering product, delivery, return, refund, promotional, warehouse and warranty policies.",
};

export default function TermsPage() {
  return (
    <main className="tnt">
      {/* HERO (grey) */}
      <section className="tnt-hero">
        <div className="tnt-hero-inner">
          <h1>Terms and Conditions</h1>
          <ul className="tnt-bc">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </section>

      {/* Intro */}
      <section className="tnt-intro">
        <p>
          Welcome to <strong>Asghar Furniture LLC</strong>. These terms govern your use of our website{" "}
          <Link href="https://www.asgharfurniture.ae" target="_blank">
            www.asgharfurniture.ae
          </Link>
          , our showrooms, and your purchase experience. Please read them carefully. For any questions, contact us at{" "}
          <a href="tel:800274427">800 27 44 27</a> or{" "}
          <a href="mailto:info@asgharfurniture.ae">info@asgharfurniture.ae</a>.
        </p>
      </section>

      {/* Tabs + Content */}
      <TermsTabs />
    </main>
  );
}
