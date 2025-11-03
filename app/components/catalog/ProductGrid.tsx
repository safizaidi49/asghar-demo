"use client";
import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;
  badge?: string;
};

const formatAED = (n: number, ccy = "AED") =>
  new Intl.NumberFormat("en-AE", { style: "currency", currency: ccy, maximumFractionDigits: 2 }).format(n);

type GridProps = {
  items?: Product[];             // <-- make optional
  page: number;
  totalPages: number;
  setPage: (n: number) => void;
};

export default function ProductGrid({
  items = [],                    // <-- default to []
  page,
  totalPages,
  setPage,
}: GridProps) {
  return (
    <>
      <div className="cat-grid clean-grid">
        {items.map((p) => (
          <article key={p.id} className="card clean-card">
            <Link href={`/products/${p.id}`} className="thumb sq">
              <Image src={p.image} alt={p.title} width={600} height={600} className="img" />
              {p.badge ? <span className="badge">{p.badge}</span> : null}
            </Link>
            <div className="card-body clean-body">
              <Link href={`/products/${p.id}`} className="title">
                {p.title}
              </Link>
              <div className="price">
                <span className="now">{formatAED(p.price, p.currency || "AED")}</span>
                {typeof p.compareAtPrice === "number" && p.compareAtPrice > p.price ? (
                  <span className="was">{formatAED(p.compareAtPrice, p.currency || "AED")}</span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="cat-pager">
          <button className="pg-btn" disabled={page <= 1} onClick={() => setPage(Math.max(1, page - 1))}>
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, page - 3), Math.max(0, page - 3) + 6)
            .map((n) => (
              <button key={n} className={`pg-btn ${n === page ? "active" : ""}`} onClick={() => setPage(n)}>
                {n}
              </button>
            ))}
          <button className="pg-btn" disabled={page >= totalPages} onClick={() => setPage(Math.min(totalPages, page + 1))}>
            ›
          </button>
        </div>
      )}
    </>
  );
}
