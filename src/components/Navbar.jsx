import React, { useState } from "react";
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
  const [scrollTop, setScrollTop] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.scrollY > 0 && !scrollTop) setScrollTop(true);
    if (this.scrollY === 0 && scrollTop) setScrollTop(false);
  });
  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex h-16 w-full items-center justify-between whitespace-nowrap  px-4  2xl:px-8 ${scrollTop ? "bg-black" : "bg-transparent"}`}
    >
      <IoMenuSharp size={30} className="block xl:hidden" />
      <div className="flex w-[60%] items-center justify-between lg:justify-center xl:w-full xl:justify-normal">
        <img src={playerLogo} alt="logo" className="w-18 mr-4 h-10" />
        {navList.map((item, index) => (
          <button key={index} className="button-nav hidden xl:block">
            {item}
          </button>
        ))}
        <button className="button-nav hidden font-medium text-playerColor xl:block">
          POZNAJ OFERTE PLAYER
        </button>
        <div className="relative">
          <input
            type="text"
            defaultValue="Co chcesz obejrzeć?"
            className="hidden  w-full rounded-md border border-white bg-gray-600/50 px-2 py-1 xl:inline"
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 lg:right-[-330px] xl:right-2" />
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="mx-6 flex items-center hover:text-playerColor">
          <IoMdLogIn size={20} />
          <button className="">Zaloguj</button>
        </div>

        <button className=" rounded-lg bg-playerColor px-4 py-2 text-black hover:bg-playerColorHover">
          Załóż konto
        </button>
      </div>
    </div>
  );
};

export default Navbar;
