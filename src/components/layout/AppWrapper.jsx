"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SideCart from "@/components/cart/SideCart";
import BackToTop from "@/components/layout/BackToTop";
import ToolsSidebar from "@/components/layout/ToolsSidebar";
import CategoryPopup from "@/components/layout/CategoryPopup";
import SalePopup from "@/components/layout/SalePopup";
import Loader from "@/components/layout/Loader";
import AOS from "aos";
import Lenis from "lenis";

export default function AppWrapper({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  /* Init AOS + Lenis on mount */
  useEffect(() => {
    /* AOS - animate on scroll, once only */
    AOS.init({
      once: true,
      duration: 800,
      offset: 80,
      easing: "ease-in-out",
    });

    /* Lenis - smooth scroll (replaces GSAP ScrollSmoother from HTML template) */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* Refresh AOS + scroll to top on route change */
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Loader />
          <Header />
          <CategoryPopup />
          {children}
          <Footer />
          <SideCart />
          <BackToTop />
          <ToolsSidebar />
          <SalePopup />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
