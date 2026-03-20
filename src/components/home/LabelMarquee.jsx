"use client";
import { labelItems } from "@/data/mockData";

export default function LabelMarquee() {
    return (
        <section className="sp-label-2 m-b-50">
            <div className="shape-2"></div>
            <h2 data-cursor="big" className="d-none">Category</h2>
            <div className="sp-label-list">
                <ul>
                    {labelItems.map((item, i) => (
                        <li key={i}><a href=""><span>{item}</span></a></li>
                    ))}
                </ul>
                <ul>
                    {labelItems.map((item, i) => (
                        <li key={`dup-${i}`}><a href=""><span>{item}</span></a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
