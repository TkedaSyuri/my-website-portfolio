"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const ImageBox1 = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(imageRef.current, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={imageRef}
      className="w-100 h-80 bg-blue-500 flex items-center justify-center text-white font-bold my-32"
    >
      {children}
    </div>
  );
};
