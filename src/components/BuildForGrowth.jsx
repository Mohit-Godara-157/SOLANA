import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import manImage from "../assets/img/png/manImage.png";
import anyLogo from "../assets/img/png/anyLogo.png";
import clay from "../assets/img/svg/clay.svg";
import image from "../assets/img/svg/image.svg";
import cat from "../assets/img/svg/cat.svg";
import okay from "../assets/img/svg/okay.svg";
const BuildForGrowth = () => {
  const [first, setfirst] = useState(1);
  return (
    <div className="bg-black py-4 py-lg-5 overflowXhidden">
      <Container className="customContainer pb-lg-5">
        <div className="d-lg-flex pb-4 align-items-center text-center justify-content-between">
          <h2
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-white ff_HelveticaNormal fs_2xl"
          >
            Build for growth.
          </h2>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-2">
            <button
              onClick={() => setfirst(1)}
              className={
                first === 1
                  ? "sectioBtn  ff_HelveticaNormal fs_3xsm text-white"
                  : "sectionBtn ff_HelveticaNormal fs_3xsm text-white"
              }
            >
              NFTs
            </button>
            <button
              onClick={() => setfirst(2)}
              className={
                first === 2
                  ? "sectioBtn  ff_HelveticaNormal fs_3xsm text-white"
                  : "sectionBtn ff_HelveticaNormal fs_3xsm text-white"
              }
            >
              DeFi
            </button>
            <button
              onClick={() => setfirst(3)}
              className={
                first === 3
                  ? "sectioBtn  ff_HelveticaNormal fs_3xsm text-white"
                  : "sectionBtn ff_HelveticaNormal fs_3xsm text-white"
              }
            >
              Payments
            </button>
            <button
              onClick={() => setfirst(4)}
              className={
                first === 4
                  ? "sectioBtn  ff_HelveticaNormal fs_3xsm text-white"
                  : "sectionBtn ff_HelveticaNormal fs_3xsm text-white"
              }
            >
              Gaming
            </button>
            <button
              onClick={() => setfirst(5)}
              className={
                first === 5
                  ? "sectioBtn  ff_HelveticaNormal fs_3xsm text-white"
                  : "sectionBtn ff_HelveticaNormal fs_3xsm text-white"
              }
            >
              DAOs
            </button>
          </div>
        </div>
        <div className="section_dark px-2 px-lg-0  ">
          <Row
            className={
              first === 1
                ? " d-flex align-items-center"
                : " d-none align-items-center"
            }
          >
            <Col
              data-aos="fade-down-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <img className="w-100" src={manImage} alt="manImage" />
            </Col>
            <Col
              data-aos="fade-down-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3  my-lg-0"
              lg={6}
            >
              <img width={200} src={anyLogo} alt="anyLogo" />
              <p className="ff_HelveticaNormal text-white fs_md mt-3">
                It’s time to bridge the digital and physical. Anybodies helps
                established brands like Toys’R’Us connect real-life places and
                products with NFTs.
              </p>
              <p className="mb-0 ff_HelveticaNormal text_bangni curser fs_4sm">
                Learn more about NFTs <span className="fs_md ">on Solana</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="section_dark px-2 px-lg-0">
          <Row
            className={
              first === 2
                ? " d-flex align-items-center"
                : "  d-none align-items-center"
            }
          >
            <Col
              data-aos="fade-down-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <img className="w-100" src={manImage} alt="manImage" />
            </Col>
            <Col
              data-aos="fade-down-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <img width={200} src={anyLogo} alt="anyLogo" />
              <p className="ff_HelveticaNormal text-white fs_md mt-3">
                It’s time to bridge the digital and physical. Anybodies helps
                established
              </p>
              <p className="mb-0 ff_HelveticaNormal text_bangni curser fs_4sm">
                Learn more about DeFi <span className="fs_md ">on Solana</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="section_dark px-2 px-lg-0">
          <Row
            className={
              first === 3
                ? "  d-flex align-items-center"
                : "  d-none align-items-center"
            }
          >
            <Col
              data-aos="fade-down-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0 ps-3 ps-lg-5 "
              lg={6}
            >
              <img width={200} src={anyLogo} alt="anyLogo" />
              <p className="ff_HelveticaNormal text-white fs_md mt-3">
                It’s time to bridge the digital and physical. Anybodies helps
                established brands like Toys’R’Us connect real-life places and
                products with PAYMENTS.
              </p>
              <p className="mb-0 ff_HelveticaNormal text_bangni curser fs_4sm">
                Learn more about Payments{" "}
                <span className="fs_md ">on Solana</span>
              </p>
            </Col>
            <Col
              data-aos="fade-down-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0 pe-lg-0"
              lg={6}
            >
              <img className="w-100" src={manImage} alt="manImage" />
            </Col>
          </Row>
        </div>
        <div className="section_dark px-2 px-lg-0">
          <Row
            className={
              first === 4
                ? "  d-flex align-items-center"
                : "  d-none align-items-center"
            }
          >
            <Col
              data-aos="fade-down-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <img className="w-100" src={manImage} alt="manImage" />
            </Col>
            <Col
              data-aos="fade-down-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <img width={200} src={anyLogo} alt="anyLogo" />
              <p className="ff_HelveticaNormal text-white fs_md mt-3">
                It’s time to bridge the digital and physical. Anybodies helps
                established brands like Toys’R’Us connect real-life places and
                products with GAMING.
              </p>
              <p className="mb-0 ff_HelveticaNormal text_bangni curser fs_4sm">
                Learn more about Gaming{" "}
                <span className="fs_md ">on Solana</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="section_dark px-2 px-lg-0">
          <Row
            className={
              first === 5
                ? "  d-flex align-items-center"
                : "  d-none align-items-center"
            }
          >
            <Col
              data-aos="fade-down-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0 ps-3 ps-lg-5"
              lg={6}
            >
              <img width={200} src={anyLogo} alt="anyLogo" />
              <p className="ff_HelveticaNormal text-white fs_md mt-3">
                It’s time to bridge the digital and physical. Anybodies helps
                established brands like Toys’R’Us connect real-life places and
                products with DAOS.
              </p>
              <p className="mb-0 ff_HelveticaNormal text_bangni curser fs_4sm">
                Learn more about DaOs <span className="fs_md ">on Solana</span>
              </p>
            </Col>
            <Col
              data-aos="fade-down-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0 pe-lg-0"
              lg={6}
            >
              <img className="w-100" src={manImage} alt="manImage" />
            </Col>
          </Row>
        </div>

        {/* differnt row */}
        <Row className="section_bg mx-1 mx-sm-0 align-items-center justify-content-center mt-3 py-2">
          <Col
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3 my-lg-0"
            xs={6}
            md={4}
            lg={3}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img className="animationMove_y" src={clay} alt="clay" />
            </div>
          </Col>
          <Col
            data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3 my-lg-0"
            xs={6}
            md={4}
            lg={3}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img className="animationMove_y" src={image} alt="image" />
            </div>
          </Col>
          <Col
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3 my-lg-0"
            xs={6}
            md={4}
            lg={3}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img className="animationMove_y" src={cat} alt="cat" />
            </div>
          </Col>
          <Col
            data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="my-3 my-lg-0"
            xs={6}
            md={4}
            lg={3}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img className="animationMove_y" src={okay} alt="okay" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuildForGrowth;
