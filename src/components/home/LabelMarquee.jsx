"use client";

const GROCERY_ITEMS = [
  "50% Vegetables",
  "10% Fresh Fruits",
  "15% Milk & Eggs",
  "30% bakery",
  "22% House Hold",
  "5% Dry Fruits",
];

const FASHION_ITEMS = [
  "50% Fashion",
  "10% Perfume",
  "15% Shoes",
  "30% Glasses",
  "22% Watches",
  "5% Jewellery",
];

// variant: "grocery" (default) | "fashion"
export default function LabelMarquee({ variant = "grocery" }) {
  const cls = variant === "fashion" ? "sp-label-2 m-b-50" : "sp-label m-b-50";
  const items = variant === "fashion" ? FASHION_ITEMS : GROCERY_ITEMS;
  return (
    <section className={cls}>
      {variant === "fashion" && <div className="shape-2"></div>}
      <h2 data-cursor="big" className="d-none">
        Category
      </h2>
      <div className="sp-label-list">
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <a href="">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {items.map((item, i) => (
            <li key={`dup-${i}`}>
              <a href="">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
