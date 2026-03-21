"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { shopCategories } from "@/data/shopData";

export default function ShopCategorySlider() {
  return (
    <section
      className="sp-category m-b-30 padding-t-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={false}
          speed={500}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 2 },
            381: { slidesPerView: 3 },
            576: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            992: { slidesPerView: 6 },
            1400: { slidesPerView: 8 },
          }}
          className="sp-category-slider"
        >
          {shopCategories.map((cat, i) => (
            <SwiperSlide key={i}>
              <div className="sp-category-block">
                <div className="category-detail">
                  <div className="category-img">
                    <img src={cat.img} alt="category" />
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
