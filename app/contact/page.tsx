// app/contact/page.tsx
import "./contact.css";
import Link from "next/link";
import ContactForm from "./ContactForm"; // <— client component

export const metadata = {
  title: "Contact | Asghar Furniture",
  description:
    "Visit our showrooms in Dubai & Abu Dhabi or contact us online. Store timings, phone numbers, email and location buttons.",
};

function Crumb({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="afc-crumb">
      <Link href={href}>{children}</Link>
      <span className="afc-crumb-sep">›</span>
    </li>
  );
}

function SocialRow() {
  return (
    <div className="afc-social">
      <a aria-label="Facebook" href="https://facebook.com/asgharfurniture" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M13 22v-9h3l.5-4H13V6.5c0-1.1.3-1.8 1.9-1.8H17V1.1C16.3 1 15.2 1 14 1c-3 0-5 1.8-5 5v3H6v4h3v9h4z"/></svg>
      </a>
      <a aria-label="Instagram" href="https://instagram.com/asgharfurniture" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.51 4.51 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/></svg>
      </a>
      <a aria-label="TikTok" href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M14 3h3s.6 3.3 5 3.8v3c-2.2 0-4.1-.8-5-1.7V16a6 6 0 1 1-6-6 6 6 0 0 1 1 .08V14a3 3 0 1 0 0 6V3z"/></svg>
      </a>
      <a aria-label="LinkedIn" href="https://www.linkedin.com/company/asgharfurniture" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 8h3v13H3zM10 8h3v2a4 4 0 0 1 3-1c3 0 5 2 5 6v6h-3v-6c0-2-1-3-3-3s-3 1-3 3v6h-3z"/></svg>
      </a>
      <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M23 12s0-3-.4-4.5A3 3 0 0 0 20.5 5 96 96 0 0 0 12 4 96 96 0 0 0 3.5 5 3 3 0 0 0 1.4 7.5C1 9 1 12 1 12s0 3 .4 4.5A3 3 0 0 0 3.5 19 96 96 0 0 0 12 20a96 96 0 0 0 8.5-1 3 3 0 0 0 2.1-2.5C23 15 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
      </a>
      <a aria-label="Pinterest" href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24"><path d="M12 2a9.3 9.3 0 0 0-3.6 17.9c-.1-.8-.2-2.1 0-3l1.6-6.7S9.6 9.4 9.6 8c0-1.6.9-2.8 2.1-2.8 1 0 1.4.7 1.4 1.6 0 1-.7 2.6-1 4.1-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.2 3.8-5.4 0-2.8-2-4.8-4.9-4.8A5.2 5.2 0 0 0 6 8.8a4.8 4.8 0 0 0 .9 3.1l.2.2-.3 1.2c-.1.5-.4.7-.9.5-2.7-1.1-4-3.9-4-7 0-5.3 3.8-9 9.8-9 5.1 0 9.1 3.6 9.1 8.4 0 5.1-3.2 8.7-7.7 8.7-1.5 0-3-.8-3.5-1.7l-.9 3.3c-.3 1.1-1.1 2.6-1.6 3.4A10 10 0 1 0 12 2z"/></svg>
      </a>
    </div>
  );
}

