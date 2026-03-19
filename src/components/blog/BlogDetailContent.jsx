"use client";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogDetailContent({ post, layout = "right" }) {
    // Reveal animation for the 2 blog images using IntersectionObserver
    useEffect(() => {
        const wrappers = Array.from(document.querySelectorAll(".reveal-wrapper"));
        const observers = [];

        // First: explicitly force the mask to cover the image
        wrappers.forEach((wrapper) => {
            wrapper.classList.remove("revealed", "in-view");
            const mask = wrapper.querySelector(".reveal-mask");
            if (mask) {
                // Force the initial state via inline style
                mask.style.transform = "translateX(0%)";
                mask.style.transition = "none";
            }
        });

        // Small delay to ensure the mask is visibly covering first
        const timer = setTimeout(() => {
            wrappers.forEach((wrapper) => {
                const mask = wrapper.querySelector(".reveal-mask");
                if (mask) {
                    // Re-enable transition
                    mask.style.transition = "transform 1.2s cubic-bezier(0.77, 0, 0.18, 1)";
                }

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("in-view");
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.1 }
                );

                observer.observe(wrapper);
                observers.push(observer);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    const hasSidebar = layout !== "full";
    const sidebarPosition = layout;

    const contentClasses = hasSidebar
        ? (sidebarPosition === "left"
            ? "sp-blogs-rightside col-lg-8 order-lg-last col-md-12 order-md-first"
            : "sp-blogs-leftside col-lg-8 order-lg-first col-md-12 order-md-first")
        : "col-12";

    const sidebarClasses = sidebarPosition === "left"
        ? "sp-blogs-sidebar sp-blogs-leftside col-lg-4 order-lg-first col-md-12 order-md-last m-t-991"
        : "sp-blogs-sidebar sp-blogs-rightside col-lg-4 order-lg-last col-md-12 order-md-last m-t-991";

    const sidebar = <div className={sidebarClasses} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><BlogSidebar /></div>;

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Blog Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Blog Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog section */}
            <section className="sp-blog padding-tb-50">
                <div className="container">
                    <div className="row">
                        {hasSidebar && sidebarPosition === "left" && sidebar}

                        <div className={contentClasses}>
                            <div className="sp-blogs-content">
                                <div className="sp-blogs-inner" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" suppressHydrationWarning>
                                    <div className="sp-single-blog-item">
                                        <div className="single-blog-info">
                                            <figure className="blog-img">
                                                <Link href="#">
                                                    <img src={post?.image || "/images/11_3.jpg"} alt={post?.title || "news imag"} />
                                                </Link>
                                            </figure>
                                            <div className="single-blog-detail">
                                                <label>{post?.date || "June 30, 2026"} - <Link href="#">{post?.category || "Organic"}</Link></label>
                                                <h3>{post?.title || "Marketing Guide: 5 Steps to Success."}</h3>
                                                <p className="sp-text">
                                                    {post?.excerpt || `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
                                                </p>
                                                
                                                <p className="sp-text-highlight">
                                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
                                                </p>
                                                
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of passages of Lorem Ipsum classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                                                </p>

                                                <div className="sub-img">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="reveal-wrapper">
                                                                <img src="/images/blog/4.jpg" alt="blog" />
                                                                <div className="reveal-mask" suppressHydrationWarning></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="reveal-wrapper">
                                                                <img src="/images/blog/3.jpg" alt="blog" />
                                                                <div className="reveal-mask" suppressHydrationWarning></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page distracted by the readable when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
                                                </p>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered distracted by the readable alteration in some form, by injected humour.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination Start */}
                                <div className="sp-pro-pagination" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <span>Showing 1-6 of 20 items</span>
                                    <ul className="sp-pro-pagination-inner">
                                        <li><a className="active" href="#!">1</a></li>
                                        <li><a href="#!">2</a></li>
                                        <li><a href="#!">3</a></li>
                                        <li><span>...</span></li>
                                        <li><a href="#!">8</a></li>
                                        <li><a className="next" href="#!">Next <i className="gicon sp-angle-right"></i></a></li>
                                    </ul>
                                </div>
                                {/* Pagination End */}

                                {/* Comments Start */}
                                <div className="sp-blog-comments m-t-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="sp-blog-cmt-preview">
                                        <div className="sp-blog-comment-wrapper">
                                            <h4 className="sp-blog-dsp-title">Comments : 05</h4>
                                            
                                            <div className="sp-single-comment-wrapper mt-35">
                                                <div className="sp-blog-user-img">
                                                    <img src="/images/1_4.jpg" alt="blog image" />
                                                </div>
                                                <div className="sp-blog-comment-content">
                                                    <h5>John Deo</h5>
                                                    <span>October 14, 2025</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam.</p>
                                                    <div className="sp-blog-details-btn">
                                                        <Link href="#">Reply <i className="ri-arrow-right-double-line"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sp-single-comment-wrapper sub-cmt">
                                                <div className="sp-blog-user-img">
                                                    <img src="/images/2_4.jpg" alt="blog image" />
                                                </div>
                                                <div className="sp-blog-comment-content">
                                                    <h5>Jenifer lowes</h5>
                                                    <span>May 09, 2026</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. labore et dolor magna aliqua.</p>
                                                    <div className="sp-blog-details-btn">
                                                        <Link href="#">Reply <i className="ri-arrow-right-double-line"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sp-blog-cmt-form">
                                        <div className="sp-blog-reply-wrapper mt-50">
                                            <h4 className="sp-blog-dsp-title">Leave A Reply</h4>
                                            <form className="sp-blog-form" action="#">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="sp-leave-form">
                                                            <input type="text" placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="sp-leave-form">
                                                            <input type="email" placeholder="Email Address " />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="sp-text-leave">
                                                            <textarea placeholder="Message"></textarea>
                                                            <Link href="#" className="sp-btn-2">Submit</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Comments End */}
                            </div>
                        </div>

                        {hasSidebar && sidebarPosition === "right" && sidebar}
                    </div>
                </div>
            </section>
        </>
    );
}
