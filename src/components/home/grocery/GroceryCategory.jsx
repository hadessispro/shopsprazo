"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const CATEGORIES = [
  { id: 1, name: "Vegetables", image: "/fonts/1.svg" },
  { id: 2, name: "Fresh Fruits", image: "/fonts/2.svg" },
  { id: 3, name: "Milk & Eggs", image: "/fonts/3.svg" },
  { id: 4, name: "Bakery", image: "/fonts/4.svg" },
  { id: 5, name: "House Hold", image: "/fonts/5.svg" },
  { id: 6, name: "Dry Fruits", image: "/fonts/6.svg" },
  { id: 7, name: "Drinks", image: "/fonts/7.svg" },
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
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          loop={true}
          loopedSlides={7}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          navigation
          breakpoints={{
            0: { slidesPerView: 2 },
            420: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="sp-category-slider"
        >
          {/* Duplicate 3x để loop không bị lỗi với slidesPerView=6 */}
          {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, idx) => (
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
