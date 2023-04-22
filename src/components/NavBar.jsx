import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logoImage from "../assets/img/svg/logo.svg";
import closeImage from "../assets/img/svg/closeImage.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [first, setfirst] = useState(false);
  if (first) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div>
      <p className="text-center py-1 bg_blue mb-0 text-uppercase ff_roboto fw-normal fs_sm">
        Breakpoint 2023 - New City. New Vibes - Get Early Access -&gt;
      </p>
      <div className="bg_black_60 py-3">
        <Container className="customContainer">
          <nav className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <a href="#">
                <img
                  className="w_110 w_md_180"
                  src={logoImage}
                  alt="logoImage"
                />
              </a>
            </Link>
            <ul
              className={
                first
                  ? "d-flex align-items-center ps-0 mb-0 navOpen"
                  : "navClose d-flex align-items-center ps-0 mb-0"
              }
            >
              <img
                onClick={() => setfirst(false)}
                src={closeImage}
                width={40}
                className="bg-transparent d-lg-none position-absolute top-0 end-0 m-4 rounded-5"
                alt="close"
              />
              <li className="mx-3 my-3 my-lg-0">
                <a
                  onClick={() => setfirst(false)}
                  className="fs_sm ff_HelveticaNormal navLinks position-relative opacity_100  text_dark"
                  href="#"
                >
                  Learn{" "}
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                      fill="#848895"
                    />
                  </svg>
                  <ul className="d-flex gap-2 flex-column opacity_dropdown mb-0  px-3 py-1 rounded-3 ">
                    <li className="fs_sm ff_HelveticaNormal ">Learn1</li>
                    <li className="fs_sm ff_HelveticaNormal ">Learn2</li>
                    <li className="fs_sm ff_HelveticaNormal ">Learn3</li>
                  </ul>
                </a>
              </li>
              <Link to="/SecondPage">
                <li className="mx-3 my-3 my-lg-0">
                  <a
                    onClick={() => setfirst(false)}
                    className="fs_sm ff_HelveticaNormal navLinks position-relative opacity_100  text_dark"
                    href="#"
                  >
                    Build{" "}
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                    <ul className="d-flex gap-2 flex-column opacity_dropdown mb-0  px-3 py-1 rounded-3 ">
                      <li className="fs_sm ff_HelveticaNormal ">Build</li>
                      <li className="fs_sm ff_HelveticaNormal ">Build</li>
                      <li className="fs_sm ff_HelveticaNormal ">Build</li>
                    </ul>
                  </a>
                </li>
              </Link>

              <li className="mx-3 my-3 my-lg-0">
                <a
                  onClick={() => setfirst(false)}
                  className="fs_sm ff_HelveticaNormal navLinks position-relative opacity_100  text_dark"
                  href="#"
                >
                  Network{" "}
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                      fill="#848895"
                    />
                  </svg>
                  <ul className="d-flex gap-2 flex-column opacity_dropdown mb-0  px-3 py-1 rounded-3 ">
                    <li className="fs_sm ff_HelveticaNormal ">Network</li>
                    <li className="fs_sm ff_HelveticaNormal ">Network</li>
                    <li className="fs_sm ff_HelveticaNormal ">Network</li>
                  </ul>
                </a>
              </li>
              <li className="ms-3 my-3 my-lg-0">
                <a
                  onClick={() => setfirst(false)}
                  className="fs_sm ff_HelveticaNormal navLinks position-relative opacity_100  text_dark"
                  href="#"
                >
                  Community{" "}
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                      fill="#848895"
                    />
                  </svg>
                  <ul className="d-flex gap-2 flex-column opacity_dropdown mb-0  px-3 py-1 rounded-3 ">
                    <li className="fs_sm ff_HelveticaNormal ">Community</li>
                    <li className="fs_sm ff_HelveticaNormal ">Community</li>
                    <li className="fs_sm ff_HelveticaNormal ">Community</li>
                  </ul>
                </a>
              </li>
            </ul>
            <div
              onClick={() => setfirst(true)}
              className="d-flex flex-column d-lg-none"
            >
              <span className="menuitems"></span>
              <span className="menuitems my-1"></span>
              <span className="menuitems"></span>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
