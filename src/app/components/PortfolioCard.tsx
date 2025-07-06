import React from "react";
import { ImageBox } from "./GSAP/ImageBox";

interface PortfolioCard {
  bgImg:string
  imgSrc?: string;
  imgSizeX?: number;
  imgSizeY?: number;
  start?: string;
  end?: string;
  direction: "x" | "y";
  directionValue?: number;
  triggerScroll: boolean;
  DescriptionBox: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCard> = (props) => {
  const {
    bgImg,
    imgSrc,
    imgSizeX,
    imgSizeY,
    start,
    end,
    direction,
    directionValue,
    triggerScroll,
    DescriptionBox,
  } = props;
  return (
    <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: `url(/images/${bgImg})` }}></div>
      <div className="flex items-center justify-center w-full max-w-4xl space-x-16">
          <ImageBox
            imgSrc={imgSrc}
            imgSizeX={imgSizeX}
            imgSizeY={imgSizeY}
            direction={direction}
            directionValue={directionValue}
            start={start}
            end={end}
            triggerScroll={triggerScroll}
          />
        {DescriptionBox}
      </div>
    </section>
  );
};

export default PortfolioCard;
