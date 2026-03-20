"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const ITEMS = [
  {
    id: 1,
    name: "Fashion Collection",
    img: "/images/8_1.jpg",
    price: "$24",
    rating: 4,
  },
  {
    id: 2,
    name: "Glasses Collection",
    img: "/images/9.jpg",
    price: "$9",
    rating: 5,
  },
  {
    id: 3,
    name: "Shoes Collection",
    img: "/images/10.jpg",
    price: "$25",
    rating: 4,
  },
  {
    id: 4,
    name: "Perfume Collection",
    img: "/images/11.jpg",
    price: "$5",
    rating: 5,
  },
  {
    id: 5,
    name: "Watches Collection",
    img: "/images/12.jpg",
    price: "$10",
    rating: 4,
  },
  {
    id: 6,
    name: "Cosmetics Collection",
    img: "/images/13.jpg",
    price: "$95",
    rating: 5,
  },
];

function Stars({ n }) {
  return (
    <span className="sp-pro-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`ri-star-fill${i >= n ? " grey" : ""}`}></i>
      ))}
    </span>
  );
}

export default function FashionCollection() {
  return (
    <section
      className="sp-collection-2 padding-tb-100 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="sp-icon-set"></div>
      <div className="container">
        <div className="row">
          <div className="section-detail centerd">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Browse The Products
              </p>
              <h2 data-cursor="big">Our Features Collection</h2>
            </div>
          </div>
        </div>
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
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
          className="sp-collection-slider"
        >
          {ITEMS.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="sp-collection-block">
                <div className="collection-detail">
                  <div className="collection-img">
                    <img src={c.img} alt="collection" />
                  </div>
                  <div className="collection-info">
                    <h5>
                      <Link href="/shop">{c.name}</Link>
                    </h5>
                    <Stars n={c.rating} />
                    <div className="collection-footer">
                      <div className="price">
                        <h5>Starts From : {c.price}</h5>
                      </div>
                    </div>
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
