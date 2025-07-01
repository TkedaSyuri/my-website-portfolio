"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export const ImageBox2 = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(imageRef.current, {
      x: -200,
      opacity: 0,
      delay: 1,
      duration: 2,

      scrollTrigger: {
      start:"top 50%",
      end: "top 30%",
        trigger: imageRef.current,
              scrub: 1.5,

      },
    });
  }, []);

  return (
    <div ref={imageRef} className="my-12">
      <Image
        src="/images/Portfolio2.png"
        width={300}
        height={200}
        alt="ポートフォリオ2"
      />
    </div>
  );
};
