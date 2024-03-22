import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-lg bg-playerColor px-4 py-2 font-medium text-black hover:bg-playerColorHover">
      {text}
    </button>
  );
};

export default Button;
