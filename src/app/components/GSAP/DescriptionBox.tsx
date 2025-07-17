"use client";
import { useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

interface DescriptionBoxProps {
  children: React.ReactNode;
}

export interface DescriptionBoxHandle {
  scrollRight: () => void;
  scrollLeft: () => void;
  scrollNext: () => void;
  scrollTop: () => void;
}

// forwardRef でコンポーネントを作成し、ref 経由で scrollNext を使えるように
export const DescriptionBox = forwardRef<
  DescriptionBoxHandle,
  DescriptionBoxProps
>(({ children }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    
    scrollRight: () => {
      containerRef.current?.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
    },
    scrollLeft: () => {
      containerRef.current?.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
    },
    scrollNext: () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: window.scrollY + window.innerHeight },
        ease: "expo",
      });
    },
    scrollTop: () => {
      const tl = gsap.timeline();

// 縦方向にスクロール（上へ）
  tl.to(window, {
    duration: 1.0,
    scrollTo: { y: 0 },
    ease: "power2.out",
  });

  // 横方向にスクロール（左へ）
  tl.to(window, {
    duration: 1.0,
    scrollTo: { x: 0 },
    ease: "power2.out",
  });    },
  }));

  return (
    <div className="w-full h-[80vh]">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll space-x-8 snap-x snap-mandatory px-8 h-full"
      >
        {children}
      </div>
    </div>
  );
});

DescriptionBox.displayName = "DescriptionBox";
