"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const categories = {
  Vegetables: [
    { name: "Tomato", discount: "30%" },
    { name: "Onion", discount: "20%" },
    { name: "Broccoli", discount: "25%" },
    { name: "Radicchio", discount: "10%" },
    { name: "asparagus", discount: "05%" },
    { name: "red chilli", discount: "20%" },
  ],
  Bakery: [
    { name: "donut", discount: "10%" },
    { name: "Waffles", discount: "30%" },
    { name: "Bread", discount: "15%" },
    { name: "Cup cake", discount: "25%" },
    { name: "Croissant", discount: "20%" },
    { name: "biscuits", discount: "35%" },
  ],
  Fruits: [
    { name: "Apple", discount: "10%" },
    { name: "Mango", discount: "30%" },
    { name: "Pineapple", discount: "15%" },
    { name: "Orange", discount: "25%" },
    { name: "Cherry", discount: "20%" },
    { name: "Grapes", discount: "35%" },
  ],
  Fashion: [
    { name: "T-shirt", discount: "25%" },
    { name: "Dress", discount: "15%" },
    { name: "jeans", discount: "15%" },
    { name: "Suit", discount: "45%" },
    { name: "Coat", discount: "24%" },
    { name: "Shoes", discount: "11%" },
  ],
};

export default function CategoryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  useEffect(() => {
    // Listen for clicks on .sp-category-toggle buttons anywhere in the page
    const toggleBtns = document.querySelectorAll(".sp-category-toggle");
    toggleBtns.forEach((btn) => btn.addEventListener("click", open));
    return () => {
      toggleBtns.forEach((btn) => btn.removeEventListener("click", open));
    };
  }, [open]);

  return (
    <>
      <div
        className={`sp-category-popup-overlay sticky-header-next-sec${isOpen ? "" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
        onClick={close}
        data-cursor="hide"
      ></div>
      <div className={`sp-category-popup${isOpen ? " sp-category-open" : ""}`}>
        <a
          href="#!"
          className={`sp-category-close${isOpen ? "" : " sp-category-close-hide"}`}
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <i className="ri-close-large-line"></i>
        </a>
        <div className="sp-category-search">
          <h4>Also you can search more Categories!</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="sp-category-popup-search"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
          <div className="sp-cat-list">
            {Object.entries(categories).map(([title, items]) => (
              <ul key={title}>
                <li className="title">{title}</li>
                {items.map((item) => {
                  const isMatch =
                    search.length >= 1 &&
                    item.name.toLowerCase().includes(search.toLowerCase());
                  return (
                    <li
                      className={`list${isMatch ? " active" : ""}`}
                      key={item.name}
                    >
                      <Link href="/shop">
                        {item.name} <span>- {item.discount}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
