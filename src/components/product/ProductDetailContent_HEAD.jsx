"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";
import ShopSidebar from "@/components/shop/ShopSidebar";

export default function ProductDetailContent({ product, relatedProducts, layout = "left", galleryView = false }) {
    const { addItem } = useCart();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const productImages = [product.image, product.hoverImage, product.image, product.hoverImage];

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        }, qty);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={`ri-star-fill ${i >= rating ? "grey" : ""}`}></i>
        ));
    };

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Product Detail</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item"><Link href="/shop">Shop</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">{product.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Detail */}
            <section className="sp-single-pro p-tb-50">
                <div className="container">
                    <div className="row">
                        {/* Sidebar (Left) */}
                        {layout === "left" && (
                            <div className="col-lg-3">
                                <ShopSidebar />
                            </div>
                        )}

                        {/* Main Product Area */}
                        <div className={layout === "full" ? "col-12" : "col-lg-9"}>
                            <div className="row">
                                {/* Product Images */}
                                <div className="col-lg-5 col-md-5">
                                    <div className="single-pro-img">
                                        <div className="single-product-scroll">
                                    <Swiper
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[Thumbs, FreeMode]}
                                        className="single-slide"
                                    >
                                        {productImages.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <img className="img-responsive" src={img} alt={`product-img-${i}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Thumbs]}
                                        className="single-nav-thumb"
                                    >
                                        {productImages.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <img src={img} alt={`thumb-${i}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-lg-7 col-md-7">
                            <div className="single-pro-detail">
                                <div className="single-pro-content">
                                    <h5 className="sp-pro-subtitle">
                                        <Link href="/shop">{product.category}</Link>
                                    </h5>
                                    <h2 className="sp-pro-title">{product.name}</h2>
                                    <div className="sp-pro-rating">
                                        {renderStars(product.rating)}
                                        <span className="rating-count">(24 Reviews)</span>
                                    </div>
                                    <div className="sp-price">
                                        <div className="inner-price">
                                            <span className="new-price">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="old-price">${product.oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="sp-pro-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    </p>

                                    {/* Size Selection */}
                                    <div className="sp-pro-variations">
                                        <div className="sp-pro-variation-block">
                                            <h4>Size:</h4>
                                            <ul className="sp-size-list">
                                                {(product.sizes || "M, L, XL").split(", ").map((size) => (
                                                    <li key={size}><a href="#!">{size}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Color Selection */}
                                        {product.colors && (
                                            <div className="sp-pro-variation-block">
                                                <h4>Color:</h4>
                                                <ul className="sp-opt-swatch">
                                                    {product.colors.map((color, i) => (
                                                        <li key={i}>
                                                            <a href="#" className="sp-opt-clr-img">
                                                                <span style={{ backgroundColor: color }}></span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quantity + Add to Cart */}
                                    <div className="sp-pro-qty-actions">
                                        <div className="qty-common">
                                            <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                                            <input className="qty-input" type="text" value={qty} readOnly />
                                            <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
                                        </div>
                                        <button className="sp-btn-1" onClick={handleAddToCart}>
                                            <i className="ri-shopping-bag-line"></i> Add To Cart
                                        </button>
                                        <a href="#!" className="sp-wishlist-btn" title="Wishlist">
                                            <i className="ri-heart-line"></i>
                                        </a>
                                        <a href="#!" className="sp-compare-btn" title="Compare">
                                            <i className="ri-repeat-line"></i>
                                        </a>
                                    </div>

                                    {/* Product Meta */}
                                    <div className="sp-pro-meta">
                                        <ul>
                                            <li><span>SKU:</span> SP-{product.id}001</li>
                                            <li><span>Category:</span> <Link href="/shop">{product.category}</Link></li>
                                            <li><span>Tags:</span> Fashion, Trending, New</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs: Description / Reviews */}
                    <div className="row m-t-50">
                        <div className="col-12">
                            <ul className="nav nav-tabs sp-pro-tab" role="tablist">
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>Description</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === "info" ? "active" : ""}`} onClick={() => setActiveTab("info")}>Additional Information</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeTab === "reviews" ? "active" : ""}`} onClick={() => setActiveTab("reviews")}>Reviews (24)</button>
                                </li>
                            </ul>
                            <div className="tab-content sp-tab-content">
                                {activeTab === "description" && (
                                    <div className="tab-pane fade show active">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                )}
                                {activeTab === "info" && (
                                    <div className="tab-pane fade show active">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr><td>Weight</td><td>0.5 kg</td></tr>
                                                <tr><td>Dimensions</td><td>30 × 20 × 5 cm</td></tr>
                                                <tr><td>Material</td><td>Cotton, Polyester</td></tr>
                                                <tr><td>Color</td><td>Multiple</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                {activeTab === "reviews" && (
                                    <div className="tab-pane fade show active">
                                        <div className="sp-review-block">
                                            <div className="sp-review-item">
                                                <div className="sp-review-user">
                                                    <h5>John Doe</h5>
                                                    <span className="sp-review-date">January 15, 2024</span>
                                                    <div className="sp-pro-rating">{renderStars(5)}</div>
                                                </div>
                                                <p>Excellent product! Great quality and fast delivery. Highly recommended.</p>
                                            </div>
                                            <div className="sp-review-item">
                                                <div className="sp-review-user">
                                                    <h5>Jane Smith</h5>
                                                    <span className="sp-review-date">February 20, 2024</span>
                                                    <div className="sp-pro-rating">{renderStars(4)}</div>
                                                </div>
                                                <p>Good product, slightly different from the picture but overall satisfied.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="row m-t-50">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <h2 data-cursor="big">Related Products</h2>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={24}
                            loop={true}
                            speed={500}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                420: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                                1400: { slidesPerView: 5 },
                            }}
                        >
                            {relatedProducts.map((p) => (
                                <SwiperSlide key={p.id}>
                                            <ProductCard product={p} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Sidebar (Right) */}
                        {layout === "right" && (
                            <div className="col-lg-3">
                                <ShopSidebar />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
