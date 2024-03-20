import React, { useState, useEffect, useRef } from "react";
import programs from "../../data/top_data";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa6";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Top = () => {
  const [counter, setCounter] = useState(1);

  useInterval(() => {
    setCounter((prevCounter) =>
      prevCounter === programs.length ? 1 : prevCounter + 1,
    );
  }, 10000);

  return (
    <div className="h-[400px] overflow-hidden md:h-[1000px] lg:h-[800px] 2xl:h-[850px]">
      {programs.map((item) => (
        <div
          key={item.id}
          className={`relative z-0 h-[360px] md:h-[900px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full${counter === item.id ? "" : " hidden"}`}
        >
          <div className="relative h-full  ">
            <div className="absolute inset-0 h-1/4 bg-gradient-to-t from-transparent to-black opacity-90" />
            <div className="absolute inset-0 top-auto h-1/3 bg-gradient-to-b from-transparent to-black " />
            <div className="absolute inset-0 top-auto hidden h-full w-3/4 bg-gradient-to-l from-transparent to-black lg:block " />

            <img
              src={item.photo}
              className="h-full w-full  object-cover"
              alt="photo_top"
            />
            <div className="absolute left-0 top-[75%] w-full -translate-y-1/2 transform text-center text-3xl font-bold text-white md:top-[85%] md:text-5xl lg:top-[50%] lg:pl-4 lg:text-left lg:text-4xl 2xl:pl-32">
              <div className="lg:w-1/2">{item.header}</div>
              <div className=" hidden pt-4 text-lg font-medium text-gray-400 md:block lg:w-[40%]">
                {item.description}
              </div>
              <button className="hidden lg:block">TO DO LATER</button>
            </div>

            <div className="bottom-10 mx-4 flex h-12 w-full items-center justify-center pt-4 lg:relative lg:h-12 lg:w-full lg:justify-start lg:pr-6 2xl:ml-28">
              {programs.map((item) => (
                <div
                  key={item.id}
                  className="2xl:full  relative lg:mx-2 lg:h-24 lg:w-36"
                >
                  <GoDotFill
                    className={` cursor-pointer lg:hidden ${counter === item.id ? "text-white" : "text-gray-400"}`}
                    onClick={() => setCounter(item.id)}
                  />
                  <img
                    src={item.photo}
                    className={`hidden h-full w-full cursor-pointer rounded-2xl  ${counter === item.id ? "bg-white" : "bg-transparent"} object-cover p-[1px] shadow-md hover:bg-white lg:block`}
                    alt="photo_select"
                    onClick={() => setCounter(item.id)}
                  />
                </div>
              ))}
              <FaChevronLeft
                onClick={() =>
                  setCounter((prevState) =>
                    prevState === 1 ? programs.length : prevState - 1,
                  )
                }
                className="absolute left-0 top-1/2 hidden h-full w-2 -translate-x-1/2 -translate-y-1/2 scale-150 cursor-pointer  text-transparent duration-300 hover:text-white lg:block"
              />
              <FaChevronLeft
                onClick={() =>
                  setCounter((prevState) =>
                    prevState === 10 ? 1 : prevState + 1,
                  )
                }
                className="absolute right-4 top-1/2 hidden h-full w-2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-150 cursor-pointer text-transparent  duration-300 hover:text-white lg:block min-[1620px]:left-[1600px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;
