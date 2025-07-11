"use client";
import {useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

interface DescriptionBoxProps {
  children: React.ReactNode;
}

export interface DescriptionBoxHandle {
  scrollNext: () => void;
  scrollBack: () => void;
  scrollDown: () => void;
}

// forwardRef でコンポーネントを作成し、ref 経由で scrollNext を使えるように
export const DescriptionBox = forwardRef<
  DescriptionBoxHandle,
  DescriptionBoxProps
>(({ children }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollNext: () => {
      containerRef.current?.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
    },
    scrollBack: () => {
      containerRef.current?.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
    },
    scrollDown: () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: window.scrollY + window.innerHeight },
      ease: "expo.out",
    });
  },
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
