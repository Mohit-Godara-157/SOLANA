import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Data from "./card2";
import Slider from "react-slick";
const DigDeeper = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1400,
        },
      },
    ],
  };
  return (
    <div className="overflowXhidden">
      <Container className="customContainer">
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-white mt-4 text-center text-lg-start mb-0 ff_HelveticaNormal fs_4lg"
        >
          Dig deeper.
        </h2>
        <p
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="fs_4sm ff_HelveticaNormal text-center text-lg-start text_dark_50"
        >
          Learn from resources across the greater Solana ecosystem.
        </p>
        <Slider {...settings} className="pt-3 pb-5 row">
          {Data.map((obj) => {
            return (
              <Col className="my-3" lg={4}>
                <div className="deeperCard d-flex flex-column justify-content-between align-items-start position-relative overflow-hidden z_4 p-4 mx-2 mx-xl-0  h-100">
                  <div>
                    <p
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="curser mb-0 ff_HelveticaNormal fs_2xsm text-uppercase text_darkBlue l_Spacing_1"
                    >
                      {obj.para}
                    </p>
                    <p
                      data-aos="zoom-in-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="mt-2 mb-0 ff_HelveticaNormal fs_3sm text-white"
                    >
                      {obj.para1}
                    </p>
                    <p
                      data-aos="zoom-out-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="mb-0 mt-3 text-white ff_HelveticaNormal fs_4xsm"
                    >
                      {obj.para2}
                    </p>
                  </div>
                  <button
                    data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="bg-transparent border-0 btnHover text-white fs_xsm text-uppercase mt-4 mb-2"
                  >
                    {obj.btn}
                    <svg
                      className="ms-2"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.08008 11L11.0801 1"
                        stroke="#848895"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.08008 1H11.0801V11"
                        stroke="#848895"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Col>
            );
          }).slice(0, 8)}
        </Slider>
      </Container>
    </div>
  );
};

export default DigDeeper;
