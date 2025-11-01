import HeroSlider from "./components/HeroSlider";
import CategoryTiles from "./components/CategoryTiles";
import FeatureSplit from "./components/FeatureSplit";
import PromoSplit from "./components/PromoSplit";
import CustomizeSection from "./components/CustomizeSection";
import FeaturesBar from "./components/FeaturesBar";
import FeaturedProducts from "./components/FeaturedProducts";
import BadgeImage from "./components/BadgeImage";
import NewArrivals from "./components/NewArrivals";
import TvCabinetsSection from "./components/TvCabinetsSection";
import SenjaWidget from "./components/SenjaWidget";
import NewsBlogs from "./components/NewsBlogs";



export default function HomePage() {
  return (
    <main>
      <HeroSlider
        images={[
          { src: "/media/slider/Slider1.webp", alt: "Modern Sofa – Slide 1" },
          { src: "/media/slider/Slider2.webp", alt: "Bedroom Set – Slide 2" },
          { src: "/media/slider/Slider3.webp", alt: "Dining Table – Slide 3" },
        ]}
        interval={4000}
      />

      <CategoryTiles
        items={[
          { src: "/media/categories/flooring.webp", label: "FLOORINGS", href: "/flooring" },
          { src: "/media/categories/curtains.webp", label: "CURTAINS", href: "/curtains" },
          { src: "/media/categories/wallpapers.webp", label: "WALLPAPERS", href: "/wallpapers" },
          { src: "/media/categories/office.webp", label: "OFFICES", href: "/coming-soon" },
          { src: "/media/categories/beddings.webp", label: "BEDDINGS", href: "#" },
          { src: "/media/categories/carpets.webp", label: "CARPETS", href: "/carpets" },
        ]}
      />
      <FeatureSplit
        imageSrc="/media/banners/bed-banner.webp"
        imageAlt="Inspiring bedroom"
        title="INSPIRING BEDROOMS"
        ctaLabel="SHOP NOW"
        ctaHref="/category/bedrooms"
        contentBg="#F6F1EB"
      />

      <FeatureSplit
        reverse
        imageSrc="/media/banners/living-room-banner.webp"
        imageAlt="Comfort meets style"
        eyebrow="LUXURY LIVING MADE EASY"
        title="COMFORT MEETS STYLE"
        ctaLabel="SHOP NOW"
        ctaHref="/category/living-room"
        contentBg="#EFF9F5"
      />
      {/* <div style={{ height: 40 }} />   ~40px white gap */}
      <FeaturedProducts />
      <PromoSplit
        bg="#F3F9F9"
        bedSrc="/media/banners/glam.webp"
        bedAlt="Emerald bed with gold trim"
        logosSrc="https://www.asgharfurniture.ae/wp-content/uploads/2025/09/Logos.svg"
        eyebrow="UP TO 12 MONTHS EMI PLANS"
        title="SHOP NOW, PAY LATER"
        ctaLabel="SHOP NOW"
        ctaHref="/category/bedrooms"
      />

      <CustomizeSection />
      <FeaturesBar />
      <FeaturedProducts />
      <BadgeImage mode="center" width="80%" />
      <NewArrivals />
      <FeaturedProducts />
      <TvCabinetsSection />
      <FeaturedProducts />

      <SenjaWidget id="e9ef9647-10b1-4240-a7c6-48da2fc81a2d" />
      <NewsBlogs />

    </main>
  );
}
