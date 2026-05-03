"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => node.classList.add("is-visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
