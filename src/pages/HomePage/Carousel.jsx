import React from "react";

export default function Carousel({ children: slides, curr }) {
  return (
    <div className="relative w-fit overflow-hidden">
      <div
        className="flex h-60  transition-transform duration-500 ease-out hover:bg-playerColor"
        style={{ transform: `translateX(-${curr * 20}vh)` }}
      >
        {slides}
      </div>
    </div>
  );
}
