import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevHover = () => {
    setIsHovered(true);
  };

  const handleNextHover = () => {
    setIsHovered(true);
  };

  const handleButtonLeave = () => {
    setIsHovered(false);
  };

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-fit overflow-hidden">
      <div
        className="flex h-60  transition-transform duration-500 ease-out hover:bg-playerColor"
        style={{ transform: `translateX(-${curr * 105}%)` }}
      >
        {slides}
      </div>

      <button
        onClick={prev}
        className={`absolute bottom-0 left-0 h-full p-1 text-white duration-300 hover:bg-black ${
          curr === 0 ? "invisible" : ""
        } ${isHovered ? "bg-black" : ""}`}
        onMouseEnter={handlePrevHover}
        onMouseLeave={handleButtonLeave}
      >
        <FiChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className={`absolute bottom-0 right-0 h-full p-1 text-white duration-300 hover:bg-black ${
          curr === 1 ? "2xl:invisible" : ""
        } ${isHovered ? "bg-black" : ""}`}
        onMouseEnter={handleNextHover}
        onMouseLeave={handleButtonLeave}
      >
        <FiChevronRight size={40} />
      </button>
    </div>
  );
}
