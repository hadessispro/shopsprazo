import HeroSlider from "@/components/home/HeroSlider";
import LabelMarquee from "@/components/home/LabelMarquee";
import FashionCategory from "@/components/home/fashion/FashionCategory";
import FashionAbout from "@/components/home/fashion/FashionAbout";
import FashionBanners from "@/components/home/fashion/FashionBanners";
import ProductTabs from "@/components/home/ProductTabs";
import FashionServices from "@/components/home/fashion/FashionServices";
import FashionCollection from "@/components/home/fashion/FashionCollection";
import FashionVendor from "@/components/home/fashion/FashionVendor";
import FashionDeal from "@/components/home/fashion/FashionDeal";
import FashionTestimonial from "@/components/home/fashion/FashionTestimonial";
import FashionBlog from "@/components/home/fashion/FashionBlog";
import FashionSubscribe from "@/components/home/fashion/FashionSubscribe";

export const metadata = {
  title: "Sprazo - Fashion eCommerce",
  description: "Sprazo - Best fashion and lifestyle collection online.",
};

export default function FashionPage() {
  return (
    <>
      <HeroSlider />
      <LabelMarquee variant="fashion" />
      <FashionCategory />
      <FashionAbout />
      <FashionBanners />
      <ProductTabs filterType="fashion" />
      <FashionServices />
      <FashionCollection />
      <FashionVendor />
      <FashionDeal />
      <FashionTestimonial />
      <FashionBlog />
      <FashionSubscribe />
    </>
  );
}
