import landingimg from "../images/hompageblur.png";
import brands from "../images/brands-removebg.png";
import blob from "../images/blob.svg";
import merc from "../images/merc.png";
import "../styles/homepage.css";

import { GiMechanicGarage } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaQuoteRight, FaWrench, FaVolumeUp, FaParking } from "react-icons/fa";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";

function Homepage() {
  const [activeCard, setActiveCard] = useState(0);

  const cardsRef = useRef([]);

  const testimonials = [
    {
      text: "Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.",
      author: "John Doe",
    },
    {
      text: "Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.Soluta dolor praesentium at quod autem omnis, amet earunesciunt porro.",
      author: "Jane Doe",
    },
    // Add more testimonials as needed
  ];

  const [animationClass, setAnimationClass] = useState("");

  const handlePrevClick = () => {
    if (activeCard > 0) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveCard(activeCard - 1);
        setAnimationClass("fade-in");
      }, 200);
    }
  };

  const handleNextClick = () => {
    if (activeCard < testimonials.length - 1) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveCard(activeCard + 1);
        setAnimationClass("fade-in");
      }, 200);
    }
  };

  useEffect(() => {
    const currentCards = cardsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    currentCards.forEach((card) => observer.observe(card));

    return () => {
      currentCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <main>
      <section className="landing-div" id="landing-div">
        <div className="landing-text">
          <h3 className="landing-text--header">
            {" "}
            SPECIALIST'S IN CAR AUDIO, SECURITY AND CUSTOMISATIONS
          </h3>
          <a className="landing-btn" href="#services">
            EXPLORE NOW
          </a>
          <div className="brands-div">
            <p className="brands-title">OUR TRUSTED SUPPLIERS</p>
            <img src={brands} className="brands-img" alt="" />
          </div>
        </div>
        <img src={landingimg} alt="" className="landing-img" />
      </section>
      <section className="section2" id="services">
        <div ref={addCardRef} className="s2-title">
          <h2>
            {" "}
            <span className="red">Our </span>Services
          </h2>
        </div>
        <div className="cards">
          <div ref={addCardRef} className="container">
            <div className="card">
              <div className="card__content">
                <GiMechanicGarage className="icon" />
                <p className="card__title">ECU ENGINE REMAPPING</p>
                <p>
                  Soluta dolor praesentium at quod autem omnis, amet earum
                  nesciunt porro.
                </p>
              </div>
            </div>
          </div>
          <div ref={addCardRef} className="container">
            <div className="card">
              <div className="card__image-container"></div>
              <div className="card__content">
                <FaWrench className="icon" />
                <p className="card__title">CUSTOM INSTALLATIONS</p>
                <p>
                  Soluta dolor praesentium at quod autem omnis, amet earum
                  nesciunt porro.
                </p>
              </div>
            </div>
          </div>
          <div ref={addCardRef} className="container">
            <div className="card">
              <div className="card__image-container"></div>
              <div className="card__content">
                <FaVolumeUp className="icon" />

                <p class="card__title">AUDIO ENTERTAINMENT</p>
                <p>
                  Soluta dolor praesentium at quod autem omnis, amet earum
                  nesciunt porro.
                </p>
              </div>
            </div>
          </div>
          <div ref={addCardRef} className="container">
            <div className="card">
              <div className="card__image-container"></div>

              <div className="card__content">
                <FaParking className="icon" />

                <p class="card__title">PARKING AIDS</p>
                <p>
                  Soluta dolor praesentium at quod autem omnis, amet earum
                  nesciunt porro.
                </p>
              </div>
            </div>
          </div>
          <div ref={addCardRef} className="container">
            <div className="card">
              <div className="card__image-container"></div>

              <div className="card__content">
                <MdOutlineSecurity className="icon" />
                <p className="card__title">DIAGNSOTICS AND CODING</p>

                <p>
                  Soluta dolor praesentium at quod autem omnis, amet earum
                  nesciunt porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2" id="about-us">
        <div ref={addCardRef} className="s2-title">
          <h2>
            {" "}
            <span className="red">About </span>Us
          </h2>
        </div>
        <div className="section3-main-div" ref={addCardRef}>
          <div className="section3-pic-div">
            <img src={blob} alt="" className="blob" />
            <img src={merc} alt="" className="merc" />
          </div>
          <div className="section3-text-div">
            <p className="section3-text">
              <span className="red">Established in 2000</span> in Newport, South
              Wales, SJConcepts is an expert automotive customization company
              specializing in{" "}
              <span className="red">
                in-car entertainment, security, and custom installations
              </span>{" "}
              for mainstream vehicles and manufacturers. Led by Saj Jethwa, our
              experienced team offers a wide range of services, including custom
              audio, ECU remapping, iPad/iPod integrations, diagnostics, and
              coding. Visit our{" "}
              <span className="red">state-of-the-art showroom</span> for live
              demonstrations, or contact our friendly staff for tailored
              guidance on your project. Committed to{" "}
              <span className="red">
                exceptional craftsmanship and customer satisfaction
              </span>
              , SJConcepts also provides comprehensive aftercare services to
              ensure your peace of mind.{" "}
              <span className="red">Elevate your automotive experience</span>{" "}
              with SJConcepts.
            </p>
          </div>
        </div>
      </section>
      <section className="section2">
        <div ref={addCardRef} className="s2-title clients">
          <p className="red">Testimonials</p>
          <h2> What Our Clients Have to Say</h2>
        </div>

        <div className="cards animation">
          <button onClick={handlePrevClick} className="btn--arrows">
            <AiFillLeftCircle className="icon arrows" />
          </button>
          <div ref={addCardRef} className="container test-container">
            <div className={`card card-shadow ${animationClass}`}>
              <div className="card__image-container"></div>
              <div className="card__content">
                <FaQuoteRight className="icon1" />
                <div className="card-text">
                  <p className="card-para">{testimonials[activeCard].text}</p>
                  <p className="card__title">
                    - {testimonials[activeCard].author} -
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleNextClick} className="btn--arrows">
            <AiFillRightCircle className="icon arrows" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
