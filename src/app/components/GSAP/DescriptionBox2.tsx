import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DescriptionBox2 = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      duration: 3,

      scrollTrigger: {
        trigger: descRef.current,
      start:"top 80%",
      end: "top 50%",
        scrub: 1.5,
        markers: true
      },
    });

    tl.from(descRef.current, {
      x: -400,
      opacity: 0,
      delay: 1,
      duration: 2,
    });
  }, []);

  return (
    <div ref={descRef} className="my-32">
      {children}
    </div>
  );
};
