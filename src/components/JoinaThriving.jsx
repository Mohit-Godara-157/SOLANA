import React from "react";
import { Container } from "react-bootstrap";
import image from "../assets/img/png/image.png";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
import image4 from "../assets/img/png/image4.png";
import Marquee from "react-fast-marquee";
const JoinaThriving = () => {
  return (
    <div>
      <Container className="customContainer ">
        <h2 className="mb-0 text-white text-center text-lg-start fs_xl mt-4 ff_HelveticaNormal">
          Join a thriving community.
        </h2>
      </Container>
      <div className="lastBgImage pt-lg-4 pb-lg-5">
        <Marquee speed={90}>
          <div className="d-grid gap-3 mt-4">
            <div className="box1 ms-3 grid1 text-center d-flex align-items-center flex-column justify-content-center">
              <p className="mb-0 fs_4lg ff_HelveticaNormal text_lightBangni">
                11,000
              </p>
              <p className="mb-0 mt-2 text-uppercase ff_HelveticaNormal fs_2xsm text_dark_90">
                Solana Hacker House participants
              </p>
            </div>
            <div className="box2 ms-3 grid2">
              <img className="w-100 h-100" src={image} alt="image" />
            </div>
            <div className="box3 grid3">
              <img className="w-100 " src={image1} alt="image1" />
            </div>
            <div className="box2 grid4">
              <img className="w-100" src={image2} alt="image2" />
            </div>
            <div className="box1 grid5 text-center d-flex align-items-center flex-column justify-content-center">
              <p className="mb-0 fs_4xl ff_HelveticaNormal text_green">
                48,000
              </p>
              <p className="mb-0 mt-2 text-uppercase ff_HelveticaNormal  fs_2xsm text_dark_90">
                Developers building during Solana Hackathons
              </p>
            </div>
            <div className="box4 grid6">
              <img className="w-100 " src={image3} alt="image3" />
            </div>
            <div className="box1 grid7 text-center d-flex align-items-center flex-column justify-content-center">
              <p className="mb-0 fs_4xl ff_HelveticaNormal text_yellow">
                3,800
              </p>
              <p className="mb-0 mt-2 text-uppercase ff_HelveticaNormal fs_2xsm text_dark_90">
                Solana Breakpoint 2022 attendees
              </p>
            </div>
            <div className="box2 grid8">
              <img className="w-100 h-100" src={image4} alt="image4" />
            </div>
          </div>
        </Marquee>
        <Container className="customContainer  ">
          <div className="text-center my-5 py-5">
            <p className="text-white ff_HelveticaNormal fs_xl">
              It's time to join the thousands of creators,
              <span className="d-md-block">
                {" "}
                artists, and developers using Solana.
              </span>
            </p>
            <button className="text-white fs_3xsm text-uppercase startBtn ff_roboto fw-normal border-0">
              Start building
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JoinaThriving;
