import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = { title: "Shop List Banner | Sprazo" };

export default function ShopListBannerPage() {
  return (
    <Suspense
      fallback={<div className="container py-5 text-center">Loading...</div>}
    >
      <ShopContent forceBanner={true} forceList={true} />
    </Suspense>
  );
}
