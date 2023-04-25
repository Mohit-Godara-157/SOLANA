import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroSectionImage from "../assets/img/png/heroSectionImage.png";
const HeroSecond = () => {
  return (
    <div className="d-flex flex-column flex-grow-1 align-items-center py-3 py-md-5 py-xl-0 justify-content-center overflow-hidden">
      <Container className="customContainer">
        <Row className="py-lg-5 flex-column-reverse flex-lg-row align-items-center">
          <Col className="my-3 my-lg-0" lg={6}>
            <h2
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              className="text-white mb-0 fs_7xl ff_HelveticaNormal"
            >
              Developer Resources
            </h2>
            <p
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              className="mt-3 ff_HelveticaNormal text_dark_50 fs_md"
            >
              A manual for joining the Solana
              <span className="d-lg-block">
                ecosystem. By builders for builders.
              </span>
            </p>
            <div className="d-flex mt-4  pt-2">
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="buildBtn ff_roboto fw-normal fs_3xsm text-uppercase"
              >
                Build Now
              </button>
              <button
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="ms-3 stackBtn ff_roboto text-white fw-normal fs_3xsm text-uppercase"
              >
                Stack Exchange{" "}
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                    fill="#848895"
                  />
                </svg>
              </button>
            </div>
          </Col>
          <Col
            xs={8}
            md={5}
            lg={6}
            className="my-3 my-lg-0 position-relative z_4"
          >
            <img 
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              className="w-100 transform_xl_image"
              src={heroSectionImage}
              alt="heroSectionImage"
            />
            <div className="blurBox position-absolute top-0 start-0 zn_1"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSecond;
