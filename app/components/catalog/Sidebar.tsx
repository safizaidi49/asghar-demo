"use client";
type Category = { slug: string; name: string; count?: number };
type Color = { slug: string; name: string; hex: string };

type SidebarProps = {
  showCategories?: boolean;
  showColors?: boolean;
  showPrice?: boolean;

  // data
  categories: Category[];
  colors: Color[];

  // current state + setters (lifted up)
  cat: string; setCat: (v: string) => void;
  color: string; setColor: (v: string) => void;
  priceMin: string; setPriceMin: (v: string) => void;
  priceMax: string; setPriceMax: (v: string) => void;
  onApplyPrice: () => void;
};

export default function Sidebar({
  showCategories = true,
  showColors = true,
  showPrice = true,
  categories,
  colors,
  cat, setCat,
  color, setColor,
  priceMin, setPriceMin,
  priceMax, setPriceMax,
  onApplyPrice
}: SidebarProps) {
  return (
    <>
      {showCategories && (
        <div className="cat-card">
          <div className="cat-sec-title">Categories</div>
          <div className="cat-list">
            <button className={`cat-cat ${cat === "" ? "active" : ""}`} onClick={() => setCat("")}>
              All
            </button>
            {categories.map(c => (
              <button
                key={c.slug}
                className={`cat-cat ${cat === c.slug ? "active" : ""}`}
                onClick={() => setCat(c.slug)}
              >
                {c.name}{typeof c.count === "number" ? <span className="cat-count">({c.count})</span> : null}
              </button>
            ))}
          </div>
        </div>
      )}

      {showColors && (
        <div className="cat-card">
          <div className="cat-sec-title">Color</div>
          <div className="cat-colors">
            <button className={`color-chip ${color === "" ? "active" : ""}`} onClick={() => setColor("")} aria-label="All colors">
              <span className="chip-swatch" style={{ background: "linear-gradient(45deg,#ccc,#fff)" }} />
            </button>
            {colors.map(c => (
              <button
                key={c.slug}
                className={`color-chip ${color === c.slug ? "active" : ""}`}
                onClick={() => setColor(c.slug)}
                title={c.name}
                aria-label={c.name}
              >
                <span className="chip-swatch" style={{ background: c.hex }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {showPrice && (
        <div className="cat-card">
          <div className="cat-sec-title">Price</div>
          <div className="price-row">
            <input className="price-input" inputMode="numeric" pattern="[0-9]*" placeholder="Min" value={priceMin} onChange={(e)=>setPriceMin(e.target.value)} />
            <span className="price-dash">–</span>
            <input className="price-input" inputMode="numeric" pattern="[0-9]*" placeholder="Max" value={priceMax} onChange={(e)=>setPriceMax(e.target.value)} />
          </div>
          <button className="apply-btn" onClick={onApplyPrice}>Apply Filter</button>
        </div>
      )}
    </>
  );
}
