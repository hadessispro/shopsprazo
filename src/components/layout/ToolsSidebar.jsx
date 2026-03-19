"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ToolsSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { colorTheme, setColorTheme, mode, setMode, direction, setDirection, boxLayout, setBoxLayout } = useTheme();

    const colors = [
        "color-primary", "color-1", "color-2", "color-3", "color-4",
        "color-5", "color-6", "color-7", "color-8", "color-9"
    ];

    return (
        <>
            <div className={`sp-tools-sidebar-overlay ${isOpen ? "active" : ""}`} data-cursor="hide" onClick={() => setIsOpen(false)} style={{ display: isOpen ? "block" : "none" }}></div>
            <div className={`sp-tools-sidebar ${isOpen ? "open-tools" : ""}`}>
                <a href="#!" className="sp-tools-sidebar-toggle in-out" onClick={(e) => { e.preventDefault(); setIsOpen(true); }} style={{ display: isOpen ? "none" : "" }}>
                    <i className="ri-settings-3-line"></i>
                </a>
                <div className="sp-bar-title">
                    <h6>Tools</h6>
                    <a href="#!" className="close-tools" onClick={(e) => { e.preventDefault(); setIsOpen(false); }}><i className="ri-close-line"></i></a>
                </div>
                <div className="sp-tools-detail">
                    {/* Color Selection */}
                    <div className="sp-tools-block">
                        <h3>Select Color</h3>
                        <ul className="sp-color">
                            {colors.map((c) => (
                                <li
                                    key={c}
                                    className={`${c} ${colorTheme === c ? "active-variant" : ""}`}
                                    onClick={() => setColorTheme(c)}
                                ></li>
                            ))}
                        </ul>
                    </div>

                    {/* RTL / LTR */}
                    <div className="sp-tools-block">
                        <h3>Modes</h3>
                        <div className="sp-tools-rtl">
                            <div
                                className={`mode-primary sp-tools-item rtl-mode mode ltr ${direction === "ltr" ? "active-mode" : ""}`}
                                onClick={() => setDirection("ltr")}
                            >
                                <img src="/images/ltr.png" alt="ltr" />
                                <p>LTR</p>
                            </div>
                            <div
                                className={`sp-tools-item rtl-mode mode rtl ${direction === "rtl" ? "active-mode" : ""}`}
                                onClick={() => setDirection("rtl")}
                            >
                                <img src="/images/rtl.png" alt="rtl" />
                                <p>RTL</p>
                            </div>
                        </div>
                    </div>

                    {/* Dark / Light */}
                    <div className="sp-tools-block">
                        <h3>Dark Modes</h3>
                        <div className="sp-tools-dark">
                            <div
                                className={`mode-primary sp-tools-item mode-dark light ${mode === "light" ? "active-mode" : ""}`}
                                onClick={() => setMode("light")}
                            >
                                <img src="/images/light.png" alt="light" />
                                <p>Light</p>
                            </div>
                            <div
                                className={`sp-tools-item mode-dark dark ${mode === "dark" ? "active-mode" : ""}`}
                                onClick={() => setMode("dark")}
                            >
                                <img src="/images/dark.png" alt="dark" />
                                <p>Dark</p>
                            </div>
                        </div>
                    </div>

                    {/* Box Layout */}
                    <div className="sp-tools-block">
                        <h3>Box Design</h3>
                        <div className="sp-tools-box">
                            {["default", "box-1", "box-2"].map((b, i) => (
                                <div
                                    key={b}
                                    className={`sp-tools-item box ${boxLayout === b ? "active" : ""}`}
                                    onClick={() => setBoxLayout(b)}
                                >
                                    <img src={`/images/box-${i + 1}.png`} alt={b} />
                                    <p>{b === "default" ? "Default" : b.charAt(0).toUpperCase() + b.slice(1)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
