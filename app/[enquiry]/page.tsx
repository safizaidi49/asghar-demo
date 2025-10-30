// app/[enquiry]/page.tsx
import "../enquiry/enquiry.css";               // same CSS
import Link from "next/link";
import { notFound } from "next/navigation";
// import { ENQUIRY_PAGES } from "../enquiry.data"; // or "../enquiry/enquiry.data" if that’s where your file lives
import { ENQUIRY_PAGES } from "@/app/enquiry/enquiry.data";

type Params = { enquiry: string };

// Pre-build only the pages you define in ENQUIRY_PAGES
export function generateStaticParams() {
  return Object.keys(ENQUIRY_PAGES).map((enquiry) => ({ enquiry }));
}

// Next.js (App Router) sometimes gives params as a Promise; unwrap safely
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { enquiry } = await params;
  const page = ENQUIRY_PAGES[enquiry];
  if (!page) return {};
  return { title: page.seo.title, description: page.seo.description };
}

export default async function EnquiryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { enquiry } = await params;
  const page = ENQUIRY_PAGES[enquiry];
  if (!page) return notFound();

  return (
    <main>
      {/* HERO (desktop/mobile—no cropping) */}
      <section className="enq-hero enq-fullbleed">
        <picture>
          <source media="(max-width:680px)" srcSet={page.hero.mobileSrc} />
          <img src={page.hero.desktopSrc} alt={page.seo.title} loading="eager" />
        </picture>
      </section>

      {/* INTRO */}
      <section className="enq-intro">
        <h1>{page.hero.heading}</h1>
        <p>{page.hero.sub}</p>
        <div className="enq-ctaRow">
          <Link href={page.hero.ctaHref ?? "#enquire"} className="enq-btn enq-btn--primary">
            ENQUIRE NOW
          </Link>
          <Link
            href={page.hero.chatHref ?? "https://wa.me/971501234567"}
            className="enq-btn enq-btn--outline"
            target="_blank"
          >
            CHAT WITH US
          </Link>
        </div>
        <div id="enquire" style={{ height: 1 }} />
      </section>

      {/* USPs */}
      <section className="enq-usps">
        <div className="enq-uspsGrid">
          {page.usps.map((u) => (
            <article className="enq-usp" key={u.title}>
              <img className="enq-usp__icon" src={u.icon} alt="" />
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SIDE A */}
      <section className="enq-split">
        <img src={page.sideA.img} alt="" />
        <div className="enq-copy">
          <h2>{page.sideA.heading}</h2>
          <p>{page.sideA.body}</p>
          <div className="enq-ctaRow">
            <Link href={page.hero.ctaHref ?? "#enquire"} className="enq-btn enq-btn--primary">
              ENQUIRE NOW
            </Link>
            <Link
              href={page.hero.chatHref ?? "https://wa.me/971501234567"}
              className="enq-btn enq-btn--outline"
              target="_blank"
            >
              CHAT WITH US
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="enq-portfolio">
        <h2>{page.portfolio.introTitle}</h2>
        <p>{page.portfolio.introText}</p>

        <div className="enq-portfolioGrid">
          <div className="enq-pcol">
            <img className="enq-pimg enq-pimg--small" src={page.portfolio.leftSmall} alt="" />
            <img className="enq-pimg enq-pimg--big" src={page.portfolio.leftBig} alt="" />
          </div>
          <div className="enq-pcol">
            <img className="enq-pimg enq-pimg--big" src={page.portfolio.midBig} alt="" />
            <img className="enq-pimg enq-pimg--small" src={page.portfolio.midSmall} alt="" />
          </div>
          <div className="enq-pcol">
            <img className="enq-pimg enq-pimg--small" src={page.portfolio.rightSmall} alt="" />
            <img className="enq-pimg enq-pimg--big" src={page.portfolio.rightBig} alt="" />
          </div>
        </div>
      </section>

      {/* SIDE B */}
      <section className="enq-split" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="enq-copy">
          <h2>{page.sideB.heading}</h2>
          <p>{page.sideB.body}</p>
          <div className="enq-ctaRow">
            <Link href={page.hero.ctaHref ?? "#enquire"} className="enq-btn enq-btn--primary">
              ENQUIRE NOW
            </Link>
            <Link
              href={page.hero.chatHref ?? "https://wa.me/971501234567"}
              className="enq-btn enq-btn--outline"
              target="_blank"
            >
              CHAT WITH US
            </Link>
          </div>
        </div>
        <img src={page.sideB.img} alt="" />
      </section>

      {/* FAQ */}
      <section className="enq-faq">
        <h2>Frequently Ask Questions</h2>
        {page.faqs.map((f, i) => (
          <details className="enq-qa" key={i} open={i === 0}>
            <summary>{f.q}</summary>
            <div className="enq-a">{f.a}</div>
          </details>
        ))}
      </section>
    </main>
  );
}
