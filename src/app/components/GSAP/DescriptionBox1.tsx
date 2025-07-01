import { useRef, useEffect } from "react";
import gsap from "gsap";



export const DescriptionBox1 = ({ children }: { children: React.ReactNode }) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(()=>{
    gsap.from(descRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      
    });
    });
     return () => ctx.revert();
  }, []);

  return (
    <div ref={descRef} className="my-10">
      {children}
    </div>
  );
};
