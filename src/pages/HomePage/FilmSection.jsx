import React, { useState } from "react";
import Carousel from "./Carousel";
import images_data from "../../data/random_photos";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FilmSection = ({ item }) => {
  const images = images_data;
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

  const lorem = item;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative mb-20 h-full w-[full] cursor-pointer overflow-hidden px-4 lg:px-28">
      <div className="w-full pl-4 text-3xl font-medium text-gray-500">
        {lorem}
      </div>
      <Carousel curr={curr}>
        {images.map((item) => (
          <div
            key={item.id}
            className="relative flex h-full w-[300px] flex-col  border-playerColor bg-black p-4 hover:border "
          >
            <img
              src={item.image}
              alt={`random_photo_${item.id}`}
              className="mr-5 h-full w-full cursor-pointer rounded-lg object-cover"
            />
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </Carousel>

      <button
        onClick={prev}
        className={`absolute bottom-0 left-0 h-full p-1 text-white duration-300 hover:bg-black ${
          curr === 0 ? "invisible" : ""
        } ${isHovered ? "bg-black" : ""}`}
        onMouseEnter={handlePrevHover}
        onMouseLeave={handleButtonLeave}
      >
        <FiChevronLeft
          size={40}
          className={`${isHovered ? "" : "invisible"}`}
        />
      </button>
      <button
        onClick={next}
        className={`absolute bottom-0 right-0 h-full p-1 text-white duration-300 hover:bg-black  ${isHovered ? "bg-black" : ""}`}
        onMouseEnter={handleNextHover}
        onMouseLeave={handleButtonLeave}
      >
        <FiChevronRight
          size={40}
          className={`${isHovered ? "" : "invisible"}`}
        />
      </button>
    </div>
  );
};

export default FilmSection;
