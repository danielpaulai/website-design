"use client";

import { useEffect, useRef, useState } from "react";

export default function DeckShell({
  total,
  children,
}: {
  total: number;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const slideHeight = window.innerHeight;
      const idx = Math.round(container.scrollTop / slideHeight) + 1;
      setCurrent(Math.min(Math.max(idx, 1), total));
    };

    container.addEventListener("scroll", update, { passive: true });
    return () => container.removeEventListener("scroll", update);
  }, [total]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const move = (dir: 1 | -1) => {
      const slideHeight = window.innerHeight;
      const target = Math.round(container.scrollTop / slideHeight) + dir;
      container.scrollTo({
        top: Math.max(0, target) * slideHeight,
        behavior: "smooth",
      });
    };

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        move(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        move(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div ref={containerRef} className="deck-container">
        {children}
      </div>
      <div className="deck-counter">
        <span className="deck-counter-current">{String(current).padStart(2, "0")}</span>
        <span className="deck-counter-divider"> / </span>
        <span className="deck-counter-total">{String(total).padStart(2, "0")}</span>
      </div>
      <div className="deck-progress">
        <div
          className="deck-progress-bar"
          style={{ transform: `scaleX(${current / total})` }}
        />
      </div>
      <div className="deck-hint">↓ space · → next</div>
    </>
  );
}
