import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = { title: "Shop Banner | Sprazo" };

export default function ShopBannerPage() {
  return (
    <Suspense
      fallback={<div className="container py-5 text-center">Loading...</div>}
    >
      <ShopContent forceBanner={true} />
    </Suspense>
  );
}
