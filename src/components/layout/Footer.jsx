"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
    const [openWidget, setOpenWidget] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth > 991);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const toggleWidget = (widgetName) => {
        if (!isDesktop) {
            setOpenWidget(openWidget === widgetName ? null : widgetName);
        }
    };

    return (
        <footer className="sp-footer margin-t-50">
            <div className="footer-container">
                <div className="footer-top padding-t-100 padding-b-50">
                    <div className="container">
                        <div className="row m-minus-991">
                            <div className="col-sm-12 col-lg-3 sp-footer-cat">
                                <div className="sp-footer-widget sp-footer-company">
                                    <img src="/images/logo-light.png" className="sp-footer-logo" alt="footer logo" />
                                    <img src="/images/logo-dark.png" className="sp-footer-dark-logo" alt="footer logo" />
                                    <p className="sp-footer-detail">The Sprazo is the biggest market of grocery products. Get
                                        your daily needs from our store.</p>
                                    <div className="sp-app-store">
                                        <a href="javascript:void(0)" className="app-img">
                                            <img src="/images/android.png" className="adroid" alt="android app" />
                                        </a>
                                        <a href="javascript:void(0)" className="app-img">
                                            <img src="/images/apple.png" className="apple" alt="apple app" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-2 sp-footer-info">
                                <div className="sp-footer-widget">
                                    <h4
                                        className={`sp-footer-heading ${openWidget === 'category' ? 'active' : ''}`}
                                        onClick={() => toggleWidget('category')}
                                    >
                                        Category<div className="sp-heading-res"><i className="ri-arrow-down-s-line"></i></div>
                                    </h4>
                                    <div className="sp-footer-links sp-footer-dropdown" style={{ display: openWidget === 'category' || isDesktop ? 'block' : '' }}>
                                        <ul className="align-items-center">
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Dairy &amp; Milk</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Snack &amp; Spice</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Fast Food</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Juice &amp; Drinks</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Bakery</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Seafood</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-2 sp-footer-account">
                                <div className="sp-footer-widget">
                                    <h4
                                        className={`sp-footer-heading ${openWidget === 'company' ? 'active' : ''}`}
                                        onClick={() => toggleWidget('company')}
                                    >
                                        Company<div className="sp-heading-res"><i className="ri-arrow-down-s-line"></i></div>
                                    </h4>
                                    <div className="sp-footer-links sp-footer-dropdown" style={{ display: openWidget === 'company' || isDesktop ? 'block' : '' }}>
                                        <ul className="align-items-center">
                                            <li className="sp-footer-link">
                                                <Link href="/about">About us</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/track-order">Delivery</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/faq">Legal Notice</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/terms">Terms &amp; conditions</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/checkout">Secure payment</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-2 sp-footer-service">
                                <div className="sp-footer-widget">
                                    <h4
                                        className={`sp-footer-heading ${openWidget === 'account' ? 'active' : ''}`}
                                        onClick={() => toggleWidget('account')}
                                    >
                                        Account<div className="sp-heading-res"><i className="ri-arrow-down-s-line"></i></div>
                                    </h4>
                                    <div className="sp-footer-links sp-footer-dropdown" style={{ display: openWidget === 'account' || isDesktop ? 'block' : '' }}>
                                        <ul className="align-items-center">
                                            <li className="sp-footer-link">
                                                <Link href="/login">Sign In</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/cart">View Cart</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/faq">Return Policy</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Become a Vendor</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/shop">Affiliate Program</Link>
                                            </li>
                                            <li className="sp-footer-link">
                                                <Link href="/checkout">Payments</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-3 sp-footer-cont-social">
                                <div className="sp-footer-contact">
                                    <div className="sp-footer-widget">
                                        <h4
                                            className={`sp-footer-heading ${openWidget === 'contact' ? 'active' : ''}`}
                                            onClick={() => toggleWidget('contact')}
                                        >
                                            Contact<div className="sp-heading-res"><i className="ri-arrow-down-s-line"></i></div>
                                        </h4>
                                        <div className="sp-footer-links sp-footer-dropdown" style={{ display: openWidget === 'contact' || isDesktop ? 'block' : '' }}>
                                            <ul className="align-items-center">
                                                <li className="sp-footer-link sp-foo-location">
                                                    <span className="mt-15px">
                                                        <i className="ri-map-pin-line"></i>
                                                    </span>
                                                    <p>1234 Elm Street Springfield Avenue, Brooklyn denwer, IL 62704 USA.
                                                    </p>
                                                </li>
                                                <li className="sp-footer-link sp-foo-call">
                                                    <span>
                                                        <i className="ri-whatsapp-line"></i>
                                                    </span>
                                                    <a href="tel:+009876543210">+00 9876543210</a>
                                                </li>
                                                <li className="sp-footer-link sp-foo-mail">
                                                    <span>
                                                        <i className="ri-mail-line"></i>
                                                    </span>
                                                    <a href="mailto:example@email.com">example@email.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="sp-footer-social">
                                    <div className="sp-footer-widget">
                                        <div className="sp-footer-links sp-footer-dropdown">
                                            <ul className="align-items-center">
                                                <li className="sp-footer-link">
                                                    <a href="javascript:void(0)"><i className="ri-facebook-fill"></i></a>
                                                </li>
                                                <li className="sp-footer-link">
                                                    <a href="javascript:void(0)"><i className="ri-twitter-fill"></i></a>
                                                </li>
                                                <li className="sp-footer-link">
                                                    <a href="javascript:void(0)"><i className="ri-linkedin-fill"></i></a>
                                                </li>
                                                <li className="sp-footer-link">
                                                    <a href="javascript:void(0)"><i className="ri-instagram-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="sp-bottom-info">
                                <div className="footer-copy">
                                    <div className="footer-bottom-copy ">
                                        <div className="sp-copy">Copyright © <span id="copyright_year">2026</span>
                                            <Link className="site-name" href="/">The Sprazo</Link> all rights reserved.
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-bottom-right">
                                    <div className="footer-bottom-payment d-flex justify-content-center">
                                        <div className="payment-link">
                                            <img src="/images/payment.png" alt="payment" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
