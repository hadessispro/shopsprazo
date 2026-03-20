"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function FashionCollection() {
    const collections = [
        { id: 1, name: 'Fashion Collection', image: '/images/8_1.jpg', price: '$24', rating: 4 },
        { id: 2, name: 'Glasses Collection', image: '/images/9.jpg', price: '$9', rating: 5 },
        { id: 3, name: 'Shoes Collection', image: '/images/10.jpg', price: '$25', rating: 4 },
        { id: 4, name: 'Perfume Collection', image: '/images/11.jpg', price: '$5', rating: 5 },
        { id: 5, name: 'Watches Collection', image: '/images/12.jpg', price: '$10', rating: 4 },
        { id: 6, name: 'Cosmetics Collection', image: '/images/13.jpg', price: '$95', rating: 5 }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={`ri-star-fill${i >= rating ? ' grey' : ''}`}></i>
        ));
    };

    return (
        <section className="sp-collection-2 padding-tb-100">
            <div className="sp-icon-set"></div>
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Browse The Products</p>
                            <h2 data-cursor="big">Our Features Collection</h2>
                        </div>
                    </div>
                </div>
                <div className="sp-collection-slider" style={{ position: 'relative' }}>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        navigation={{
                            nextEl: '.custom-nav-next-col',
                            prevEl: '.custom-nav-prev-col',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {collections.map((col) => (
                            <SwiperSlide key={col.id}>
                                <div className="sp-collection-block">
                                    <div className="collection-detail">
                                        <div className="collection-img">
                                            <img src={col.image} alt="collection" />
                                        </div>
                                        <div className="collection-info">
                                            <h5><Link href="/shop">{col.name}</Link></h5>
                                            <span className="sp-pro-rating">
                                                {renderStars(col.rating)}
                                            </span>
                                            <div className="collection-footer">
                                                <div className="price">
                                                    <h5>Starts from : {col.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="owl-nav">
                            <button type="button" className="owl-prev custom-nav-prev-col"></button>
                            <button type="button" className="owl-next custom-nav-next-col"></button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
