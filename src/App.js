import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import "@fontsource/roboto";
import "@fontsource/nunito";
import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

function App() {
  const [document] = useFirstPrismicDocument();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      <div style={{ zIndex: 10, position: "relative" }}>
        <Navigation toggleModal={toggleModal} />
        <HomePage />
      </div>
      {isModalOpen && <ContactForm onClose={toggleModal} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
