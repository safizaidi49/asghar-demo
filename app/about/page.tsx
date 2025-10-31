// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About Us | Asghar Furniture",
  description:
    "Since 1977, Asghar Furniture has crafted durable, customizable furniture across the UAE.",
};

export default function AboutPage() {
  return (
    <main className="about">
      {/* ===== Hero ===== */}
      {/* ===== Hero (no cropping, image controls height) ===== */}
<section className="about__heroAuto full-bleed">
  <picture>
    {/* Mobile first source (<= 680px) */}
    <source media="(max-width: 680px)" srcSet="/media/about/About-us-Mobile-Banner-af.webp" />
    {/* Desktop/default fallback */}
    <img
      src="/media/about/About-us-Banner_af.webp"
      alt="Dubai skyline with Asghar Furniture emblem"
      className="about__heroImgAuto"
      loading="eager"
      decoding="async"
    />
  </picture>
</section>

      {/* ===== Heading + Subheading ===== */}
      <section className="about__intro container">
        <h1 className="about__title">Our Legacy : Quality Furnishings Since 1977</h1>
        <p className="about__subtitle">
          Founded in 1977, Asghar Furniture LLC has grown from a small retail store into a
          manufacturing leader with a strong omnichannel presence across the UAE. While
          we’ve come a long way, our passion remains unchanged: to be your trusted partner
          in creating beautiful, functional spaces.
        </p>
      </section>

      {/* ===== Mission / Values / Vision (3 boxes) ===== */}
      <section className="about__mvv container">
        <article className="mvvCard">
          <div className="mvvCard__icon">
            <Image src="/media/about/icons/mission.webp" alt="" fill sizes="48px" />
          </div>
          <h3>Mission</h3>
          <p>
            We set a new standard of living by blending refined luxury with affordability,
            crafting functional and beautiful furnishings designed to elevate every space.
          </p>
        </article>

        <article className="mvvCard">
          <div className="mvvCard__icon">
            <Image src="/media/about//icons/values.webp" alt="" fill sizes="48px" />
          </div>
          <h3>Values</h3>
          <p>
            Our guiding principles inspire us to deliver exceptional service. With integrity
            and care, we remain fully committed to meeting the needs of our customers.
          </p>
        </article>

        <article className="mvvCard">
          <div className="mvvCard__icon">
            <Image src="/media/about/icons/vision.webp" alt="" fill sizes="48px" />
          </div>
          <h3>Vision</h3>
          <p>
            To shape the future of furniture—blending timeless craftsmanship with modern
            design and redefining contemporary living.
          </p>
        </article>
      </section>

      {/* ===== Why Do We Stand Out? (images + text) ===== */}
      <section className="about__standout container">
        <div className="standout__grid">
          <Image
            src="/media/about/Showroom1-1.webp"
            alt="Asghar Furniture storefront"
            width={620}
            height={480}
            className="standout__img"
          />
          <Image
            src="/media/about/Showroom1-1-1.webp"
            alt="Asghar Furniture showroom"
            width={620}
            height={480}
            className="standout__img"
          />
          <Image
            src="/media/about/Showroom2-1.webp"
            alt="Showroom interior"
            width={620}
            height={480}
            className="standout__img"
          />
          <Image
            src="/media/about/Showroom2-2.webp"
            alt="Branch exterior"
            width={620}
            height={480}
            className="standout__img"
          />
        </div>

        <div className="standout__copy">
          <h2>Why Do We Stand Out?</h2>
          <p>
            Since 1977, Asghar Furniture has been the trusted name in the UAE. We skip the
            buzzwords and focus on our core mission—genuine craftsmanship and reliable
            service. We craft durable, well-designed furniture intended to last. Crucially,
            everything is made in-house, allowing complete customization to fit your space
            and your life. Our long-standing presence and commitment to excellence have
            made us a trusted name for those who expect more from their furniture.
          </p>
        </div>
      </section>

      {/* ===== Youtube video (auto-play, muted, no controls/branding) ===== */}
      <section className="about__video container">
        <div className="videoWrap">
          <iframe
  className="video"
  src="https://www.youtube.com/embed/5u-RRYmQPng?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=5u-RRYmQPng"
  title="About Asghar Furniture"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen={false}
/>

        </div>
      </section>

      {/* ===== What We Do (6 boxes) ===== */}
      {/* <section className="about__services container">
        <h2 className="sectionTitle">What We Do</h2>
        <div className="services__grid">
          {[
            { img: "service-upholstery.webp", title: "Upholstery", desc: "Premium fabrics and expert workmanship to refresh your furniture." },
            { img: "service-custom.webp", title: "Custom Made", desc: "Bespoke dimensions, fabrics, and finishes built in-house." },
            { img: "service-living.webp", title: "Living Room", desc: "Sofas, sectionals, media units—crafted for everyday comfort." },
            { img: "custom-design.webp", title: "Bedroom", desc: "Beds, nightstands, wardrobes and more." },
            { img: "upholstery.webp", title: "Dining", desc: "Tables and chairs that blend style with durability." },
            { img: "service-delivery.webp", title: "Free Delivery", desc: "Across UAE from our branches in Dubai, JVC, Ajman & Abu Dhabi." },
          ].map((s) => (
            <article className="serviceCard" key={s.title}>
              <div className="serviceCard__imgWrap">
                <Image
                  src={`/media/about/icons/${s.img}`}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="serviceCard__img"
                />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section> */}



{/* ===== What We Do (2-column light grey panels) ===== */}
<section className="about__services panels container">
  <h2 className="sectionTitle">What we do</h2>

  <div className="panelsGrid">
    {[
      {
        icon: "/media/about/icons/service-upholstery.webp",
        title: "LASER ENGRAVING",
        desc:
          "Personalize your furniture with our custom laser engraving. Add a unique branded touch crafted exclusively for you.",
      },
      {
        icon: "/media/about/icons/service-custom.webp",
        title: "CUSTOMIZED FURNITURE",
        desc:
          "Tailor any product from our catalog to your style and needs—dimensions, fabrics, and finishes made just for you.",
      },
      {
        icon: "/media/about/icons/service-living.webp",
        title: "DESIGN ASSESSMENT",
        desc:
          "Our experts assess your space and provide tailored recommendations so the solution fits your preferences and needs.",
      },
      {
        icon: "/media/about/icons/custom-design.webp",
        title: "CUSTOM DESIGNS",
        desc:
          "Have a design in mind? We’ll craft a bespoke piece to your exact specifications with our in-house craftsmanship.",
      },
      {
        icon: "/media/about/icons/upholstery.webp",
        title: "UPHOLSTERY",
        desc:
          "Premium fabrics and expert workmanship to refresh and elevate your furniture.",
      },
      {
        icon: "/media/about/icons/service-delivery.webp",
        title: "FREE DELIVERY",
        desc:
          "Free delivery across the UAE from our branches in Dubai, JVC, Ajman & Abu Dhabi.",
      },
    ].map((s) => (
      <article className="servicePanel" key={s.title}>
        <div className="servicePanel__icon">
          {/* Use SVG/PNG ~64px; keep it small & crisp */}
          <img src={s.icon} alt="" width={64} height={64} />
        </div>
        <h3 className="servicePanel__title">{s.title}</h3>
        <p className="servicePanel__desc">{s.desc}</p>
      </article>
    ))}
  </div>
</section>


      {/* ===== Awards & Certifications ===== */}

{/* ===== Awards & Certifications ===== */}
<section className="about__awards container">
  <h2 className="sectionTitle">Awards &amp; Certifications</h2>
  <p className="awards__lead">
    Asghar Furniture is honored to receive the prestigious Arabian Best of Best
    Award for Furniture Manufacturer (2024). This recognition reflects our
    dedication to quality and craftsmanship.
  </p>

  <div className="awards__cta">
    <Link href="/awards" className="btnPrimary">View Awards</Link>
  </div>

  {/* Tall–Stacked–Tall grid */}
  <div className="awards__grid awards__grid--tst">
    {/* LEFT (tall) */}
    <div className="awardCard awardCard--tall">
      <Image
        src="/media/about/awards/Awards1.webp"
        alt="Arabian Best of Best — winner artwork"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="awardCard__img"
      />
    </div>

    {/* MIDDLE top */}
    <div className="awardCard">
      <Image
        src="/media/about/awards/Awards2.webp"
        alt="Awards certificate"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="awardCard__img"
      />
    </div>

    {/* RIGHT (tall) */}
    <div className="awardCard awardCard--tall">
      <Image
        src="/media/about/awards/Awards4.webp"
        alt="Awards medal"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="awardCard__img"
      />
    </div>

    {/* MIDDLE bottom */}
    <div className="awardCard">
      <Image
        src="/media/about/awards/Awards3.webp"
        alt="Awards trophy"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="awardCard__img"
      />
    </div>
  </div>
</section>










      {/* <section className="about__awards container">
        <h2 className="sectionTitle">Awards &amp; Certifications</h2>
        <p className="awards__lead">
          Asghar Furniture is honored to receive the prestigious Arabian Best of Best
          Award for Furniture Manufacturer (2024). This recognition reflects our
          dedication to quality and craftsmanship.
        </p>

        <div className="awards__cta">
          <Link href="/awards" className="btnPrimary">
            View Awards
          </Link>
        </div>

        <div className="awards__grid">
          {[
            "awards1.webp",
            "awards2.webp",
            "awards3.webp",
            "awards4.webp",
          ].map((img, i) => (
            <div className="awardCard" key={i}>
              <Image
                src={`/media/about/awards/${img}`}
                alt="Arabian Best of Best Awards artwork"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="awardCard__img"
              />
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
