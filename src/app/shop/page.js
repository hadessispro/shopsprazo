import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = {
  title: "Shop | Sprazo - Multipurpose eCommerce",
  description: "Browse our wide range of products at Sprazo.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-5 text-center">Loading shop...</div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