function LocationCard({
  align = "image-left",
  image,
  title,
  lines,
  email,
  phone,
  makani,
  hours,
}: {
  align?: "image-left" | "image-right";
  image: string;
  title: string;
  lines: string[];
  email: string;
  phone: string;
  makani?: string;
  hours: string;
}) {
  return (
    <section className={`afc-location ${align === "image-right" ? "rev" : ""}`}>
      <div className="afc-limg">
        <img src={image} alt={title} />
      </div>
      <aside className="afc-lcard">
        <h3>{title}</h3>
        <span className="afc-underline" />
        <p className="afc-muted">
          {lines.map((l, i) => (
            <span key={i}>
              {l}
              <br />
            </span>
          ))}
        </p>
        <p className="afc-muted">
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          <br />
          <strong>Ph:</strong> {phone}
          {makani ? (
            <>
              <br />
              <strong>MAKANI – </strong>
              <span className="afc-makani">{makani}</span>
            </>
          ) : null}
          <br />
          {hours}
        </p>

        <Link className="afc-btn" href="#" prefetch={false}>
          <span className="afc-pin"></span> OUR STORE LOCATION
        </Link>

        <div className="afc-follow">
          <span>FOLLOW US</span>
          <span className="afc-follow-line" />
        </div>
        <SocialRow />
      </aside>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="afc">
      {/* HERO + breadcrumb */}
      <section className="afc-hero">
        <img
          src="/media/banners/breadcrumbs.webp"
          alt="Contact banner"
          className="afc-hero-img"
        />
        <div className="afc-hero-overlay">
          <h1>Contact</h1>
          <ul className="afc-bc">
            <Crumb href="/">Home</Crumb>
            <li className="afc-crumb current">Contact</li>
          </ul>
        </div>
      </section>

      {/* Intro */}
      <section className="afc-intro">
        <h2>Visit our showrooms</h2>
        <p className="afc-muted">
          Looking for expert advice on how to buy your furniture and explore the best furniture offers in UAE? Contact us.
        </p>
        <p className="afc-muted">
          Our furniture stores are the go-to place for all your space furnishing needs. Our highly trained agents are here to help you buy your furniture exactly the way you want it. If you require further clarification about anything, we will make sure you are well satisfied and well informed.
        </p>
        <p className="afc-note">
          <em>Note* All customizations are subject to additional charges. For any further details get in touch with our agents and visit our FAQ section.</em>
        </p>
      </section>

      {/* Locations */}
      <LocationCard
        image="/media/contact/contact-dubai-ittihad.webp"
        title="Dubai – Al Ittihad Showroom"
        lines={["Showroom No. 1 Al Ittihad Road, Beside ENOC Petrol Pump, Al Khabaisi, Dubai, UAE."]}
        email="info@asgharfurniture.ae"
        phone="04 3588008"
        makani="#33324 96058"
        hours="Monday to Sunday: 09:00 AM – 10:00 PM"
      />

      <LocationCard
        align="image-right"
        image="/media/contact/Abu-dhabi-Showroom.jpg"  
        title="Abu Dhabi – Al Raha Beach"
        lines={["Showroom No.1, C2042 Building – Al Rahah – Al Raha Beach – Abu Dhabi, UAE."]}
        email="info@asgharfurniture.ae"
        phone="02 6413587"
        hours="Monday to Sunday: 09:00 AM – 10:00 PM"
      />

      <LocationCard
        image="/media/contact/contact-dubai.jpg"
        title="Dubai – JVC"
        lines={["1005, Tower B – Prime Business Centre Jumeirah Village Circle, Dubai, UAE."]}
        email="info@asgharfurniture.ae"
        phone="(+971) 4 5787158"
        makani="#19925 71556"
        hours="Monday to Sunday: 09:00 AM – 10:00 PM"
      />

      <LocationCard
        align="image-right"
        image="/media/contact/asghar-furniture-ajman-store.jpg"
        title="Ajman – Showroom"
        lines={["Beirut Street (Opposite to Darmix Cement Factory) New Industrial Area, Ajman, UAE."]}
        email="info@asgharfurniture.ae"
        phone="(+971) 6 7434866"
        makani="#47017 08051"
        hours="Monday to Sunday: 09:00 AM – 10:00 PM"
      />

      {/* Form */}
      <section className="afc-formwrap">
        <h2>Have A Question ? Contact Us !</h2>
        <p className="afc-muted">
          Our incredible team is available to help you out instantly. Quickly direct yourself to one of our agents using the Live Chat or click the WhatsApp icon on the bottom left.
        </p>

        <ContactForm />
      </section>
    </main>
  );
}
