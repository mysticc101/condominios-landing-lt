"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({ children, className }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const motionIsReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || document.documentElement.dataset.a11yMotion === "reduce";

    if (!element || motionIsReduced) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const isAlreadyVisible = bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0;

    if (isAlreadyVisible) {
      element.dataset.reveal = "visible";
      return () => {
        delete element.dataset.reveal;
      };
    }

    element.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.01 }
    );

    const frame = window.requestAnimationFrame(() => {
      element.dataset.revealReady = "true";
      observer.observe(element);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      delete element.dataset.reveal;
      delete element.dataset.revealReady;
    };
  }, []);

  return <div ref={elementRef} className={className}>{children}</div>;
}
