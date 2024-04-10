import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Description from "./Description";
import TopSelected from "./TopSelected";
import SeasonSection from "./SeasonSection";
import { useParams } from "react-router-dom";
import programs from "../../data/programs_data";
import random_photos from "../../data/random_photos";

const SelectedPage = () => {
  let { id } = useParams();
  let selectedItem = programs[parseInt(id - 1)];
  return (
    <div>
      <Navbar />
      <TopSelected selectedItem={selectedItem} />
      <div className="block md:hidden">
        <Description selectedItem={selectedItem} />
      </div>
      <SeasonSection />
      <div className="hidden md:block">
        <Description selectedItem={selectedItem} />
      </div>
      <Footer />
    </div>
  );
};

export default SelectedPage;
