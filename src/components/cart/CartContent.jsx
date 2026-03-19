"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomSelect from "@/components/ui/CustomSelect";
import { useCart } from "@/context/CartContext";

export default function CartContent() {
    const [country, setCountry] = useState("US");
    const [state, setState] = useState("");
    const { items, updateQty, removeItem, totalItems, totalPrice, clearCart } = useCart();

    return (
        <>
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title" aria-label="Cart Page">Cart Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Cart Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-cart-section padding-tb-50">
                <div className="container">
                    <h2 className="d-none">Cart Page</h2>
                    <div className="row">
                        {items.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <div className="empty-cart flex flex-column align-items-center">
                                    <i className="ri-shopping-cart-2-line text-muted mb-4" style={{ fontSize: "5rem" }}></i>
                                    <h3 className="mb-3">Your cart is currently empty.</h3>
                                    <p className="text-muted mb-4">Before proceed to checkout you must add some products to your shopping cart.<br /> You will find a lot of interesting products on our "Shop" page.</p>
                                    <Link href="/shop-left-sidebar-col-3" className="sp-btn-1">Return To Shop</Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="sp-cart-leftside col-lg-8 col-md-12">
                                    <div className="sp-cart-content">
                                        <div className="sp-cart-inner cart_list">
                                            <div className="row">
                                                <form>
                                                    <div className="table-content cart-table-content">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Price</th>
                                                                    <th style={{ textAlign: "center" }}>Quantity</th>
                                                                    <th>Total</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {items.map((item) => (
                                                                    <tr className="sp-cart-product" key={item.id}>
                                                                        <td data-label="Product" className="sp-cart-pro-name">
                                                                            <Link href={`/product/${item.id}`}>
                                                                                <img className="sp-cart-pro-img" src={item.image || "images/11_1.jpg"} alt={item.name} />{item.name}
                                                                            </Link>
                                                                        </td>
                                                                        <td data-label="Price" className="sp-cart-pro-price">
                                                                            <span className="amount">${item.price.toFixed(2)}</span>
                                                                        </td>
                                                                        <td data-label="Quantity" className="sp-cart-pro-qty" style={{ textAlign: "center" }}>
                                                                            <div className="cart-qty-plus-minus">
                                                                                <div className="dec sp-qtybtn" onClick={() => updateQty(item.id, item.qty - 1)}>-</div>
                                                                                <input className="qty-input" type="text" name="sp-qtybtn" value={item.qty} readOnly />
                                                                                <div className="inc sp-qtybtn" onClick={() => updateQty(item.id, item.qty + 1)}>+</div>
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Total" className="sp-cart-pro-subtotal">
                                                                            ${(item.price * item.qty).toFixed(2)}
                                                                        </td>
                                                                        <td data-label="Remove" className="sp-cart-pro-remove">
                                                                            <a href="#!" onClick={(e) => { e.preventDefault(); removeItem(item.id); }}><i className="ri-delete-bin-line"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="sp-cart-update-bottom">
                                                            <Link href="/shop-left-sidebar-col-3">Continue Shopping</Link>
                                                            <Link href="/checkout" className="sp-btn-2"><span>Check Out</span></Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="sp-cart-rightside col-lg-4 col-md-12 m-t-991">
                                    <div className="sp-sidebar-wrap">
                                        <div className="sp-sidebar-block">
                                            <div className="sp-sb-title">
                                                <h3 className="sp-sidebar-title">Summary</h3>
                                            </div>
                                            <div className="sp-sb-block-content">
                                                <div className="sp-cart-form">
                                                    <p>Enter your destination to get a shipping estimate</p>
                                                    <form>
                                                        <span className="sp-cart-wrap">
                                                            <label>Country *</label>
                                                            <span className="sp-cart-select-inner">
                                                                <CustomSelect
                                                                    options={[
                                                                        { value: "US", label: "United States" },
                                                                        { value: "1", label: "Country 1" },
                                                                        { value: "2", label: "Country 2" },
                                                                        { value: "3", label: "Country 3" },
                                                                        { value: "4", label: "Country 4" },
                                                                        { value: "5", label: "Country 5" }
                                                                    ]}
                                                                    value={country}
                                                                    onChange={setCountry}
                                                                    className="sp-cart-select form-control hide-select"
                                                                    name="gi_cart_country"
                                                                    id="sp-cart-select-country"
                                                                />
                                                            </span>
                                                        </span>
                                                        <span className="sp-cart-wrap">
                                                            <label>State/Province</label>
                                                            <span className="sp-cart-select-inner">
                                                                <CustomSelect
                                                                    options={[
                                                                        { value: "", label: "Please Select a region, state", disabled: true },
                                                                        { value: "1", label: "Region/State 1" },
                                                                        { value: "2", label: "Region/State 2" },
                                                                        { value: "3", label: "Region/State 3" },
                                                                        { value: "4", label: "Region/State 4" },
                                                                        { value: "5", label: "Region/State 5" }
                                                                    ]}
                                                                    value={state}
                                                                    onChange={setState}
                                                                    className="sp-cart-select form-control hide-select"
                                                                    name="gi_cart_state"
                                                                    id="sp-cart-select-state"
                                                                    defaultText="Please Select a region, state"
                                                                />
                                                            </span>
                                                        </span>
                                                        <span className="sp-cart-wrap">
                                                            <label>Zip/Postal Code</label>
                                                            <input type="text" name="postalcode" placeholder="Zip/Postal Code" className="form-control" />
                                                        </span>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="sp-sb-block-content">
                                                <div className="sp-cart-summary-bottom">
                                                    <div className="sp-cart-summary">
                                                        <div>
                                                            <span className="text-left">Sub-Total</span>
                                                            <span className="text-right">${totalPrice.toFixed(2)}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-left">Delivery Charges</span>
                                                            <span className="text-right">$0.00</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-left">Coupan Discount</span>
                                                            <span className="text-right"><a className="sp-cart-coupan" href="#!">Apply Coupan</a></span>
                                                        </div>
                                                        
                                                        <div className="sp-cart-summary-total">
                                                            <span className="text-left">Total Amount</span>
                                                            <span className="text-right">${totalPrice.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
