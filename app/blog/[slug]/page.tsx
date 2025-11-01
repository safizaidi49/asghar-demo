import { notFound } from "next/navigation";
import styles from "./Blog.module.css";
import posts from "./posts.json"; // JSON lives next to this file

// Types
type Faq = { q: string; a: string };
type BlogPost = {
  slug: string;
  title: string;
  featureImg: string;
  featureAlt: string;
  contentHtml: string[]; // array of HTML blocks
  faqs?: Faq[];
  wrapHtml: string;
};

// Local helpers for the file source
const ALL = posts as unknown as BlogPost[];
const norm = (s: string) => (s || "").toLowerCase().trim().replace(/\/+$/, "");
const listSlugs = () => ALL.map((p) => p.slug);
const getBySlug = (slug: string) =>
  ALL.find((p) => norm(p.slug) === norm(slug)) ?? null;

// needed for static generation (and also fine for dev)
export async function generateStaticParams() {
  return listSlugs().map((slug) => ({ slug }));
}

// Next 16: params is a Promise in server components → await it
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBySlug(slug);
  if (!post) return notFound();

  // Move the first content block into the header (intro at left)
  const [introHtml, ...restHtml] = post.contentHtml ?? [];

  return (
    <main className={styles.page}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <a href="/">Home</a>
        <span>›</span>
        <a href="/blog">Blog</a>
        <span>›</span>
        <span className={styles.crumbCurrent}>{post.title}</span>
      </nav>

      {/* Header: title + intro on left, image on right */}
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>

        {introHtml && (
          <div
            className={styles.intro}
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
        )}

        <figure className={styles.feature}>
          <img
            src={post.featureImg}
            alt={post.featureAlt}
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </header>

      {/* Remaining body blocks */}
      <article className={styles.article}>
        {restHtml.map((html, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </article>

      {/* FAQs – default open to match your reference layout */}
      {!!post.faqs?.length && (
  <section className={styles.faq} aria-labelledby="faq-heading">
    <h2 id="faq-heading" className={styles.faqTitle}>FAQs</h2>
    <p className={styles.faqKicker}>Most frequent questions and answers</p>

    <div className={styles.faqGrid}>
      {post.faqs.map((f, i) => (
        <div key={i} className={styles.faqItem}>
          <div className={styles.faqQ}>{f.q}</div>
          <p className={styles.faqA}>{f.a}</p>
        </div>
      ))}
    </div>
  </section>
)}

      {/* Common wrap section */}
      <section className={styles.wrap} aria-labelledby="wrap-title">
        <div className={styles.wrapText}>
          <h3 id="wrap-title" className={styles.wrapHeading}>
            That’s a Wrap:
          </h3>
          <div
            className={styles.wrapBody}
            dangerouslySetInnerHTML={{ __html: post.wrapHtml }}
          />
        </div>

        {/* Flat pill badges (matches updated CSS) */}
        <aside className={styles.barsSimple} aria-label="Highlights">
          <div className={`${styles.badge} ${styles.blue}`}>
            600+ Furniture Products
          </div>
          <div className={`${styles.badge} ${styles.blue}`}>
            6500+ Furniture Variations
          </div>
          <div className={`${styles.badge} ${styles.blue}`}>
            200+ Fabrics & Materials
          </div>
          <div className={`${styles.badge} ${styles.green}`}>
            Customized Furniture Designs
          </div>
        </aside>
      </section>
    </main>
  );
}
