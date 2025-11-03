// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// import "./globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Header from "./components/Header"; // ← add the shared header
// import TopBar from "./components/TopBar";
// import Footer from "./components/Footer";
// import "@fortawesome/fontawesome-free/css/all.min.css";


// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Asghar Furniture",
//   description: "Modern furniture & interiors",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
    
//     <html lang="en" className={poppins.variable}>
//       <body className="antialiased">
//         {/* Global header (mobile + desktop variants handled inside Header) */}
//          <TopBar />
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asghar Furniture",
  description: "Modern furniture & interiors",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <TopBar />
        <Header />
        {children}
        <Footer />

        {/* Load Tabby promo script once, app-wide */}
        <Script
          id="tabby-checkout-promo-js"
          src="https://checkout.tabby.ai/tabby-promo.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
