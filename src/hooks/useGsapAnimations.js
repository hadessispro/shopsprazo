"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export function useGsapAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Context for easy cleanup
        let ctx = gsap.context(() => {
            // 1. Text Reveal Animation (.sp-title h2)
            const titles = gsap.utils.toArray(".sp-title h2");
            titles.forEach((title) => {
                gsap.from(title, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: title,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 2. Fade Up General Animation ([data-aos="fade-up"])
            const fadeElements = gsap.utils.toArray('[data-aos="fade-up"]');
            fadeElements.forEach((el) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // 3. Blog Image Reveal Animation (.reveal-mask)
            const revealWrappers = gsap.utils.toArray(".reveal-wrapper");
            revealWrappers.forEach((wrapper) => {
                const mask = wrapper.querySelector(".reveal-mask");
                if (!mask) return;

                // Set initial state: mask covers image
                gsap.set(mask, { xPercent: 0 });

                // On scroll, slide mask out to the right to reveal blog image
                gsap.to(mask, {
                    xPercent: 100,
                    duration: 1.2,
                    ease: "power3.inOut",
                    onComplete: () => {
                        wrapper.classList.add("revealed");
                    },
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    }
                });
            });

            // 3. Parallax Banner Animation (.sp-banner-block)
            const banners = gsap.utils.toArray(".sp-banner-block");
            banners.forEach((banner) => {
                gsap.to(banner, {
                    backgroundPosition: "50% 100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: banner,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // 4. Custom Cursor Logic
            const cursor = document.createElement('div');
            cursor.className = 'bl_Cursor';
            const inner = document.createElement('div');
            inner.className = 'bl_Cursor__inner';
            cursor.appendChild(inner);

            // Only add cursor if not on mobile/touch device and it doesn't exist
            if (!window.matchMedia("(pointer: coarse)").matches && !document.querySelector('.bl_Cursor')) {
                document.body.appendChild(cursor);

                cursor.style.position = 'fixed';
                cursor.style.top = '0';
                cursor.style.left = '0';
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderRadius = '50%';
                cursor.style.backgroundColor = 'rgba(0,0,0,0.5)';
                cursor.style.pointerEvents = 'none';
                cursor.style.zIndex = '9999';
                cursor.style.transform = 'translate(-50%, -50%)';
                cursor.style.transition = 'transform 0.1s ease, width 0.2s ease, height 0.2s ease';

                const moveCursor = (e) => {
                    gsap.to(cursor, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                };

                const hoverCursor = () => {
                    gsap.to(cursor, { scale: 2, backgroundColor: "rgba(255,0,0,0.5)", duration: 0.2 });
                };

                const unhoverCursor = () => {
                    gsap.to(cursor, { scale: 1, backgroundColor: "rgba(0,0,0,0.5)", duration: 0.2 });
                };

                window.addEventListener("mousemove", moveCursor);

                // Add hover effects for links and buttons
                const interactables = document.querySelectorAll('a, button');
                interactables.forEach(el => {
                    el.addEventListener('mouseenter', hoverCursor);
                    el.addEventListener('mouseleave', unhoverCursor);
                });

                // Cleanup cursor listeners later
                cursor._cleanup = () => {
                    window.removeEventListener("mousemove", moveCursor);
                    interactables.forEach(el => {
                        el.removeEventListener('mouseenter', hoverCursor);
                        el.removeEventListener('mouseleave', unhoverCursor);
                    });
                    if (document.body.contains(cursor)) {
                        document.body.removeChild(cursor);
                    }
                };
            }
        });

        // Cleanup function
        return () => {
            ctx.revert(); // Revert all GSAP animations
            ScrollTrigger.getAll().forEach(t => t.kill()); // Kill all triggers

            // Cleanup cursor if created
            const cursor = document.querySelector('.bl_Cursor');
            if (cursor && cursor._cleanup) {
                cursor._cleanup();
            }
        };
    }, [pathname]); // Re-run when pathname changes to ensure new elements are animated
}
