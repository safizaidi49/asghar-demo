"use client";

const PER_OPTIONS = [24, 48, 72] as const;
const SORTS = [
  { val: "default", label: "Default sorting" },
  { val: "price-asc", label: "Price: Low to High" },
  { val: "price-desc", label: "Price: High to Low" },
  { val: "title-asc", label: "Name: A → Z" },
  { val: "title-desc", label: "Name: Z → A" },
] as const;

type Props = {
  per: number; setPer: (n:number)=>void;
  sort: string; setSort: (s:string)=>void;
  onOpenFilter: ()=>void;
};

export default function Toolbar({ per, setPer, sort, setSort, onOpenFilter }: Props) {
  return (
    <div className="cat-toolbar">
      <button className="filter-btn mobile-only" onClick={onOpenFilter} aria-haspopup="dialog" aria-controls="mfilter">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 6h18M6 12h12M10 18h4" strokeWidth="2" />
        </svg>
        Filter
      </button>

      <div className="cat-show">
        <span>SHOW</span>
        {PER_OPTIONS.map(n => (
          <button key={n} className={`show-btn ${per === n ? "active" : ""}`} onClick={() => setPer(n)}>
            {n}
          </button>
        ))}
      </div>

      <div className="cat-sort">
        <select className="cat-select" value={sort} onChange={(e)=>setSort(e.target.value)} aria-label="Sort products">
          {SORTS.map(s => <option key={s.val} value={s.val}>{s.label}</option>)}
        </select>
      </div>
    </div>
  );
}
