import React from "react";
import Carousel from "./Carousel"; // Importujemy komponent Carousel
import images_data from "../../data/random_photos";

const FilmSection = () => {
  const images = images_data;

  return (
    <div className="relative h-full w-[full] overflow-hidden px-4 lg:px-28">
      <Carousel>
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
            <p>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilmSection;
