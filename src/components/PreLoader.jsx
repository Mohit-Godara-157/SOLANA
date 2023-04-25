import React from "react";
import logoImage from "../assets/img/svg/logo.svg";
const PreLoader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div>
      <div className="preloader">
        <img className="animationMove" src={logoImage} alt="logoImage" />
      </div>
    </div>
  );
};

export default PreLoader;
