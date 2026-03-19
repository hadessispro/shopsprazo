"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [cityDrop, setCityDrop] = useState(false);
    const [selectedCity, setSelectedCity] = useState("City");
    
    const [countryDrop, setCountryDrop] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Country");
    
    const [stateDrop, setStateDrop] = useState(false);
    const [selectedState, setSelectedState] = useState("Region/State");

    return (
        <>
            <section className="sp-breadcrumb margin-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Register Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Register Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-register padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Register</p>
                                <h2 data-cursor="big">Best place to buy and sell digital products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="sp-register-wrapper">
                            <div className="sp-register-container">
                                <div className="sp-register-form">
                                    <form>
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>First Name*</label>
                                            <input type="text" name="firstname" placeholder="Enter your first name" required />
                                        </span>
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Last Name*</label>
                                            <input type="text" name="lastname" placeholder="Enter your last name" required />
                                        </span>
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Email*</label>
                                            <input type="email" name="email" placeholder="Enter your email..." required />
                                        </span>
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Phone Number*</label>
                                            <input type="text" name="phonenumber" placeholder="Enter your phone number" required />
                                        </span>
                                        <span className="sp-register-wrap">
                                            <label>Address</label>
                                            <input type="text" name="address" placeholder="Address Line 1" />
                                        </span>
                                        
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>City *</label>
                                            <span className="sp-rg-select-inner">
                                                <div className="select">
                                                    <select name="gi_select_city" className="sp-register-select hide-select" style={{ display: 'none' }} value={selectedCity} onChange={() => {}}>
                                                        <option value="City" disabled>City</option>
                                                        <option value="City 1">City 1</option>
                                                        <option value="City 2">City 2</option>
                                                    </select>
                                                    <div className={`custom-select ${cityDrop ? "active" : ""}`} onClick={() => setCityDrop(!cityDrop)}>
                                                        {selectedCity}
                                                    </div>
                                                    <ul className="select-options" style={{ display: cityDrop ? "block" : "none" }}>
                                                        {["City 1", "City 2", "City 3"].map(val => (
                                                            <li key={val} onClick={() => { setSelectedCity(val); setCityDrop(false); }}>{val}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </span>
                                        </span>
                                        
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Post Code</label>
                                            <input type="text" name="postalcode" placeholder="Post Code" />
                                        </span>
                                        
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Country *</label>
                                            <span className="sp-rg-select-inner">
                                                <div className="select">
                                                    <select name="gi_select_country" className="sp-register-select hide-select" style={{ display: 'none' }} value={selectedCountry} onChange={() => {}}>
                                                        <option value="Country" disabled>Country</option>
                                                        <option value="Country 1">Country 1</option>
                                                        <option value="Country 2">Country 2</option>
                                                    </select>
                                                    <div className={`custom-select ${countryDrop ? "active" : ""}`} onClick={() => setCountryDrop(!countryDrop)}>
                                                        {selectedCountry}
                                                    </div>
                                                    <ul className="select-options" style={{ display: countryDrop ? "block" : "none" }}>
                                                        {["Country 1", "Country 2", "Country 3"].map(val => (
                                                            <li key={val} onClick={() => { setSelectedCountry(val); setCountryDrop(false); }}>{val}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </span>
                                        </span>
                                        
                                        <span className="sp-register-wrap sp-register-half">
                                            <label>Region State</label>
                                            <span className="sp-rg-select-inner">
                                                <div className="select">
                                                    <select name="gi_select_state" className="sp-register-select hide-select" style={{ display: 'none' }} value={selectedState} onChange={() => {}}>
                                                        <option value="Region/State" disabled>Region/State</option>
                                                        <option value="Region 1">Region 1</option>
                                                    </select>
                                                    <div className={`custom-select ${stateDrop ? "active" : ""}`} onClick={() => setStateDrop(!stateDrop)}>
                                                        {selectedState}
                                                    </div>
                                                    <ul className="select-options" style={{ display: stateDrop ? "block" : "none" }}>
                                                        {["Region/State 1", "Region/State 2"].map(val => (
                                                            <li key={val} onClick={() => { setSelectedState(val); setStateDrop(false); }}>{val}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </span>
                                        </span>
                                        
                                        <span className="sp-register-wrap sp-register-btn">
                                            <span>Have an account? <Link href="/login">Login</Link></span>
                                            <button className="sp-btn-1" type="submit"><span>Register</span></button>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
