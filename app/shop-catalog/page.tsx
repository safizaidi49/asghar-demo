import CatalogTemplate from "@/app/components/CatalogTemplate";
import { demoProducts } from "@/app/data/products";

export const metadata = {
  title: "Shop Catalog | Asghar Furniture",
  description: "Browse the Asghar Furniture shop catalog.",
};

export default function ShopCatalogPage() {
  return (
    <CatalogTemplate
      title="Shop"
      products={demoProducts}                 // ✅ pass products
      heroSrc="/media/banners/breadcrumbs.webp"
      defaultPerPage={24}
    />
  );
}
