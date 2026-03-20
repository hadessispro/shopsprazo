"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Julien Marceaux",
    role: "Customer",
    img: "/images/1_4.jpg",
    text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.",
  },
  {
    id: 2,
    name: "Erik Halvorsen",
    role: "Manager",
    img: "/images/2_4.jpg",
    text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.",
  },
  {
    id: 3,
    name: "Camille Varelli",
    role: "Customer",
    img: "/images/3_3.jpg",
    text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.",
  },
  {
    id: 4,
    name: "Marco Alvarello",
    role: "Marketing",
    img: "/images/4_3.jpg",
    text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.",
  },
];

export default function GroceryTestimonial() {
  return (
    <section
      className="sp-testimonial padding-tb-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="section-detail">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Our Testimonial
              </p>
              <h2 data-cursor="big">What Our Clients Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="sp-testimonial-slider" style={{ position: "relative" }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            navigation={{
              nextEl: ".testi-nav-next",
              prevEl: ".testi-nav-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 },
              421: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1400: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sp-testimonial-box">
                  <div className="sp-detail">
                    <div className="sp-icon">
                      <i className="ri-double-quotes-l"></i>
                    </div>
                    <div className="sp-user">
                      <div className="user-name">
                        <h5>{item.name}</h5>
                        <p>{item.role}</p>
                      </div>
                      <img src={item.img} alt="user" />
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="owl-nav">
            <button type="button" className="owl-prev testi-nav-prev"></button>
            <button type="button" className="owl-next testi-nav-next"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
