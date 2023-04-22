import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HeroSecond from "./HeroSecond";
import GetStarted from "./GetStarted";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DigDeeper from "./DigDeeper";
import GoToTeSource from "./GoToTeSource";
const SecondPage = () => {
  return (
    <>
      <div className="  bg-black d-flex flex-column h_100 vh_xl_100">
        <NavBar />
        <HeroSecond />
      </div>
      <GetStarted />
      <DigDeeper />
      <GoToTeSource />
      <Footer />
    </>
  );
};

export default SecondPage;
