import { useEffect } from "react";

// Adds a fade-in-on-scroll effect to every element matching `selector`.
// The "reveal" class is added from JS so content stays visible if it never runs.
export default function useReveal(selector) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
}
