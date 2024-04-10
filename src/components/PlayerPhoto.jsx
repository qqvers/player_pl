import React from "react";

const PlayerPhoto = ({ item, hover }) => {
  return (
    <div
      className={` cursor-pointer rounded-2xl p-3 outline-2 outline-playerColor ${hover === "no" ? "" : "hover:outline"}`}
    >
      <img
        src={item.photo}
        alt="program_photo"
        className="h-auto w-full rounded-lg object-cover"
      />
      <p className=" text-wrap">{hover === "no" ? "" : item.header}</p>
    </div>
  );
};

export default PlayerPhoto;
