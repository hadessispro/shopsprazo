"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GroceryTopVendor() {
  const [activeTab, setActiveTab] = useState("tab_1");

  const swiperBreakpoints = {
    0: { slidesPerView: 1, spaceBetween: 15 },
    421: { slidesPerView: 2, spaceBetween: 15 },
    992: { slidesPerView: 3, spaceBetween: 15 },
    1200: { slidesPerView: 4, spaceBetween: 15 },
    1400: { slidesPerView: 5, spaceBetween: 15 },
  };

  const vendors = [
    {
      id: "tab_1",
      name: "A1 Superstore",
      image: "/images/1_3.jpg",
      items: "Fruits, Snacks, Vegetables",
    },
    {
      id: "tab_2",
      name: "Xcart Store",
      image: "/images/2_3.jpg",
      items: "Bakery, Juice, Pickles",
    },
    {
      id: "tab_3",
      name: "Minia Mart",
      image: "/images/3_2.jpg",
      items: "Drinks, Snacks, Fruits",
    },
    {
      id: "tab_4",
      name: "Sprazo Shop",
      image: "/images/4_2.jpg",
      items: "Dryfruits, Pickles, Snacks",
    },
  ];

  const tab1Products = [
    { name: "Sweet\nPineapple", price: "$56", img: "/images/18_1.jpg" },
    { name: "Juicy\nBlueberry", price: "$19", img: "/images/19_1.jpg" },
    { name: "healthy\nlychee", price: "$25", img: "/images/20_1.jpg" },
    { name: "Fresh\nMango", price: "$99", img: "/images/16_1.jpg" },
    { name: "Fresh\nOrange", price: "$29", img: "/images/17_1.jpg" },
  ];

  const tab2Products = [
    { name: "Organic\nBroccoli", price: "$5", img: "/images/7_4.jpg" },
    { name: "Green\ncapcicum", price: "$29", img: "/images/8_3.jpg" },
    { name: "crunchy\nwafers", price: "$16", img: "/images/9_2.jpg" },
    { name: "Potato\nwafers", price: "$55", img: "/images/10_2.jpg" },
    { name: "cucumber\npickles", price: "$55", img: "/images/11_2.jpg" },
  ];

  const tab3Products = [
    { name: "Fresh\nTomato", price: "$11", img: "/images/6_4.jpg" },
    { name: "crunchy\ndry fruits", price: "$29", img: "/images/12_3.jpg" },
    { name: "Sweet\ncake", price: "$44", img: "/images/13_3.jpg" },
    { name: "Potato\nwafers", price: "$19", img: "/images/14_2.jpg" },
    { name: "healthy\nmushroom", price: "$25", img: "/images/15_2.jpg" },
  ];

  const tab4Products = [
    { name: "Fresh\nApple", price: "$55", img: "/images/1_10.jpg" },
    { name: "Organic\nBanana", price: "$9", img: "/images/2_9.jpg" },
    { name: "Fresh\nOrange", price: "$14", img: "/images/3_7.jpg" },
    { name: "Fresh\nBitter Gourd", price: "$45", img: "/images/4_6.jpg" },
    { name: "organic\nonion", price: "$55", img: "/images/5_4.jpg" },
  ];

  const getTabProducts = (tabId) => {
    switch (tabId) {
      case "tab_1":
        return tab1Products;
      case "tab_2":
        return tab2Products;
      case "tab_3":
        return tab3Products;
      case "tab_4":
        return tab4Products;
      default:
        return tab1Products;
    }
  };

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
              <h2
                data-cursor="big"
                aria-label="Top Vendor"
                style={{ perspective: "500px" }}
              >
                <div
                  className="split-line"
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    Top
                  </div>{" "}
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    Vendor
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div className="sp-vendor-list">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {vendors.map((vendor) => (
              <li className="nav-item" role="presentation" key={vendor.id}>
                <a
                  className={`nav-link ${activeTab === vendor.id ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(vendor.id);
                  }}
                  href={`#${vendor.id}`}
                  role="tab"
                >
                  <img className="nav-img" src={vendor.image} alt="vendor" />
                  <div className="sp-tab">
                    <h4>{vendor.name}</h4>
                    <div className="list">
                      <span>{vendor.items}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {vendors.map((vendor) => (
              <div
                key={`content-${vendor.id}`}
                className={`tab-pane fade ${activeTab === vendor.id ? "show active" : ""}`}
                id={vendor.id}
                role="tabpanel"
              >
                {activeTab === vendor.id && (
                  <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    breakpoints={swiperBreakpoints}
                    className="sp-pro-list"
                  >
                    {getTabProducts(vendor.id).map((product, idx) => (
                      <SwiperSlide key={idx}>
                        <a className="product-box" href="/shop">
                          <img
                            src={product.img}
                            alt="product"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0px)",
                            }}
                          />
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
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            ))}
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
                ></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="text_bg2"
                ></feColorMatrix>
                <feComposite
                  in="SourceGraphic"
                  in2="text_bg2"
                  operator="atop"
                ></feComposite>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
