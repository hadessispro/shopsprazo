"use client";
import React, { useState, useRef, useEffect } from "react";

export default function CustomSelect({
    options,
    value,
    onChange,
    className = "hide-select",
    name,
    id,
    defaultText = "Select Option",
    wrapperType = "custom-select"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value) || options.find(opt => opt.value === defaultText);
    const displayText = selectedOption ? selectedOption.label : defaultText;

    const handleSelect = (val) => {
        onChange(val);
        setIsOpen(false);
    };

    const innerContent = (
        <>
            <select
                name={name}
                id={id}
                className={className}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0, overflow: "hidden" }}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                ))}
            </select>
            <div className={`custom-select ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                {displayText}
            </div>
            <ul className="select-options" style={{ display: isOpen ? "block" : "none" }}>
                {options.map(opt => (
                    <li
                        key={opt.value}
                        rel={opt.value}
                        className={opt.disabled ? "disabled" : ""}
                        onClick={() => !opt.disabled && handleSelect(opt.value)}
                    >
                        {opt.label}
                    </li>
                ))}
            </ul>
        </>
    );

    if (wrapperType === "select") {
        return (
            <div className="custom-select" ref={selectRef}>
                <div className="select">
                    {innerContent}
                </div>
            </div>
        );
    }

    return (
        <div className="custom-select" ref={selectRef}>
            {innerContent}
        </div>
    );
}
