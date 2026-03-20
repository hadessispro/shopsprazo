"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const CATEGORIES = [
  { name: "Vegetables", image: "/fonts/1.svg" },
  { name: "Fresh Fruits", image: "/fonts/2.svg" },
  { name: "Milk & Eggs", image: "/fonts/3.svg" },
  { name: "Bakery", image: "/fonts/4.svg" },
  { name: "House Hold", image: "/fonts/5.svg" },
  { name: "Dry Fruits", image: "/fonts/6.svg" },
  { name: "Drinks", image: "/fonts/7.svg" },
  { name: "Vegetables", image: "/fonts/1.svg" },
];

export default function GroceryCategory() {
  return (
    <section
      className="sp-category m-b-50 p-t-50 aos-init"
      id="category"
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
                Categories
              </p>
              <h2 data-cursor="big">Featured Top Categories</h2>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={8}
          loop={false}
          autoplay={false}
          speed={500}
          breakpoints={{
            0: { slidesPerView: 2 },
            421: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 7 },
            1600: { slidesPerView: 8 },
          }}
          className="sp-category-slider"
        >
          {CATEGORIES.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className="sp-category-block">
                <div className="category-detail">
                  <div className="category-img">
                    <img src={cat.image} alt="category" />
                  </div>
                  <div className="category-info">
                    <h5>
                      <Link href="/shop">{cat.name}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
