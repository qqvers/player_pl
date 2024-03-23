import React from "react";
import Top from "./Top";
import FilmSection from "./FilmSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const dummyTitles = [
  "Lorem ipsum dolor sit amet",
  "sed do eiusmod tempor incididunt",
  "magna aliqua Ut enim ad ",
  "exercitation ullamco laboris nisi",
  "commodo consequat Duis aute ",
  "in voluptate velit esse ",
  "nulla pariatur Excepteur ",
  "proident, sunt in culpa ",
  "anim id est laborum.",
  "Lorem ipsum dolor sit amet",
  "sed do eiusmod tempor incididunt",
  "magna aliqua Ut enim ad ",
  "exercitation ullamco laboris nisi",
  "commodo consequat Duis aute ",
  "in voluptate velit esse ",
  "nulla pariatur Excepteur ",
  "proident, sunt in culpa ",
  "anim id est laborum.",
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Top />
      {dummyTitles.map((item, index) => (
        <FilmSection key={index} item={item.toUpperCase()} />
      ))}
      <Footer />
    </div>
  );
};

export default HomePage;
