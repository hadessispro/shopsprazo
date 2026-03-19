"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/mockData";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogContent() {
    const searchParams = useSearchParams();
    const layout = searchParams.get("layout") || "left"; // left | right | full
    const hasSidebar = layout !== "full";
    const sidebarPosition = layout;

    const sidebar = <div className="sp-blogs-sidebar sp-blogs-leftside col-lg-4 order-lg-first col-md-12 order-md-last m-t-991" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><BlogSidebar /></div>;

    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12" suppressHydrationWarning>
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

            <section className="sp-blog-page p-tb-50">
                <div className="container">
                    <div className="row">
                        {hasSidebar && sidebarPosition === "left" && sidebar}

                        <div className={hasSidebar ? "sp-blogs-rightside col-lg-8 order-lg-last col-md-12 order-md-first" : "col-12"}>
                            <div className="sp-blogs-content">
                                <div className="sp-blogs-inner" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" suppressHydrationWarning>
                                    <div className="row">
                                        {blogPosts.map((post) => (
                                            <div className="col-xxl-4 col-xl-6 col-md-6 m-b-30" key={post.id}>
                                                <div className="sp-blog-box-2">
                                                    <div className="sp-blog-img">
                                                        <Link href={`/blog/${post.id}`}>
                                                            <img src={post.image} alt={post.title} />
                                                        </Link>
                                                    </div>
                                                    <div className="sp-blog-detail">
                                                        <div className="sp-blog-info">
                                                            <p className="sp-post">
                                                                <Link href={`/blog`}>{post.category}</Link>- {post.date}
                                                            </p>
                                                            <h3>
                                                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                                            </h3>
                                                            <p className="desc">{post.excerpt}</p>
                                                        </div>
                                                        <Link href={`/blog/${post.id}`} className="sp-read">
                                                            Continue Reading <i className="ri-arrow-right-long-line"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pagination Start */}
                                <div className="sp-pro-pagination" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" suppressHydrationWarning>
                                    <span>Showing 1-6 of 20 items</span>
                                    <ul className="sp-pro-pagination-inner">
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><span>...</span></li>
                                        <li><a href="#">8</a></li>
                                        <li><a className="next" href="#">Next <i className="gicon sp-angle-right"></i></a></li>
                                    </ul>
                                </div>
                                {/* Pagination End */}
                            </div>
                        </div>

                        {hasSidebar && sidebarPosition === "right" && sidebar}
                    </div>
                </div>
            </section>
        </>
    );
}
