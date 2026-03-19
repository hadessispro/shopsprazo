"use client";
import { useState } from "react";
import Link from "next/link";

const fashionCategories = [
    {
        name: "Clothes",
        hasDropdown: true,
        items: [
            { name: "Men", weight: "-25" },
            { name: "Women", weight: "-52" },
            { name: "Boy", weight: "-40" },
        ]
    },
    {
        name: "Cosmetics",
        hasDropdown: true,
        items: [
            { name: "Men", weight: "-25" },
            { name: "Women", weight: "-52" },
            { name: "Boy", weight: "-40" },
            { name: "Girl", weight: "-35" },
        ]
    },
    {
        name: "Shoes",
        weight: "-15",
        hasDropdown: false,
    },
    {
        name: "Bag",
        weight: "-27",
        hasDropdown: false,
    },
    {
        name: "Electronics",
        hasDropdown: true,
        items: [
            { name: "Men", weight: "-25" },
            { name: "Women", weight: "-52" },
            { name: "Boy", weight: "-40" },
            { name: "Girl", weight: "-35" },
        ]
    }
];

const groceryCategories = [
    {
        name: "Vegetables",
        hasDropdown: true,
        items: [
            { name: "Leafy", weight: "-12" },
            { name: "Root", weight: "-8" },
        ]
    },
    {
        name: "Fruits",
        hasDropdown: true,
        items: [
            { name: "Citrus", weight: "-15" },
            { name: "Tropical", weight: "-20" },
        ]
    },
    {
        name: "Bakery",
        weight: "-10",
        hasDropdown: false,
    },
    {
        name: "Cold Drinks",
        weight: "-5",
        hasDropdown: false,
    }
];

const fashionBrands = [
    { name: "Zara", image: "/images/1_3.jpg" },
    { name: "H&M", image: "/images/2_3.jpg" },
    { name: "Uniqlo", image: "/images/3_2.jpg" },
    { name: "Gucci", image: "/images/4_2.jpg" },
];

const groceryBrands = [
    { name: "Zencart Dairy", image: "/images/1_3.jpg" },
    { name: "Xeta Fruits", image: "/images/2_3.jpg" },
    { name: "Pili Snack", image: "/images/3_2.jpg" },
    { name: "Indiana Juice", image: "/images/4_2.jpg" },
];

const weights = [
    { name: "500gm Pack" },
    { name: "1kg Pack" },
    { name: "2kg Pack" },
    { name: "5kg Pack" },
];

const sizes = [
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
];

const colors = [
    { hex: "#c4d6f9" },
    { hex: "#ff748b" },
    { hex: "#000000" },
    { hex: "#2bff4a" },
    { hex: "#ff7c5e" },
    { hex: "#f155ff" },
    { hex: "#ffef00" },
    { hex: "#c89fff" },
    { hex: "#7bfffa" },
    { hex: "#56ffc1" },
    { hex: "#ffdb9f" },
    { hex: "#9f9f9f" },
    { hex: "#6556ff" },
];

