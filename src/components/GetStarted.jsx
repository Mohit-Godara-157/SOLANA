import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myData from "./Card";
import Slider from "react-slick";

const GetStarted = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
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
    <div>
      <Container className="customContainer">
        <h2 className="text-white mt-4 mb-0 text-center text-lg-start ff_HelveticaNormal fs_xl">
          Get started.
        </h2>
        <p className="fs_4sm ff_HelveticaNormal text-center text-lg-start text_dark_50">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </p>
        <div className="forthBgImage p-3 p-sm-5 ">
          <button className="ff_HelveticaNormal fs_xsm text-white chapterBtn border-0">
            17 Chapters
          </button>
          <h4 className="py-3 text-white ff_HelveticaNormal fs_2xl">
            Solana Development Course
          </h4>
          <p className="mb-0 text-white ff_HelveticaNormal fs_2sm">
            Quickstart your Solana development starting
            <span className="d-sm-block">
              {" "}
              from nothing to complex programs.
            </span>
          </p>
          <div className="mt-4 circle curser d-flex align-items-center justify-content-center">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.08008 11L6.08008 6L1.08008 1"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <Slider {...settings} className="pt-3 pb-5 row">
          {myData
            .map((obj) => {
              return (
                <Col className="my-3" lg={4}>
                  <div className="cardBox h-100 px-2 px-xl-0 ">
                    <div className="position-relative ">
                      <img className="w-100" src={obj.img} alt="image5" />
                      <div className="position-absolute start-0 bottom-0 mb-4 ms-4">
                        <button className="ff_HelveticaNormal fs_xsm text-white chapterBtn border-0">
                          {obj.btn}
                        </button>
                        <p className="ff_HelveticaNormal mb-0 mt-2 pt-1 fs_2sm text-white">
                          {obj.para} <span className="d-md-block">{obj.span}</span>
                        </p>
                      </div>
                      <div className="position-absolute end-0 bottom-0 circle curser mb-4 me-3 d-flex align-items-center justify-content-center">
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.08008 11L6.08008 6L1.08008 1"
                            stroke="#848895"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
            .slice(0, 6)}
        </Slider>
      </Container>
    </div>
  );
};

export default GetStarted;
