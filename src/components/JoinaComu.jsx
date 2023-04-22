import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const JoinaComu = () => {
  return (
    <div className="bg-black sectionBgimage ">
      <Container className="customContainer">
        <Row className="pt-4 pb-4 pb-lg-5">
          <Col className="my-2 my-lg-0" lg={6}>
            <h2 className="text-white ff_HelveticaNormal text-center text-lg-start fs_xl mt-lg-5 pt-3">
              Join a community
              <span className="d-lg-block "> of millions.</span>
            </h2>
          </Col>
          <Col className="my-2 my-lg-0" lg={6}>
            <h2 className="text_gridient1 fs_8xl mb-0 text-center text-lg-start ff_HelveticaNormal">
              11.5M+
            </h2>
            <p className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal">
              Active accounts
            </p>
            <h2 className="text_gridient2 fs_9xl mb-0 mt-3 mt-lg-5 text-center text-lg-start ff_HelveticaNormal">
              21.9M
            </h2>
            <p className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal">
              NFTs minted
            </p>
            <h2 className="text_gridient3 fs_10xl mb-0 mt-3 mt-lg-5 text-center text-lg-start ff_HelveticaNormal">
              $0.00025
            </h2>
            <p className="text_dark_50 text-uppercase fs_4xsm text-center text-lg-start ff_roboto fw-normal">
              Average cost per transaction
            </p>
          </Col>
        </Row>
        <Row className="py-lg-5">
          <Col className="my-2 my-lg-0" lg={5}>
            <h2 className="text-white mt-5 ff_HelveticaNormal text-center text-lg-start fs_3xl ">
              Made for
              <span className="d-lg-block fs_xl"> mass adoption .</span>
            </h2>
            <p className="text_dark_50 ms-lg-2 skyCircleAfter text-center text-lg-start position-relative text-uppercase ff_roboto fw-normal fs_4xsm">
              Live data
            </p>
          </Col>
          <Col lg={7}>
            <Row className="mb-lg-5 mb-3">
              <Col className="mb-3 mb-lg-0 mt-lg-5" md={6} lg={6}>
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
              <Col className="my-3 my-lg-0" md={6} lg={6}>
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
              <Col className="my-3 my-lg-0 " md={6} lg={6}>
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
              <Col className="my-3 my-lg-0" md={6} lg={6}>
                <div className="cardBackground  p-4">
                  <h2 className="ms-3 ff_HelveticaNormal text-white fs_4md greenLineAfter position-relative">
                    Energy Efficient
                  </h2>
                  <p className="text_dark_50 ff_HelveticaNormal fs_2sm">
                    Solana’s proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <span className="text-decoration-underline text_green">
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
