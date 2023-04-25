import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="d-flex flex-column flex-grow-1 align-items-center py-4 py-md-5 py-xl-0 justify-content-center overflowXhidden">
      <Container className="customContainer">
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-white text-center ff_HelveticaNormal fs_6xl"
        >
          Powerful for developers.
          <span className="d-md-block">Fast for everyone.</span>
        </h2>
        <p
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="mt-4 mt-md-5 text-center mb-0 text-white ff_HelveticaNormal"
        >
          Bring blockchain to the people. Solana supports experiences{" "}
          <span className="d-md-block">
            for power users, new consumers, and everyone in between.
          </span>
        </p>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="d-flex mt-4 mt-md-5 justify-content-center"
        >
          <button className="text-white fs_3xsm text-uppercase startBtn ff_roboto fw-normal border-0">
            Start building
          </button>
          <button className="ms-4 text-white fs_3xsm text-uppercase readBtn ff_roboto fw-normal ">
            Read docs
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
