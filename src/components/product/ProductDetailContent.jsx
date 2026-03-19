"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/product/ProductCard";
import ShopSidebar from "@/components/shop/ShopSidebar";

export default function ProductDetailContent({ product, relatedProducts, layout = "left" }) {
    const { addItem, setIsCartOpen } = useCart();
    const { addItem: addWishlistItem, removeItem: removeWishlistItem, isInWishlist } = useWishlist();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState("detail");
    const [showPopup, setShowPopup] = useState(false);

    // Auto-show/hide purchase popup
    useEffect(() => {
        const showTimer = setTimeout(() => setShowPopup(true), 2000);
        const hideTimer = setTimeout(() => setShowPopup(false), 7000);
        const interval = setInterval(() => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
        }, 15000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
            clearInterval(interval);
        };
    }, []);

    // Dynamic data fallback
    const isGrocery = product?.category && ['fruits', 'vegetables', 'grocery', 'bakery'].includes(product.category.toLowerCase());
    const categoryType = isGrocery ? 'grocery' : 'fashion';
    const isFashion = !isGrocery;

    const productImages = product?.images && product.images.length > 0
        ? product.images
        : [product?.image, product?.hoverImage, product?.image, product?.hoverImage].filter(Boolean);

    const handleAddToCart = () => {
        addItem({
            id: product?.id,
            name: product?.name,
            price: product?.price,
            image: productImages[0],
        }, qty);
        setIsCartOpen(true);
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();

        if (isInWishlist(product?.id)) {
            removeWishlistItem(product?.id);
            return;
        }

        addWishlistItem({
            id: product?.id,
            name: product?.name,
            price: product?.price,
            image: productImages[0],
            category: product?.category,
        });
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={`ri-star-fill ${i >= rating ? "grey" : ""}`}></i>
        ));
    };

    return (
        <>
            <style jsx global>{`
                .single-nav-thumb .swiper-slide-thumb-active img {
                    border: 1px solid #79a206 !important;
                    border-radius: 10px;
                }
            `}</style>

            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Product Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Product Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Single Product Section */}
            <section className="sp-single-product padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className={`sp-product-rightside ${layout === 'left' ? 'col-xl-9 col-lg-8 order-lg-last col-md-12 order-md-first margin-b-30' : (layout === 'right' ? 'col-xl-9 col-lg-8 col-md-12 margin-b-30' : 'col-12')}`}>
                            {/* Single product content Start */}
                            <div className="single-pro-block">
                                <div className="single-pro-inner">
                                    <div className="row">
                                        <div className="single-pro-img">
                                            <div className="single-product-scroll">
                                                <div className="single-product-cover">
                                                    <Swiper
                                                        spaceBetween={10}
                                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                        modules={[Thumbs, FreeMode]}
                                                        className="single-slide"
                                                    >
                                                        {productImages.map((img, i) => (
                                                            <SwiperSlide key={i} className="sp-single-slide zoom-image-hover">
                                                                <img className="img-responsive" src={img} alt={`product-img-${i}`} />
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                                <div className="single-nav-thumb">
                                                    <Swiper
                                                        onSwiper={setThumbsSwiper}
                                                        spaceBetween={10}
                                                        slidesPerView={4}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        modules={[FreeMode, Thumbs]}
                                                    >
                                                        {productImages.map((img, i) => (
                                                            <SwiperSlide key={i} className="sp-single-slide">
                                                                <img className="img-responsive" src={img} alt={`thumb-${i}`} />
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-pro-desc m-t-1199">
                                            <div className="single-pro-content">
                                                <h5 className="sp-single-title">{product?.name || "Premium Quality Product"}</h5>

                                                <div className="sp-single-rating-wrap">
                                                    <div className="sp-single-rating">
                                                        {renderStars(product?.rating || 4)}
                                                    </div>
                                                    <span className="sp-read-review">
                                                        &nbsp;|&nbsp;&nbsp;<a href="#sp-spt-nav-review">578 Ratings</a>
                                                    </span>
                                                </div>

                                                <div className="sp-single-price-stoke">
                                                    <div className="sp-single-price">
                                                        <div className="final-price">${product?.price ? product.price.toFixed(2) : "150.00"}<span className="price-des">{product?.badge || "-50%"}</span></div>
                                                        <div className="mrp">M.R.P. : <span style={{ textDecoration: 'line-through' }}>${product?.oldPrice ? product.oldPrice.toFixed(2) : "299.00"}</span></div>
                                                    </div>
                                                    <div className="sp-single-stoke">
                                                        <span className="sp-single-sku">SKU#: {product?.sku || "SP5874"}</span>
                                                        <span className="sp-single-ps-title">IN STOCK</span>
                                                    </div>
                                                </div>

                                                {isGrocery && (
                                                    <div className="sp-timer m-b-24">
                                                        <div className="timer dealend-timer" data-date="September 30, 2026 19:15:10 PDT">
                                                            <div className="deal-timer">
                                                                <div className="time-block"><span className="time">196</span><span className="text">Days</span></div>
                                                                <div className="time-block"><span className="time">13</span><span className="text">Hours</span></div>
                                                                <div className="time-block"><span className="time">22</span><span className="text">Minute</span></div>
                                                                <div className="time-block"><span className="time">29</span><span className="text">Second</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="sp-single-desc">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                                    text ever since the 1990.
                                                </div>

                                                {isGrocery && (
                                                    <div className="sp-single-list">
                                                        <ul>
                                                            <li><strong>Closure :</strong> Fresh</li>
                                                            <li><strong>Sole :</strong> Organic</li>
                                                            <li><strong>Width :</strong> Medium</li>
                                                            <li><strong>Outer Material :</strong> A-Grade Standard Quality</li>
                                                        </ul>
                                                    </div>
                                                )}

                                                {isGrocery ? (
                                                    <div className="sp-pro-variation">
                                                        <div className="sp-pro-variation-inner sp-pro-variation-size">
                                                            <span>Weight</span>
                                                            <div className="sp-pro-variation-content">
                                                                <ul>
                                                                    <li className="active"><span>250g</span></li>
                                                                    <li><span>500g</span></li>
                                                                    <li><span>1kg</span></li>
                                                                    <li><span>2kg</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="sp-pro-variation">
                                                        <div className="sp-pro-variations">
                                                            <div className="sp-pro-variation-block m-b-15">
                                                                <span style={{ fontWeight: '700', color: '#777', width: '70px', display: 'inline-block' }}>Size:</span>
                                                                <ul className="sp-size-list" style={{ display: 'inline-flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                                                                    {(product?.sizes || "M, L, XL").split(",").map((size, idx) => (
                                                                        <li key={idx}><a href="#!" className={idx === 0 ? "active" : ""} style={{ border: '1px solid #ddd', padding: '2px 10px', borderRadius: '4px', color: '#777', display: 'inline-block' }}>{size.trim()}</a></li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            {product?.colors && (
                                                                <div className="sp-pro-variation-block">
                                                                    <span style={{ fontWeight: '700', color: '#777', width: '70px', display: 'inline-block' }}>Color:</span>
                                                                    <ul className="sp-opt-swatch" style={{ display: 'inline-flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                                                                        {product.colors.map((color, i) => (
                                                                            <li key={i}>
                                                                                <a href="#!" className="sp-opt-clr-img" style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: color }}></a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="sp-single-qty">
                                                    <div className="qty-plus-minus">
                                                        <div className="dec sp-qtybtn" onClick={() => setQty(Math.max(1, qty - 1))}>-</div>
                                                        <input className="qty-input" type="text" name="ms_qtybtn" value={qty} readOnly />
                                                        <div className="inc sp-qtybtn" onClick={() => setQty(qty + 1)}>+</div>
                                                    </div>
                                                    <div className="sp-single-cart">
                                                        <a href="#!" className="btn btn-primary sp-btn-1" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                                                                <g stroke="#2a353d" strokeWidth="1.5">
                                                                    <path d="m3.06164 15.1933.36524-2.0714c.43168-2.4483.64752-3.67238 1.50226-4.39714.85475-.72476 2.08257-.72476 4.5382-.72476h5.06536c2.4556 0 3.6834 0 4.5382.72476.8547.72476 1.0705 1.94884 1.5022 4.39714l.3653 2.0714c.5973 3.3878.896 5.0817-.0237 6.1942s-2.6188 1.1125-6.0168 1.1125h-5.7958c-3.39804 0-5.09706 0-6.01677-1.1125s-.62103-2.8064-.02369-6.1942z"></path>
                                                                    <path d="m7.5 8 .16782-2.01382c.18776-2.25312 2.07125-3.98618 4.33218-3.98618 2.2609 0 4.1444 1.73306 4.3322 3.98618l.1678 2.01382"></path>
                                                                    <path d="m15 11c-.13 1.4131-1.4343 2.5-3 2.5s-2.86998-1.0869-3-2.5" strokeLinecap="round"></path>
                                                                </g>
                                                            </svg>
                                                            Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="sp-single-wishlist">
                                                        <a href="#!" className="sp-btn-group wishlist" title="Wishlist" onClick={handleToggleWishlist}>
                                                            <i className={isInWishlist(product?.id) ? "ri-heart-fill" : "ri-heart-line"}></i>
                                                        </a>
                                                    </div>
                                                    <div className="sp-single-quickview">
                                                        <a href="#!" className="sp-btn-group" title="Quickview">
                                                            <i className="ri-eye-line"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add More and get discount content Start */}
                            {isGrocery && (
                                <div className="single-add-more m-t-30">
                                    <div className="sp-add-card">
                                        <div className="add-more-item sp-active">
                                            <a href="#!" className="add">+</a>
                                            <div className="add-more-img">
                                                <img src="/images/16.jpg" alt="product" />
                                            </div>
                                            <div className="add-more-info">
                                                <h5>Honey Spiced Nuts</h5>
                                                <span className="sp-pro-rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                </span>
                                                <span className="sp-price">
                                                    <span className="new-price">$32.00</span>
                                                    <span className="old-price">$45.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sp-add-card">
                                        <div className="add-more-item sp-active">
                                            <a href="#!" className="add">+</a>
                                            <div className="add-more-img">
                                                <img src="/images/17.jpg" alt="product" />
                                            </div>
                                            <div className="add-more-info">
                                                <h5>Dates Value Pouch</h5>
                                                <span className="sp-pro-rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                </span>
                                                <span className="sp-price">
                                                    <span className="new-price">$56.00</span>
                                                    <span className="old-price">$60.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sp-add-card">
                                        <div className="add-more-item">
                                            <a href="#!" className="add">+</a>
                                            <div className="add-more-img">
                                                <img src="/images/18.jpg" alt="product" />
                                            </div>
                                            <div className="add-more-info">
                                                <h5>Graps Mix Snack</h5>
                                                <span className="sp-pro-rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </span>
                                                <span className="sp-price">
                                                    <span className="new-price">$28.00</span>
                                                    <span className="old-price">$35.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sp-add-card">
                                        <div className="add-more-item">
                                            <a href="#!" className="add">+</a>
                                            <div className="add-more-img">
                                                <img src="/images/19.jpg" alt="product" />
                                            </div>
                                            <div className="add-more-info">
                                                <h5>Roasted Almonds Pack</h5>
                                                <span className="sp-pro-rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                    <i className="ri-star-fill grey"></i>
                                                </span>
                                                <span className="sp-price">
                                                    <span className="new-price">$16.00</span>
                                                    <span className="old-price">$23.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Single product tab start */}
                            <div className="sp-single-pro-tab m-t-30">
                                <div className="sp-single-pro-tab-wrapper">
                                    <div className="sp-single-pro-tab-nav">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <button className={`nav-link ${activeTab === 'detail' ? 'active' : ''}`} onClick={() => setActiveTab('detail')}>Detail</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className={`nav-link ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>Specifications</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className={`nav-link ${activeTab === 'vendor' ? 'active' : ''}`} onClick={() => setActiveTab('vendor')}>Vendor</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content sp-single-pro-tab-content">
                                        {activeTab === 'detail' && (
                                            <div className="tab-pane fade show active">
                                                <div className="sp-single-pro-tab-desc">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                                                        1500s.</p>
                                                    <ul>
                                                        <li>Any Product types that You want - Simple, Configurable</li>
                                                        <li>Downloadable/Digital Products, Virtual Products</li>
                                                        <li>Inventory Management with Backordered items</li>
                                                        <li>Flatlock seams throughout.</li>
                                                    </ul>
                                                    <p>There are many variations of passages of Lorem Ipsum available...</p>
                                                    <h3>Delivery</h3>
                                                    <p>There are many variations of passages of Lorem Ipsum available...</p>
                                                    <h3>Warnings</h3>
                                                    <ul>
                                                        <li>The majority have suffered alteration in some form, by injected humour</li>
                                                        <li>Downloadable/Digital Products, Virtual Products have not selling rights</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'info' && (
                                            <div className="tab-pane fade show active">
                                                <div className="sp-single-pro-tab-moreinfo">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <ul>
                                                        <li><span>Model</span> SKU140</li>
                                                        <li><span>Weight</span> 500 g</li>
                                                        <li><span>Dimensions</span> 35 × 30 × 7 cm</li>
                                                        <li><span>Color</span> Black, Pink, Red, White</li>
                                                        <li><span>Size</span> 10 X 20</li>
                                                    </ul>
                                                    <h3 className="m-t-24">Additional Info</h3>
                                                    <div className="sp-table">
                                                        <table className="table-additional">
                                                            <tbody>
                                                                <tr><th>Ingredient Type</th><td>Source of Protein</td></tr>
                                                                <tr><th>Brand</th><td>HOMICOR</td></tr>
                                                                <tr><th>Package Information</th><td>Pouch</td></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'vendor' && (
                                            <div className="tab-pane fade show active">
                                                <div className="sp-single-pro-tab-moreinfo">
                                                    <div className="sp-product-vendor">
                                                        <div className="sp-vendor-info">
                                                            <span><img src="/images/3_2.jpg" alt="vendor" /></span>
                                                            <div>
                                                                <h5>Ocean Crate</h5>
                                                                <p>Products : 358</p>
                                                                <p>Sales : 5587</p>
                                                            </div>
                                                        </div>
                                                        <div className="sp-detail">
                                                            <ul>
                                                                <li><span>Phone No. :</span> +00 987654321</li>
                                                                <li><span>Email. :</span> Example@gmail.com</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'reviews' && (
                                            <div className="tab-pane fade show active">
                                                <div className="row">
                                                    <div className="sp-t-review-wrapper">
                                                        <div className="sp-t-review-item">
                                                            <div className="sp-t-review-avtar">
                                                                <img src="/images/1_4.jpg" alt="user" />
                                                            </div>
                                                            <div className="sp-t-review-content">
                                                                <div className="sp-t-review-top">
                                                                    <div className="sp-t-review-name">Mariya Lykra</div>
                                                                    <div className="sp-t-review-rating">
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill"></i>
                                                                        <i className="ri-star-fill grey"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="sp-t-review-bottom">
                                                                    <p>Lorem Ipsum is simply dummy text.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        {layout === "left" && (
                            <div className="sp-shop-sidebar col-xl-3 col-lg-4 order-lg-first col-md-12 order-md-last m-t-991">
                                <ShopSidebar categoryType={categoryType} />
                            </div>
                        )}
                        {layout === "right" && (
                            <div className="sp-shop-sidebar col-xl-3 col-lg-4 col-md-12 m-t-991">
                                <ShopSidebar categoryType={categoryType} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="sp-product-popular sp-products padding-tb-50">
                <div className="container">
                    <div className="row">
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
                            {relatedProducts?.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <ProductCard product={p} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Recent Purchase Popup */}
            <div
                className="sp-recent"
                style={{
                    display: showPopup ? "flex" : "none",
                    transition: "all 0.4s ease",
                }}
            >
                <img src="/images/24_1.jpg" alt="payment image" />
                <div className="detail">
                    <p className="bought">Someone in new just bought</p>
                    <h6>Fresh Raspberry</h6>
                    <p>05 Minutes ago</p>
                </div>
                <a href="#!" className="icon-btn recent-close" onClick={(e) => { e.preventDefault(); setShowPopup(false); }}>×</a>
            </div>
        </>
    );
}
