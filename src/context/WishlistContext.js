"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [items, setItems] = useState([]);

    const normalizeId = useCallback((id) => String(id), []);

    useEffect(() => {
        try {
            const saved = localStorage.getItem("sp-wishlist");
            if (saved) setItems(JSON.parse(saved));
        } catch { }
    }, []);

    useEffect(() => {
        localStorage.setItem("sp-wishlist", JSON.stringify(items));
    }, [items]);

    const addItem = useCallback((product) => {
        if (!product || product.id === undefined || product.id === null) return;

        const normalizedId = normalizeId(product.id);
        setItems((prev) => {
            if (prev.find((i) => normalizeId(i.id) === normalizedId)) return prev;
            return [...prev, product];
        });
    }, [normalizeId]);

    const removeItem = useCallback((id) => {
        const normalizedId = normalizeId(id);
        setItems((prev) => prev.filter((i) => normalizeId(i.id) !== normalizedId));
    }, [normalizeId]);

    const isInWishlist = useCallback(
        (id) => items.some((i) => normalizeId(i.id) === normalizeId(id)),
        [items, normalizeId]
    );

    return (
        <WishlistContext.Provider
            value={{ items, addItem, removeItem, isInWishlist, count: items.length }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}
