"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(307.919);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setVisible(scrollTop > 50);

            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (height > 0) {
                const pathLength = 307.919;
                const newProgress = pathLength - (scrollTop * pathLength) / height;
                setProgress(newProgress);
            }
        };
        window.addEventListener("scroll", onScroll);
        // Initial check
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a
            href="#!"
            className={`back-to-top ${visible ? "active-progress" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            title="Back to Top"
            style={{ display: visible ? "block" : "none" }}
        >
            <i className="ri-arrow-up-double-fill"></i>
            <div className="back-to-top-wrap">
                <svg viewBox="-1 -1 102 102">
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: "stroke-dashoffset 10ms linear",
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: progress
                        }}
                    ></path>
                </svg>
            </div>
        </a>
    );
}
