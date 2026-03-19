import ProductDetailContent from "@/components/product/ProductDetailContent";
import { products } from "@/data/mockData";

const GROCERY_CATEGORIES = ['fruits', 'vegetables', 'grocery', 'bakery', 'dairy & milk', 'dairy', 'milk'];

function isGroceryProduct(product) {
    return product?.category && GROCERY_CATEGORIES.includes(product.category.toLowerCase());
}

export async function generateMetadata({ params }) {
    const id = (await params).id;
    const product = products.find((p) => p.id === parseInt(id)) || products[0];

    return {
        title: `${product.name} | Sprazo eCommerce`,
        description: `Buy ${product.name} from the ${product.category} category for only $${product.price} at Sprazo.`,
    };
}

export default async function ProductDetailPage({ params, searchParams }) {
    const id = (await params).id;
    const layout = (await searchParams)?.layout || "left";
    const product = products.find((p) => p.id === parseInt(id)) || products[0];

    const currentIsGrocery = isGroceryProduct(product);

    // 1. Ưu tiên: cùng category chính xác
    const sameCat = products.filter(
        (p) => p.id !== product.id && p.category?.toLowerCase() === product.category?.toLowerCase()
    );

    // 2. Tiếp theo: cùng nhóm (grocery hoặc fashion), khác category — KHÔNG bao giờ trộn nhóm
    const sameGroup = products.filter(
        (p) =>
            p.id !== product.id &&
            p.category?.toLowerCase() !== product.category?.toLowerCase() &&
            isGroceryProduct(p) === currentIsGrocery
    );

    // Ghép lại: cùng category trước, rồi cùng nhóm — tối đa 5 sản phẩm
    const relatedProducts = [...sameCat, ...sameGroup].slice(0, 5);

    return <ProductDetailContent product={product} relatedProducts={relatedProducts} layout={layout} />;
}
