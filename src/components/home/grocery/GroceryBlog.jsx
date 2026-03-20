"use client";
import React from "react";
import Link from "next/link";

export default function GroceryBlog() {
  const blogs = [
    {
      id: 1,
      image: "/images/blog/1.jpg",
      category: "Vegetables",
      date: "February 4, 2026",
      title: "Beginner’s Guide to Eating More Vegetables Without Even Trying.",
      desc: "A vibrant corner of the web dedicated to all things vegetable from garden to table. Whether you're a seasoned grower, curious cook, or veggie newbie, you'll find tips, recipes, and green inspiration to nourish your body and your lifestyle.",
    },
    {
      id: 2,
      image: "/images/blog/2.jpg",
      category: "Bakery",
      date: "May 12, 2025",
      title: "Tech in Trolleys: Smart Innovations in Bakery Shopping.",
      desc: "There are many variations of passages of Lorem Ipsum available randomised words.",
    },
    {
      id: 3,
      image: "/images/blog/3.jpg",
      category: "Drinks",
      date: "June 22, 2027",
      title: "Freshly Squeezed: The Latest News in the Juice Industry.",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      id: 4,
      image: "/images/blog/4.jpg",
      category: "Fruits",
      date: "December 19, 2026",
      title: "Fresh Picks: Seasonal Fruit Trends You Need to Know.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
  ];

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
              <h2
                data-cursor="big"
                aria-label="Featured tips and tricks!"
                style={{ perspective: "500px" }}
              >
                <div
                  className="split-line"
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "block",
                    textAlign: "start",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    Featured
                  </div>{" "}
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    tips
                  </div>{" "}
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    and
                  </div>{" "}
                  <div
                    aria-hidden="true"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    tricks!
                  </div>
                </div>
              </h2>
            </div>
            <Link href="/blog" className="sp-btn-4">
              View all &nbsp;<i className="ri-arrow-right-long-line"></i>
            </Link>
          </div>
        </div>
        <div className="row mb-minus-30">
          {blogs.map((blog) => (
            <div className="col-md-6 m-b-30" key={blog.id}>
              <div className="sp-blog-box">
                <div className="sp-blog-img">
                  <img
                    src={blog.image}
                    alt="blog"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  />
                </div>
                <div className="sp-blog-detail">
                  <div className="sp-blog-info">
                    <p className="sp-post">
                      <Link href="/blog">{blog.category}</Link>- {blog.date}
                    </p>
                    <h3>
                      <Link href="/blog-detail">{blog.title}</Link>
                    </h3>
                    <p className="desc">{blog.desc}</p>
                  </div>
                  <Link href="/blog-detail" className="sp-read">
                    Continue Reading{" "}
                    <i className="ri-arrow-right-long-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
