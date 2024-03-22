import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import footer_img from "../assets/footer_img.png";
import { IoClose } from "react-icons/io5";

const MenuButton = ({ showMenu, setShowMenu }) => {
  const handleMenuButton = () => {
    if (showMenu) setShowMenu(false);
    if (!showMenu) setShowMenu(true);
  };
  return (
    <div>
      {!showMenu ? (
        <IoMenuSharp
          size={30}
          className="block cursor-pointer xl:hidden"
          onClick={handleMenuButton}
        />
      ) : (
        <IoClose
          size={30}
          className="block cursor-pointer xl:hidden"
          onClick={handleMenuButton}
        />
      )}
      {showMenu && (
        <div className="fixed inset-0 mt-16 flex  w-[22rem] flex-col gap-6 overflow-y-scroll bg-black pt-12  font-semibold xl:hidden">
          <div className=" flex items-center pb-8 pl-4">
            <IoPersonOutline className="mr-4 h-10 w-10 rounded-full bg-playerColor p-3 text-black" />
            <span className="italic">Zaloguj się</span>
          </div>
          <span className="cursor-pointer pl-4">Moje konto</span>
          <div className=" w-full bg-gray-700 p-[0.5px]"></div>
          <span className="cursor-pointer pl-4">Poznaj oferte Player</span>
          <div className=" w-full bg-gray-700 p-[0.5px]"></div>
          <span className="cursor-pointer pl-4 text-playerColor">Home</span>
          <span className="cursor-pointer pl-4">TOP10</span>
          <span className="cursor-pointer pl-4">Seriale</span>
          <span className="cursor-pointer pl-4">Filmy</span>
          <span className="cursor-pointer pl-4">HBO</span>
          <span className="cursor-pointer pl-4">News</span>
          <span className="cursor-pointer pl-4">Dla dzieci</span>
          <span className="cursor-pointer pl-4">Euro Sport Extra</span>
          <span className="cursor-pointer pl-4">Canal+ Sport</span>
          <span className="cursor-pointer pl-4">Eleven Sports</span>
          <span className="cursor-pointer pl-4">Ostatnio dodane</span>
          <span className="cursor-pointer pl-4">TVN</span>
          <span className="cursor-pointer pl-4">Canal +</span>
          <span className="cursor-pointer pl-4">HBO</span>
          <span className="cursor-pointer pl-4">discovery+</span>
          <span className="cursor-pointer pl-4">Kanały</span>
          <span className="cursor-pointer pl-4">Program TV</span>
          <span className="cursor-pointer pl-4">PLAYER INTERNATIONAL</span>
          <span className="cursor-pointer pl-4">Pomoc i Kontakt</span>
          <img
            src={footer_img}
            alt="ogladaj_legalnie_photo"
            className="w-3/4 pl-4"
          />
        </div>
      )}
    </div>
  );
};

export default MenuButton;
