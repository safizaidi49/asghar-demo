"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import "./catalog.css";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;
  badge?: string;
};

type Props = {
  title?: string;
  products: Product[];
  heroSrc?: string; // breadcrumb/hero image (full image, no crop)
  defaultPerPage?: 24 | 48 | 72;
  categories?: { slug: string; name: string; count?: number }[];
  colors?: { slug: string; name: string; hex: string }[];
};

const formatAED = (n: number, ccy = "AED") =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: ccy,
    maximumFractionDigits: 2,
  }).format(n);

const PER_OPTIONS = [24, 48, 72] as const;
const SORTS = [
  { val: "default", label: "Default sorting" },
  { val: "price-asc", label: "Price: Low to High" },
  { val: "price-desc", label: "Price: High to Low" },
  { val: "title-asc", label: "Name: A → Z" },
  { val: "title-desc", label: "Name: Z → A" },
] as const;

export default function CatalogTemplate({
  title = "Shop",
  products,
  heroSrc = "/media/banners/breadcrumbs.webp",
  defaultPerPage = 24,
  categories = [
    { slug: "beds", name: "Bedrooms", count: 451 },
    { slug: "living", name: "Living Room", count: 407 },
    { slug: "storage", name: "Storage Furniture", count: 20 },
    { slug: "tvcabinets", name: "TV Cabinets", count: 29 },
    { slug: "deals", name: "Asghar Deals", count: 10 },
  ],
  colors = [
    { slug: "beige", name: "Beige", hex: "#d9c8a9" },
    { slug: "grey", name: "Grey", hex: "#8a8f98" },
    { slug: "white", name: "White", hex: "#f5f5f5" },
    { slug: "black", name: "Black", hex: "#111111" },
    { slug: "blue", name: "Blue", hex: "#2b6cb0" },
    { slug: "green", name: "Green", hex: "#2f855a" },
  ],
}: Props) {
  const [cat, setCat] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [sort, setSort] = useState<string>("default");
  const [per, setPer] = useState<number>(defaultPerPage);
  const [page, setPage] = useState<number>(1);

  // price filter (applied on button click)
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [appliedMin, setAppliedMin] = useState<number | null>(null);
  const [appliedMax, setAppliedMax] = useState<number | null>(null);

  // mobile filter drawer
  const [openFilter, setOpenFilter] = useState(false);

  // read from query params
  useEffect(() => {
    const u = new URL(window.location.href);
    setCat(u.searchParams.get("cat") ?? "");
    setColor(u.searchParams.get("color") ?? "");
    setSort(u.searchParams.get("sort") ?? "default");
    const sPer = Number(u.searchParams.get("per"));
    const sPage = Number(u.searchParams.get("page"));
    const qMin = u.searchParams.get("min");
    const qMax = u.searchParams.get("max");
    if (PER_OPTIONS.includes(sPer as any)) setPer(sPer);
    if (sPage > 0) setPage(sPage);
    if (qMin) {
      setPriceMin(qMin);
      setAppliedMin(Number(qMin));
    }
    if (qMax) {
      setPriceMax(qMax);
      setAppliedMax(Number(qMax));
    }
  }, []);

  // ✅ write to query params (omit defaults for clean URL)
  useEffect(() => {
    const u = new URL(window.location.href);

    const setOrDel = (k: string, v: string | number | null | undefined) => {
      if (v === "" || v === undefined || v === null || v === "default") {
        u.searchParams.delete(k);
      } else {
        u.searchParams.set(k, String(v));
      }
    };

    setOrDel("cat", cat);
    setOrDel("color", color);
    setOrDel("sort", sort);

    // Only include when NOT defaults
    if (per !== defaultPerPage) u.searchParams.set("per", String(per));
    else u.searchParams.delete("per");

    if (page !== 1) u.searchParams.set("page", String(page));
    else u.searchParams.delete("page");

    setOrDel("min", appliedMin);
    setOrDel("max", appliedMax);

    window.history.replaceState({}, "", u.toString());
  }, [cat, color, sort, per, page, appliedMin, appliedMax, defaultPerPage]);

  // apply price filter
  const applyPrice = () => {
    const min = priceMin.trim() ? Number(priceMin) : null;
    const max = priceMax.trim() ? Number(priceMax) : null;
    setAppliedMin(min);
    setAppliedMax(max);
    setPage(1);
    setOpenFilter(false);
  };

  // derived list
  const filtered = useMemo(() => {
    let list = products.slice();

    if (cat) list = list.filter(() => true); // TODO: wire real categories
    if (color) list = list.filter(() => true); // TODO: wire real colors

    if (appliedMin !== null) list = list.filter((p) => p.price >= appliedMin);
    if (appliedMax !== null) list = list.filter((p) => p.price <= appliedMax);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        list.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    return list;
  }, [products, cat, color, sort, appliedMin, appliedMax]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / per));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * per;
  const pageItems = filtered.slice(start, start + per);

  const changePer = (n: number) => {
    setPer(n);
    setPage(1);
  };

  // sidebar (reused in desktop + drawer)
  const Sidebar = (
    <>
      <div className="cat-card">
        <div className="cat-sec-title">Categories</div>
        <div className="cat-list">
          <button
            className={`cat-cat ${cat === "" ? "active" : ""}`}
            onClick={() => {
              setCat("");
              setPage(1);
            }}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              className={`cat-cat ${cat === c.slug ? "active" : ""}`}
              onClick={() => {
                setCat(c.slug);
                setPage(1);
              }}
            >
              {c.name}{" "}
              {typeof c.count === "number" ? (
                <span className="cat-count">({c.count})</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="cat-card">
        <div className="cat-sec-title">Color</div>
        <div className="cat-colors">
          <button
            className={`color-chip ${color === "" ? "active" : ""}`}
            onClick={() => {
              setColor("");
              setPage(1);
            }}
            aria-label="All colors"
          >
            <span
              className="chip-swatch"
              style={{ background: "linear-gradient(45deg,#ccc,#fff)" }}
            />
          </button>
          {colors.map((c) => (
            <button
              key={c.slug}
              className={`color-chip ${color === c.slug ? "active" : ""}`}
              onClick={() => {
                setColor(c.slug);
                setPage(1);
              }}
              title={c.name}
              aria-label={c.name}
            >
              <span className="chip-swatch" style={{ background: c.hex }} />
            </button>
          ))}
        </div>
      </div>

      <div className="cat-card">
        <div className="cat-sec-title">Price</div>
        <div className="price-row">
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="price-input"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
          <span className="price-dash">–</span>
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="price-input"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
        <button className="apply-btn" onClick={applyPrice}>
          Apply Filter
        </button>
      </div>
    </>
  );

  return (
    <div className="cat-wrap">
      {/* HERO – full image, no crop */}
      <div className="cat-hero">
        <Image
          src={heroSrc}
          alt={`${title} hero`}
          width={1920}
          height={600}
          className="cat-hero-img"
          priority
        />
        <div className="cat-hero-content">
          <div className="cat-hero-inner">
            <div className="cat-breadcrumb">
              <Link href="/">Home</Link> <span>›</span> <span>Shop Catalog</span>
            </div>
            <h1 className="cat-hero-title">{title}</h1>
          </div>
        </div>
      </div>

      <div className="cat-container">
        {/* desktop sidebar */}
        <aside className="cat-sidebar">{Sidebar}</aside>

        {/* main */}
        <main className="cat-main">
          <div className="cat-toolbar">
            {/* mobile filter toggle */}
            <button
              className="filter-btn mobile-only"
              onClick={() => setOpenFilter(true)}
              aria-haspopup="dialog"
              aria-controls="mfilter"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M3 6h18M6 12h12M10 18h4" strokeWidth="2" />
              </svg>
              Filter
            </button>

            <div className="cat-show">
              <span>SHOW</span>
              {PER_OPTIONS.map((n) => (
                <button
                  key={n}
                  className={`show-btn ${per === n ? "active" : ""}`}
                  onClick={() => changePer(n)}
                >
                  {n}
                </button>
              ))}
            </div>

            <div className="cat-sort">
              <select
                className="cat-select"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                aria-label="Sort products"
              >
                {SORTS.map((s) => (
                  <option key={s.val} value={s.val}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* grid */}
          <div className="cat-grid clean-grid">
            {pageItems.map((p) => (
              <article key={p.id} className="card clean-card">
                <Link href={`/products/${p.id}`} className="thumb sq">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={600}
                    className="img"
                  />
                  {p.badge ? <span className="badge">{p.badge}</span> : null}
                </Link>

                <div className="card-body clean-body">
                  <Link href={`/products/${p.id}`} className="title">
                    {p.title}
                  </Link>
                  <div className="price">
                    <span className="now">
                      {formatAED(p.price, p.currency || "AED")}
                    </span>
                    {typeof p.compareAtPrice === "number" &&
                      p.compareAtPrice > p.price && (
                        <span className="was">
                          {formatAED(
                            p.compareAtPrice,
                            p.currency || "AED"
                          )}
                        </span>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* pagination */}
          {totalPages > 1 && (
            <div className="cat-pager">
              <button
                className="pg-btn"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(
                  Math.max(0, safePage - 3),
                  Math.max(0, safePage - 3) + 6
                )
                .map((n) => (
                  <button
                    key={n}
                    className={`pg-btn ${n === safePage ? "active" : ""}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
              <button
                className="pg-btn"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                ›
              </button>
            </div>
          )}
        </main>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {openFilter && (
        <div
          className="mfilter-backdrop"
          onClick={() => setOpenFilter(false)}
        />
      )}
      <aside
        id="mfilter"
        aria-modal="true"
        role="dialog"
        className={`mfilter-panel ${openFilter ? "open" : ""}`}
      >
        <div className="mfilter-head">
          <span>Filter</span>
          <button
            className="mfilter-close"
            onClick={() => setOpenFilter(false)}
          >
            ✕
          </button>
        </div>
        <div className="mfilter-body">{Sidebar}</div>
      </aside>
    </div>
  );
}
