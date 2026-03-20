"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

/* Exact data from index_1.html collection section */
const ITEMS = [
  {
    id: 1,
    name: "Organic Vegetables",
    img: "/images/1_9.jpg",
    price: "$24",
    rating: 4,
  },
  {
    id: 2,
    name: "Vegetable pickles",
    img: "/images/2_8.jpg",
    price: "$9",
    rating: 5,
  },
  {
    id: 3,
    name: "fresh Fruits",
    img: "/images/3_6.jpg",
    price: "$25",
    rating: 4,
  },
  {
    id: 4,
    name: "Fresh juice",
    img: "/images/5_3.jpg",
    price: "$5",
    rating: 5,
  },
  {
    id: 5,
    name: "Bakery & Sweets",
    img: "/images/6_3.jpg",
    price: "$10",
    rating: 4,
  },
  {
    id: 6,
    name: "Best Dryfruits",
    img: "/images/7_3.jpg",
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

const BP = {
  0: { slidesPerView: 1, spaceBetween: 24 },
  481: { slidesPerView: 2, spaceBetween: 24 },
  992: { slidesPerView: 3, spaceBetween: 24 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
  1400: { slidesPerView: 5, spaceBetween: 24 },
};

export default function GroceryCollection() {
  return (
    <section
      className="sp-collection padding-tb-100 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="sp-icon-set">
        <img className="icon-1" src="/fonts/1_1.svg" alt="icons" />
        <img className="icon-2" src="/fonts/2_1.svg" alt="icons" />
        <img className="icon-3" src="/fonts/3_1.svg" alt="icons" />
        <img className="icon-4" src="/fonts/4_1.svg" alt="icons" />
        <img className="icon-5" src="/fonts/5_1.svg" alt="icons" />
        <img className="icon-6" src="/fonts/6_1.svg" alt="icons" />
        <img className="icon-7" src="/fonts/7_1.svg" alt="icons" />
        <img className="icon-8" src="/fonts/8.svg" alt="icons" />
        <img className="icon-9" src="/fonts/9.svg" alt="icons" />
        <img className="icon-10" src="/fonts/10.svg" alt="icons" />
        <img className="icon-11" src="/fonts/11.svg" alt="icons" />
        <img className="icon-12" src="/fonts/12.svg" alt="icons" />
        <img className="icon-13" src="/fonts/13.svg" alt="icons" />
      </div>
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
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          breakpoints={BP}
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
