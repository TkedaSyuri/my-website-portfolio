import React from "react";
import { DescriptionBox } from "./GSAP/DescriptionBox";
import { ImageBox } from "./GSAP/ImageBox";

interface PortfolioCard {
  imgSrc?: string;
  start?: string;
  end?: string;
  direction: "x" | "y";
  directionValue?: number;
  triggerScroll: boolean;
  DescriptionBox: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCard> = (props) => {
  const {imgSrc,start,end,direction,directionValue,triggerScroll,DescriptionBox } = props;
  return (
    <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hotel_corridor.png')] bg-cover bg-center filter blur-sm"></div>
      <div className="flex items-center justify-center w-full max-w-4xl space-x-16">
        <div className="w-1/2 h-full">
                  <ImageBox
                    imgSrc={imgSrc}
                    
                    direction={direction}
                    directionValue={directionValue}
                    start={start}
                    end={end}
                    triggerScroll={triggerScroll}
                  />
        </div>
        {DescriptionBox}
      </div>
    </section>
  );
};

export default PortfolioCard;
