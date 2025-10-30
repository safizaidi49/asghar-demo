// app/enquiry/enquiry.data.ts

export type EnquiryPageData = {
  slug: string;
  seo: { title: string; description: string };
  hero: {
    desktopSrc: string;
    mobileSrc: string;
    heading: string;
    sub: string;
    ctaHref?: string;      // where ENQUIRE NOW goes
    chatHref?: string;     // WhatsApp or chat link
  };
  usps: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  sideA: {
    // Left image, right copy
    img: string;
    heading: string;
    body: string;
  };
  portfolio: {
    introTitle: string;
    introText: string;
    // left = small then big, middle = big then small, right = small then big
    leftSmall: string; leftBig: string;
    midBig: string; midSmall: string;
    rightSmall: string; rightBig: string;
  };
  sideB: {
    // Right image, left copy
    img: string;
    heading: string;
    body: string;
  };
  faqs: Array<{ q: string; a: string }>;
};

export const ENQUIRY_PAGES: Record<string, EnquiryPageData> = {
  flooring: {
    slug: "flooring",
    seo: {
      title: "Flooring Enquiry | Asghar Furniture",
      description:
        "Affordable flooring solutions in Dubai, UAE. Vinyl, SPC, laminate & engineered wood with professional installation.",
    },
    hero: {
      desktopSrc: "/media/enquiry/flooring/Landing-Enquiry_19_11af.webp",
      mobileSrc: "/media/enquiry/flooring/Enquiry-Mobile-banner_11af.webp",
      heading: "Affordable Flooring Solutions in Dubai, UAE",
      sub:
        "Transform your space with our wide selection of stylish and durable flooring options for both homes and businesses. " +
        "As your one-stop flooring solution, we make it easy to achieve a stunning new look without the hassle.",
      ctaHref: "/contact/enquiry?type=flooring", // change if you want a different target
      chatHref: "https://wa.me/971501234567",
    },
    usps: [
      {
        icon: "/media/enquiry/flooring/Icons-1.webp",
        title: "WIDE RANGE OF FLOORING OPTIONS",
        desc:
          "Explore our extensive flooring catalog, featuring a wide range of styles, materials, and colors to suit any space.",
      },
      {
        icon: "/media/enquiry/flooring/Icons-2.webp",
        title: "DURABLE & QUALITY MATERIALS",
        desc:
          "High-quality materials that resist wear and fading, ensuring a beautiful, long-lasting finish.",
      },
      {
        icon: "/media/enquiry/flooring/Icons-3.webp",
        title: "PROFESSIONAL INSTALLATION",
        desc:
          "Certified installers work efficiently with great care, guaranteeing a seamless, professional finish every time.",
      },
      {
        icon: "/media/enquiry/flooring/Icons-4.webp",
        title: "CUSTOMER SATISFACTION GUARANTEED",
        desc:
          "We’re committed to exceeding expectations so you’re delighted with both our service and the results.",
      },
    ],
    sideA: {
      img: "/media/enquiry/flooring/Side-Section_20_11af.webp",
      heading: "Your Reliable Flooring Supplier in Dubai",
      body:
        "We are your trusted partner for all flooring needs. From residential renovations to large-scale commercial projects, " +
        "we offer personalized service, expert guidance, and a comprehensive selection of customized flooring solutions " +
        "tailored to your vision and budget.",
    },
    portfolio: {
      introTitle: "Check Out Our Portfolio",
      introText:
        "A quick look at recent work. Balanced textures, clean lines, and practical finishes tailored for Dubai homes.",
      leftSmall:  "/media/enquiry/flooring/Portfolio-IMG1_12_11af.webp",
      leftBig:    "/media/enquiry/flooring/Portfolio-IMG6-copy_13_11af.webp", 
      midBig:     "/media/enquiry/flooring/Portfolio-IMG4_14_11af.webp", 
      midSmall:   "/media/enquiry/flooring/Portfolio-IMG2_15_11af.webp", 
      rightSmall: "/media/enquiry/flooring/Portfolio-IMG3_16_11af.webp", 
      rightBig:   "/media/enquiry/flooring/Portfolio-IMG5_17_11af.webp", 
    },
    sideB: {
      img: "/media/enquiry/flooring/Side-Section2-2_18_11af.webp",
      heading: "Why Asghar is the Right Choice for Your Floors",
      body:
        "At Asghar Furniture, the right flooring defines a space. We offer the best products and services in the industry. " +
        "Our experienced team will guide you through every step, ensuring a smooth process and a beautiful result you’ll love.",
    },
    faqs: [
      {
        q: "What types of flooring do you offer?",
        a: "Vinyl, SPC (Stone Polymer Composite), laminate, and engineered wood — each tuned for the Dubai climate.",
      },
      {
        q: "How do I get an accurate quote?",
        a: "Share dimensions, photos if possible, material preference, and location. We’ll schedule a quick site visit if needed.",
      },
      {
        q: "Do you offer maintenance or repair services?",
        a: "Yes. We provide repair, maintenance, and replacement services for all flooring supplied and installed by us.",
      },
    ],
  },
curtains: {
    slug: "curtains",
    seo: {
      title: "Curtains Enquiry | Asghar Furniture",
      description:
        "Elegant curtains for every space—blackout, sheer, and bespoke options with premium fabrics and professional installation across the UAE.",
    },
    hero: {
      desktopSrc: "/media/enquiry/curtains/Curtains_banner.webp",
      mobileSrc:  "/media/enquiry/curtains/Curtains-Mobile-banner.webp",
      heading: "Elegant Curtains for Every Space",
      sub:
        "Discover the perfect blend of style, comfort, and functionality with Asghar Premium Curtains. Whether you prefer modern, classic, or bespoke designs, our wide range of curtains are crafted to complement your interiors beautifully. From blackout curtains that ensure restful sleep to sheer fabrics that invite natural light, we offer solutions tailored to your lifestyle.",
      ctaHref: "/contact/enquiry?type=curtains",
      chatHref: "https://wa.me/971501234567",
    },
    usps: [
      {
        icon: "/media/enquiry/curtains/Icon1.webp",
        title: "Wide Range of Designs",
        desc:
          "From luxurious velvet drapes to soft linen sheers, we offer curtains to suit every taste and décor style.",
      },
      {
        icon: "/media/enquiry/curtains/Icons2.webp",
        title: "Affordable Luxury",
        desc:
          "Experience premium quality at unbeatable value. Our curtains blend elegance with affordability, making luxury accessible to everyone.",
      },
      {
        icon: "/media/enquiry/curtains/Icons-3.webp",
        title: "Professional Installation",
        desc:
          "Our expert team guarantees flawless fittings, delivering perfectly draped curtains that instantly transform your home.",
      },
      {
        icon: "/media/enquiry/curtains/Icons4.webp",
        title: "Premium Fabrics",
        desc:
          "Choose from a curated selection of high-quality fabrics, carefully sourced to ensure durability, softness, and timeless appeal.",
      },
    ],
    sideA: {
      img: "/media/enquiry/curtains/Side-Section-1.webp",
      heading: "Transform Your Space with Stylish Curtains",
      body:
        "Curtains are more than just window coverings; they set the mood and personality of your living space. At Asghar Furniture, we design curtains that not only enhance your interiors but also improve privacy, light control, and overall comfort. Whether you prefer minimalist neutrals, vibrant patterns, or bespoke creations, our collection has something for every style.",
    },
    portfolio: {
      introTitle: "Our Portfolio – Crafted for Every Space",
      introText:
        "Explore our handpicked portfolio, featuring a wide variety of curtain designs for bedrooms, living rooms, dining areas, and more. Each project showcases our commitment to style, precision, and customization.",
      // sequence mapping: 1→leftSmall, 2→leftBig, 3→midBig, 4→midSmall, 5→rightSmall, 6→rightBig
      leftSmall:  "/media/enquiry/curtains/CurtainsPortfolio1.webp",
      leftBig:    "/media/enquiry/curtains/CurtainsPortfolio2.webp",
      midBig:     "/media/enquiry/curtains/CurtainsPortfolio3.webp",
      midSmall:   "/media/enquiry/curtains/CurtainsPortfolio4.webp",
      rightSmall: "/media/enquiry/curtains/CurtainsPortfolio5.webp",
      rightBig:   "/media/enquiry/curtains/CurtainsPortfolio6.webp",
    },
    sideB: {
      img: "/media/enquiry/curtains/Side-Section2.webp",
      heading: "Why Choose Asghar Furniture for Your Curtains?",
      body:
        "With years of experience as a trusted supplier in Dubai, we bring unmatched expertise and a steadfast commitment to quality. From the initial consultation and precise measurements to professional installation, we manage every detail to ensure a perfect result every time.",
    },
    faqs: [
      {
        q: "Do you provide free consultation and installation?",
        a: "Yes, Asghar Furniture offers free design consultation and professional installation across the UAE.",
      },
      {
        q: "Can I get custom-made curtains for my home?",
        a: "Absolutely! We specialize in bespoke curtain designs crafted to fit your exact requirements.",
      },
      {
        q: "What type of fabrics do you offer?",
        a: "We offer a wide variety, including velvet, silk, linen, cotton, and blackout fabrics for complete versatility.",
      },
    ],
  },
  carpets: {
    slug: "carpets",
    seo: {
      title: "Carpets Enquiry | Asghar Furniture",
      description:
        "Carpets to redefine your home—premium materials, wide variety, expert installation, and easy-care choices across the UAE.",
    },
    hero: {
      desktopSrc: "/media/enquiry/carpets/Landing-3.webp",
      mobileSrc:  "/media/enquiry/carpets/Mobile-banner-2.webp",
      heading: "Carpets to Redefine Your Home",
      sub:
        "At Asghar Furniture, we believe a carpet is more than just a floor covering—it’s a statement. Our curated selection brings together unparalleled craftsmanship, luxurious materials, and timeless designs to transform any room into a haven of warmth and style. Experience the difference quality makes.",
      ctaHref: "/contact/enquiry?type=carpets",
      chatHref: "https://wa.me/971501234567",
    },

    usps: [
      {
        icon: "/media/enquiry/carpets/Icons1.webp",
        title: "Premium Quality",
        desc:
          "Superior craftsmanship, finest materials, lasting beauty, and comfort. Elevate your home—guaranteed.",
      },
      {
        icon: "/media/enquiry/carpets/Icons2.webp",
        title: "Wide Variety",
        desc:
          "From timeless tradition to contemporary chic. Find the styles, colors, and textures that fit any décor.",
      },
      {
        icon: "/media/enquiry/carpets/Icons4.webp",
        title: "Professional Installation",
        desc:
          "Expert installation ensures your new carpet is perfectly laid, seamlessly transforming your space.",
      },
      {
        icon: "/media/enquiry/carpets/Icons3.webp",
        title: "Easy to Maintain",
        desc:
          "Durable, easy-care carpets designed for everyday living and lasting beauty.",
      },
    ],

    sideA: {
      img: "/media/enquiry/carpets/Side-Section1.webp",
      heading: "Transform Your Space with Stylish Carpets",
      body:
        "Imagine stepping into a room that feels instantly warmer, more inviting, and effortlessly stylish. Our handpicked carpets are crafted to do just that—offering a perfect blend of luxurious comfort and timeless elegance for any home.",
    },

    portfolio: {
      introTitle: "Explore Our Diverse Carpet Collections",
      introText:
        "Whether you’re seeking vibrant carpets, elegant modern designs, or cozy shag carpets, we have something to suit every taste and space.",
      // sequence: 1→leftSmall, 2→leftBig, 3→midBig, 4→midSmall, 5→rightSmall, 6→rightBig
      leftSmall:  "/media/enquiry/carpets/carpetsPortfolio1.webp",
      leftBig:    "/media/enquiry/carpets/carpetsPortfolio2.webp",
      midBig:     "/media/enquiry/carpets/carpetsPortfolio3.webp",
      midSmall:   "/media/enquiry/carpets/carpetsPortfolio4.webp",
      rightSmall: "/media/enquiry/carpets/carpetsPortfolio5.webp",
      rightBig:   "/media/enquiry/carpets/carpetsPortfolio6.webp",
    },

    sideB: {
      img: "/media/enquiry/carpets/Side-Section2.webp",
      heading: "Why Choose Asghar Furniture for Your Carpets?",
      body:
        "With nearly 5 decades of experience in home furnishings, Asghar Furniture stands for quality and trust. Our carpets are carefully hand-selected to meet the highest standards of beauty and durability, ensuring they enhance your décor while standing the test of time. We provide personalized service to help you find the perfect piece that reflects your unique style and needs.",
    },

    faqs: [
      {
        q: "How do I choose the right size carpet for my room?",
        a: "Consider the room’s dimensions and furniture placement. In living rooms, allow front legs of furniture to sit on the carpet; in dining rooms, ensure chairs remain on the rug when pulled out.",
      },
      {
        q: "What are the best materials for high-traffic areas?",
        a: "Wool, synthetic blends such as polypropylene or nylon, and jute are excellent choices for durability and ease of cleaning.",
      },
      {
        q: "How should I clean and maintain my carpet?",
        a: "Vacuum regularly. For spills, blot immediately with a clean cloth. Professional cleaning once a year is recommended.",
      },
      {
        q: "Can I see the carpets in person before purchasing?",
        a: "Yes—visit our showroom to experience the quality and beauty firsthand. Our experts will help you choose the perfect style.",
      },
    ],
  },

    wallpapers: {
    slug: "wallpapers",
    seo: {
      title: "Wallpapers & Paneling Enquiry | Asghar Furniture",
      description:
        "Elevate your walls with modern wallpapers and paneling. Easy to apply, professionally installed, durable and long-lasting.",
    },

    hero: {
      desktopSrc: "/media/enquiry/wallpapers/Wallpaper-Banner.webp",
      mobileSrc:  "/media/enquiry/wallpapers/Wallpaper-Mobile-banner.webp",
      heading: "Elevate Your Walls, Effortlessly",
      sub:
        "Transform your space with our premium wallpapers and paneling solutions. With our expert guidance, refreshing your home or office becomes simple and stress-free.",
      ctaHref: "/contact/enquiry?type=wallpapers",
      chatHref: "https://wa.me/971501234567",
    },

    usps: [
      {
        icon: "/media/enquiry/wallpapers/Icons1.webp",
        title: "Easy to Apply & Remove",
        desc:
          "Designed for effortless installation and clean removal—future design changes are simple and hassle-free.",
      },
      {
        icon: "/media/enquiry/wallpapers/Icons2.webp",
        title: "Variety of Designs",
        desc:
          "Explore a vast catalog of unique designs with colors and textures to suit any space.",
      },
      {
        icon: "/media/enquiry/wallpapers/Icons4.webp",
        title: "Professional Installation",
        desc:
          "Skilled installers ensure a clean, flawless finish from start to completion.",
      },
      {
        icon: "/media/enquiry/wallpapers/Icons-3.webp",
        title: "Durable & Long-lasting",
        desc:
          "Crafted from high-quality materials that resist wear and fading for years of beauty.",
      },
    ],

    sideA: {
      img: "/media/enquiry/wallpapers/Side-Section1.webp",
      heading: "Modern Wallpapers & Paneling",
      body:
        "Asghar offers a stunning collection of wall solutions designed to elevate your interior design. Our modern wallpapers feature a variety of prints, from geometric and floral to minimalist textures. For a more sophisticated touch, our wall paneling adds architectural depth and elegance. Both options are durable, easy to maintain, and professionally installed.",
    },

    portfolio: {
      introTitle: "Check Out Our Portfolio",
      introText:
        "See how our wallpapers and paneling have transformed homes and offices across Dubai. Our gallery showcases the quality and versatility of our work.",
      // left: small→big, middle: big→small, right: small→big
      leftSmall:  "/media/enquiry/wallpapers/WallpaperPortfolio1.webp",
      leftBig:    "/media/enquiry/wallpapers/WallpaperPortfolio2.webp",
      midBig:     "/media/enquiry/wallpapers/WallpaperPortfolio3.webp",
      midSmall:   "/media/enquiry/wallpapers/WallpaperPortfolio4.webp",
      rightSmall: "/media/enquiry/wallpapers/WallpaperPortfolio5.webp",
      rightBig:   "/media/enquiry/wallpapers/WallpaperPortfolio6.webp",
    },

    sideB: {
      img: "/media/enquiry/wallpapers/Side-Section2.webp",
      heading: "Why Choose Us?",
      body:
        "At Asghar, we're more than just a provider of wallpapers and paneling; we're your trusted design partner. As a leading name in wall décor across Dubai, we combine years of experience with a deep commitment to customer satisfaction. From expert consultation and tailored design advice to professional installation, we handle every detail to ensure a seamless, hassle-free experience.",
    },

    faqs: [
      {
        q: "What types of wallpaper do you offer?",
        a: "We offer vinyl, non-woven, paper-backed, and natural fiber options—each designed for durability and easy maintenance.",
      },
      {
        q: "Do you offer installation services?",
        a: "Yes. We provide professional, efficient installation across Dubai and the wider UAE to ensure a perfect finish.",
      },
      {
        q: "How do I choose between wallpaper and paneling?",
        a: "Wallpaper adds color and intricate patterns, while paneling delivers a more structural, textured, and luxurious feel. Our team can help you decide based on your goals and budget.",
      },
    ],
  },

  // Add  more pages by copying the flooring block, changing `slug`, images, text, FAQ, etc.
};
