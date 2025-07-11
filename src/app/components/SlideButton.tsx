import clsx from "classnames";
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";
import { DescriptionBoxHandle } from "./GSAP/DescriptionBox";

interface SlideButtonProps {
  direction: "left" | "right";
  textColor: string;
  targetRef: React.RefObject<DescriptionBoxHandle | null>;
}

const SlideButton: React.FC<SlideButtonProps> = ({ direction, textColor, targetRef }) => {
  const handleClick = () => {
    if (direction === "right") {
      targetRef.current?.scrollNext();
    } else if (direction === "left") {
            targetRef.current?.scrollBack();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("text-6xl hover:text-8xl duration-500", {
        "text-red-200": textColor === "red",
        "text-green-200": textColor === "green",
        "text-cyan-200": textColor === "cyan",
        "text-pink-200": textColor === "pink",
        "text-orange-200": textColor === "orange",
      })}
    >
      {direction === "right" ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />}
    </button>
  );
};

export default SlideButton;
