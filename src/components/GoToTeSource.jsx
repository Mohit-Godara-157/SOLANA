import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import changelogo from "../assets/img/png/changelogo.png";
const GoToTeSource = () => {
  return (
    <>
      <div className="sectionGridient overflowXhidden">
        <Container className="customContainer">
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-white pt-5 text-center text-lg-start mb-0 ff_HelveticaNormal fs_3lg"
          >
            Go to the source.
          </h2>
          <p
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="fs_4sm ff_HelveticaNormal text-center text-lg-start text_dark_50"
          >
            Read the documentation for Solana and popular tools.
          </p>
          <Row className="py-3 py-md-5">
            <Col className="my-2 my-md-0" md={6}>
              <div className="d-flex align-items-center justify-content-between">
                <h2
                  data-aos="zoom-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="ff_HelveticaNormal mb-0 text-white fs_lg"
                >
                  Solana Docs
                </h2>
                <button
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="fs_3xsm  ff_roboto fw-normal text-uppercase text-white viewBtn"
                >
                  View all
                  <svg
                    className="ps-2"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.08008 17L17.0801 7"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.08008 7H17.0801V17"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="Sectionline mt-5"
              ></div>
              <p
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="pt-4 mt-1 text-white ff_HelveticaNormal fs_4sm"
              >
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </p>
            </Col>
            <Col className="my-2 my-md-0" md={6}>
              <div className="d-flex align-items-center justify-content-between">
                <h2
                  data-aos="zoom-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="ff_HelveticaNormal mb-0 text-white fs_lg"
                >
                  Metaplex Docs
                </h2>
                <button
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="fs_3xsm  ff_roboto fw-normal text-uppercase text-white viewBtn"
                >
                  View all
                  <svg
                    className="ps-2"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.08008 17L17.0801 7"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.08008 7H17.0801V17"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="Sectionline mt-5"
              ></div>
              <p
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="pt-4 mt-1 text-white ff_HelveticaNormal fs_4sm"
              >
                Learn what you build with Metaplex, make the process of creating
                and launching NFTs easier.
              </p>
            </Col>
          </Row>
          <Row className="py-3 py-lg-5 flex-column-reverse flex-lg-row">
            <Col className="my-2 my-lg-0" lg={6}>
              <h3
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="ff_HelveticaNormal text-white fs_2xl"
              >
                Solana Changelog
              </h3>
              <p
                data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="mt-4 text-white mb-0 ff_HelveticaNormal fs_4sm "
              >
                Some more Solana changes from Jacob & Joe. Subscribe to the
                newsletter: https://solana.us17.list-manage.com/s... Proposal -
                Priced Compute Units: ...
              </p>
              <button
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="mt-5  text-uppercase text-white fw-normal ff_roboto latestBtn"
              >
                Latest episode
              </button>
            </Col>
            <Col className="my-2 my-lg-0" lg={6}>
              <img
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="w-100"
                src={changelogo}
                alt="changelogo"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* **** */}
      <div className="bg-black mb-3 overflowXhidden">
        <Container className="customContainer">
          <Row className="py-4 py-lg-5">
            <Col
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <div className="cardShadow p-3 p-sm-5 h-100">
                <h4
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="ff_HelveticaNormal text-white mb-0 fs_3lg"
                >
                  Solana Developer Update
                </h4>
                <p
                  data-aos="zoom-out"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="mt-4 pt-1 fs_sm text_dark_50 mb-xl-5 pb-xl-4"
                >
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <div
                  data-aos="zoom-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="rounded-5 mt-5 bg-black d-flex align-items-center px-2 justify-content-between"
                >
                  <input
                    className="inputModify ff_roboto fw-semibold fs_3xsm "
                    type="text"
                    placeholder="Email"
                  />
                  <button className="ff_roboto text-uppercase fw-normal fs_3xsm signBtn">
                    Sign up
                  </button>
                </div>
              </div>
            </Col>
            <Col
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-3 my-lg-0"
              lg={6}
            >
              <div className="cardShadow p-3 p-sm-5 h-100">
                <h4
                  data-aos="flip-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="ff_HelveticaNormal text-white mb-0 fs_2lg"
                >
                  Even more resources
                </h4>
                <p
                  data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="mt-4  fs_2sm text_dark_50 mb-5"
                >
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="text-white text-uppercase ff_roboto fw-normal fs_3xsm lastBtn"
                  >
                    YouTube
                    <svg
                      className="ms-2"
                      width="27"
                      height="20"
                      viewBox="0 0 27 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1479_1507)">
                        <path
                          d="M25.6175 3.84946C25.3334 2.78344 24.4966 1.94401 23.4337 1.65912C21.5076 1.14136 13.7836 1.14136 13.7836 1.14136C13.7836 1.14136 6.05969 1.14136 4.13346 1.65912C3.07076 1.94401 2.23376 2.78344 1.94973 3.84946C1.43359 5.78151 1.43359 9.81259 1.43359 9.81259C1.43359 9.81259 1.43359 13.8437 1.94973 15.7759C2.23376 16.8418 3.07076 17.6812 4.13346 17.9662C6.05969 18.4839 13.7836 18.4839 13.7836 18.4839C13.7836 18.4839 21.5076 18.4839 23.4337 17.9662C24.4966 17.6812 25.3334 16.8418 25.6175 15.7759C26.1336 13.8437 26.1336 9.81259 26.1336 9.81259C26.1336 9.81259 26.1336 5.78151 25.6175 3.84946Z"
                          fill="#ED1D24"
                        />
                        <path
                          d="M11.2559 13.4726L17.7116 9.81279L11.2559 6.15265V13.4726Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1479_1507">
                          <rect
                            width="26"
                            height="19"
                            fill="white"
                            transform="translate(0.783203 0.3125)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="text-white text-uppercase ff_roboto ms-3 fw-normal fs_3xsm lastBtn"
                  >
                    Podcast
                    <svg
                      className="ms-2"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1479_1513)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.223 20.7622C22.999 21.3311 22.4822 22.132 21.7494 22.6963C21.3262 23.0222 20.821 23.3338 20.1272 23.5393C19.3876 23.7585 18.4765 23.8326 17.3426 23.8326H6.97465C5.84083 23.8326 4.92978 23.7585 4.19004 23.5393C3.49617 23.3338 2.99111 23.0222 2.56791 22.6963C1.83513 22.132 1.31826 21.3312 1.09429 20.7622C0.64325 19.616 0.638672 18.3155 0.638672 17.4965V7.12846C0.638672 6.30951 0.64325 5.00895 1.09438 3.86277C1.31834 3.29389 1.83513 2.4929 2.56799 1.92869C2.99111 1.60281 3.49627 1.29132 4.19004 1.08576C4.92978 0.866555 5.84083 0.79248 6.97465 0.79248H17.3427C18.4765 0.79248 19.3876 0.866555 20.1273 1.08576C20.8211 1.29132 21.3262 1.6029 21.7495 1.92869C22.4822 2.49299 22.9991 3.29389 23.2231 3.86277C23.6741 5.00895 23.6787 6.30951 23.6787 7.12846V17.4964C23.6787 18.3155 23.6741 19.616 23.223 20.7622Z"
                          fill="url(#paint0_linear_1479_1513)"
                        />
                        <path
                          d="M13.8287 14.0355C13.4831 13.6708 12.8758 13.4369 12.1589 13.4369C11.442 13.4369 10.8347 13.6708 10.4891 14.0355C10.3086 14.2259 10.2132 14.4209 10.1831 14.699C10.125 15.2373 10.1577 15.7007 10.2207 16.4418C10.2808 17.148 10.3949 18.0896 10.5438 19.0486C10.6498 19.7312 10.7358 20.0995 10.8142 20.3634C10.9413 20.7909 11.4162 21.1647 12.1589 21.1647C12.9015 21.1647 13.3764 20.7908 13.5036 20.3634C13.582 20.0996 13.6681 19.7313 13.774 19.0486C13.923 18.0896 14.0369 17.1481 14.097 16.4418C14.16 15.7007 14.1927 15.2372 14.1346 14.699C14.1046 14.4209 14.0092 14.226 13.8287 14.0355ZM10.2752 10.7874C10.2752 11.8289 11.1194 12.6731 12.1608 12.6731C13.2021 12.6731 14.0463 11.8289 14.0463 10.7874C14.0463 9.74611 13.2021 8.90181 12.1608 8.90181C11.1194 8.90181 10.2752 9.74611 10.2752 10.7874ZM12.1374 3.34604C7.72733 3.35858 4.11389 6.93622 4.05923 11.3459C4.015 14.918 6.29519 17.9737 9.4793 19.0936C9.55667 19.1209 9.63514 19.0568 9.62287 18.9757C9.5812 18.6984 9.54183 18.4196 9.50557 18.1455C9.49276 18.0487 9.43104 17.9652 9.34149 17.9261C6.82488 16.8266 5.06743 14.3025 5.09562 11.3789C5.13262 7.54191 8.26563 4.41394 12.1026 4.3829C16.025 4.35122 19.2261 7.53285 19.2261 11.4481C19.2261 14.3425 17.4764 16.8355 14.9793 17.9263C14.8899 17.9654 14.8285 18.0492 14.8158 18.1458C14.7796 18.4198 14.7402 18.6984 14.6986 18.9756C14.6864 19.0566 14.7648 19.1208 14.8421 19.0935C17.9958 17.9843 20.2627 14.9762 20.2627 11.4481C20.2629 6.97284 16.6156 3.3334 12.1374 3.34604ZM11.9911 7.06322C14.4909 6.96635 16.5556 8.97203 16.5556 11.4508C16.5556 12.7115 16.0214 13.8496 15.1677 14.6511C15.0954 14.7191 15.0564 14.8156 15.0621 14.9147C15.0791 15.2163 15.0729 15.5092 15.0528 15.8401C15.0474 15.9282 15.1463 15.9846 15.2192 15.9348C16.6508 14.9565 17.5923 13.3117 17.5923 11.4507C17.5923 8.38667 15.0401 5.90742 11.95 6.02719C9.07816 6.13843 6.77407 8.50625 6.73735 11.3799C6.71317 13.2701 7.66049 14.9444 9.11039 15.9351C9.18318 15.9848 9.2818 15.9282 9.27648 15.8403C9.25634 15.5092 9.2502 15.2162 9.26715 14.9147C9.27264 14.8157 9.23382 14.7193 9.16148 14.6513C8.28119 13.8249 7.74061 12.6404 7.77503 11.333C7.83565 9.03192 9.69081 7.15232 11.9911 7.06322Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1479_1513"
                          x1="12.1587"
                          y1="0.792481"
                          x2="12.1587"
                          y2="23.8325"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F452FF" />
                          <stop offset="1" stop-color="#832BC1" />
                        </linearGradient>
                        <clipPath id="clip0_1479_1513">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.158203 0.3125)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GoToTeSource;
