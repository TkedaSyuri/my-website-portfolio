"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

interface IamgeBox {
  imgSrc?: string;
  imgSizeX?:number;
  imgSizeY?:number;
  start?: string;
  end?: string;
  direction: "x" | "y";
  directionValue?: number;
  triggerScroll: boolean;
}

export const ImageBox: React.FC<IamgeBox> = (props) => {
  const { imgSrc,imgSizeX=300,imgSizeY=200, start, end, direction, directionValue, triggerScroll } =
    props;

  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!triggerScroll) return;

    gsap.from(imageRef.current, {
      [direction]: directionValue,
      opacity: 0,
      delay: 1,
      duration: 2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: `top ${start}%`,
        end: `top ${end}%`,
        scrub: 1.5,
      },
    });
  }, [triggerScroll, start, end, direction]);

  useEffect(() => {
    if (triggerScroll) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, [triggerScroll]);

  return (
    <div ref={imageRef} className="my-12">
      <Image
        src={`/images/${imgSrc}`}
        width={imgSizeX}
        height={imgSizeY}
        alt="ポートフォリオ"
      />
    </div>
  );
};
