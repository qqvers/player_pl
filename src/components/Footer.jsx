import React, { useState } from "react";
import { LuHelpCircle } from "react-icons/lu";
import { MdBuildCircle } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import footer_img from "../assets/footer_img.png";

const Footer = () => {
  const [showRozwin, setShowRozwin] = useState(false);
  function handleRozwin() {
    setShowRozwin((prev) => !prev);
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div
      className={`grid h-[42rem] w-full grid-cols-1 py-8  pl-4 text-xs sm:grid-cols-2 ${showRozwin ? "lg:h-[32rem]" : "lg:h-[20rem]"} lg:grid-cols-6  lg:px-28`}
    >
      <div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <LuHelpCircle size={20} className="mr-4 text-playerColor" />
          <span>Pomoc</span>
        </div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <MdBuildCircle size={20} className="mr-4 text-playerColor" />
          <span>Kod Serwisowy</span>
        </div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <TbBrandSpeedtest size={20} className="mr-4 text-playerColor" />
          <span>Test zgodności</span>
        </div>
        <div className="mb-2 h-[0.5px] w-[95%] bg-gray-700 sm:w-full lg:hidden" />
      </div>
      <div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <FaGift size={20} className="mr-4 text-playerColor" />
          <span>Zrealizuj Voucher</span>
        </div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <PiTelevision size={20} className="mr-4 text-playerColor" />
          <span>Zaloguj sie do HBO MAX</span>
        </div>
        <div className="mb-3 flex cursor-pointer items-center  hover:text-playerColor lg:mb-2">
          <FiMonitor size={20} className="mr-4 text-playerColor" />
          <span>Oglądaj na TV</span>
        </div>
        <div className="mb-2 h-[0.5px] w-[95%] bg-gray-700 lg:hidden" />
      </div>
      <div className="text-green-700 sm:col-span-2 lg:col-span-1 lg:text-gray-500">
        <p className="mb-2  cursor-pointer">Polityka prywatności</p>
        <p className="mb-2  cursor-pointer">Informacje o dostawcach usług</p>
        <p className="mb-2  cursor-pointer">Informacje o nadawcy programów</p>
        <p className="mb-2  cursor-pointer">Regulamin Sklepu Player.pl</p>
        <p className="mb-2  cursor-pointer">Regulamin Usług nieodpłatnych</p>
        <p className="mb-2  cursor-pointer">
          Regulamin sprzedaży Kart Podarunkowych
        </p>
        <p className="mb-2  cursor-pointer">Ustawienia Cookies</p>
        <p className="mb-2  cursor-pointer">
          Udogodnienia dla osób z niepełnosprawnościami
        </p>
        <div className="mb-2 h-[0.5px] w-[95%] bg-gray-700 lg:hidden" />
      </div>
      <div>
        <p className="text-gray-500">Wspieramy akcje</p>
        <img src={footer_img} alt="wspieramy_akcje_photo" />
        <div className="mb-2 h-[0.5px] w-[95%] bg-gray-700 sm:hidden lg:hidden" />
      </div>
      <div className="lg:justify-self-end lg:pl-12">
        <p className="text-gray-500">Znajdz nas na</p>

        <div className="my-2 flex">
          <FaFacebook size={25} className="mr-6 cursor-pointer" />
          <FaInstagram size={25} className=" cursor-pointer" />
        </div>
        <div className="mb-2 h-[0.5px] w-[95%] bg-gray-700 sm:hidden lg:hidden" />
      </div>
      <div className="col-span-2 mb-2 hidden h-[0.5px] w-[95%] bg-gray-700 sm:block lg:hidden" />
      <button
        onClick={handleRozwin}
        className="ml-16 hidden h-[4rem] w-[5rem] flex-col   items-center justify-center justify-self-end rounded-sm border border-playerColor text-playerColor lg:flex"
      >
        <p>{showRozwin ? "Zwiń" : "Rozwiń"}</p>
        <IoIosArrowDown
          size={20}
          className={`transition-transform duration-150 ${showRozwin ? "rotate-180" : ""}`}
        />
      </button>

      {showRozwin && (
        <div className="col-span-6 my-8 h-[0.5px]  bg-gray-700 sm:hidden  lg:block" />
      )}
      {showRozwin && (
        <>
          <div className="col-span-3 text-[1.2rem]">Hity Playera</div>
          <div className="col-span-3 text-[1.2rem]">Kategorie</div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">Nieobecni</p>
            <p className="player-text">Tajemnica zawodowa</p>
            <p className="player-text">Behawiorysta</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">Skazana</p>
            <p className="player-text">Kontrola</p>
            <p className="player-text">Chyłka</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">Szadź</p>
            <p className="player-text">Pajęczyna</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">Seriale</p>
            <p className="player-text">Programy</p>
            <p className="player-text">Filmy</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">Sport</p>
            <p className="player-text">Dla dzieci</p>
            <p className="player-text">Kanały TV</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[0.9rem]">
            <p className="player-text">discovery+</p>
            <p className="player-text">HBO</p>
            <p className="player-text">News</p>
          </div>
        </>
      )}

      {showRozwin && (
        <div className="col-span-6 my-8 mb-2 h-[0.5px]  bg-gray-700 sm:hidden  lg:block" />
      )}

      <div
        className={`my-4 sm:col-span-2 lg:col-span-6 ${showRozwin ? "block" : "lg:hidden"}`}
      >
        <span className=" text-[0.5rem] font-semibold text-gray-600 lg:text-xs">
          Copyright © 1997-2024 TVN S.A Korzystanie z materiałów redakcyjnych
          TVN S.A./TVN Media Sp. z o.o. wymaga wcześniejszej zgody TVN S.A./TVN
          Media Sp. z o.o. oraz zawarcia stosownej umowy licencyjnej. Na
          podstawie art. 25 ust. 1 pkt. 1 b) ustawy o prawie autorskim i prawach
          pokrewnych TVN S.A./TVN Media Sp. z o.o. wyraźnie zastrzega, że dalsze
          rozpowszechnianie artykułów zamieszczonych w programach oraz na
          stronach internetowych TVN S.A./TVN Media Sp. z o.o. jest zabronione.
        </span>
      </div>
    </div>
  );
};

export default Footer;
