"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const PRODUCTS = [
  {
    id: "g1",
    title: "Fresh Strawberry",
    price: 45,
    oldPrice: 58,
    img: "/images/1.jpg",
    img2: "/images/2.jpg",
    cat: "Fruits",
    unit: "500g",
    rating: 3,
    badge: "New",
  },
  {
    id: "g2",
    title: "Fresh Cauliflower",
    price: 10,
    oldPrice: 12,
    img: "/images/3.jpg",
    img2: "/images/4.jpg",
    cat: "Vegetables",
    unit: "1kg",
    rating: 4,
    badge: null,
  },
  {
    id: "g3",
    title: "Walnut Dry Fruit",
    price: 5,
    oldPrice: null,
    img: "/images/6.jpg",
    img2: "/images/5.jpg",
    cat: "Dry Fruit",
    unit: "1kg",
    rating: 2,
    badge: null,
    stock: "2kg left",
  },
  {
    id: "g4",
    title: "Vegetable Pickles",
    price: 25,
    oldPrice: 30,
    img: "/images/9.jpg",
    img2: "/images/9.jpg",
    cat: "Pickles",
    unit: "2kg",
    rating: 5,
    badge: "sale",
  },
  {
    id: "g5",
    title: "Fresh Apples",
    price: 10,
    oldPrice: 12,
    img: "/images/7.jpg",
    img2: "/images/8.jpg",
    cat: "Fruits",
    unit: "1kg",
    rating: 5,
    badge: null,
  },
  {
    id: "g6",
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
    id: "g7",
    title: "Green Leaves Coriander",
    price: 10,
    oldPrice: 12,
    img: "/images/12.jpg",
    img2: "/images/13.jpg",
    cat: "Vegetables",
    unit: "100g",
    rating: 3,
    badge: "sale",
  },
  {
    id: "g8",
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
    id: "g9",
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
    id: "g10",
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
  {
    id: "g11",
    title: "Fresh Mangosteen",
    price: 15,
    oldPrice: 18,
    img: "/images/21.jpg",
    img2: "/images/20.jpg",
    cat: "Fruits",
    unit: "250g",
    rating: 4,
    badge: null,
  },
  {
    id: "g12",
    title: "Red Chili Powder",
    price: 25,
    oldPrice: 30,
    img: "/images/22.jpg",
    img2: "/images/23.jpg",
    cat: "Spices",
    unit: "500g",
    rating: 4,
    badge: null,
  },
  {
    id: "g13",
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
    id: "g14",
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
    id: "g15",
    title: "Butternut Squash Pumpkin",
    price: 11,
    oldPrice: 12,
    img: "/images/28.jpg",
    img2: "/images/29.jpg",
    cat: "Vegetables",
    unit: "2kg",
    rating: 3,
    badge: null,
  },
];

const TABS = ["New Arrivals", "Best Sellers", "Top Rates"];

// Đúng theo main_original.js: 0→1, 481→2, 768→3, 1200→4, 1400→5
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

export default function GroceryProductTabs() {
  const [tab, setTab] = useState(0);
  const getList = (i) => {
    if (i === 1) return [...PRODUCTS].sort((a, b) => b.rating - a.rating);
    if (i === 2)
      return [...PRODUCTS].sort(
        (a, b) => (b.oldPrice || 0) - b.price - ((a.oldPrice || 0) - a.price),
      );
    return PRODUCTS;
  };
  return (
    <section
      className="sp-product-tab sp-products padding-tb-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="section-detail detail-two">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Feature Products
              </p>
              <h2 data-cursor="big">Our Features Collection</h2>
            </div>
            <div className="sp-tab">
              <ul className="sp-pro-tab-nav nav" role="tablist">
                {TABS.map((t, i) => (
                  <li key={i} className="nav-item" role="presentation">
                    <a
                      className={`nav-link${tab === i ? " active" : ""}`}
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(i);
                      }}
                      role="tab"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mtb-minus-12">
          <div className="tab-content">
            {TABS.map((_, i) => (
              <div
                key={i}
                className={`tab-pane fade${tab === i ? " show active" : ""}`}
                role="tabpanel"
              >
                {tab === i && (
                  <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={500}
                    breakpoints={BP}
                    className="sp-product-slider"
                  >
                    {getList(i).map((p) => (
                      <SwiperSlide key={p.id}>
                        <ProductCard p={p} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
