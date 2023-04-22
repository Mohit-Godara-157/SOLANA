import React from "react";
import logoImage from "../assets/img/svg/logo.svg";
const PreLoader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="preloader">
        <img className="animationMove" src={logoImage} alt="logoImage" />
      </div>
    </div>
  );
};

export default PreLoader;
