import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface DescriptionBox {
  children: React.ReactNode;
  start?: string;
  end?: string;
  direction: "x" | "y";
  directionValue?: number;
  triggerScroll: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export const DescriptionBox: React.FC<DescriptionBox> = (props) => {
  const { children,direction,directionValue, start, end, triggerScroll } = props;

  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!triggerScroll) return;

    const tl = gsap.timeline({
      delay: 0.5,
      duration: 3,

      scrollTrigger: {
        trigger: descRef.current,
        start: `top ${start}%`,
        end: `top ${end}%`,
        scrub: 1.5,
        markers: true,
      },
    });

    tl.from(descRef.current, {
      [direction]: directionValue,
      opacity: 0,
      delay: 1,
      duration: 2,
    });
  }, []);

  useEffect(() => {
    if (triggerScroll) return;

    const ctx = gsap.context(() => {
      gsap.from(descRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, [triggerScroll]);

  return (
    <div ref={descRef} className="my-32">
      {children}
    </div>
  );
};
