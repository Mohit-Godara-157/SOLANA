import React, { useEffect } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import JoinaComu from "./JoinaComu";
import BuildForGrowth from "./BuildForGrowth";
import JoinaThriving from "./JoinaThriving";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const FirstPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);
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
