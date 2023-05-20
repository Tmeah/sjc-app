import React, { useState } from "react";
import logo from "../images/sjclogo.png";
import "../styles/nav.css";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar-div">
      <div className="nav-logo-div">
        <img src={logo} alt="" className="nav-logo" />
      </div>
      <div className="navbar-links-div">
        <ul className="navbar-links">
          <li>
            <a
              href=""
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={toggleModal}
              className="navbar-link link__hover--effect link__hover--effect--white"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        {isModalOpen && (
          <ContactForm onClose={toggleModal} isModalOpen={isModalOpen} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
