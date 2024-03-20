import React from "react";
import { LuHelpCircle } from "react-icons/lu";
import { MdBuildCircle } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" items-centner flex h-[16rem] w-full justify-between bg-gray-800 px-28 py-8">
      <div>
        <div className="mb-2 flex items-center">
          <LuHelpCircle size={20} className="mr-4 text-playerColor" />
          <span>Pomoc</span>
        </div>
        <div className="mb-2 flex items-center">
          <MdBuildCircle size={20} className="mr-4 text-playerColor" />
          <span>Kod Serwisowy</span>
        </div>
        <div className="mb-2 flex items-center">
          <TbBrandSpeedtest size={20} className="mr-4 text-playerColor" />
          <span>Test zgodności</span>
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-center">
          <FaGift size={20} className="mr-4 text-playerColor" />
          <span>Zrealizuj Voucher</span>
        </div>
        <div className="mb-2 flex items-center">
          <PiTelevision size={20} className="mr-4 text-playerColor" />
          <span>Zaloguj sie do HBO MAX</span>
        </div>
        <div className="mb-2 flex items-center">
          <FiMonitor size={20} className="mr-4 text-playerColor" />
          <span>Oglądaj na TV</span>
        </div>
      </div>
      <div>
        <p>Polityka prywatności</p>
        <p>Informacje o dostawcach usług</p>
        <p>Informacje o nadawcy programów</p>
        <p>Regulamin Sklepu Player.pl</p>
        <p>Regulamin Usług nieodpłatnych</p>
        <p>Regulamin sprzedaży Kart Podarunkowych</p>
        <p>Ustawienia Cookies</p>
        <p>Udogodnienia dla osób z niepełnosprawnościami</p>
      </div>
      <div>x</div>
      <div>x</div>
      <div>x</div>
    </div>
  );
};

export default Footer;
