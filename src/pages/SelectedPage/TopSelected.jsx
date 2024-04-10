import React from "react";
import Button from "../../components/Button";

const Top = ({ selectedItem }) => {
  return (
    <>
      <div
        className={`h-[400px]  overflow-hidden md:h-[500px] lg:h-[600px] 2xl:h-[700px]`}
      >
        <div
          key={selectedItem.id}
          className="relative z-0 h-[360px] w-full md:h-[900px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        >
          <div className="relative h-full">
            <div className="absolute inset-0 h-1/4 from-transparent to-black opacity-90 md:bg-gradient-to-t" />
            <div className="absolute inset-0 top-auto h-1/3 from-transparent to-black md:bg-gradient-to-b " />
            <div className="absolute inset-0 top-auto hidden h-full w-3/4 from-transparent to-black md:block md:bg-gradient-to-l " />

            <img
              src={selectedItem.photo}
              className="h-full w-full object-cover"
              alt="photo_top"
            />
            <div className="absolute left-0 top-[75%] ml-4 w-full -translate-y-1/2 transform text-left text-3xl font-bold text-white md:top-[36%] md:ml-20 md:text-5xl lg:top-[50%] lg:pl-4 lg:text-left lg:text-4xl ">
              <div className="relative mt-48 hidden lg:block">
                <img
                  src={selectedItem.photo}
                  alt={selectedItem.header}
                  className="mb-8 h-auto w-[12rem] rounded-md lg:w-[20rem]"
                />
                <div className="absolute inset-0 top-auto h-2/3 w-[15rem] from-transparent to-black md:bg-gradient-to-b lg:w-[20rem] " />
              </div>
              <div className="hidden md:block lg:w-1/2">
                {selectedItem.header}
              </div>
              <div className="hidden pt-4 text-lg font-medium text-gray-400 md:block md:w-[40%]">
                {selectedItem.description}
              </div>
              <div className="flex gap-2">
                <div className="mt-8 hidden text-lg md:block">
                  <Button text="Oglądaj" />
                </div>
                <div className="mt-8 hidden text-lg md:block">
                  <Button text="Sprawdz oferte" />
                </div>
                <div className="mt-8 hidden text-lg md:block">
                  <Button text="Dodaj" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
