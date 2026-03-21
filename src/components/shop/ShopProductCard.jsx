"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

function Stars({ n }) {
  return (
    <span className="sp-pro-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`ri-star-fill${i >= n ? " grey" : ""}`}></i>
      ))}
    </span>
  );
}

export default function ShopProductCard({ p }) {
  const { addItem } = useCart();
  const { addItem: wish, removeItem: unwish, items: wl } = useWishlist();
  const wished = wl?.some((w) => w.id === p.id);

  const onCart = (e) => {
    e.preventDefault();
    addItem({ id: p.id, name: p.title, price: p.price, image: p.img });
  };
  const onWish = (e) => {
    e.preventDefault();
    wished
      ? unwish(p.id)
      : wish({ id: p.id, name: p.title, price: p.price, image: p.img });
  };

  return (
    <div className="sp-product-card">
      <div className="sp-pro-box">
        <div className="sp-pro-img">
          {p.badge && (
            <span className="flags">
              <span>{p.badge}</span>
            </span>
          )}
          <Link href={`/product/${p.id}`}>
            <div className="inner-img">
              <img
                className="main-img sp-product-img"
                src={p.img}
                alt={p.title}
              />
              <img className="hover-img" src={p.img2} alt={p.title} />
            </div>
          </Link>
          <ul className="sp-pro-actions">
            <li className="sp-btn-group">
              <a href="#!" className="sp-wishlist" onClick={onWish}>
                <i className={wished ? "ri-heart-fill" : "ri-heart-line"}></i>
              </a>
            </li>
            <li className="sp-btn-group">
              <a href="#!" className="sp-quickview-btn">
                <i className="ri-eye-line"></i>
              </a>
            </li>
            <li className="sp-btn-group">
              <a href="#!" className="sp-compare">
                <i className="ri-repeat-line"></i>
              </a>
            </li>
            <li className="sp-btn-group">
              <a href="#!" className="add-to-cart" onClick={onCart}>
                <i className="ri-shopping-bag-4-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sp-pro-details">
          <div className="sp-pro-subtitle">
            <Link href="/shop">{p.cat}</Link>
            <Stars n={p.rating} />
          </div>
          <h4 className="sp-pro-title">
            <Link href={`/product/${p.id}`}>{p.title}</Link>
          </h4>
          <p className="sp-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries.
          </p>
          <div className="sp-price">
            <div className="inner-price">
              <span className="new-price">${p.price}</span>
              {p.oldPrice && <span className="old-price">${p.oldPrice}</span>}
              {p.stock && <span className="item-left">{p.stock}</span>}
            </div>
            {p.unit && <span className="last-items">{p.unit}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
