"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export function useGsapAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // ── AOS-style fade-up via GSAP (thay AOS lib) ──────────────────
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll bằng GSAP ticker (bổ sung cho CSS scroll-behavior)
    ScrollTrigger.defaults({ scroller: window });

    let ctx = gsap.context(() => {
      // 1. Tiêu đề .sp-title h2 – reveal từ dưới lên
      gsap.utils.toArray(".sp-title h2").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 2. Tất cả [data-aos="fade-up"] – giả lập AOS
      gsap.utils.toArray('[data-aos="fade-up"]').forEach((el) => {
        // Skip nếu đã được animate bởi AOS thật
        if (el.classList.contains("aos-animate")) return;
        const delay = parseFloat(el.dataset.aosDelay || 0) / 1000;
        const duration = parseFloat(el.dataset.aosDuration || 1000) / 1000;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "power2.out",
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 3. Parallax cho banner blocks
      gsap.utils.toArray(".sp-banner-block").forEach((banner) => {
        gsap.to(banner, {
          backgroundPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 4. Hero text animation
      gsap.utils
        .toArray(".sp-hero-details, .sp-hero-details h1, .sp-animation")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.1 },
          );
        });

      // 5. Blog image reveal mask
      gsap.utils.toArray(".reveal-wrapper").forEach((wrapper) => {
        const mask = wrapper.querySelector(".reveal-mask");
        if (!mask) return;
        gsap.set(mask, { xPercent: 0 });
        gsap.to(mask, {
          xPercent: 100,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // 6. Product cards stagger
      gsap.utils
        .toArray(".sp-product-box, .sp-collection-block, .sp-category-block")
        .forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              delay: (i % 5) * 0.08,
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            },
          );
        });
    });

    // ── Custom cursor ─────────────────────────────────────────────────
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (!isMobile && !document.querySelector(".bl_Cursor")) {
      const cursor = document.createElement("div");
      cursor.className = "bl_Cursor";
      Object.assign(cursor.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.45)",
        pointerEvents: "none",
        zIndex: "9999",
        transform: "translate(-50%,-50%)",
        transition: "width .2s, height .2s, background .2s",
      });
      document.body.appendChild(cursor);

      const onMove = (e) =>
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.12,
          ease: "power2.out",
        });
      const onEnter = () =>
        gsap.to(cursor, {
          scale: 2,
          background: "rgba(var(--color-primary-rgb,0,180,80),0.55)",
          duration: 0.2,
        });
      const onLeave = () =>
        gsap.to(cursor, {
          scale: 1,
          background: "rgba(0,0,0,0.45)",
          duration: 0.2,
        });

      window.addEventListener("mousemove", onMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      cursor._cleanup = () => {
        window.removeEventListener("mousemove", onMove);
        document.querySelectorAll("a, button").forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      };
    }

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      const cursor = document.querySelector(".bl_Cursor");
      if (cursor?._cleanup) cursor._cleanup();
    };
  }, [pathname]);
}
