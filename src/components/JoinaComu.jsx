import React from "react";
import brave from "../assets/img/png/brave.png";
import circle from "../assets/img/png/circle.png";
import discord from "../assets/img/png/discord.png";
import google from "../assets/img/png/google.png";
import jump from "../assets/img/png/jump.png";
import lollapal from "../assets/img/png/lollapal.png";
import magic from "../assets/img/png/magic.png";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const JoinaComu = () => {
  return (
    <div className="bg-black overflowXhidden sectionBgimage ">
      <Container className="customContainer">
        <p
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-center   mt-5 mt-lg-0 mb-lg-4 fs_3xsm ff_HelveticaNormal text_blue lspacing_8 text-uppercase "
        >
          Powering tools and integrations from companies all around the world
        </p>
        <Marquee speed={50}>
          <div className=" d-flex py-1 mb-5  pb-lg-5  align-items-center">
            <div className="mx-4 scaleHover">
              <img width={100} src={brave} alt="brave" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={circle} alt="circle" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={discord} alt="discord" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={google} alt="google" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={jump} alt="jump" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={lollapal} alt="lollapal" />
            </div>
            <div className="mx-4 scaleHover">
              <img width={100} src={magic} alt="magic" />
            </div>
          </div>
        </Marquee>
      </Container>
      <Container className="customContainer">
        <Row className="pt-4 pt-lg-5 pb-4 pb-lg-5">
          <Col className="my-2 my-lg-0" lg={6}>
            <h2
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text-white ff_HelveticaNormal text-center text-lg-start fs_xl mt-lg-5 pt-3"
            >
              Join a community
              <span className="d-lg-block "> of millions.</span>
            </h2>
          </Col>
          <Col className="my-2 my-lg-0" lg={6}>
            <h2
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_gridient1 fs_8xl mb-0 text-center text-lg-start ff_HelveticaNormal"
            >
              11.5M+
            </h2>
            <p
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal"
            >
              Active accounts
            </p>
            <h2
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_gridient2 fs_9xl mb-0 mt-3 mt-lg-5 text-center text-lg-start ff_HelveticaNormal"
            >
              21.9M
            </h2>
            <p
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal"
            >
              NFTs minted
            </p>
            <h2
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_gridient3 fs_10xl mb-0 mt-3 mt-lg-5 text-center text-lg-start ff_HelveticaNormal"
            >
              $0.00025
            </h2>
            <p
              data-aos="zoom-in-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal"
            >
              Average cost per transaction
            </p>
          </Col>
        </Row>
        {/* ****** */}
        <Row className="py-lg-5">
          <Col className="my-2 my-lg-0" lg={5}>
            <h2
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text-white mt-5 ff_HelveticaNormal text-center text-lg-start fs_3xl "
            >
              Made for
              <span className="d-lg-block fs_xl"> mass adoption .</span>
            </h2>
            <p className="text_dark_50 ms-lg-2 skyCircleAfter text-center text-lg-start position-relative text-uppercase ff_roboto fw-normal fs_4xsm">
              Live data
            </p>
          </Col>
          <Col lg={7}>
            <Row className="mb-lg-5 mb-3">
              <Col
                data-aos="zoom-out-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="mb-3 mb-lg-0 mt-lg-5"
                md={6}
                lg={6}
              >
                <div className="cardBackground mt-5 p-4">
                  <h2 className="ms-3 ff_HelveticaNormal text-white fs_4md skyLineAfter position-relative">
                    Fast
                  </h2>
                  <p className="text_dark_50 ff_HelveticaNormal fs_sm">
                    Don’t keep your users waiting. Solana has block times of 400
                    milliseconds — and as hardware gets faster, so will the
                    network.
                  </p>
                  <h5 className="mt-3 ff_HelveticaNormal skyCircleafter position-relative text-white ms-2 fs_4md">
                    3,969
                  </h5>
                  <p className="mb-0 text_dark_50 text-uppercase ff_roboto fw-normal fs_4xsm">
                    Transactions per second
                  </p>
                </div>
              </Col>
              <Col
                data-aos="zoom-out-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="my-3 my-lg-0"
                md={6}
                lg={6}
              >
                <div className="cardBackground  p-4">
                  <h2 className="ms-3 ff_HelveticaNormal text-white fs_4md yellowLineAfter position-relative">
                    Decentralized
                  </h2>
                  <p className="text_dark_50 ff_HelveticaNormal fs_2sm">
                    The Solana network is validated by thousands of nodes that
                    operate independently of each other, ensuring your data
                    remains secure and censorship resistant.
                  </p>
                  <h5 className="mt-3 ff_HelveticaNormal skyCircleafter position-relative text-white ms-2 fs_2md">
                    1,675
                  </h5>
                  <p className="mb-0 text_dark_50 text-uppercase ff_roboto fw-normal fs_4xsm">
                    Validator nodes
                  </p>
                </div>
              </Col>
              <Col
                data-aos="zoom-out-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="my-3 my-lg-0 "
                md={6}
                lg={6}
              >
                <div className="cardBackground mt-lg-5 p-4">
                  <h2 className="ms-3 ff_HelveticaNormal text-white fs_4md blueLineAfter position-relative">
                    Scalable
                  </h2>
                  <p className="text_dark_50 ff_HelveticaNormal fs_2sm">
                    Get big, quick. Solana is made to handle thousands of
                    transactions per second, and fees for both developers and
                    users remain less than $0.01.
                  </p>
                  <h5 className="mt-3 ff_HelveticaNormal skyCircleafter position-relative text-white ms-2 fs_2md">
                    163,077,581,394
                  </h5>
                  <p className="mb-0 text_dark_50 text-uppercase ff_roboto fw-normal fs_4xsm">
                    Total transactions
                  </p>
                </div>
              </Col>
              <Col
                data-aos="zoom-out-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="my-3 my-lg-0"
                md={6}
                lg={6}
              >
                <div className="cardBackground  p-4">
                  <h2 className="ms-3 ff_HelveticaNormal text-white fs_4md greenLineAfter position-relative">
                    Energy Efficient
                  </h2>
                  <p className="text_dark_50 ff_HelveticaNormal fs_2sm">
                    Solana’s proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <span className="text-decoration-underline curser text_green">
                      environment.
                    </span>{" "}
                    Each Solana transaction uses about the same energy as a few
                    Google searches.
                  </p>
                  <h5 className="mt-3 ff_HelveticaNormal   position-relative text-white  fs_2md">
                    0%
                  </h5>
                  <p className="mb-0 text_dark_50 text-uppercase ff_roboto fw-normal fs_4xsm">
                    Net carbon impact
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinaComu;
