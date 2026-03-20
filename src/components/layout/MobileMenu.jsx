"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div
        className="sp-mobile-menu-overlay"
        style={{ display: isOpen ? "block" : "none" }}
        data-cursor="hide"
        onClick={onClose}
      ></div>
      <div
        id="sp-mobile-menu"
        className={`sp-mobile-menu ${isOpen ? "sp-menu-open" : ""}`}
      >
        <div className="sp-menu-title">
          <span className="menu_title">My Menu</span>
          <button type="button" className="sp-close-menu" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="sp-menu-inner">
          <div className="sp-menu-content">
            <ul>
              {/* Home */}
              <li>
                <span
                  className="menu-toggle"
                  onClick={() => toggleMenu("home")}
                ></span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("home");
                  }}
                >
                  Home
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: openMenus.home ? "block" : "none" }}
                >
                  <li>
                    <Link href="/">Grocery</Link>
                  </li>
                  <li>
                    <Link href="/fashion">Fashion</Link>
                  </li>
                </ul>
              </li>

              {/* Categories */}
              <li>
                <span
                  className="menu-toggle"
                  onClick={() => toggleMenu("cat")}
                ></span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("cat");
                  }}
                >
                  Categories
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: openMenus.cat ? "block" : "none" }}
                >
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("classic")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("classic");
                      }}
                    >
                      Classic
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.classic ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/shop?layout=left-3">
                          Left sidebar 3 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=left-4">
                          Left sidebar 4 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=right-3">
                          Right sidebar 3 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=right-4">
                          Right sidebar 4 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=full">
                          Full width 4 column
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("banner")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("banner");
                      }}
                    >
                      Banner
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.banner ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/shop/banner?layout=left-3">
                          Left sidebar 3 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/banner?layout=left-4">
                          Left sidebar 4 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/banner?layout=right-3">
                          Right sidebar 3 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/banner?layout=right-4">
                          Right sidebar 4 column
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/banner?layout=full">
                          Full width 4 column
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("cols")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("cols");
                      }}
                    >
                      Columns
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.cols ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/shop?layout=full-3">
                          3 Columns full width
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=full-4">
                          4 Columns full width
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=full-5">
                          5 Columns full width
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?layout=full-6">
                          6 Columns full width
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/banner?layout=full-3">
                          Banner 3 Columns
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("list")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("list");
                      }}
                    >
                      List
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.list ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/shop/list?layout=left">
                          Shop left sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/list?layout=right">
                          Shop right sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/list/banner?layout=left">
                          Banner left sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/list/banner?layout=right">
                          Banner right sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/list?layout=full">
                          Full width 2 columns
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Products */}
              <li>
                <span
                  className="menu-toggle"
                  onClick={() => toggleMenu("prod")}
                ></span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("prod");
                  }}
                >
                  Products
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: openMenus.prod ? "block" : "none" }}
                >
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("prodPage")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("prodPage");
                      }}
                    >
                      Product page
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.prodPage ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/product/1?layout=left">
                          Product left sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/product/1?layout=right">
                          Product right sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span
                      className="menu-toggle"
                      onClick={() => toggleMenu("prodGal")}
                    ></span>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu("prodGal");
                      }}
                    >
                      Product Gallery
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: openMenus.prodGal ? "block" : "none" }}
                    >
                      <li>
                        <Link href="/product/1/gallery?layout=left">
                          left sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/product/1/gallery?layout=right">
                          right sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/product/1?layout=full">
                      Product full width
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/1/gallery?layout=full">
                      Gallery full width
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pages */}
              <li>
                <span
                  className="menu-toggle"
                  onClick={() => toggleMenu("pages")}
                ></span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("pages");
                  }}
                >
                  Pages
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: openMenus.pages ? "block" : "none" }}
                >
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/compare">Compare</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li>
                <span
                  className="menu-toggle"
                  onClick={() => toggleMenu("blog")}
                ></span>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("blog");
                  }}
                >
                  Blog
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: openMenus.blog ? "block" : "none" }}
                >
                  <li>
                    <Link href="/blog?layout=left">Left Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/blog?layout=right">Right Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/blog?layout=full">Full Width</Link>
                  </li>
                  <li>
                    <Link href="/blog/1?layout=left">Detail Left Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/blog/1?layout=right">
                      Detail Right Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/1?layout=full">Detail Full Width</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-res-lan-curr">
            <div className="header-res-social">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
