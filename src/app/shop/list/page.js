import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = { title: "Shop List | Sprazo" };

export default function ShopListPage() {
  return (
    <Suspense
      fallback={<div className="container py-5 text-center">Loading...</div>}
    >
      <ShopContent forceList={true} />
    </Suspense>
  );
}
