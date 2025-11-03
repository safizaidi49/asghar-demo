// app/category/[slug]/page.tsx
import CatalogTemplate from "@/app/components/CatalogTemplate";
import { demoProducts } from "@/app/data/products";
import { CATEGORY_CONFIG, type CategorySlug } from "@/app/data/categories";

type Params = { params: { slug: string } };

// ✅ Tell Next which category pages to pre-generate for static export
export function generateStaticParams() {
  return (Object.keys(CATEGORY_CONFIG) as CategorySlug[]).map((slug) => ({ slug }));
}

// (optional) SEO per category
export function generateMetadata({ params }: Params) {
  const cat = CATEGORY_CONFIG[params.slug as CategorySlug];
  if (!cat) return { title: "Category | Asghar Furniture" };
  return {
    title: `${cat.name} | Asghar Furniture`,
    description: `Browse ${cat.name} at Asghar Furniture.`,
  };
}

export default function CategoryPage({ params }: Params) {
  const slug = params.slug as CategorySlug;
  const cat = CATEGORY_CONFIG[slug];

  if (!cat) return <div style={{ padding: 24 }}>Category not found.</div>;

  // Prefer: filter by product.tags/categories (if present)
  const filtered = demoProducts.filter((p: any) => p.categories?.includes(slug));

  // Fallback: show all when not tagged yet (remove once you add tags)
  const items = filtered.length ? filtered : demoProducts;

  return (
    <CatalogTemplate
      title={cat.name}
      products={items}
      heroSrc={cat.banner}
      defaultPerPage={24}
      categories={Object.entries(CATEGORY_CONFIG).map(([s, cfg]) => ({
        slug: s,
        name: cfg.name,
      }))}
    />
  );
}
