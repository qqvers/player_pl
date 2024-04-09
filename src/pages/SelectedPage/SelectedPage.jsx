import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Description from "./Description";
import TopSelected from "./TopSelected";
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
      <Description selectedItem={selectedItem} />
      <Footer />
    </div>
  );
};

export default SelectedPage;
