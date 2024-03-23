import React, { useEffect, useState } from "react";
import programs from "../data/programs_data";
import PlayerPhoto from "./PlayerPhoto";
import fnShuffleArray from "../utils/fnShuffleArray";

const NavbarItem = ({ item, setScrollTop, setSmallMenuStatus }) => {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (hoverMenu || hoveredButton) {
      setSmallMenuStatus(true);
      setShowMenu(true);
      setScrollTop(true);
    } else {
      setSmallMenuStatus(false);
      setShowMenu(false);
      setScrollTop(false);
    }
  }, [hoveredButton, hoverMenu]);
  return (
    <>
      <button
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className="button-nav hidden xl:block"
      >
        <span
          className={`${item === "POZNAJ OFERTE PLAYER" && " font-medium text-playerColor"}`}
        >
          {item}
        </span>
      </button>

      <div
        onMouseEnter={() => setHoverMenu(true)}
        onMouseLeave={() => setHoverMenu(false)}
        className={`${!showMenu ? "hidden" : "block"}`}
      >
        <div className="fixed left-36 top-16 flex h-[30rem] w-[56rem] bg-gradient-to-r from-black to-[#003333] pr-2 pt-4">
          <div className="mx-12  flex h-full w-[10%] flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400">KATEGORIE</p>
            <p className="player-text">Rozrywka</p>
            <p className="player-text">Kuchnia</p>
            <p className="player-text">Poradniki</p>
            <p className="player-text">Podróże i przyroda</p>
            <p className="player-text">Talk-show</p>
            <p className="player-text">Motoryzacja</p>
            <p className="player-text">Dom i ogród</p>
            <button className="mt-[7rem] self-center rounded-lg border border-white px-6 py-2  hover:border-playerColor hover:text-playerColor">
              WSZYSTKIE
            </button>
          </div>

          <div className="ml-8 w-[90%]">
            <p className="pl-3 text-xs font-semibold text-gray-400">
              POPULARNE
            </p>
            <div className="grid grid-cols-3 pt-2">
              {fnShuffleArray(programs.slice(0, 6)).map((item) => (
                <PlayerPhoto item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="fixed left-[21rem] top-20 h-[28rem]  bg-gray-700 p-[0.5px]"></div>
      </div>
    </>
  );
};

export default NavbarItem;
