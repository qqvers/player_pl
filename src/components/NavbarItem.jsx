import React from "react";

const NavbarItem = ({ item }) => {
  return (
    <>
      <button className="button-nav hidden xl:block">{item}</button>
      <div className="fixed left-36 top-16 h-[30rem] w-2/3 bg-gradient-to-r from-black to-[#003333]">
        x
      </div>
    </>
  );
};

export default NavbarItem;
