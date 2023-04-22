import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brave from "../assets/img/png/brave.png";
import circle from "../assets/img/png/circle.png";
import discord from "../assets/img/png/discord.png";
import google from "../assets/img/png/google.png";
import jump from "../assets/img/png/jump.png";
import lollapal from "../assets/img/png/lollapal.png";
import magic from "../assets/img/png/magic.png";
const HeroSection = () => {
  return (
    <div className="d-flex flex-column flex-grow-1 align-items-center py-4 py-md-5 py-xl-0 justify-content-center">
      <Container className="customContainer">
        <h2 className="text-white text-center ff_HelveticaNormal fs_6xl">
          Powerful for developers.
          <span className="d-md-block">Fast for everyone.</span>
        </h2>
        <p className="mt-4 mt-md-5 text-center mb-0 text-white ff_HelveticaNormal">
          Bring blockchain to the people. Solana supports experiences{" "}
          <span className="d-md-block">
            for power users, new consumers, and everyone in between.
          </span>
        </p>
        <div className="d-flex mt-4 mt-md-5 justify-content-center">
          <button className="text-white fs_3xsm text-uppercase startBtn ff_roboto fw-normal border-0">
            Start building
          </button>
          <button className="ms-4 text-white fs_3xsm text-uppercase readBtn ff_roboto fw-normal ">
            Read docs
          </button>
        </div>
        <p className="text-center  mt-5 pt-md-4 fs_3xsm ff_HelveticaNormal text_blue lspacing_8 text-uppercase ">
          Powering tools and integrations from companies all around the world
        </p>
        <Row className="justify-content-xl-between justify-content-center py-1  align-items-center">
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={brave} alt="brave" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={circle} alt="circle" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={discord} alt="discord" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={google} alt="google" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={jump} alt="jump" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={lollapal} alt="lollapal" />
          </Col>
          <Col
            className="my-2 my-xl-0 scaleHover"
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={1}
          >
            <img className="w_90  w_xl_unset" src={magic} alt="magic" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
