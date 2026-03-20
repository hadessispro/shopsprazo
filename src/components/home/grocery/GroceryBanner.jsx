"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const banners = [
  { cls: "bnr-1", text: "Get up to 15% off Discounts" },
  { cls: "bnr-2", text: "Get up to 35% off Discounts" },
  { cls: "bnr-3", text: "Get up to 20% off Discounts" },
];

export default function GroceryBanner() {
  return (
    <section className="sp-banner half-bg m-b-30">
      <div className="container">
        <div className="row">
          <div className="sp-banner-list">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {banners.map((b, i) => (
                <SwiperSlide key={i}>
                  <div className={`item bnr ${b.cls}`}>
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
                          <span className="text_bg">{b.text}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* SVG filter for text_bg effect */}
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
