import "@/styles/bootstrap.min.css";
import "@/styles/remixicon.css";
import "@/styles/animate.min.css";
import "@/styles/nouislider.css";
import "@/styles/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/style.css";
import "@/styles/demo-2.css";
import "@/styles/dark-scoped.css";
import "./globals.css";
import AppWrapper from "@/components/layout/AppWrapper";

export const metadata = {
  title: "Sprazo - Multipurpose eCommerce",
  description: "Sprazo - Multipurpose eCommerce Next.js Template.",
  keywords:
    "ecommerce, fashion, grocery, multi vendor, organic food, supermarket",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className="animsition" suppressHydrationWarning>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
