import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../UG/header.css";

// import { ExploreExams } from '../UG/ExploreExams'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../UG/Header";

import { PgCourse } from "../PgCourse";
import Contactus from "../../UG/Contactus";
import Faq from "../../UG/Faq";
import Footer from "../../UG/Footer";
import { Pg_About } from "./Pg_About/Pg_About";
import { Pg_exploreExam } from "./Pg_Explor_Exam/Pg_exploreExam";
import { Pg_Course } from "./Pg_ouercourses/Pg_Course";
import Pg_header from "./Pg_Header/Pg_header";
import { Pg_Countact } from "./Pg_Countact_Page/Pg_Countact";
import { Pg_Fax } from "./Pg_Faq/Pg_Fax";
import { Pg_explorSider } from "./Pg_Explore_slider/Pg_explorSider";
import { TbArrowBarToUp } from "react-icons/tb";
import About from "../../UG/About";
import Aboutt from "../../PG/About_section/About";

export const Pg_home_page = () => {
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
    <>
      <div id="PgHome"></div>
      <Header />

      <Pg_header />
      <Pg_exploreExam />
      <br />
      {/* <Pg_explorSider /> */}

      <Pg_Course />

      {/* <Pg_About /> */}
      <Aboutt />

      {/* <Pg_Countact /> */}

      {/* <Pg_Fax /> */}
      <Footer />


      {isVisible && (
        <span className="PgUpArrow" onClick={ScrollToTop}>
          <a href="#topMove">
            <TbArrowBarToUp style={{ fontSize: "30px" }} />
          </a>
        </span>
      )}
    </>
  );
};
