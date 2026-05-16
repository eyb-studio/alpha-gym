"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mq.matches);
    const onChange = () => setIsFinePointer(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;
    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    };

    let raf = 0;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnterInteractive = () => ring.classList.add("scale-150");
    const onLeaveInteractive = () => ring.classList.remove("scale-150");

    window.addEventListener("mousemove", onMove);
    const interactiveEls = document.querySelectorAll(
      "a, button, [role='button']",
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [isFinePointer]);

  // Don't render the elements at all on touch devices — keeps the DOM clean
  // and prevents any chance of interfering with mobile gestures.
  if (!isFinePointer) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-bone mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-8 w-8 rounded-full border border-bone/40 mix-blend-difference transition-transform duration-300 ease-[var(--ease-cinema)]"
      />
    </>
  );
}
