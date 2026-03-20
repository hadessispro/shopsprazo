"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const POPULAR = [
  {
    id: "fp1",
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
  {
    id: "fp2",
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
    id: "fp3",
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
    id: "fp4",
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
    id: "fp5",
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
    id: "fp6",
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
];

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

export default function FashionPopularProducts() {
  const swiperRef = useRef(null);

  return (
    <section
      className="sp-product-popular sp-products padding-tb-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="section-detail">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Best Products
              </p>
              <h2 data-cursor="big">Most popular products</h2>
            </div>
          </div>
        </div>
        <div className="mtb-minus-12" style={{ position: "relative" }}>
          <div className="owl-nav">
            <button
              type="button"
              className="owl-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            ></button>
            <button
              type="button"
              className="owl-next"
              onClick={() => swiperRef.current?.slideNext()}
            ></button>
          </div>
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={false}
            speed={500}
            breakpoints={BP}
            className="sp-popular-slider"
          >
            {POPULAR.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
