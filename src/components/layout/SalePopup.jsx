"use client";
import { useState, useEffect } from "react";

const SALE_ITEMS = [
    {
        name: "Fresh Raspberry",
        img: "/images/24_1.jpg",
        time: "05 Minutes ago",
    },
    {
        name: "Organic Tomato",
        img: "/images/11_1.jpg",
        time: "12 Minutes ago",
    },
    {
        name: "Fresh Strawberry",
        img: "/images/1_5.jpg",
        time: "18 Minutes ago",
    },
    {
        name: "Fresh Pineapple",
        img: "/images/15_1.jpg",
        time: "25 Minutes ago",
    },
];

export default function SalePopup() {
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        // Show popup after 3 seconds
        const showTimer = setTimeout(() => {
            setVisible(true);
        }, 3000);

        return () => clearTimeout(showTimer);
    }, [dismissed]);

    useEffect(() => {
        if (!visible || dismissed) return;

        // Auto-hide after 5 seconds, then show next item
        const hideTimer = setTimeout(() => {
            setVisible(false);

            // Show next item after 4 seconds gap
            const nextTimer = setTimeout(() => {
                if (!dismissed) {
                    setCurrentItem((prev) => (prev + 1) % SALE_ITEMS.length);
                    setVisible(true);
                }
            }, 4000);

            return () => clearTimeout(nextTimer);
        }, 5000);

        return () => clearTimeout(hideTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible, currentItem]);

    const handleClose = () => {
        setVisible(false);
        setDismissed(true);
    };

    const item = SALE_ITEMS[currentItem];

    return (
        <div className={`sp-recent${visible ? " sp-recent-show" : ""}`}>
            <img src={item.img} alt={item.name} />
            <div className="detail">
                <p className="bought">Someone in new just bought</p>
                <h6>{item.name}</h6>
                <p>{item.time}</p>
            </div>
            <a
                href="#!"
                className="icon-btn recent-close"
                onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                }}
            >
                ×
            </a>
        </div>
    );
}
