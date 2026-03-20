"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/images/12_1.jpg",
    category: "Fashion",
    date: "February 4, 2026",
    title: "From Runway to Sidewalk: A Real Girl's Guide to Fashion.",
  },
  {
    id: 2,
    image: "/images/13_1.jpg",
    category: "Footwear",
    date: "May 12, 2025",
    title: "Sole Stories: Walking Through Life One Pair at a Time.",
  },
  {
    id: 3,
    image: "/images/14.jpg",
    category: "Bags",
    date: "June 22, 2027",
    title: "Bagged & Beautiful: A Blog for the Handbag Obsessed.",
  },
  {
    id: 4,
    image: "/images/15.jpg",
    category: "Watches",
    date: "December 19, 2026",
    title: "Time Well Spent: Exploring the World of Luxury Watches.",
  },
];

export default function FashionBlog() {
  return (
    <section
      className="sp-blog padding-tb-50 aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="section-detail detail-two">
            <div className="sp-title">
              <p>
                <img src="/fonts/15.svg" alt="" />
                Recent Posts
              </p>
              <h2 data-cursor="big">Featured tips and tricks!</h2>
            </div>
            <Link href="/blog" className="sp-btn-4">
              View all &nbsp;<i className="ri-arrow-right-long-line"></i>
            </Link>
          </div>
        </div>
        <div className="row mb-minus-30">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-xl-3 col-md-6 m-b-30">
              <div className="sp-blog-box-2">
                <div className="sp-blog-img">
                  <img src={blog.image} alt="blog" />
                </div>
                <div className="sp-blog-detail">
                  <div className="sp-blog-info">
                    <p className="sp-post">
                      <Link href="/blog">{blog.category}</Link>- {blog.date}
                    </p>
                    <h3>
                      <Link href="/blog">{blog.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
