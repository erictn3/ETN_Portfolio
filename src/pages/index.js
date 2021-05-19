import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Services";
import Footer from "../components/Footer";

import Contact from "../components/Contact/Contact";

import {
  homeObjOne,
  homeObjThree,
  // homeObjTwo,
  // homeObjFour,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
      <Portfolio />
      <InfoSection {...homeObjThree} />
      <Contact />

      <Footer />
    </>
  );
};

export default Home;
