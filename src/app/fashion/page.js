import FashionHero from "@/components/home/fashion/FashionHero";
import FashionCategory from "@/components/home/fashion/FashionCategory";
import FashionAbout from "@/components/home/fashion/FashionAbout";
import FashionBanners from "@/components/home/fashion/FashionBanners";
import FashionProductTabs from "@/components/home/fashion/FashionProductTabs";
import FashionServices from "@/components/home/fashion/FashionServices";
import FashionCollection from "@/components/home/fashion/FashionCollection";
import FashionVendor from "@/components/home/fashion/FashionVendor";
import FashionDeal from "@/components/home/fashion/FashionDeal";
import FashionPopularProducts from "@/components/home/fashion/FashionPopularProducts";
import FashionTestimonial from "@/components/home/fashion/FashionTestimonial";
import FashionBlog from "@/components/home/fashion/FashionBlog";
import FashionSubscribe from "@/components/home/fashion/FashionSubscribe";
import LabelMarquee from "@/components/home/LabelMarquee";

export const metadata = {
  title: "Sprazo - Fashion eCommerce",
  description: "Sprazo - Best fashion and lifestyle collection online.",
};

export default function FashionPage() {
  return (
    <>
      {/* 1. Fashion Hero Slider (2 slides: Women's + Men's) */}
      <FashionHero />
      {/* 2. Category Marquee */}
      <LabelMarquee variant="fashion" />
      {/* 3. Featured Top Categories (round image slider) */}
      <FashionCategory />
      {/* 4. About Our Company */}
      <FashionAbout />
      {/* 5. Fashion Banners (Women 15%, Men 35%, Kids 20%) */}
      <FashionBanners />
      {/* 6. Our Features Collection (Product Tabs) */}
      <FashionProductTabs />
      {/* 7. Services (Free Shipping, 24x7, Return, Payment) */}
      <FashionServices />
      {/* 8. Browse The Products - Our Features Collection */}
      <FashionCollection />
      {/* 9. Top Vendor */}
      <FashionVendor />
      {/* 10. Hot Deals (Deal of the Week + Women's Gown) */}
      <FashionDeal />
      {/* 11. Most Popular Products */}
      <FashionPopularProducts />
      {/* 12. Testimonial */}
      <FashionTestimonial />
      {/* 13. Blog */}
      <FashionBlog />
      {/* 14. Subscribe */}
      <FashionSubscribe />
    </>
  );
}
