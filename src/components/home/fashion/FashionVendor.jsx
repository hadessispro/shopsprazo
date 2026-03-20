"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const vendors = [
  {
    id: "tab_1",
    name: "A1 Superstore",
    image: "/images/1_3.jpg",
    desc: "Trending fashion store with new clothes explore.",
  },
  {
    id: "tab_2",
    name: "Xcart Store",
    image: "/images/2_3.jpg",
    desc: "Explore more perfume fragnance with your style.",
  },
  {
    id: "tab_3",
    name: "Minia Mart",
    image: "/images/3_2.jpg",
    desc: "Get your stylish shoes with the minia mart store.",
  },
  {
    id: "tab_4",
    name: "Sprazo Shop",
    image: "/images/4_2.jpg",
    desc: "Make your style with Sprazo glasses store at $99.",
  },
];

const allProducts = {
  tab_1: [
    { name: "Women's\nJacket", price: "$99", img: "/images/21.jpg" },
    { name: "leather\npurchase", price: "$29", img: "/images/22.jpg" },
    { name: "Cowboy\nHats", price: "$56", img: "/images/23.jpg" },
    { name: "Long\nShoes", price: "$19", img: "/images/24.jpg" },
    { name: "leather\nbelts", price: "$25", img: "/images/25.jpg" },
  ],
  tab_2: [
    { name: "Best\nPerfume", price: "$5", img: "/images/26.jpg" },
    { name: "Organic\nCosmetics", price: "$29", img: "/images/27.jpg" },
    { name: "Makeup\nKit", price: "$16", img: "/images/28.jpg" },
    { name: "Best\nClothes", price: "$55", img: "/images/29.jpg" },
    { name: "Stylish\nShoes", price: "$55", img: "/images/30.jpg" },
  ],
  tab_3: [
    { name: "high\nheels", price: "$11", img: "/images/31.jpg" },
    { name: "Girls\nsandals", price: "$29", img: "/images/32.jpg" },
    { name: "Febric\nBags", price: "$44", img: "/images/33.jpg" },
    { name: "antique\nwatches", price: "$19", img: "/images/34.jpg" },
    { name: "wall\nclock", price: "$25", img: "/images/35.jpg" },
  ],
  tab_4: [
    { name: "Best\nClothes", price: "$55", img: "/images/36_1.jpg" },
    { name: "Womens\nShoes", price: "$9", img: "/images/37_1.jpg" },
    { name: "Womens\nGown", price: "$14", img: "/images/38.jpg" },
    { name: "Classic\nHats", price: "$45", img: "/images/39.jpg" },
    { name: "Modern\nClothes", price: "$55", img: "/images/40_1.jpg" },
  ],
};

export default function FashionVendor() {
  const [activeTab, setActiveTab] = useState("tab_1");
  const products = allProducts[activeTab] || allProducts.tab_1;

  return (
    <section
      className="sp-vendor-tab padding-t-100 padding-b-50 aos-init"
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
                Browse The Collection
              </p>
              <h2 data-cursor="big">Top Vendor</h2>
            </div>
          </div>
        </div>
        <div className="sp-vendor-list">
          <ul className="nav nav-tabs" role="tablist">
            {vendors.map((v) => (
              <li className="nav-item" role="presentation" key={v.id}>
                <a
                  className={`nav-link ${activeTab === v.id ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(v.id);
                  }}
                  href={`#${v.id}`}
                  role="tab"
                >
                  <img className="nav-img" src={v.image} alt="vendor" />
                  <div className="sp-tab">
                    <h4>{v.name}</h4>
                    <div className="list">
                      <span>{v.desc}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" role="tabpanel">
              <Swiper
                key={activeTab}
                modules={[Autoplay]}
                loop={false}
                autoplay={false}
                speed={500}
                spaceBetween={15}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  421: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                  1400: { slidesPerView: 5 },
                }}
                className="sp-pro-list"
              >
                {products.map((product, idx) => (
                  <SwiperSlide key={`${activeTab}-${idx}`}>
                    <Link className="product-box" href="/shop">
                      <img src={product.img} alt="product" />
                      <div className="sp-detail">
                        <h5 className="price">{product.price}</h5>
                        <h3>
                          <span
                            className="text_bg2"
                            dangerouslySetInnerHTML={{
                              __html: product.name.replace("\n", "<br/>"),
                            }}
                          />
                        </h3>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <svg
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="text_bg2">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="text_bg2"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="text_bg2"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
