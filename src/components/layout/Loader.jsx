"use client";
import { useState, useEffect } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="sp-loader" style={{ opacity: visible ? 1 : 0 }}>
      <img src="/images/favicon.png" alt="logo" />
      <span className="loader"></span>
    </div>
  );
}