export default function ShopSidebar({ categoryType = 'fashion' }) {
    const isGrocery = categoryType === 'grocery';
    const categories = isGrocery ? groceryCategories : fashionCategories;
    const brands = isGrocery ? groceryBrands : fashionBrands;
    const sizeOrWeightList = isGrocery ? weights : sizes;

    const [openCats, setOpenCats] = useState(isGrocery ? { "Vegetables": true, "Fruits": false } : { "Clothes": true, "Cosmetics": false, "Electronics": false });
    const [activeBrands, setActiveBrands] = useState(isGrocery ? ["Zencart Dairy"] : ["Zara"]);
    const [activeWeights, setActiveWeights] = useState(isGrocery ? ["500gm Pack"] : ["M"]);
    const [activeColors, setActiveColors] = useState(["#2bff4a"]);

    const toggleCat = (name, e) => {
        e.preventDefault();
        setOpenCats(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const toggleBrand = (name) => {
        setActiveBrands(prev => prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]);
    };

    const toggleWeight = (name) => {
        setActiveWeights(prev => prev.includes(name) ? prev.filter(w => w !== name) : [...prev, name]);
    };

    const toggleColor = (hex) => {
        setActiveColors(prev => prev.includes(hex) ? prev.filter(c => c !== hex) : [...prev, hex]);
    };

    return (
        <div className="sp-sidebar-wrap">
            {/* Category Block */}
            <div className="sp-sidebar-block drop">
                <div className="sp-sb-title">
                    <h3 className="sp-sidebar-title">Category</h3>
                </div>
                {categories.map((cat, i) => (
                    <div className={`sp-sb-block-content ${i === 0 ? 'p-t-15' : ''}`} key={cat.name}>
                        <ul>
                            <li>
                                {cat.hasDropdown ? (
                                    <>
                                        <a href="#!" className={`sp-sidebar-block-item main drop ${openCats[cat.name] ? 'show' : ''}`} onClick={(e) => toggleCat(cat.name, e)}>
                                            {cat.name}
                                        </a>
                                        <ul className="sp-cat-sub-dropdown" style={{ display: openCats[cat.name] ? 'block' : 'none' }}>
                                            {cat.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <div className="sp-sidebar-sub-item">
                                                        <Link href="/shop">{item.name} <span>{item.weight}</span></Link>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link href="/shop" className="sp-sidebar-block-item main">
                                        {cat.name}<span>{cat.weight}</span>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* Brand Block */}
            <div className="sp-sidebar-block">
                <div className="sp-sb-title">
                    <h3 className="sp-sidebar-title">Brand</h3>
                </div>
                <div className="sp-sb-block-content brand">
                    <ul>
                        {brands.map((brand, idx) => {
                            const isActive = activeBrands.includes(brand.name);
                            return (
                                <li className={isActive ? "active" : ""} key={idx}>
                                    <div className="sp-sidebar-block-item" onClick={() => toggleBrand(brand.name)} style={{ cursor: "pointer" }}>
                                        <img src={brand.image} alt="vendor" />
                                        <a href="#!" onClick={(e) => e.preventDefault()}>
                                            <span>{brand.name}</span>
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Weight/Size Block */}
            <div className="sp-sidebar-block">
                <div className="sp-sb-title">
                    <h3 className="sp-sidebar-title">{isGrocery ? "Weight" : "Size"}</h3>
                </div>
                <div className="sp-sb-block-content">
                    <ul className="weight">
                        {sizeOrWeightList.map((item, idx) => {
                            const isActive = activeWeights.includes(item.name);
                            return (
                                <li key={idx}>
                                    <div className="sp-sidebar-block-item" onClick={() => toggleWeight(item.name)} style={{ cursor: "pointer" }}>
                                        <input type="checkbox" checked={isActive} readOnly />
                                        <a href="#!" onClick={(e) => e.preventDefault()}>{item.name}</a>
                                        <span className="checked"></span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Color Block */}
            {!isGrocery && (
                <div className="sp-sidebar-block color-block sp-sidebar-block-clr">
                    <div className="sp-sb-title">
                        <h3 className="sp-sidebar-title">Color</h3>
                    </div>
                    <div className="sp-sb-block-content">
                        <ul>
                            {colors.map((color, idx) => {
                                const isActive = activeColors.includes(color.hex);
                                return (
                                    <li className={isActive ? "active" : ""} key={idx}>
                                        <div className="sp-sidebar-block-item" onClick={() => toggleColor(color.hex)} style={{ cursor: "pointer" }}>
                                            <input type="checkbox" checked={isActive} readOnly />
                                            <span className="sp-clr-block" style={{ backgroundColor: color.hex, border: color.hex === '#fff' ? '1px solid #ddd' : 'none' }}></span>
                                            <span className="checked"></span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}

            {/* Tags Block */}
            <div className="sp-sidebar-block">
                <div className="sp-sb-title">
                    <h3 className="sp-sidebar-title">Tags</h3>
                </div>
                <div className="sp-tag-block sp-sb-block-content">
                    {isGrocery ? (
                        ["Fruits", "Organic", "Vegetables", "Fresh", "Dairy"].map(tag => (
                            <Link href="/shop" className="sp-btn-2" key={tag}>{tag}</Link>
                        ))
                    ) : (
                        ["Clothes", "Bag", "Shoes", "Cosmetics", "Fashion"].map(tag => (
                            <Link href="/shop" className="sp-btn-2" key={tag}>{tag}</Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
