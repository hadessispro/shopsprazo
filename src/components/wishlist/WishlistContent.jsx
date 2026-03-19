"use client";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistContent() {
    const { items, removeItem } = useWishlist();
    const { addItem } = useCart();

    const handleAddToCart = (item) => {
        addItem({ ...item, qty: 1 });
    };

    return (
        <>
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Wishlist Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Wishlist Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-wishlist-list padding-tb-50">
                <div className="container">
                    <div className="sp-wishlist-products mtb-minus-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="row">
                            {items.length === 0 ? (
                                <div className="col-12 text-center py-5">
                                    <i className="ri-heart-line text-muted mb-4" style={{ fontSize: "5rem" }}></i>
                                    <h3 className="mb-3">Your wishlist is currently empty.</h3>
                                    <p className="text-muted mb-4">Add your favorite items to your wishlist to easily find them later.</p>
                                    <Link href="/" className="sp-btn-1">Return To Shop</Link>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 col-xs-6 sp-col-5 sp-product-box pro-gl-content">
                                        <div className="sp-product-card">
                                            <a href="#!" onClick={(e) => { e.preventDefault(); removeItem(item.id); }} className="remove-product">
                                                <i className="ri-close-large-line"></i>
                                            </a>
                                            <div className="sp-pro-box">
                                                <div className="sp-pro-img">
                                                    <Link href={`/product/${item.id}`}>
                                                        <div className="inner-img">
                                                            <img className="main-img sp-product-img" src={item.image || "/images/product-placeholder.jpg"} alt={item.name} />
                                                            <img className="hover-img" src={item.image || "/images/product-placeholder.jpg"} alt={item.name} />
                                                        </div>
                                                    </Link>
                                                    <ul className="sp-pro-actions">
                                                        <li className="sp-btn-group">
                                                            <a href="#!" className="sp-wishlist" title="Wishlist">
                                                                <i className="ri-heart-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li className="sp-btn-group">
                                                            <a href="#!" className="sp-quickview-btn">
                                                                <i className="ri-eye-line"></i>
                                                            </a>
                                                        </li>
                                                        <li className="sp-btn-group">
                                                            <a href="#!" className="sp-compare" title="Compare">
                                                                <i className="ri-repeat-line"></i>
                                                            </a>
                                                        </li>
                                                        <li className="sp-btn-group">
                                                            <a href="#!" onClick={(e) => { e.preventDefault(); handleAddToCart(item); }} className="add-to-cart" title="Add To Cart">
                                                                <i className="ri-shopping-bag-4-line"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="sp-pro-details">
                                                    <div className="sp-pro-subtitle">
                                                        <Link href={`/product/${item.id}`}>{item.category || "Category"}</Link>
                                                        <span className="sp-pro-rating">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill grey"></i>
                                                            <i className="ri-star-fill grey"></i>
                                                        </span>
                                                    </div>
                                                    <h4 className="sp-pro-title">
                                                        <Link href={`/product/${item.id}`}>{item.name}</Link>
                                                    </h4>
                                                    <p className="sp-info">{item.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</p>
                                                    <div className="sp-price">
                                                        <div className="inner-price">
                                                            <span className="new-price">${item.price.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
