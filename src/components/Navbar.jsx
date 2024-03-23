import React, { useEffect, useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import playerLogo from "../assets/player_logo.svg";
import { FaSearch } from "react-icons/fa";
import MenuButton from "./MenuButton";
import NavbarItem from "./NavbarItem";

import Button from "./Button";

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
  "POZNAJ OFERTE PLAYER",
];
let scrollValue;
const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [smallMenuStatus, setSmallMenuStatus] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0 && !scrollTop && showMenu) setScrollTop(true);
    if (window.scrollY > 0 && !scrollTop && !showMenu) setScrollTop(true);
    if (window.scrollY === 0 && !scrollTop && !showMenu) setScrollTop(false);
    scrollValue = window.scrollY;
  });

  useEffect(() => {
    if (smallMenuStatus) {
      setScrollTop(true);
    } else if (!showMenu && scrollValue === 0) {
      setScrollTop(false);
    } else if (showMenu && scrollValue === 0) {
      setScrollTop(true);
    } else if (showMenu && scrollValue > 0) {
      setScrollTop(true);
    } else if (!showMenu && scrollValue > 0) {
      setScrollTop(true);
    }
  }, [showMenu, scrollTop]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[100] flex h-16 w-full items-center justify-between whitespace-nowrap px-4 duration-300  2xl:px-8 ${scrollTop ? "bg-black" : "bg-transparent"}`}
      >
        <MenuButton
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          scrollTop={scrollTop}
          setScrollTop={setScrollTop}
        />

        <div className="flex w-[60%] items-center justify-between lg:justify-center xl:w-full xl:justify-normal">
          <img src={playerLogo} alt="logo" className="w-18 mr-4 h-10" />
          {navList.map((item, index) => (
            <NavbarItem
              item={item}
              key={index}
              setScrollTop={setScrollTop}
              setSmallMenuStatus={setSmallMenuStatus}
            />
          ))}
          {/* <button className="button-nav hidden font-medium text-playerColor xl:block">
            POZNAJ OFERTE PLAYER
          </button> */}
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

          <Button text="ZAŁÓŻ KONTO" />
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-black/50  ${showMenu ? "block" : "hidden"}`}
      />
    </>
  );
};

export default Navbar;
