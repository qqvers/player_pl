import React, { useEffect, useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import playerLogo from "../assets/player_logo.svg";
import { FaSearch } from "react-icons/fa";
import MenuButton from "./MenuButton";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropup } from "react-icons/io";
import { MdTableChart } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineDevices } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import fnLogout from "../utils/fnLogout";

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

  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  let tokenValue = sessionStorage.getItem("token") ? true : false;

  let name = sessionStorage.getItem("name");

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

  useEffect(() => {
    if (hoverMenu || hoveredButton) {
      setShowProfileMenu(true);
    } else {
      setShowProfileMenu(false);
    }
  }, [hoveredButton, hoverMenu]);

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
          <Link to="/">
            <img src={playerLogo} alt="logo" className="w-18 mr-4 h-10" />
          </Link>
          {navList.map((item, index) => (
            <NavbarItem
              item={item}
              key={index}
              setScrollTop={setScrollTop}
              setSmallMenuStatus={setSmallMenuStatus}
            />
          ))}

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
          {!tokenValue ? (
            <>
              <div className="mx-6 flex items-center hover:text-playerColor">
                <IoMdLogIn size={20} />
                <Link to="/login">
                  <button className="">Zaloguj</button>
                </Link>
              </div>

              <Link to="/signup">
                <Button text="ZAŁÓŻ KONTO" />
              </Link>
            </>
          ) : (
            <div
              className="relative flex h-16 w-full items-center justify-between text-white"
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              <CgProfile size={40} className="mr-2" />
              <IoMdArrowDropup className="rotate-180" size={23} />
            </div>
          )}
          {showProfileMenu && (
            <div
              className="fixed right-10 top-[4rem] h-[23rem] w-[13rem] bg-white p-6"
              onMouseEnter={() => setHoverMenu(true)}
              onMouseLeave={() => setHoverMenu(false)}
            >
              <div className="flex h-full w-full flex-col text-black">
                <div className="flex items-center">
                  <CgProfile className="mr-2 w-6" size={30} />
                  <span className="cursor-pointer hover:underline">{name}</span>
                </div>
                <div className="flex items-center">
                  <MdTableChart className="mr-2 w-6" size={30} />
                  <span className="cursor-pointer hover:underline">
                    Zarządzaj profilami
                  </span>
                </div>
                <div className="my-4 h-[1px] w-full bg-gray-600"></div>

                <div className="mt-2 flex items-center">
                  <CiCreditCard1 className="mr-2 w-6" size={25} />
                  <span className="cursor-pointer hover:underline">
                    Moje zakupy
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <MdOutlineDevices className="mr-2 w-6" size={20} />
                  <span className="cursor-pointer hover:underline">
                    Moje urządzenia
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <IoIosSettings className="mr-2 w-6" size={20} />
                  <span className="cursor-pointer hover:underline">
                    Moje dane
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <IoMdLogIn className="mr-2 w-6" size={20} />
                  <span className="cursor-pointer hover:underline">
                    Zaloguj w TV
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <FiHelpCircle className="mr-2 w-6" size={20} />
                  <span className="cursor-pointer hover:underline">Pomoc</span>
                </div>

                <div className="my-4 h-[1px] w-full bg-gray-600"></div>

                <div className="flex items-center">
                  <GrLogout className="mr-2 w-6" size={20} />
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={fnLogout}
                  >
                    Wyloguj się
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-black/50  ${showMenu ? "block" : "hidden"}`}
      />
    </>
  );
};

export default Navbar;
