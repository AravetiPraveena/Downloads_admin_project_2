import React, { useState } from "react";
//  ----------------------components-------------------
import Header from "./components/Header/Header";
import Home from "./components/Home_Section/Home";
import About from "./components/About_section/About";

import Exam_Explore from "./components/ExploreExam/Exam_Explore";
import Course from "./components/Courses/Course";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faqs/Faq";

import { Ug_About } from "../UG/Ug_homePage_k/Ug_About/Ug_About";
import Footer from "./components/Footer/Footer";

import { TbArrowBarToUp } from "react-icons/tb";
import { IITJEE_OLVCDemo } from "../UG/IITJEE_OLVC(demo)";




const UG_HOME = () => {
  const [isVisible, setVisible] = useState(false);

  const handleScrole = () => {
    const scrollY = window.scrollY;
    const showThreshold = 200;

    setVisible(scrollY > showThreshold);
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrole);

    return () => {
      window.removeEventListener("scroll", handleScrole);
    };
  }, []);

  return (
    <div id="home">
        <Header />
        <Home />
        <Exam_Explore />
        <Course />
        <About />
        {/* <Contact /> */}
        {/* <Faq /> */}

        {/* <IITJEE_OLVCDemo /> */}

        <Footer />

      


      {isVisible && (
        <span className="UpArrow" onClick={ScrollToTop}>
          <a href="#topMove">
            <TbArrowBarToUp style={{ fontSize: "30px" }} />
          </a>
        </span>
      )}
    </div>
  );
};

export default UG_HOME;
