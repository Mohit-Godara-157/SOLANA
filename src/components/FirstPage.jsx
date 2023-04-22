import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import JoinaComu from "./JoinaComu";
import BuildForGrowth from "./BuildForGrowth";
import JoinaThriving from "./JoinaThriving";
import Footer from "./Footer";
const FirstPage = () => {
  return (
    <>
      <div className="heroImage bg-black d-flex flex-column  h_100 vh_xl_100">
        <NavBar />
        <HeroSection />
      </div>
      <JoinaComu />
      <BuildForGrowth />
      <JoinaThriving />
      <Footer />
    </>
  );
};

export default FirstPage;
