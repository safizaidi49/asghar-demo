export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;
  badge?: string;
};

export const demoProducts: Product[] = [
  {
    id: "p1",
    title: "Novelle Round Velvet Bed",
    image: "/demo-products/Novelle-Round-Bed-600x600.webp",
    price: 3999,
    compareAtPrice: 4999,
    currency: "AED",
  },
  {
    id: "p2",
    title: "Elan Verde Bed",
    image: "/demo-products/Elan-Verde-Bed.natural-webp-600x600.webp",
    price: 3599,
    compareAtPrice: 3999,
    currency: "AED",
  },
  {
    id: "p3",
    title: "Wingback Velvet Bed",
    image: "/demo-products/Wingback-Velvet-Bed-Grey-color_-600x600.webp",
    price: 999,
    compareAtPrice: 1299,
    currency: "AED",
    badge: "SALE",
  },
  {
    id: "p4",
    title: "Channel Upholstered Bed",
    image: "/demo-products/Channel-Upholstered-Bed-600x600.webp",
    price: 999,
    compareAtPrice: 1699,
    currency: "AED",
    badge: "41%",
  },
  {
    id: "p5",
    title: "Areeka 3 Seater Sofa",
    image: "/demo-products/Areeka-3-seater-sofa-600x600.webp",
    price: 1999,
    currency: "AED",
  },
];
