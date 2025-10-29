// app/products/[slug]/page.tsx
import ProductGallery from "@/app/components/ProductGallery";
import Qty from "@/app/components/Qty";
import Accordion from "@/app/components/Accordion";
import ColorSwatches from "@/app/components/ColorSwatches";
import { PDPS, getPDP, formatAED } from "@/app/data/pdp";
import Link from "next/link";
import s from "@/app/components/pdp.module.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return PDPS.map((p) => ({ slug: p.slug }));
}

// Next.js 16: params is a Promise — await it
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug?: string | string[] }>;
}) {
  const p = await params;
  const raw = p?.slug;
  const slug = Array.isArray(raw) ? raw.join("/") : (raw ?? "").replace(/\/+$/, "");

  const product = getPDP(slug);
  if (!product) {
    return (
      <div style={{ padding: 24 }}>
        Product not found. Looking for: <b>{slug || "(empty)"}</b>
        <br />
        Available: {PDPS.map((x) => x.slug).join(", ")}
      </div>
    );
  }

  return (
    <main className={s.wrap}>
      <nav className={s.breadcrumb}>
        <Link href="/">Home</Link> &nbsp;›&nbsp;
        <Link href="/living-room">Living Room</Link> &nbsp;›&nbsp;
        <Link href="/living-room/sectional-sofas">Sectional Sofas</Link>
        &nbsp;›&nbsp;<span style={{ color: "#111" }}>{product.title}</span>
      </nav>

      <div className={s.grid}>
        <section>
          <ProductGallery images={product.images} />
        </section>

        <aside className={s.right}>
          <div className={s.sticky}>
            <h1 className={s.title}>{product.title}</h1>
            <div className={s.price}>{formatAED(product.price)}</div>
            <div className={s.meta}>SKU: {product.sku}</div>

            <ColorSwatches colors={product.colors} />
            <p className={s.short}>{product.shortDesc}</p>

            <div className={s.controls}>
              <Qty />
            </div>

            <div className={s.actions}>
              <button className={s.btnPrimary}>Add to Cart</button>
              <button className={s.btnAccent}>Buy Now</button>
            </div>

            <button className={s.btnGhost}>Request Customization</button>

            <div className={s.section}>
              <Accordion title="Overview" defaultOpen>
                <div
                  dangerouslySetInnerHTML={{ __html: product.overviewHtml }}
                />
              </Accordion>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
