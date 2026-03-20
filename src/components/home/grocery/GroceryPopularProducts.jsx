"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

// Đúng theo web mẫu - "Most popular products"
const POPULAR = [
  {
    id: "p1",
    title: "Organic Tomato",
    price: 2,
    oldPrice: 3,
    img: "/images/10.jpg",
    img2: "/images/11.jpg",
    cat: "Vegetables",
    unit: "500g",
    rating: 4,
    badge: "New",
  },
  {
    id: "p2",
    title: "Green Leaves Coriander",
    price: 10,
    oldPrice: 12,
    img: "/images/12.jpg",
    img2: "/images/13.jpg",
    cat: "Vegetables",
    unit: "100g",
    rating: 3,
    badge: null,
  },
  {
    id: "p3",
    title: "Fresh Raspberry",
    price: 22,
    oldPrice: null,
    img: "/images/24.jpg",
    img2: "/images/25.jpg",
    cat: "Fruit",
    unit: "1kg",
    rating: 5,
    badge: "Hot",
    stock: "5kg left",
  },
  {
    id: "p4",
    title: "Organic Okra",
    price: 25,
    oldPrice: 30,
    img: "/images/26.jpg",
    img2: "/images/27.jpg",
    cat: "Vegetable",
    unit: "2kg",
    rating: 4,
    badge: "New",
  },
  {
    id: "p5",
    title: "Butternut Squash Pumpkin",
    price: 11,
    oldPrice: 12,
    img: "/images/28.jpg",
    img2: "/images/29.jpg",
    cat: "Vegetables",
    unit: "2kg",
    rating: 3,
    badge: "sale",
  },
  {
    id: "p6",
    title: "Fresh Pineapple",
    price: 5,
    oldPrice: null,
    img: "/images/14.jpg",
    img2: "/images/15.jpg",
    cat: "Fruit",
    unit: "1kg",
    rating: 2,
    badge: null,
    stock: "2kg left",
  },
  {
    id: "p7",
    title: "Fresh Passion Fruit",
    price: 25,
    oldPrice: 30,
    img: "/images/16.jpg",
    img2: "/images/17.jpg",
    cat: "Fruits",
    unit: "2kg",
    rating: 5,
    badge: null,
  },
  {
    id: "p8",
    title: "Organic Spinach Leaves",
    price: 9,
    oldPrice: 15,
    img: "/images/18.jpg",
    img2: "/images/19.jpg",
    cat: "Vegetables",
    unit: "1kg",
    rating: 5,
    badge: null,
  },
];

// Đúng từ JS gốc: 0→1, 481→2, 768→3, 1200→4, 1400→5 | nav:true
const BP = {
  0: { slidesPerView: 1, spaceBetween: 24 },
  481: { slidesPerView: 2, spaceBetween: 24 },
  768: { slidesPerView: 3, spaceBetween: 24 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
  1400: { slidesPerView: 5, spaceBetween: 24 },
};

function Stars({ n }) {
  return (
    <span className="sp-pro-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`ri-star-fill${i >= n ? " grey" : ""}`}></i>
      ))}
    </span>
  );
}

function ProductCard({ p }) {
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
    <div className="sp-product-box">
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
            <div className="sp-price">
              <div className="inner-price">
                <span className="new-price">${p.price}</span>
                {p.oldPrice && <span className="old-price">${p.oldPrice}</span>}
              </div>
              <span className="last-items">{p.stock || p.unit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GroceryPopularProducts() {
  return (
    <section
      className="sp-popular-products padding-tb-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="section-detail centerd">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Best Products
              </p>
              <h2 data-cursor="big">Most popular products</h2>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            navigation={{ nextEl: ".pop-nav-next", prevEl: ".pop-nav-prev" }}
            breakpoints={BP}
            className="sp-popular-slider"
          >
            {POPULAR.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard p={p} />
              </SwiperSlide>
            ))}
            <div className="owl-nav">
              <button type="button" className="owl-prev pop-nav-prev"></button>
              <button type="button" className="owl-next pop-nav-next"></button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
