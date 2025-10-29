// src/app/data/demoBlogs.ts
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  image: string;     // path under /public
};

export const demoBlogs: BlogPost[] = [
  {
    id: "b1",
    title: "Asghar Furniture: Get A Wide Range Of Good Quality Beds",
    slug: "/blog/asghar-furniture-quality-beds",
    image: "/media/blogs/panel-bed.webp",          // ✅ /public/blogs/panel-bed.webp
  },
  {
    id: "b2",
    title: "The Ultimate Table Solution: Your Required Tables At Asghar Furniture",
    slug: "/blog/ultimate-table-solution",
    image: "/media/blogs/coffee-table.jpg",        // ✅ /public/blogs/coffee-table.jpg
  },
  {
    id: "b3",
    title: "Find The Right Wardrobe For Your Bedroom At Asghar Furniture",
    slug: "/blog/right-wardrobe",
    image: "/media/blogs/4-door-wardrobe.webp",    // ✅ /public/blogs/4-door-wardrobe.webp
  },
  {
    id: "b4",
    title: "The Art Of Lounge: Elevating Your Home With A Majlis Sofa",
    slug: "/blog/art-of-lounge-majlis-sofa",
    image: "/media/blogs/majlis-furniture.jpg",    // ✅ /public/blogs/majlis-furniture.jpg
  },
];
