import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export const ImageBox1 = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={imageRef}>
      <Image
        src="/images/Portfolio1.png"
        width={700}
        height={600}
        alt="ポートフォリオ１"
        className="rounded-sm"
      />
    </div>
  );
};
