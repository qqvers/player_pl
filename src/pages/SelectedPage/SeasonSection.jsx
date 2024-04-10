import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import programs from "../../data/programs_data";
import fnShuffleArray from "../../utils/fnShuffleArray";
import PlayerPhoto from "../../components/PlayerPhoto";

const SeasonSection = () => {
  return (
    <div className="mx-4 my-8 grid grid-cols-3 text-xl font-semibold md:ml-16 lg:ml-24">
      <div className="col-span-3 flex flex-col  md:col-span-2">
        <div className="ml-4 flex justify-center text-playerColor hover:text-white md:items-center md:justify-start">
          <span className="mr-4 hidden  text-white md:block">Odcinki </span>
          <button className="relative mb-4 w-full rounded-lg bg-gray-800 px-4 py-2 font-medium text-playerColor hover:text-white md:mb-0  md:w-fit   md:bg-transparent">
            SEZON 8
            <IoIosArrowDown
              className="absolute bottom-2 left-[6rem] ml-1 hidden md:block"
              size={25}
            />
          </button>
        </div>

        <div className="flex h-[40rem] flex-col overflow-hidden overflow-y-scroll">
          {fnShuffleArray(programs).map((item) => (
            <div className="grid cursor-pointer grid-cols-3" key={item.id}>
              <PlayerPhoto item={item} hover="no" />
              <div className="col-span-2 self-center text-sm md:text-lg">
                <p>{item.header}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-4 hidden md:block">
        <h1 className="ml-4 text-2xl text-playerColor">
          Może Cię zainteresować
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {fnShuffleArray(programs).map((item, index) => (
            <div
              className={`cursor-pointer ${index >= 4 ? "hidden lg:block" : ""}`}
              key={item.id}
            >
              <PlayerPhoto item={item} hover="no" />
              <p className="ml-4 truncate text-sm font-semibold">
                {item.header}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonSection;
