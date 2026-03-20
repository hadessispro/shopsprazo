"use client";
import Link from "next/link";
import { sidebarRecentArticles, sidebarCategories } from "@/data/mockData";

export default function BlogSidebar() {
  return (
    <div className="sp-blogs-sidebar-wraper">
      {/* Search */}
      <div className="sp-blog-search">
        <form
          className="sp-blog-search-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control"
            placeholder="Search Our Blog"
            type="text"
          />
          <button className="submit" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </form>
      </div>
      <div className="sp-blog-sidebar-wrap">
        {/* Recent Articles - 5 items from HTML */}
        <div className="sp-sidebar-block sp-sidebar-recent-blog">
          <div className="sp-sb-title">
            <h3 className="sp-sidebar-title">Recent Articles</h3>
          </div>
          <div className="sp-blog-block-content sp-sidebar-dropdown">
            {sidebarRecentArticles.map((article) => (
              <div key={article.id} className="sp-sidebar-block-item">
                <div className="sp-sidebar-block-img">
                  <Link href={`/blog/${article.id}`}>
                    <img src={article.img} alt="blog" />
                  </Link>
                </div>
                <div className="sp-sidebar-block-detial">
                  <h5 className="sp-blog-title">
                    <Link href={`/blog/${article.id}`}>{article.title}</Link>
                  </h5>
                  <div className="sp-blog-date">{article.date}</div>
                  <Link href="/blog">- {article.cat}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories - 8 items including Phones from HTML */}
        <div className="sp-sidebar-block">
          <div className="sp-sb-title">
            <h3 className="sp-sidebar-title">Categories</h3>
          </div>
          <div className="sp-blog-block-content sp-sidebar-dropdown mb-minus-12">
            <ul>
              {sidebarCategories.map((cat, idx) => (
                <li key={idx}>
                  <div className="sp-sidebar-block-item">
                    <input type="checkbox" defaultChecked={idx === 0} />{" "}
                    <Link href="/blog">
                      {cat.name}
                      <span title="Products">- {cat.count}</span>
                    </Link>
                    <span className="checked"></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
