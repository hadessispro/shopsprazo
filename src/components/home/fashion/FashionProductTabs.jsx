"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

/* Data extracted from index.html (fashion page) */
const TAB1 = [
  {
    id: "f1",
    title: "smart watches for men",
    price: 259,
    oldPrice: 399,
    img: "/images/83_1.jpg",
    img2: "/images/84.jpg",
    cat: "watches",
    unit: "",
    rating: 3,
    badge: null,
    stock: null,
  },
  {
    id: "f2",
    title: "painting pattern shirt",
    price: 59,
    oldPrice: 65,
    img: "/images/45.jpg",
    img2: "/images/46.jpg",
    cat: "shirt",
    unit: "L, XL",
    rating: 4,
    badge: "sale",
    stock: null,
  },
  {
    id: "f3",
    title: "leather bag for men",
    price: 499,
    oldPrice: 550,
    img: "/images/79.jpg",
    img2: "/images/80.jpg",
    cat: "bag",
    unit: "M, L",
    rating: 5,
    badge: null,
    stock: null,
  },
  {
    id: "f4",
    title: "checks shirt for women",
    price: 80,
    oldPrice: 120,
    img: "/images/58_1.jpg",
    img2: "/images/59.jpg",
    cat: "shirt",
    unit: "M, XL",
    rating: 4,
    badge: "New",
    stock: null,
  },
  {
    id: "f5",
    title: "round neck tshirt for men",
    price: 69,
    oldPrice: 89,
    img: "/images/40.jpg",
    img2: "/images/41.jpg",
    cat: "T-shirt",
    unit: "L, M",
    rating: 3,
    badge: null,
    stock: null,
  },
];

const TAB2 = [
  {
    id: "f6",
    title: "sleeveless dress for women",
    price: 112,
    oldPrice: 130,
    img: "/images/52.jpg",
    img2: "/images/53.jpg",
    cat: "Dress",
    unit: "S, M",
    rating: 4,
    badge: null,
    stock: null,
  },
  {
    id: "f7",
    title: "sandals for women flat",
    price: 25,
    oldPrice: null,
    img: "/images/64.jpg",
    img2: "/images/65.jpg",
    cat: "sandals",
    unit: "8, 9, 10",
    rating: 2,
    badge: "sale",
    stock: "2kg left",
  },
  {
    id: "f8",
    title: "sport shoes for women",
    price: 159,
    oldPrice: 250,
    img: "/images/67.jpg",
    img2: "/images/68.jpg",
    cat: "shoes",
    unit: "9, 10, 11",
    rating: 5,
    badge: null,
    stock: null,
  },
  {
    id: "f9",
    title: "leather purse for women",
    price: 264,
    oldPrice: 289,
    img: "/images/36.jpg",
    img2: "/images/37.jpg",
    cat: "Purses",
    unit: "",
    rating: 4,
    badge: "New",
    stock: null,
  },
  {
    id: "f10",
    title: "synthetic fabric belt",
    price: 35,
    oldPrice: 40,
    img: "/images/76.jpg",
    img2: "/images/76.jpg",
    cat: "belt",
    unit: '30", 32"',
    rating: 3,
    badge: null,
    stock: null,
  },
];

const TAB3 = [
  {
    id: "f11",
    title: "half shirt pattern for men",
    price: 66,
    oldPrice: 99,
    img: "/images/49.jpg",
    img2: "/images/49.jpg",
    cat: "shirt",
    unit: "S, M, L",
    rating: 5,
    badge: null,
    stock: null,
  },
  {
    id: "f12",
    title: "half sleeve t shirt",
    price: 88,
    oldPrice: null,
    img: "/images/42.jpg",
    img2: "/images/43.jpg",
    cat: "T-shirt",
    unit: "S, M, XL",
    rating: 4,
    badge: null,
    stock: "2 left",
  },
  {
    id: "f13",
    title: "Sprazo glasses for men",
    price: 22,
    oldPrice: null,
    img: "/images/85.jpg",
    img2: "/images/86.jpg",
    cat: "glasses",
    unit: "",
    rating: 3,
    badge: null,
    stock: "5kg left",
  },
  {
    id: "f14",
    title: "Sprazo gown for Women",
    price: 356,
    oldPrice: 380,
    img: "/images/87_1.jpg",
    img2: "/images/88_1.jpg",
    cat: "gown",
    unit: "M, L",
    rating: 5,
    badge: "Hot",
    stock: null,
  },
  {
    id: "f15",
    title: "dress for women party wear",
    price: 11,
    oldPrice: 12,
    img: "/images/90_1.jpg",
    img2: "/images/90_1.jpg",
    cat: "dress",
    unit: "S, M, L",
    rating: 3,
    badge: "New",
    stock: null,
  },
];

const TABS = ["New Arrivals", "Best Sellers", "Top Rates"];

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
    <div className="sp-product-box-2">
      <div className="sp-product-card">
        <div className="sp-pro-box-2">
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
                {p.stock && <span className="item-left">{p.stock}</span>}
              </div>
              {p.unit && <span className="last-items">{p.unit}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FashionProductTabs() {
  const [tab, setTab] = useState(0);
  const getList = (i) => {
    if (i === 0) return TAB1;
    if (i === 1) return TAB2;
    return TAB3;
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
