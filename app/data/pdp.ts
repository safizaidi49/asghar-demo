
export type PDPImage = { src: string; alt?: string };

export type PDP = {
  slug: string;
  sku: string;
  title: string;
  price: number;           // AED
  shortDesc: string;
  overviewHtml: string;    // HTML from Woo
  images: PDPImage[];
  colors: { name: string; hex: string }[];
};

export const PDPS: PDP[] = [
  {
    slug: "archie-modular-sofa",
    sku: "AFSL3202586",
    title: "Archie Modular Sofa",
    price: 2499,
    shortDesc:
      "Experience the utmost in luxury and comfort with the Archie Modular Sofa. Linen upholstery with deep seating and a low-profile silhouette.",
    overviewHtml: `
      <p>Archie is a Modular Sectional Sofa with mid-century design, geometric curves, and seamless adaptability.</p>
      <ul>
        <li>Modern style</li>
        <li>Materials: Solid wood base, Foam, Fabric</li>
        <li>Soft linen upholstery</li>
        <li>Comfortable & spacious seating</li>
        <li>Size: 296cm (W) X 270cm (D) X 72cm (H)</li>
        <li>Any color or size can be customized</li>
      </ul>
    `,
    images: [
      { src: "/media/demo-products/archie/archie-modular-sofa.webp",  alt: "Archie Modular Sofa" },
      { src: "/media/demo-products/archie/archie-modular-sofa2.webp" },
      { src: "/media/demo-products/archie/archie-modular-sofa3.webp" }
    ],
    colors: [
      { name: "Denim Blue", hex: "#607f93" },
      { name: "Rust Red",   hex: "#c75658" },
      { name: "Cloud",      hex: "#f4f4f4" }
    ]
  }
];

export function getPDP(slug: string) {
  return PDPS.find(p => p.slug === slug) || null;
}

export function formatAED(n: number) {
  return new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(n);
}
