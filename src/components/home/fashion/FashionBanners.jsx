"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const banners = [
  { id: 1, cls: "bnr-4", text: "Women's Fashion 15% off" },
  { id: 2, cls: "bnr-5", text: "Men's Fashion 35% off Discounts" },
  { id: 3, cls: "bnr-6", text: "Kid's Fashion 20% off Discounts" },
];

export default function FashionBanners() {
  return (
    <section className="sp-banner-2 half-bg-2 p-t-100 p-b-50 m-t-50">
      <div className="container">
        <div className="row">
          <div className="sp-banner-list">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={false}
              speed={500}
              breakpoints={{
                0: { slidesPerView: 1 },
                481: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {banners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <div className={`item bnr ${banner.cls}`}>
                    <div className="sp-details">
                      <div className="btns">
                        <Link href="/shop" className="btn sp-btn-1">
                          Shop Now
                        </Link>
                        <a href="#!" className="sp-wish">
                          <i className="ri-heart-line"></i>
                        </a>
                      </div>
                      <div className="sp-bnr-text">
                        <h3>
                          <span className="text_bg">{banner.text}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="text_bg">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="text_bg"
                />
                <feComposite in="SourceGraphic" in2="text_bg" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
