"use client";
import { labelItems } from "@/data/mockData";

// variant: "grocery" (default) | "fashion"
export default function LabelMarquee({ variant = "grocery" }) {
  const cls = variant === "fashion" ? "sp-label-2 m-b-50" : "sp-label m-b-50";
  return (
    <section className={cls}>
      {variant === "fashion" && <div className="shape-2"></div>}
      <h2 data-cursor="big" className="d-none">
        Category
      </h2>
      <div className="sp-label-list">
        <ul>
          {labelItems.map((item, i) => (
            <li key={i}>
              <a href="">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {labelItems.map((item, i) => (
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
