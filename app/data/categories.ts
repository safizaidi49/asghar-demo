// app/data/categories.ts
export const CATEGORY_CONFIG = {
  "bedrooms": {
    name: "Bedrooms",
    banner: "/media/banners/bedrooms.webp",
  },
  "living-room": {
    name: "Living Room",
    banner: "/media/banners/living-room.webp",
  },
  "furniture-packages": {
    name: "Furniture Packages",
    banner: "/media/banners/packages.webp",
  },
  "new-arrivals": {
    name: "New Arrivals",
    banner: "/media/banners/new-arrivals.webp",
  },
} as const;

export type CategorySlug = keyof typeof CATEGORY_CONFIG;
