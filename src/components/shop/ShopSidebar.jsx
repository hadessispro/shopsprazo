"use client";
import { useState } from "react";
import {
  sidebarShopCategories,
  shopBrands,
  shopWeights,
  shopColors,
  shopTags,
} from "@/data/shopData";

function CategoryBlock() {
  const [openCats, setOpenCats] = useState({ 0: true });
  const toggle = (idx) => setOpenCats((p) => ({ ...p, [idx]: !p[idx] }));

  return (
    <div className="sp-sidebar-block drop">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Category</h3>
      </div>
      <div className="cat-list">
        {sidebarShopCategories.map((cat, idx) => (
          <div
            className="sp-sb-block-content"
            key={idx}
            style={idx === 0 ? { paddingTop: 15 } : {}}
          >
            <ul>
              <li>
                {cat.hasDropdown ? (
                  <>
                    <a
                      href="#!"
                      className="sp-sidebar-block-item main drop"
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(idx);
                      }}
                    >
                      {cat.name}
                    </a>
                    <ul
                      className="sp-cat-sub-dropdown"
                      style={{ display: openCats[idx] ? "block" : "none" }}
                    >
                      {cat.items.map((sub, si) => (
                        <li key={si}>
                          <div className="sp-sidebar-sub-item">
                            <a href="#!">
                              {sub.name}
                              <span>{sub.weight}</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href="#!" className="sp-sidebar-block-item main">
                    {cat.name}
                    <span>{cat.weight}</span>
                  </a>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandBlock() {
  const [active, setActive] = useState(0);
  return (
    <div className="sp-sidebar-block">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Brand</h3>
      </div>
      <div className="sp-sb-block-content brand">
        <ul>
          {shopBrands.map((b, i) => (
            <li key={i} className={active === i ? "active" : ""}>
              <div className="sp-sidebar-block-item">
                <img src={b.img} alt="vendor" />
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i);
                  }}
                >
                  <span>{b.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WeightBlock() {
  return (
    <div className="sp-sidebar-block">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Weight</h3>
      </div>
      <div className="sp-sb-block-content">
        <ul>
          {shopWeights.map((w, i) => (
            <li key={i}>
              <div className="sp-sidebar-block-item">
                <input type="checkbox" defaultChecked={i === 0} />
                <a href="#!">{w}</a>
                <span className="checked"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ColorBlock() {
  return (
    <div className="sp-sidebar-block color-block sp-sidebar-block-clr">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Color</h3>
      </div>
      <div className="sp-sb-block-content">
        <ul>
          {shopColors.map((c, i) => (
            <li key={i} className={i === 3 ? "active" : ""}>
              <div className="sp-sidebar-block-item">
                <input type="checkbox" />
                <span
                  className="sp-clr-block"
                  style={{ backgroundColor: c }}
                ></span>
                <span className="checked"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PriceBlock() {
  const [max, setMax] = useState(250);
  return (
    <div className="sp-sidebar-block">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Price</h3>
      </div>
      <div className="sp-sb-block-content sp-price-range-slider es-price-slider">
        <div className="sp-price-filter">
          <div className="sp-price-input">
            <label className="filter__label">
              From
              <input type="text" className="filter__input" defaultValue="0" />
            </label>
            <span className="sp-price-divider"></span>
            <label className="filter__label">
              To
              <input
                type="text"
                className="filter__input"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </label>
          </div>
          <div style={{ padding: "10px 0" }}>
            <input
              type="range"
              min="0"
              max="250"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TagsBlock() {
  return (
    <div className="sp-sidebar-block">
      <div className="sp-sb-title">
        <h3 className="sp-sidebar-title">Tags</h3>
      </div>
      <div className="sp-tag-block sp-sb-block-content">
        {shopTags.map((tag, i) => (
          <a href="#!" className="sp-btn-2" key={i}>
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ShopSidebar() {
  return (
    <div id="shop_sidebar">
      <div className="sp-sidebar-wrap">
        <CategoryBlock />
        <BrandBlock />
        <WeightBlock />
        <ColorBlock />
        <PriceBlock />
        <TagsBlock />
      </div>
    </div>
  );
}
