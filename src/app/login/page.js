import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Login - Sprazo",
    description: "Login to your Sprazo account",
};

export default function LoginPage() {
    return (
        <>
            <section className="sp-breadcrumb margin-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 className="sp-breadcrumb-title">Login Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Login Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-login padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Login</p>
                                <h2 data-cursor="big">Get access to your Orders, Wishlist and Recommendations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sp-login-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="sp-login-box">
                            <div className="sp-login-wrapper">
                                <div className="sp-login-container">
                                    <div className="sp-login-form">
                                        <form>
                                            <span className="sp-login-wrap">
                                                <label>Email Address*</label>
                                                <input type="text" name="name" placeholder="Enter your email..." required />
                                            </span>
                                            <span className="sp-login-wrap">
                                                <label>Password*</label>
                                                <input type="password" name="password" placeholder="Enter your password" required />
                                            </span>
                                            <span className="sp-login-wrap sp-login-fp">
                                                <span className="sp-remember">
                                                    <input type="checkbox" value="" />
                                                    Remember
                                                    <span className="checked"></span>
                                                </span>
                                                <label><Link href="/forgot">Forgot Password?</Link></label>
                                            </span>
                                            <span className="sp-login-wrap sp-login-btn">
                                                <span><Link href="/register">Create Account?</Link></span>
                                                <button className="sp-btn-1 btn" type="submit"><span>Login</span></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sp-login-box d-n-991">
                            <div className="sp-login-img">
                                <img src="/images/1_7.jpg" alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
