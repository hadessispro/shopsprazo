"use client";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/mockData";

export default function BlogSidebar() {
    return (
        <div className="sp-blogs-sidebar-wraper">
            {/* Search */}
            <div className="sp-blog-search">
                <form className="sp-blog-search-form" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control" placeholder="Search Our Blog" type="text" />
                    <button className="submit" type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>
            <div className="sp-blog-sidebar-wrap">
                {/* Recent Posts */}
                <div className="sp-sidebar-block sp-sidebar-recent-blog">
                    <div className="sp-sb-title">
                        <h3 className="sp-sidebar-title">Recent Articles</h3>
                    </div>
                    <div className="sp-blog-block-content sp-sidebar-dropdown">
                        {blogPosts.slice(0, 3).map((post) => (
                            <div key={post.id} className="sp-sidebar-block-item">
                                <div className="sp-sidebar-block-img">
                                    <Link href={`/blog/${post.id}`}>
                                        <img src={post.image} alt={post.title} />
                                    </Link>
                                </div>
                                <div className="sp-sidebar-block-detial">
                                    <h5 className="sp-blog-title">
                                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                    </h5>
                                    <div className="sp-blog-date">{post.date}</div>
                                    <Link href={`/blog`}>- {post.category}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className="sp-sidebar-block">
                    <div className="sp-sb-title">
                        <h3 className="sp-sidebar-title">Categories</h3>
                    </div>
                    <div className="sp-blog-block-content sp-sidebar-dropdown mb-minus-12">
                        <ul>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Dairy &amp; Milk<span title="Products">- 68</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Seafood<span title="Products">- 58</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Bakery<span title="Products">- 84</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Cosmetics<span title="Products">- 63</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Electrics<span title="Products">- 75</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Clothes<span title="Products">- 39</span></Link><span className="checked"></span>
                                </div>
                            </li>
                            <li>
                                <div className="sp-sidebar-block-item">
                                    <input type="checkbox" /> <Link href="/blog">Watch<span title="Products">- 48</span></Link><span className="checked"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tags (Bonus, let's keep it but style it correctly if we want. In the original, there are no tags, but I'll replicate the checkbox format if needed. Actually I can just keep it as a simple list with original classes. Oh wait, the original demo doesn't have a tags widget in the sidebar. Let's look for tags up there. demo-2.html doesn't have it either. I'll just remove the tags block or convert it to another category block. I'll remove it). */}
            </div>
        </div>
    );
}
