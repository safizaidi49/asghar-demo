export type MegaItem = {
  label: string;
  icon: string; // public path to svg/png
  desc: string;
  href: string;
};

export const MEGA_TITLES: Record<"bedroom" | "living", [string, string]> = {
  bedroom: ["Our Bedroom Signature Style", "Premium Furniture"],
  living:  ["Our Living Room Signature Style", "Premium Furniture"],
};

/** BEDROOM (icons are in your screenshot folder) */
export const BEDROOM_MENU: MegaItem[] = [
  { label: "Beds",            icon: "/media/mega-menu/bedroom/Beds.svg",             desc: "Create your dream bed with fully customizable designs to match your interior.", href: "/category/beds" },
  { label: "Mattresses",      icon: "/media/mega-menu/bedroom/Mattresses.svg",       desc: "Supportive, comfortable mattresses for every sleep style.",                   href: "/category/mattresses" },
  { label: "Dressing Tables", icon: "/media/mega-menu/bedroom/Dressing-Tables.svg",  desc: "Sophisticated dressers that bring beauty and elegance.",                      href: "/category/dressing-tables" },
  { label: "Bunk Beds",       icon: "/media/mega-menu/bedroom/Bunk-Beds.svg",        desc: "Space-saving bunk beds with style and function.",                             href: "/category/bunk-beds" },
  { label: "Wardrobes",       icon: "/media/mega-menu/bedroom/Wardrobes.svg",        desc: "Stylish, customizable wardrobes built for modern living.",                   href: "/category/wardrobes" },
  { label: "Bedroom Sets",    icon: "/media/mega-menu/bedroom/Bedroom-Sets.svg",     desc: "Complete sets tailored to your unique style and comfort.",                   href: "/category/bedroom-sets" },
  { label: "Wall Panel Beds", icon: "/media/mega-menu/bedroom/Wall-Panel-Beds.svg",  desc: "Bold, stylish panel beds that make a statement.",                              href: "/category/wall-panel-beds" },
  { label: "Study Desks",     icon: "/media/mega-menu/bedroom/Study-Desks.svg",      desc: "Focus and style with custom study desks.",                                    href: "/category/study-desks" },
  { label: "Nightstands",     icon: "/media/mega-menu/bedroom/Nightstands.svg",      desc: "Tailored nightstands in classic or modern styles.",                           href: "/category/nightstands" },
  { label: "Shoe Cabinets",   icon: "/media/mega-menu/bedroom/Shoe-Cabinets.svg",    desc: "Stylish, space-saving shoe organization.",                                     href: "/category/shoe-cabinets" },
  { label: "Mirrors",         icon: "/media/mega-menu/bedroom/Mirrors.svg",          desc: "Add light and space with elegant mirrors.",                                    href: "/category/mirrors" },
  { label: "Ottomans",        icon: "/media/mega-menu/bedroom/Ottomans.svg",         desc: "Versatile ottomans made for modern lounging.",                                 href: "/category/ottomans" },
  { label: "Chests of Drawers", icon: "/media/mega-menu/bedroom/Chests-of-Drawers.svg", desc: "Functional chests add character and smart storage.",                        href: "/category/chests-of-drawers" },
  { label: "Cushions",        icon: "/media/mega-menu/bedroom/Cushions.svg",         desc: "Soft, elegant cushions to elevate any setting.",                               href: "/category/cushions" },
];

/** LIVING ROOM (adjust icon paths to your folder) */
export const LIVING_MENU: MegaItem[] = [
  { label: "Sectional Sofas", icon: "/media/mega-menu/living-room/Sectional-Sofas.svg", desc: "Luxurious sectionals offering comfort, space, and modern elegance.", href: "/category/sectional-sofas" },
  { label: "Sofas",           icon: "/media/mega-menu/living-room/Sofas.svg",           desc: "Premium sofas crafted for everyday comfort and sophistication.",   href: "/category/sofas" },
  { label: "Center Tables",   icon: "/media/mega-menu/living-room/Center-Tables.svg",   desc: "Perfect center tables; modern design with daily function.",       href: "/category/center-tables" },
  { label: "Armchairs",       icon: "/media/mega-menu/living-room/Armchairs.svg",       desc: "Charming armchairs to accent and elevate your space.",            href: "/category/accent-chairs" },
  { label: "Daybeds",         icon: "/media/mega-menu/living-room/Daybeds.svg",         desc: "Versatile daybeds bringing comfort to any room.",                 href: "/category/daybeds" },
  { label: "Loveseats",       icon: "/media/mega-menu/living-room/Loveseats.svg",       desc: "Compact loveseats made for stylish comfort.",                     href: "/category/loveseats" },
  { label: "Nest of Tables",  icon: "/media/mega-menu/living-room/Nest-of-Tables.svg",  desc: "Space-saving nesting tables with modern design.",                 href: "/category/nest-of-tables" },
  { label: "TV Cabinets",     icon: "/media/mega-menu/living-room/TV-Cabinets.svg",     desc: "Sleek, functional entertainment cabinets.",                      href: "/category/tv-cabinets" },
  { label: "Chaises",         icon: "/media/mega-menu/living-room/Chaises.svg",         desc: "Create cozy lounging corners with plush chaises.",               href: "/category/chaises" },
  { label: "Cushions",        icon: "/media/mega-menu/living-room/Cushions.svg",        desc: "Elegant cushions add comfort and a soft touch.",                 href: "/category/cushions" },
  { label: "Arabic / Majlis Collection", icon: "/media/mega-menu/living-room/Majlis-Collection.svg", desc: "Elegant Arabic furniture inspired by heritage.", href: "/category/majlis" },
];
