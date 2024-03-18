import React from "react";
import Header from "./Header";
import { useState } from "react";
import "./IITjee.css";
import table1 from "../UG/Images/bitsattableimg1.png";
import tabimg from "./Images/bitsattableimg2.png";
import tabimg1 from "./Images/bitsattableimg3.png";
import tabimg5 from "./Images/bitsattableimg4.png";
import { Link } from "react-router-dom";
import logo from "./logo2.jpg";
import livecls from "./Images/live class.png";
import onlinets from "./Images/online test seires.png";
import recordedmc from "./Images/recorded mini class.png";

// bitsat exam pages
import { Bitsat_ExamPattern } from "./UGExamPages/bitsat/Bitsat_ExamPattern";
import { Bitsat_eligibility } from "./UGExamPages/bitsat/Bitsat_eligibility";
import { Bistat_Syllabus } from "./UGExamPages/bitsat/Bistat_Syllabus";
import { Bitsat_ImpDates } from "./UGExamPages/bitsat/Bitsat_ImpDates";
import Bitsat_Banner from "./Ug_Carousel/BITSAT/Bitsat_Banner";
import Footer from "./Footer";
import Examheader from "./Examheader";

export const BitsatExam = () => {
  const [selected, setSelected] = useState(null);
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null);
    }
    setSelected(i1);
  };
  return (
    <div className="iitjeebody">
      {/* import logo from './logo2.jpg' */}
      <Examheader />
      <div  class="otsh1"  id='bitsat_-exampage'>
            <h1 style={{color:'#000'}}>BITSAT EXAM</h1>
          </div>
      <div className="jee_Carousal" style={{ paddingBottom: "1rem" }}>
        <Bitsat_Banner />
      </div>
      <div className="FAQCONTENT" id="faq">
        <div className="wrapper-3 container">
      
          <div className="sdfsf">
            <div className="examdiv">
            <button  id='bitsatExamLink' className='exambtn'><a href='https://www.bitsadmission.com/bitsat/download/BITSAT-2024_brochure.pdf?31012023' target='_blank'>Information Brochure</a></button>
              <button  id='bitsatExamLink' className="exambtn">
                <a href="https://www.bitsadmission.com/bitsatmain.aspx?id=11012016"
                  target="_blank" >
              Official Webpage
                </a>
              </button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='bitsatExamLink' onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? "-" : "+"}</span>
                  </div>
                  <div
                    className={selected === i2 ? "content-show2" : "content2"}
                  >
                    <div>
                      <div className="imagessg">
                        {item.answer}
                        {/* <img src={item.ansIMG} alt="" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="neetcourses" id='bitsatExamLink'>
        <div class="courses_heading">
          <h1>BITSAT COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id="bitsatcourses1">
            <div class="test_btn ots_btn"  id='bitsatExamLink'>
              <h3 style={{color:'#000'}}>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id='bitsatExamLink'>
                  <Link to="/bitsatots">
                    Explore <i class="uil uil-angle-right icon"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* <div class="courses1">
            <div class="test_btn ots_btn">
              <h3>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button>
                  <Link to="">
                    Coming Soon <i class="uil uil-angle-right icon"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div> */}

          <div class="courses1" id="bitsatcourses1">
            <div class="test_btn ots_btn"  id='bitsatExamLink'>
              <h3  style={{color:'#000'}}>LIVE CLASSES</h3>
              <img src={livecls} alt="" />
              <div class="btn-neet">
                <button id='bitsatExamLink'>
                  <Link to="/bitsat_olvc">
                    Explore <i class="uil uil-angle-right icon"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const sixtoten = [
  {
    Qustion: "CONDUCTING AUTHORITY",
    answer: "Birla Institute of Technology and Science",
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<Bitsat_ExamPattern />],
  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Bitsat_eligibility />],
  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Bistat_Syllabus />],
  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Bitsat_ImpDates />],
  },
];
