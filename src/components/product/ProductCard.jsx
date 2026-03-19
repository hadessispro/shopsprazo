"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product, variant = "grid" }) {
    const { addItem } = useCart();
    const { addItem: addWishlistItem, removeItem: removeWishlistItem, isInWishlist } = useWishlist();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();

        if (isInWishlist(product.id)) {
            removeWishlistItem(product.id);
            return;
        }

        addWishlistItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
        });
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={`ri-star-fill ${i >= rating ? "grey" : ""}`}></i>
        ));
    };

    return (
        <div className="sp-product-box-2">
            <div className="sp-product-card">
                <div className="sp-pro-box-2">
                    <div className="sp-pro-img">
                        {product.badge && (
                            <span className="flags">
                                <span>{product.badge}</span>
                            </span>
                        )}
                        <a href="#!">
                            <div className="inner-img">
                                <img className="main-img sp-product-img" src={product.image} alt={product.name} />
                                <img className="hover-img" src={product.hoverImage} alt={product.name} />
                            </div>
                        </a>
                        <ul className="sp-pro-actions">
                            <li className="sp-btn-group">
                                <a href="#!" className="sp-wishlist" title="Wishlist" onClick={handleToggleWishlist}>
                                    <i className={isInWishlist(product.id) ? "ri-heart-fill" : "ri-heart-line"}></i>
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
                                <a href="#!" className="add-to-cart" title="Add To Cart" onClick={handleAddToCart}>
                                    <i className="ri-shopping-bag-4-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sp-pro-details">
                        <div className="sp-pro-subtitle">
                            <Link href="/shop">{product.category}</Link>
                            <span className="sp-pro-rating">
                                {renderStars(product.rating)}
                            </span>
                        </div>
                        <h4 className="sp-pro-title">
                            <Link href={`/product/${product.id}`}>{product.name}</Link>
                        </h4>
                        <div className="sp-price">
                            <div className="inner-price">
                                <span className="new-price">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="old-price">${product.oldPrice}</span>
                                )}
                            </div>
                            {product.sizes && (
                                <span className="last-items">{product.sizes}</span>
                            )}
                        </div>
                        {product.colors && product.colors.length > 0 && (
                            <div className="sp-pro-option">
                                <div className="sp-pro-color">
                                    <ul className="sp-opt-swatch sp-change-img">
                                        {product.colors.map((color, i) => (
                                            <li key={i}>
                                                <a href="#" className="sp-opt-clr-img" data-tooltip="Color">
                                                    <span style={{ backgroundColor: color }}></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
