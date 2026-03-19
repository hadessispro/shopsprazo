"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import ShopSidebar from "@/components/shop/ShopSidebar";
import CustomSelect from "@/components/ui/CustomSelect";
import { products } from "@/data/mockData";
import Link from "next/link";

export default function ShopContent() {
    const searchParams = useSearchParams();
    const layout = searchParams.get("layout") || "left-3";
    const [viewMode, setViewMode] = useState("grid"); // grid | list
    const [sortBy, setSortBy] = useState("default");

    // Determine sidebar position and column count from layout param
    const hasSidebar = !layout.startsWith("full");
    const sidebarPosition = layout.startsWith("right") ? "right" : "left";
    const colCount = parseInt(layout.split("-").pop()) || 4;

    // Grid class based on column count
    const getColClass = () => {
        switch (colCount) {
            case 3: return "col-lg-4 col-md-6 col-sm-6";
            case 5: return "col-xl-2-5 col-lg-3 col-md-4 col-sm-6";
            case 6: return "col-xl-2 col-lg-3 col-md-4 col-sm-6";
            default: return "col-lg-3 col-md-4 col-sm-6";
        }
    };

    const sortedProducts = [...products, ...products].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    const sidebar = hasSidebar ? (
        <div className="col-lg-3">
            <ShopSidebar />
        </div>
    ) : null;

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Shop</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-shop p-tb-50">
                <div className="container">
                    <div className="row">
                        {/* Left Sidebar */}
                        {hasSidebar && sidebarPosition === "left" && sidebar}

                        {/* Products Grid */}
                        <div className={hasSidebar ? "col-lg-9" : "col-12"}>
                            {/* Toolbar */}
                            <div className="sp-shop-toolbar">
                                <div className="sp-gl-btn">
                                    <button
                                        className={`btn-grid ${viewMode === "grid" ? "active" : ""}`}
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <i className="ri-grid-fill"></i>
                                    </button>
                                    <button
                                        className={`btn-list ${viewMode === "list" ? "active" : ""}`}
                                        onClick={() => setViewMode("list")}
                                    >
                                        <i className="ri-list-check"></i>
                                    </button>
                                </div>
                                <div className="sp-sort-by">
                                    <CustomSelect
                                        options={[
                                            { value: "default", label: "Default Sorting" },
                                            { value: "price-low", label: "Price: Low to High" },
                                            { value: "price-high", label: "Price: High to Low" },
                                            { value: "name", label: "Name: A to Z" }
                                        ]}
                                        value={sortBy}
                                        onChange={setSortBy}
                                        className="form-select hide-select"
                                    />
                                </div>
                            </div>

                            {/* Products */}
                            <div className="row">
                                {sortedProducts.map((product, i) => (
                                    <div className={getColClass()} key={`${product.id}-${i}`}>
                                        <ProductCard product={product} variant={viewMode} />
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="sp-pagination">
                                <ul>
                                    <li><a href="#" className="active">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i className="ri-arrow-right-s-line"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        {hasSidebar && sidebarPosition === "right" && sidebar}
                    </div>
                </div>
            </section>
        </>
    );
}
