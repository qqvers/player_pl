import React, { useState } from "react";

const Description = ({ selectedItem }) => {
  const [showWiecej, setShowWiecej] = useState(false);
  return (
    <div className="mx-4 mb-4">
      <div className=" mb-4 text-3xl font-medium md:hidden">
        {selectedItem.header}
      </div>
      <div className="w-full text-xl">
        <div className="md:hidden">
          <button className="w-full rounded-lg bg-playerColor px-4 py-2 font-medium text-black hover:bg-playerColorHover">
            Oglądaj
          </button>
          <button className="mt-4 w-full rounded-lg bg-playerColor px-4 py-2 font-medium text-black hover:bg-playerColorHover">
            Sprawdz oferte
          </button>
          <button className="mt-4 w-full rounded-lg bg-gray-800 px-4 py-2 font-medium  text-gray-200 hover:bg-gray-700">
            Dodaj
          </button>
        </div>
        <div
          className={`relative ${showWiecej ? "h-full" : "h-[5rem]"} grid grid-cols-3 overflow-hidden text-sm md:h-full`}
        >
          <div className="col-span-3 mt-4 md:col-span-1 md:ml-20">
            <h1 className=" mb-4 mt-8 hidden text-xl font-semibold md:block">
              Opis serialu
            </h1>
            <span className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>

          <div>
            <h1 className=" mb-4 ml-8 mt-8 hidden truncate text-xl font-semibold md:block">
              Informacje dodatkowe
            </h1>
            <div className="ml-8 hidden flex-col gap-4 md:flex">
              <span>Data premiery: 2021</span>
              <span>Kraj produkcji: Polska</span>
              <span>Oznaczenia:+12</span>
              <h1>Tagi:</h1>
              <button className="max-w-[12rem] cursor-pointer rounded-lg border-2 border-playerColor bg-transparent px-4 py-2 font-medium text-playerColor  hover:border-gray-200 hover:bg-gray-200 hover:text-black">
                Lorem ipsum
              </button>
              <button className="max-w-[12rem] cursor-pointer rounded-lg border-2 border-playerColor bg-transparent px-4 py-2 font-medium text-playerColor  hover:border-gray-200 hover:bg-gray-200 hover:text-black">
                Lorem ipsum
              </button>
              <button className="max-w-[12rem] cursor-pointer rounded-lg border-2 border-playerColor bg-transparent px-4 py-2 font-medium text-playerColor  hover:border-gray-200 hover:bg-gray-200 hover:text-black">
                Lorem ipsum
              </button>
              <button className="max-w-[12rem] cursor-pointer rounded-lg border-2 border-playerColor bg-transparent px-4 py-2 font-medium text-playerColor  hover:border-gray-200 hover:bg-gray-200 hover:text-black">
                Lorem ipsum
              </button>
            </div>
          </div>

          {!showWiecej && (
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-black opacity-90 md:hidden" />
          )}
        </div>
        <button
          className="text-sm text-playerColor md:hidden"
          onClick={() => setShowWiecej(!showWiecej)}
        >
          {showWiecej ? "Mniej" : "Więcej"}
        </button>
      </div>
    </div>
  );
};

export default Description;
