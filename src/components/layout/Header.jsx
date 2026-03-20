"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import MobileMenu from "@/components/layout/MobileMenu";
import CustomSelect from "@/components/ui/CustomSelect";

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false);
  const [wishDropdown, setWishDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Surat");
  const [langDropdown, setLangDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [searchCategory, setSearchCategory] = useState("vegetables");

  const { totalItems, setIsCartOpen } = useCart();
  const {
    items: wishlistItems,
    count: wishCount,
    removeItem: removeWishlistItem,
  } = useWishlist();

  return (
    <header className="sp-header sticky-nav">
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-top-header">
                <div className="col-left-bar">
                  <Link href="/shop">Flat 50% Off On Grocery Shop.</Link>
                </div>
                <div className="col-right-bar">
                  <div className="cols">
                    <Link href="/faq">Help?</Link>
                  </div>
                  <div className="cols">
                    <Link href="/track-order">Track Order</Link>
                  </div>
                  <div className="cols">
                    <div className="custom-dropdown">
                      <a
                        className="sp-dropdown-toggle"
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          setLangDropdown(!langDropdown);
                          setCurrencyDropdown(false);
                        }}
                      >
                        Language
                      </a>
                      <ul
                        className="dropdown"
                        style={{ display: langDropdown ? "block" : "none" }}
                      >
                        <li>
                          <a href="#!">English</a>
                        </li>
                        <li>
                          <a href="#!">Hindi</a>
                        </li>
                        <li>
                          <a href="#!">Gujarati</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="custom-dropdown">
                      <a
                        className="sp-dropdown-toggle"
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrencyDropdown(!currencyDropdown);
                          setLangDropdown(false);
                        }}
                      >
                        Currency
                      </a>
                      <ul
                        className="dropdown"
                        style={{ display: currencyDropdown ? "block" : "none" }}
                      >
                        <li>
                          <a href="#!">USD $</a>
                        </li>
                        <li>
                          <a href="#!">EUR €</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bottom-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-bottom-header">
                {/* Logo */}
                <div className="cols sp-logo-detail">
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        src="/images/logo-dark.png"
                        alt="logo"
                        className="light"
                      />
                      <img
                        src="/images/logo-dark.png"
                        alt="logo"
                        className="dark"
                      />
                    </Link>
                  </div>
                  <a href="#!" className="sp-sidebar-toggle sp-category-toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        opacity="0.7"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>

                {/* Search */}
                <div className="cols">
                  <div className="header-search">
                    <form className="sp-btn-group-form">
                      <div className="inner-select">
                        <CustomSelect
                          options={[
                            { value: "vegetables", label: "Vegetables" },
                            { value: "dairy", label: "Dairy & Milk" },
                            { value: "bakery", label: "Bakery" },
                            { value: "fruits", label: "Fruits" },
                            { value: "drinks", label: "Cold Drinks" },
                          ]}
                          value={searchCategory}
                          onChange={setSearchCategory}
                          className="sp-search-category hide-select"
                        />
                      </div>
                      <input
                        className="form-control sp-search-bar"
                        placeholder="Search products..."
                        type="text"
                      />
                      <button className="submit" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Icons */}
                <div className="cols sp-icons">
                  <div className="sp-flex-justify">
                    <div className="sp-header-buttons">
                      {/* Account Dropdown */}
                      <div className="sp-acc-drop">
                        <a
                          href="#!"
                          className={`sp-header-btn sp-header-user dropdown-toggle sp-user-toggle m-0 ${userDropdown ? "show" : ""}`}
                          title="Account"
                          onClick={() => setUserDropdown(!userDropdown)}
                        >
                          <div className="header-icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="sp-stroke"
                                cx="12"
                                cy="6"
                                r="4"
                                strokeWidth="1.5"
                              ></circle>
                              <path
                                className="sp-stroke"
                                opacity="0.6"
                                d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                              ></path>
                            </svg>
                          </div>
                          <div className="sp-btn-desc">
                            <span className="sp-btn-title">Account</span>
                            <span className="sp-btn-stitle">Login</span>
                          </div>
                        </a>
                        <ul
                          className={`sp-dropdown-menu ${userDropdown ? "show" : ""}`}
                          style={
                            userDropdown
                              ? {
                                  opacity: 1,
                                  visibility: "visible",
                                  marginTop: "15px",
                                }
                              : {}
                          }
                        >
                          <li>
                            <Link className="dropdown-item" href="/register">
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/checkout">
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/login">
                              Login
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Wishlist Dropdown */}
                      <div className="sp-wish-drop">
                        <a
                          href="#!"
                          className="sp-header-btn sp-header-user dropdown-toggle sp-user-toggle"
                          title="Wishlist"
                          onClick={() => setWishDropdown(!wishDropdown)}
                        >
                          <div className="header-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                className="sp-stroke"
                                d="M18 11.9999H17.1986C16.3689 11.9999 15.9541 11.9999 15.6102 12.1946C15.2664 12.3893 15.0529 12.745 14.6261 13.4564L14.5952 13.5079C14.1976 14.1706 13.9987 14.502 13.7095 14.4965C13.4202 14.4911 13.2339 14.1525 12.8615 13.4753L11.1742 10.4075C10.8269 9.77606 10.6533 9.46034 10.3759 9.44537C10.0986 9.43039 9.892 9.72558 9.47875 10.3159L9.19573 10.7203C8.75681 11.3473 8.53734 11.6608 8.21173 11.8303C7.88612 11.9999 7.50342 11.9999 6.73803 11.9999H6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              ></path>
                              <path
                                className="sp-fill"
                                opacity="0.6"
                                d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99532 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z"
                              ></path>
                            </svg>
                          </div>
                          <div className="sp-btn-desc">
                            <span className="sp-btn-title">
                              <b className="sp-wishlist-count">{wishCount}</b>{" "}
                              items
                            </span>
                            <span className="sp-btn-stitle">Wishlist</span>
                          </div>
                        </a>
                        <div
                          className={`sp-dropdown-menu sp-wish-items ${wishDropdown ? "show" : ""}`}
                          style={
                            wishDropdown
                              ? {
                                  opacity: 1,
                                  visibility: "visible",
                                  marginTop: "15px",
                                }
                              : {}
                          }
                        >
                          <div className="sp-wish-info">
                            <ul className="sp-list-block">
                              {wishlistItems.length === 0 ? (
                                <li
                                  className="text-center p-4"
                                  style={{ padding: "20px 0", color: "#777" }}
                                >
                                  <p className="mb-0">
                                    Your wishlist is empty.
                                  </p>
                                </li>
                              ) : (
                                wishlistItems.map((item) => (
                                  <li
                                    key={item.id}
                                    className="wish-sidebar-list sp-list"
                                  >
                                    <a
                                      href="#!"
                                      className="wish-remove-item"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        removeWishlistItem(item.id);
                                      }}
                                    >
                                      <i className="ri-close-line"></i>
                                    </a>
                                    <a href="#!" className="sp-wish-pro-img">
                                      <img
                                        src={
                                          item.image ||
                                          "/images/product-placeholder.jpg"
                                        }
                                        alt={item.name}
                                      />
                                    </a>
                                    <div className="sp-wish-contact">
                                      <Link
                                        href={`/product/${item.id}`}
                                        className="sp-wish-sub-title"
                                      >
                                        {item.name}
                                      </Link>
                                      <span className="wish-price">
                                        <span className="new-price">
                                          ${item.price?.toFixed(2)}
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                          <div className="wish-sidebar-list btn">
                            <Link
                              href="/wishlist"
                              className="sp-btn-4"
                              onClick={() => setWishDropdown(false)}
                            >
                              View Wishlist
                              <i className="ri-arrow-right-s-line"></i>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Cart */}
                      <a
                        href="#!"
                        className="sp-header-btn sp-cart-toggle"
                        title="Cart"
                        onClick={() => setIsCartOpen(true)}
                      >
                        <div className="header-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="sp-stroke"
                              d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z"
                              strokeWidth="1.5"
                            ></path>
                            <circle
                              className="sp-fill"
                              opacity="0.6"
                              cx="15"
                              cy="9"
                              r="1"
                            ></circle>
                            <circle
                              className="sp-fill"
                              opacity="0.6"
                              cx="9"
                              cy="9"
                              r="1"
                            ></circle>
                            <path
                              className="sp-stroke"
                              opacity="0.6"
                              d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                          <span className="main-label-note-new"></span>
                        </div>
                        <div className="sp-btn-desc">
                          <span className="sp-btn-title">
                            <b className="sp-cart-count">{totalItems}</b> items
                          </span>
                          <span className="sp-btn-stitle">Cart</span>
                        </div>
                      </a>

                      {/* Mobile toggle */}
                      <a
                        href="#!"
                        className="sp-header-btn-mobile sp-toggle-menu"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <div className="header-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="sp-stroke"
                              d="M12 7L12 17"
                              stroke="red"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            ></path>
                            <path
                              className="sp-stroke"
                              d="M17 10L17 14"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            ></path>
                            <path
                              className="sp-stroke"
                              d="M7 9L7 15"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            ></path>
                            <path
                              className="sp-stroke"
                              opacity="0.5"
                              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                              strokeWidth="1.5"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Desktop */}
      <div className="sp-main-menu-desk" id="sp-main-menu-desk">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sp-inner-menu-desk">
                <a
                  href="#!"
                  className="sp-header-btn sp-sidebar-toggle sp-category-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>

                <div className="sp-main-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* Home */}
                    <li className="nav-item sp-main-dropdown sp-home-nav">
                      <a className="nav-link sp-dropdown-item" href="#!">
                        Home
                      </a>
                      <ul className="mega-menu img-menu">
                        <li>
                          <ul className="mega-block">
                            <li>
                              <Link href="/">
                                <img src="/images/1.jpg" alt="pages" />
                              </Link>
                            </li>
                            <li className="img_title">
                              <Link href="/">Grocery</Link>
                            </li>
                          </ul>
                          <ul className="mega-block">
                            <li>
                              <Link href="/fashion">
                                <img src="/images/2.jpg" alt="pages" />
                              </Link>
                            </li>
                            <li className="img_title">
                              <Link href="/fashion">Fashion</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* Categories Mega Menu */}
                    <li className="nav-item sp-main-dropdown">
                      <a className="nav-link sp-dropdown-item" href="#!">
                        Categories
                      </a>
                      <ul className="mega-menu">
                        <li>
                          <ul className="mega-block">
                            <li className="menu_title">
                              <a href="#!">Classic</a>
                            </li>
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
                          <ul className="mega-block">
                            <li className="menu_title">
                              <a href="#!">Banner</a>
                            </li>
                            <li>
                              <Link href="/shop/banner?layout=left-3">
                                left sidebar 3 column
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop/banner?layout=left-4">
                                left sidebar 4 column
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop/banner?layout=right-3">
                                right sidebar 3 column
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop/banner?layout=right-4">
                                right sidebar 4 column
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop/banner?layout=full">
                                Full width 4 column
                              </Link>
                            </li>
                          </ul>
                          <ul className="mega-block">
                            <li className="menu_title">
                              <a href="#!">Columns</a>
                            </li>
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
                          <ul className="mega-block">
                            <li className="menu_title">
                              <a href="#!">List</a>
                            </li>
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
                    <li className="nav-item sp-dropdown">
                      <a className="nav-link sp-dropdown-item" href="#!">
                        Products
                      </a>
                      <ul className="sp-dropdown-menu">
                        <li className="sp-mega-dropdown">
                          <a className="sp-mega-item" href="#!">
                            Product page
                          </a>
                          <ul className="sp-mega-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/product/1?layout=left"
                              >
                                Product left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/product/1?layout=right"
                              >
                                Product right sidebar
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="sp-mega-dropdown">
                          <a className="sp-mega-item" href="#!">
                            Product Gallery
                          </a>
                          <ul className="sp-mega-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/product/1/gallery?layout=left"
                              >
                                left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/product/1/gallery?layout=right"
                              >
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
                    <li className="nav-item sp-dropdown">
                      <a className="nav-link sp-dropdown-item" href="#!">
                        Pages
                      </a>
                      <ul className="sp-dropdown-menu">
                        <li>
                          <Link className="dropdown-item" href="/about">
                            About Us <span className="lbl">new</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/contact">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/compare">
                            Compare
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/faq">
                            Faq
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/register">
                            Register
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Blog */}
                    <li className="nav-item sp-dropdown">
                      <a className="nav-link sp-dropdown-item" href="#!">
                        Blog
                      </a>
                      <ul className="sp-dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog?layout=left"
                          >
                            Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog?layout=right"
                          >
                            Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog?layout=full"
                          >
                            Full Width <span className="lbl">new</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog/1?layout=left"
                          >
                            Detail Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog/1?layout=right"
                          >
                            Detail Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blog/1?layout=full"
                          >
                            Detail Full Width
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Offers */}
                    <li className="nav-item">
                      <Link className="nav-link" href="/offers">
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m5.22576 11.3294 6.99824-8.98289c.5473-.70254 1.5732-.26527 1.5732.67056v6.95287c0 .56056.4023 1.01506.8986 1.01506h3.4038c.7733 0 1.1855 1.0299.6746 1.6856l-6.9982 8.9829c-.5473.7025-1.5732.2653-1.5732-.6706v-6.9528c0-.5606-.40232-1.0151-.8986-1.0151h-3.40385c-.77324 0-1.18541-1.0299-.67459-1.6856z"
                            stroke="#2a353d"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                        Offers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Location Dropdown - matches HTML: sp-dropdown-menu > inner-select > svg + custom-select */}
                <div className="sp-dropdown-menu">
                  <div className="inner-select">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#2a353d" strokeWidth="1.5">
                        <path d="m13.6177 21.367c-.4336.406-1.0133.633-1.6166.633s-1.1829-.227-1.6166-.633c-3.97148-3.741-9.29374-7.9201-6.69823-13.98734 1.40336-3.2805 4.77207-5.37966 8.31483-5.37966 3.5428 0 6.9115 2.09916 8.3149 5.37966 2.5922 6.05964-2.717 10.25924-6.6983 13.98734z"></path>
                        <path d="m15.5 11c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"></path>
                      </g>
                    </svg>
                    <CustomSelect
                      options={[
                        { value: "Surat", label: "Surat" },
                        { value: "Delhi", label: "Delhi" },
                        { value: "Rajkot", label: "Rajkot" },
                        { value: "Udaipur", label: "Udaipur" },
                      ]}
                      value={selectedLocation}
                      onChange={setSelectedLocation}
                      wrapperType="select"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu rendered within Header so it gets the `.sp-header .sp-mobile-menu` CSS scopes */}
      <div className="sp-header">
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
