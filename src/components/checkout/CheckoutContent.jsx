"use client";
import Link from "next/link";
import { useState } from "react";
import CustomSelect from "@/components/ui/CustomSelect";
import { useCart } from "@/context/CartContext";

export default function CheckoutContent() {
    const { items, totalPrice } = useCart();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", company: "", country: "US",
        address: "", city: "", state: "", zip: "", phone: "", email: "", notes: ""
    });
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [deliveryMethod, setDeliveryMethod] = useState("free");

    const deliveryRate = deliveryMethod === "flat" ? 5.00 : 0.00;
    const finalTotal = totalPrice + deliveryRate;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment processing would happen here!");
    };

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Checkout Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Checkout Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checkout section */}
            <section className="sp-checkout-section padding-tb-50">
                <div className="container">
                    <h2 data-cursor="big" className="d-none">Checkout Page</h2>
                    <div className="row">
                        <div className="sp-checkout-leftside col-lg-8 col-md-12">
                            {/* checkout content Start */}
                            <div className="sp-checkout-content">
                                <div className="sp-checkout-inner">
                                    <div className="sp-checkout-wrap m-b-30">
                                        <div className="sp-checkout-block sp-check-new">
                                            <h3 className="sp-checkout-title">New Customer</h3>
                                            <div className="sp-check-block-content">
                                                <div className="sp-check-subtitle">Checkout Options</div>
                                                <form>
                                                    <span className="sp-new-option">
                                                        <span className="m-b-15">
                                                            <input type="radio" id="account1" name="radio-group" defaultChecked />
                                                            <label htmlFor="account1">Register Account</label>
                                                        </span>
                                                        <span className="m-b-15">
                                                            <input type="radio" id="account2" name="radio-group" />
                                                            <label htmlFor="account2">Guest Account</label>
                                                        </span>
                                                    </span>
                                                </form>
                                                <div className="sp-new-desc">
                                                    By creating an account you will be able to shop
                                                    faster,
                                                    be up to date on an order's status, and keep track of the orders you
                                                    have
                                                    previously made.
                                                </div>
                                                <div className="sp-new-btn"><a href="#" className="sp-btn-1"><span>Continue</span></a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="sp-checkout-block sp-check-login">
                                            <h3 className="sp-checkout-title">Returning Customer</h3>
                                            <div className="sp-check-login-form">
                                                <form>
                                                    <span className="sp-check-login-wrap">
                                                        <label>Email Address</label>
                                                        <input type="text" name="name" placeholder="Enter your email address" required />
                                                    </span>
                                                    <span className="sp-check-login-wrap">
                                                        <label>Password</label>
                                                        <input type="password" name="password" placeholder="Enter your password" required />
                                                    </span>

                                                    <span className="sp-check-login-wrap sp-check-login-btn">
                                                        <button className="sp-btn-1" type="submit"><span>Login</span></button>
                                                        <a className="sp-check-login-fp" href="#">Forgot Password?</a>
                                                    </span>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="sp-checkout-wrap m-b-30 padding-bottom-3">
                                        <div className="sp-checkout-block sp-check-bill">
                                            <h3 className="sp-checkout-title">Billing Details</h3>
                                            <div className="sp-bl-block-content">
                                                <div className="sp-check-subtitle">Checkout Options</div>
                                                <span className="sp-bill-option">
                                                    <span className="m-b-15">
                                                        <input type="radio" id="bill1" name="radio-group" />
                                                        <label htmlFor="bill1">I want to use an existing address</label>
                                                    </span>
                                                    <span className="m-b-15">
                                                        <input type="radio" id="bill2" name="radio-group" defaultChecked />
                                                        <label htmlFor="bill2">I want to use new address</label>
                                                    </span>
                                                </span>
                                                <div className="sp-check-bill-form">
                                                    <form>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>First Name*</label>
                                                            <input type="text" name="firstname" placeholder="Enter your first name" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                                        </span>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>Last Name*</label>
                                                            <input type="text" name="lastname" placeholder="Enter your last name" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                                        </span>
                                                        <span className="sp-bill-wrap">
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Address Line 1" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                                                        </span>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>City *</label>
                                                            <span className="sp-bl-select-inner">
                                                                <CustomSelect
                                                                    options={[
                                                                        { value: "", label: "City", disabled: true },
                                                                        { value: "City 1", label: "City 1" },
                                                                        { value: "City 2", label: "City 2" },
                                                                        { value: "City 3", label: "City 3" },
                                                                        { value: "City 4", label: "City 4" },
                                                                        { value: "City 5", label: "City 5" }
                                                                    ]}
                                                                    value={formData.city}
                                                                    onChange={(val) => setFormData({ ...formData, city: val })}
                                                                    className="sp-bill-select hide-select"
                                                                    name="gi_select_city"
                                                                    defaultText="City"
                                                                />
                                                            </span>
                                                        </span>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>Post Code</label>
                                                            <input type="text" name="postalcode" placeholder="Post Code" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
                                                        </span>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>Country *</label>
                                                            <span className="sp-bl-select-inner">
                                                                <CustomSelect
                                                                    options={[
                                                                        { value: "", label: "Country", disabled: true },
                                                                        { value: "US", label: "United States" },
                                                                        { value: "UK", label: "United Kingdom" },
                                                                        { value: "CA", label: "Canada" },
                                                                        { value: "AU", label: "Australia" },
                                                                        { value: "VN", label: "Vietnam" }
                                                                    ]}
                                                                    value={formData.country}
                                                                    onChange={(val) => setFormData({ ...formData, country: val })}
                                                                    className="sp-bill-select hide-select"
                                                                    name="gi_select_country"
                                                                    id="sp-select-country"
                                                                    defaultText="Country"
                                                                />
                                                            </span>
                                                        </span>
                                                        <span className="sp-bill-wrap sp-bill-half">
                                                            <label>Region State</label>
                                                            <span className="sp-bl-select-inner">
                                                                <CustomSelect
                                                                    options={[
                                                                        { value: "", label: "Region/State", disabled: true },
                                                                        { value: "Region/State 1", label: "Region/State 1" },
                                                                        { value: "Region/State 2", label: "Region/State 2" },
                                                                        { value: "Region/State 3", label: "Region/State 3" },
                                                                        { value: "Region/State 4", label: "Region/State 4" },
                                                                        { value: "Region/State 5", label: "Region/State 5" }
                                                                    ]}
                                                                    value={formData.state}
                                                                    onChange={(val) => setFormData({ ...formData, state: val })}
                                                                    className="sp-bill-select hide-select"
                                                                    name="gi_select_state"
                                                                    defaultText="Region/State"
                                                                />
                                                            </span>
                                                        </span>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <span className="sp-check-order-btn m-t-30">
                                        <a className="sp-btn-2" href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }}><span>Place Order</span></a>
                                    </span>
                                </div>
                            </div>
                            {/* checkout content End */}
                        </div>
                        {/* Sidebar Area Start */}
                        <div className="sp-checkout-rightside col-lg-4 col-md-12 m-t-991">
                            <div className="sp-sidebar-wrap">
                                {/* Sidebar Summary Block */}
                                <div className="sp-sidebar-block">
                                    <div className="sp-sb-title">
                                        <h3 className="sp-sidebar-title">Summary</h3>
                                    </div>
                                    <div className="sp-sb-block-content">
                                        <div className="sp-checkout-summary">
                                            <div>
                                                <span className="text-left">Sub-Total</span>
                                                <span className="text-right">${totalPrice.toFixed(2)}</span>
                                            </div>
                                            <div>
                                                <span className="text-left">Delivery Charges</span>
                                                <span className="text-right">${deliveryRate.toFixed(2)}</span>
                                            </div>
                                            <div>
                                                <span className="text-left">Coupon Discount</span>
                                                <span className="text-right"><a className="sp-checkout-coupan">Apply Coupon</a></span>
                                            </div>
                                            <div className="sp-checkout-coupan-content">
                                                <form className="sp-checkout-coupan-form" name="sp-checkout-coupan-form">
                                                    <input className="sp-coupan" type="text" required placeholder="Enter Your Coupon Code" name="sp-coupan" />
                                                    <button className="sp-coupan-btn sp-btn-2" type="button"><span>Apply</span></button>
                                                </form>
                                            </div>
                                            <div className="sp-checkout-summary-total">
                                                <span className="text-left">Total Amount</span>
                                                <span className="text-right">${finalTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="sp-checkout-pro">
                                            {items.map((item) => (
                                                <div className="col-sm-12 mb-6" key={item.id}>
                                                    <div className="sp-product-inner">
                                                        <div className="sp-pro-image-outer">
                                                            <div className="sp-pro-image">
                                                                <Link href={`/product/${item.id}`} className="image">
                                                                    <img className="main-image" src={item.image} alt="Product" />
                                                                    <img className="hover-image" src={item.imageHover || item.image} alt="Product" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="sp-pro-content">
                                                            <h5 className="sp-pro-title"><Link href={`/product/${item.id}`}>{item.name} x {item.qty}</Link></h5>
                                                            <div className="sp-pro-rating">
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill grey"></i>
                                                            </div>
                                                            <span className="sp-price">
                                                                <span className="new-price">${item.price.toFixed(2)}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Summary Block */}
                            </div>
                            <div className="sp-sidebar-wrap sp-checkout-del-wrap">
                                {/* Sidebar Delivery Block */}
                                <div className="sp-sidebar-block">
                                    <div className="sp-sb-title">
                                        <h3 className="sp-sidebar-title">Delivery Method</h3>
                                    </div>
                                    <div className="sp-sb-block-content">
                                        <div className="sp-checkout-del">
                                            <div className="sp-del-desc">Please select the preferred shipping method to use
                                                on this
                                                order.</div>
                                            <form>
                                                <span className="sp-del-option">
                                                    <span>
                                                        <span className="sp-del-opt-head">Free Shipping</span>
                                                        <input type="radio" id="del1" name="delivery" checked={deliveryMethod === "free"} onChange={() => setDeliveryMethod("free")} />
                                                        <label htmlFor="del1">Rate - $0.00</label>
                                                    </span>
                                                    <span>
                                                        <span className="sp-del-opt-head">Flat Rate</span>
                                                        <input type="radio" id="del2" name="delivery" checked={deliveryMethod === "flat"} onChange={() => setDeliveryMethod("flat")} />
                                                        <label htmlFor="del2">Rate - $5.00</label>
                                                    </span>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Delivery Block */}
                            </div>
                            <div className="sp-sidebar-wrap sp-checkout-del-wrap">
                                {/* Sidebar Payment Block */}
                                <div className="sp-sidebar-block">
                                    <div className="sp-sb-title">
                                        <h3 className="sp-sidebar-title">Payment Method</h3>
                                    </div>
                                    <div className="sp-sb-block-content">
                                        <div className="sp-checkout-pay">
                                            <div className="sp-pay-desc">Please select the preferred payment method to use
                                                on this
                                                order.</div>
                                            <form>
                                                <span className="sp-pay-option m-b-15">
                                                    <span>
                                                        <input type="radio" id="pay1" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                                        <label htmlFor="pay1">Cash On Delivery</label>
                                                    </span>
                                                    <span style={{ marginLeft: "15px" }}>
                                                        <input type="radio" id="pay2" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                                                        <label htmlFor="pay2">Credit/Debit Card</label>
                                                    </span>
                                                </span>
                                                <span className="sp-pay-commemt">
                                                    <span className="sp-pay-opt-head">Add extra note</span>
                                                    <textarea name="your-commemt" placeholder="Comments" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
                                                </span>
                                                <span className="sp-pay-agree">
                                                    <input type="checkbox" value="" id="agree" />
                                                    <label htmlFor="agree">I have agree with <Link href="#">Terms &amp; Conditions.</Link></label>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Payment Block */}
                            </div>
                            <div className="sp-sidebar-wrap sp-checkout-del-wrap">
                                {/* Sidebar Payment Block */}
                                <div className="sp-sidebar-block">
                                    <div className="sp-sb-title">
                                        <h3 className="sp-sidebar-title">Payment Image</h3>
                                    </div>
                                    <div className="sp-sb-block-content">
                                        <div className="sp-check-pay-img-inner">
                                            <div className="sp-check-pay-img">
                                                <img src="/images/payment.png" alt="payment" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Payment Block */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
