// Category/banner config you can grow over time
export type CategoryMeta = {
  slug: string;
  title: string;                 // H1 on the page
  heroSrc: string;               // full-width banner, no crop
  show: {
    categories?: boolean;
    colors?: boolean;
    price?: boolean;
  };
};

export const DEFAULT_META: CategoryMeta = {
  slug: "shop",
  title: "Shop",
  heroSrc: "/media/banners/breadcrumbs.webp",
  show: { categories: true, colors: true, price: true },
};

// Map by slug. Add more as you go.
export const CATEGORY_META: Record<string, CategoryMeta> = {
  shop: DEFAULT_META,
  bedrooms: {
    slug: "bedrooms",
    title: "Bedrooms",
    heroSrc: "/media/banners/bedrooms.webp",
    show: { categories: true, colors: true, price: true },
  },
  "living-room": {
    slug: "living-room",
    title: "Living Room",
    heroSrc: "/media/banners/living.webp",
    show: { categories: true, colors: true, price: true },
  },
  // tvcabinets, storage, deals, etc…
};
