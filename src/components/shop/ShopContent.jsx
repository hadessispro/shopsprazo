"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ShopCategorySlider from "@/components/shop/ShopCategorySlider";
import ShopProductCard from "@/components/shop/ShopProductCard";
import { shopProducts, defaultFilterTags } from "@/data/shopData";

const bannerItems = [
  { id: 1, cls: "bnr-1", text: "Get up to 15% off Discounts" },
  { id: 2, cls: "bnr-2", text: "Get up to 35% off Discounts" },
  { id: 3, cls: "bnr-3", text: "Get up to 20% off Discounts" },
];

function ShopBannerSlider() {
  return (
    <section
      className="sp-banner m-b-30 padding-t-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
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
              {bannerItems.map((b) => (
                <SwiperSlide key={b.id}>
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
          <svg
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
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

export default function ShopContent({
  forceBanner = false,
  forceList = false,
}) {
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout") || "left-3";
  const [viewMode, setViewMode] = useState(forceList ? "list" : "grid");
  const [sortBy, setSortBy] = useState("default");
  const [filterTags, setFilterTags] = useState([...defaultFilterTags]);

  /* Detect banner/list from layout param OR from route props */
  const isBanner = forceBanner || layout.startsWith("banner");
  const isList = forceList || layout.startsWith("list");

  /* Parse sidebar position and column count */
  const cleanLayout = layout.replace("banner-", "").replace("list-", "");
  const parts = cleanLayout.split("-");
  const sidebarPosition = parts[0] === "full" ? "none" : parts[0] || "left";
  const hasSidebar = sidebarPosition !== "none" && sidebarPosition !== "full";
  const colCount = parseInt(parts[1]) || (isList ? 1 : 3);

  const getColClass = () => {
    if (isList) return hasSidebar ? "col-12" : "col-lg-6 col-md-6";
    switch (colCount) {
      case 3:
        return hasSidebar
          ? "col-xl-4 col-lg-6 col-sm-6 col-xs-6"
          : "col-xl-4 col-lg-4 col-sm-6";
      case 4:
        return hasSidebar
          ? "col-xl-3 col-lg-4 col-sm-6"
          : "col-xl-3 col-lg-3 col-sm-6";
      case 5:
        return "col-xxl col-xl col-lg-3 col-sm-6";
      case 6:
        return "col-xxl-2 col-xl-2 col-lg-3 col-sm-6";
      default:
        return "col-xl-4 col-lg-6 col-sm-6";
    }
  };

  const sorted = [...shopProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name-az") return a.title.localeCompare(b.title);
    if (sortBy === "name-za") return b.title.localeCompare(a.title);
    return 0;
  });

  const removeTag = (tag) => setFilterTags((t) => t.filter((x) => x !== tag));
  const clearTags = () => setFilterTags([]);

  const isListMode = viewMode === "list" || isList;
  const innerClass = `shop-pro-inner${isListMode ? " list-view" : ""}`;
  const itemClass = `${getColClass()} sp-product-box pro-gl-content${isListMode ? " width-100" : ""}`;

  const sidebar = hasSidebar ? (
    <div
      className={`sp-shop-sidebar col-xl-3 col-lg-4 ${
        sidebarPosition === "left"
          ? "order-lg-first col-md-12 order-md-last"
          : "order-lg-last col-md-12 order-md-first"
      } m-t-991 aos-init`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <ShopSidebar />
    </div>
  ) : null;

  return (
    <>
      {/* Breadcrumb */}
      <section className="sp-breadcrumb-2 margin-b-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="sp-breadcrumb-inner">
                <h2 data-cursor="big" className="sp-breadcrumb-title">
                  Shop Page
                </h2>
                <ul className="sp-breadcrumb-list">
                  <li className="sp-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-fill"></i>
                  </li>
                  <li className="sp-breadcrumb-item active">Shop Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner OR Category slider */}
      {isBanner ? <ShopBannerSlider /> : <ShopCategorySlider />}

      {/* Shop Section */}
      <section className="sp-shop padding-b-50">
        <div className="container">
          <div className="row">
            <div
              className={
                hasSidebar
                  ? `sp-shop-rightside col-xl-9 col-lg-8 ${
                      sidebarPosition === "left"
                        ? "order-lg-last col-md-12 order-md-first"
                        : "order-lg-first col-md-12 order-md-last"
                    } margin-b-30`
                  : "col-12 margin-b-30"
              }
            >
              {/* Toolbar */}
              <div
                className="sp-pro-list-top d-flex aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="col-md-6 sp-grid-list">
                  <div className="sp-gl-btn">
                    <button
                      className={`grid-btn btn-grid${!isListMode ? " active" : ""}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <i className="ri-gallery-view-2"></i>
                    </button>
                    <button
                      className={`grid-btn btn-list${isListMode ? " active" : ""}`}
                      onClick={() => setViewMode("list")}
                    >
                      <i className="ri-list-check-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 sp-sort-select">
                  <div className="sp-select-inner">
                    <select
                      className="form-control"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="default">Sort by</option>
                      <option value="name-az">Name, A to Z</option>
                      <option value="name-za">Name, Z to A</option>
                      <option value="price-low">Price, low to high</option>
                      <option value="price-high">Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Filter Tags */}
              {filterTags.length > 0 && (
                <div
                  className="sp-select-bar aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {filterTags.map((tag, i) => (
                    <span className="sp-select-btn" key={i}>
                      {tag}
                      <a
                        className="sp-select-cancel"
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          removeTag(tag);
                        }}
                      >
                        ×
                      </a>
                    </span>
                  ))}
                  <span className="sp-select-btn sp-select-btn-clear">
                    <a
                      className="sp-select-clear"
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        clearTags();
                      }}
                    >
                      Clear All
                    </a>
                  </span>
                </div>
              )}

              {/* Products */}
              <div className="shop-pro-content">
                <div className={innerClass}>
                  <div
                    className="row mt-minus-12 m-b-12 aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    {sorted.map((p) => (
                      <div className={itemClass} key={p.id}>
                        <ShopProductCard p={p} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div
                className="sp-pro-pagination aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span>Showing 1-12 of 20 items</span>
                <ul className="sp-pro-pagination-inner">
                  <li>
                    <a className="active" href="#!">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#!">2</a>
                  </li>
                  <li>
                    <a href="#!">3</a>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <a href="#!">8</a>
                  </li>
                  <li>
                    <a className="next" href="#!">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {hasSidebar && sidebar}
          </div>
        </div>
      </section>
    </>
  );
}
