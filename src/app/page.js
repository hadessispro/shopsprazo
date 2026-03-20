import GroceryHero from "@/components/home/grocery/GroceryHero";
import GroceryBanner from "@/components/home/grocery/GroceryBanner";
import LabelMarquee from "@/components/home/LabelMarquee";
import GroceryServices from "@/components/home/grocery/GroceryServices";
import GroceryCategory from "@/components/home/grocery/GroceryCategory";
import GroceryProductTabs from "@/components/home/grocery/GroceryProductTabs";
import GroceryServiceBar from "@/components/home/grocery/GroceryServiceBar";
import GroceryCollection from "@/components/home/grocery/GroceryCollection";
import GroceryTopVendor from "@/components/home/grocery/GroceryTopVendor";
import GroceryDeal from "@/components/home/grocery/GroceryDeal";
import GroceryPopularProducts from "@/components/home/grocery/GroceryPopularProducts";
import GroceryTestimonial from "@/components/home/grocery/GroceryTestimonial";
import GroceryBlog from "@/components/home/grocery/GroceryBlog";
import GrocerySubscribe from "@/components/home/grocery/GrocerySubscribe";

export const metadata = {
  title: "Sprazo - Grocery eCommerce",
  description:
    "Sprazo - Best grocery collection online. Get fresh and organic food.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <GroceryHero />
      {/* 2. Banner (3 discount banners) */}
      <GroceryBanner />
      {/* 3. Label Marquee */}
      <LabelMarquee variant="grocery" />
      {/* 4. About / Services */}
      <GroceryServices />
      {/* 5. Category Slider */}
      <GroceryCategory />
      {/* 6. Featured Products (Tabs) */}
      <GroceryProductTabs />
      {/* 7. Service Bar (Free Ship, Support, Return, Payment) */}
      <GroceryServiceBar />
      {/* 8. Collection Grid */}
      <GroceryCollection />
      {/* 9. Top Vendor */}
      <GroceryTopVendor />
      {/* 10. Hot Deals */}
      <GroceryDeal />
      {/* 11. Popular Products */}
      <GroceryPopularProducts />
      {/* 12. Testimonial */}
      <GroceryTestimonial />
      {/* 13. Blog */}
      <GroceryBlog />
      {/* 14. Subscribe */}
      <GrocerySubscribe />
    </>
  );
}
