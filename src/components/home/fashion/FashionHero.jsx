"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    subtitle: "Top fashion collection for",
    title: "Women's Trend",
    desc: "Expand your business worldwide in just minutes with tailored currencies, languages, and customer experiences designed for every market.",
    image: "/images/1_1.jpg",
  },
  {
    id: 2,
    subtitle: "Best fashion collection for",
    title: "Men's Trend",
    desc: "Expand your business worldwide in just minutes with tailored currencies, languages, and customer experiences designed for every market.",
    image: "/images/2_1.jpg",
  },
];

export default function FashionHero() {
  return (
    <section className="sp-hero-2">
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            pagination={{ clickable: true }}
            className="sp-hero-slide"
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="sp-hero-block">
                  <div className="row">
                    <div className="col-xl-7 col-lg-6">
                      <div className="sp-hero-details sp-animation">
                        <h1 data-cursor="big">
                          <span>{slide.subtitle}</span> <br />
                          {slide.title}
                        </h1>
                        <p>{slide.desc}</p>
                        <div className="sp-btns">
                          <Link href="/shop" className="sp-btn-3">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 m-t-991">
                      <div className="sp-slide-img">
                        <div className="sp-slide-img-box">
                          <div className="shape"></div>
                          <img src={slide.image} alt="hero" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
