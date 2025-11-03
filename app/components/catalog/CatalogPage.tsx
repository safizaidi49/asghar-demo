"use client";

import { useEffect, useMemo, useState } from "react";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import ProductGrid, { Product } from "./ProductGrid";
import { CategoryMeta, DEFAULT_META } from "@/app/config/catalog";

type Category = { slug: string; name: string; count?: number };
type Color = { slug: string; name: string; hex: string };

type Props = {
  meta?: CategoryMeta;                // controls banner + which filters to show
  products: Product[];               // full list or category subset
  categories: Category[];
  colors: Color[];
  defaultPerPage?: 24 | 48 | 72;
};

export default function CatalogPage({
  meta = DEFAULT_META,
  products,
  categories,
  colors,
  defaultPerPage = 24,
}: Props) {
  // filters/sort/paging
  const [cat, setCat] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [sort, setSort] = useState<string>("default");
  const [per, setPer] = useState<number>(defaultPerPage);
  const [page, setPage] = useState<number>(1);

  // price filter fields + applied values
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [appliedMin, setAppliedMin] = useState<number | null>(null);
  const [appliedMax, setAppliedMax] = useState<number | null>(null);

  // mobile drawer
  const [openFilter, setOpenFilter] = useState(false);

  // read from URL once
  useEffect(() => {
    const u = new URL(window.location.href);
    setCat(u.searchParams.get("cat") ?? "");
    setColor(u.searchParams.get("color") ?? "");
    setSort(u.searchParams.get("sort") ?? "default");
    const sPer  = Number(u.searchParams.get("per"));
    const sPage = Number(u.searchParams.get("page"));
    if ([24,48,72].includes(sPer)) setPer(sPer);
    if (sPage > 0) setPage(sPage);
    const qMin = u.searchParams.get("min");
    const qMax = u.searchParams.get("max");
    if (qMin) { setPriceMin(qMin); setAppliedMin(Number(qMin)); }
    if (qMax) { setPriceMax(qMax); setAppliedMax(Number(qMax)); }
  }, []);

  // write to URL (omit defaults)
  useEffect(() => {
    const u = new URL(window.location.href);
    const setOrDel = (k: string, v: string | number | null | undefined) => {
      if (v === "" || v === undefined || v === null || v === "default") u.searchParams.delete(k);
      else u.searchParams.set(k, String(v));
    };
    setOrDel("cat", cat);
    setOrDel("color", color);
    setOrDel("sort", sort);
    if (per !== defaultPerPage) u.searchParams.set("per", String(per)); else u.searchParams.delete("per");
    if (page !== 1) u.searchParams.set("page", String(page)); else u.searchParams.delete("page");
    setOrDel("min", appliedMin);
    setOrDel("max", appliedMax);
    window.history.replaceState({}, "", u.toString());
  }, [cat, color, sort, per, page, appliedMin, appliedMax, defaultPerPage]);

  // apply price
  const applyPrice = () => {
    const min = priceMin.trim() ? Number(priceMin) : null;
    const max = priceMax.trim() ? Number(priceMax) : null;
    setAppliedMin(min);
    setAppliedMax(max);
    setPage(1);
    setOpenFilter(false);
  };

  // derive list
  const filtered = useMemo(() => {
    let list = products.slice();
    if (cat)   list = list.filter(() => true);   // hook up real category when backend arrives
    if (color) list = list.filter(() => true);   // hook up real color attribute later
    if (appliedMin !== null) list = list.filter(p => p.price >= appliedMin);
    if (appliedMax !== null) list = list.filter(p => p.price <= appliedMax);

    switch (sort) {
      case "price-asc":  list.sort((a,b)=>a.price-b.price); break;
      case "price-desc": list.sort((a,b)=>b.price-a.price); break;
      case "title-asc":  list.sort((a,b)=>a.title.localeCompare(b.title)); break;
      case "title-desc": list.sort((a,b)=>b.title.localeCompare(a.title)); break;
    }
    return list;
  }, [products, cat, color, sort, appliedMin, appliedMax]);

  // paginate
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / per));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * per;
  const pageItems = filtered.slice(start, start + per);

  return (
    <div className="cat-wrap">
      <Hero title={meta.title} heroSrc={meta.heroSrc} />

      <div className="cat-container">
        {/* desktop sidebar */}
        <aside className="cat-sidebar">
          <Sidebar
            showCategories={!!meta.show.categories}
            showColors={!!meta.show.colors}
            showPrice={!!meta.show.price}
            categories={categories}
            colors={colors}
            cat={cat} setCat={(v)=>{ setCat(v); setPage(1); }}
            color={color} setColor={(v)=>{ setColor(v); setPage(1); }}
            priceMin={priceMin} setPriceMin={setPriceMin}
            priceMax={priceMax} setPriceMax={setPriceMax}
            onApplyPrice={applyPrice}
          />
        </aside>

        {/* main */}
        <main className="cat-main">
          <Toolbar
            per={per}
            setPer={(n)=>{ setPer(n); setPage(1); }}
            sort={sort}
            setSort={(s)=>{ setSort(s); setPage(1); }}
            onOpenFilter={()=>setOpenFilter(true)}
          />

          <ProductGrid
            items={pageItems}
            page={safePage}
            totalPages={totalPages}
            setPage={setPage}
          />
        </main>
      </div>

      {/* mobile drawer */}
      {openFilter && <div className="mfilter-backdrop" onClick={()=>setOpenFilter(false)} />}
      <aside id="mfilter" aria-modal="true" role="dialog" className={`mfilter-panel ${openFilter ? "open" : ""}`}>
        <div className="mfilter-head">
          <span>Filter</span>
          <button className="mfilter-close" onClick={()=>setOpenFilter(false)}>✕</button>
        </div>
        <div className="mfilter-body">
          <Sidebar
            showCategories={!!meta.show.categories}
            showColors={!!meta.show.colors}
            showPrice={!!meta.show.price}
            categories={categories}
            colors={colors}
            cat={cat} setCat={(v)=>{ setCat(v); setPage(1); }}
            color={color} setColor={(v)=>{ setColor(v); setPage(1); }}
            priceMin={priceMin} setPriceMin={setPriceMin}
            priceMax={priceMax} setPriceMax={setPriceMax}
            onApplyPrice={applyPrice}
          />
        </div>
      </aside>
    </div>
  );
}
