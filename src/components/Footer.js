import React, { useState } from "react";
import logo from "../images/sjclogo-removebg.png";
import "../styles/footer.css";
import ContactForm from "./ContactForm";
function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="footer-div">
      <div className="footer-logo-div">
        <img src={logo} alt="" className="footer-logo" />
      </div>
      <div className="footer-links-div">
        <ul className="footer-links">
          <li>
            <a
              href="#"
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={toggleModal}
              className="footer-link link__hover--effect link__hover--effect--white"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <span className="copyright">
          Website Developed & Maintained by &copy;{" "}
          <a
            href="https://tausifmeah.co.uk/"
            target="_blank"
            className="footer-link--t"
          >
            <u>Tausif Meah.</u>
          </a>
        </span>
      </div>
      <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        {isModalOpen && (
          <ContactForm onClose={toggleModal} isModalOpen={isModalOpen} />
        )}
      </div>
    </div>
  );
}

export default Footer;
