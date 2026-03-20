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
      {/* 1. Hero Section */}
      <GroceryHero />
      {/* 2. 3 Discount Banners + Category Marquee */}
      <GroceryBanner />
      <LabelMarquee variant="grocery" />
      {/* 3. About Our Company */}
      <GroceryServices />
      {/* 4. Featured Top Categories (slider) */}
      <GroceryCategory />
      {/* 5. Our Features Collection (Product Tabs: New Arrivals / Best Sellers / Top Rates) */}
      <GroceryProductTabs />
      {/* 6. Service Bar (Free Shipping, 24x7, Return, Payment) */}
      <GroceryServiceBar />
      {/* 7. Browse The Products - Our Features Collection (collection grid) */}
      <GroceryCollection />
      {/* 8. Top Vendor */}
      <GroceryTopVendor />
      {/* 9. Hot Deals (Deal of the Week + Fresh Fruits) */}
      <GroceryDeal />
      {/* 10. Most Popular Products */}
      <GroceryPopularProducts />
      {/* 11. Testimonial */}
      <GroceryTestimonial />
      {/* 12. Blog */}
      <GroceryBlog />
      {/* 13. Subscribe */}
      <GrocerySubscribe />
    </>
  );
}
