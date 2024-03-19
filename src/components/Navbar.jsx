import React from "react";
import { IoMdLogIn } from "react-icons/io";
import playerLogo from "../assets/player_logo.svg";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const navList = [
  "Seriale",
  "Programy",
  "Filmy",
  "HBO",
  "News",
  "Sport",
  "Kanały",
  "Więcej",
  "Moja lista",
];
const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 mt-2 flex h-10 w-full items-center justify-between bg-transparent px-8 pt-4">
      <IoMenuSharp size={30} className="block xl:hidden" />
      <div className="flex w-[60%] items-center justify-between xl:w-full xl:justify-normal">
        <img src={playerLogo} alt="logo" className="w-18 mr-4 h-10" />
        {navList.map((item, index) => (
          <button key={index} className="button-nav hidden xl:block">
            {item}
          </button>
        ))}
        <button className="button-nav text-playerColor hidden font-medium xl:block">
          POZNAJ OFERTE PLAYER
        </button>
        <div className="relative">
          <input
            type="text"
            defaultValue="Co chcesz obejrzeć?"
            className="hidden w-[300px] rounded-md border border-white bg-gray-600/50 px-2 py-1 xl:inline"
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="hidden xl:flex">
        <div className="hover:text-playerColor mx-6 flex items-center">
          <IoMdLogIn size={20} />
          <button className="">Zaloguj</button>
        </div>

        <button className="bg-playerColor hover:bg-playerColorHover rounded-lg px-4 py-2 text-black">
          Załóż konto
        </button>
      </div>
    </div>
  );
};

export default Navbar;
