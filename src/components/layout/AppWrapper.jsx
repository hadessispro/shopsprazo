"use client";
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
import { useGsapAnimations } from "@/hooks/useGsapAnimations";

export default function AppWrapper({ children }) {
    useGsapAnimations();

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
