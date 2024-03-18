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
import onlinets from "./infographic/ots2.png";
import recordedmc from "./Images/recorded mini class.png";

// bitsat exam pages
import { Aeee_ExamPattern } from "./UGExamPages/Aeee/Aeee_ExamPattern";
import { Aeee_eligibility } from "./UGExamPages/Aeee/Aeee_eligibility";
import Aeee_Syllabus from "./UGExamPages/Aeee/Aeee_Syllabus";
import Aeee_ImpDates from "./UGExamPages/Aeee/Aeee_ImpDates";
// import Bitsat_Banner from "./Ug_Carousel/BITSAT/Bitsat_Banner";
import Footer from "./Footer";
import Examheader from "./Examheader";


function AeeeExam() {
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

      <div className='otsh1' id="AeeeExam-exampage">
        <h1 style={{color:'#000'}}>AEEE EXAM</h1>
      </div>

      <div className="jee_Carousal" style={{ paddingBottom: "1rem" }}>
        {/* <Bitsat_Banner /> */}
      </div>
      <div className="FAQCONTENT" id="faq">
        <div className="wrapper-3 container">

          <div className="sdfsf">
            <div className="examdiv">
              <button className='exambtn' id="AeeeExamLink"><a target="_blank" href="https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/2023/12/btech-information-handbook-2024.pdf">Information brochure</a>
              </button>

              <button className="exambtn" id="AeeeExamLink">
                <a
                  href="https://www.amrita.edu/admissions/btech/"
                  target="_blank"
                >
                  Official web page
                </a>
              </button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id="AeeeExamLink" onClick={() => toggle2(i2)}>
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

      <div class="neetcourses" id="AeeeExamLink">
        <div class="courses_heading">
          <h1>AEEE COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id="AeeeExamcourses1">
            <div class="test_btn ots_btn" id="AeeeExamLink">
              <h3 id="AeeeExamtext">ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id="AeeeExamLink">
                  <Link to="/AEEE_OTS_PAGE">
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

          <div class="courses1" id="AeeeExamcourses1">
            <div class="test_btn ots_btn" id="AeeeExamLink">
              <h3 id="AeeeExamtext">Engineering Entrance Exam Crash Course</h3>
              <img src={livecls} alt="" />
              <div class="btn-neet">
                <button id="AeeeExamLink">
                  <Link to="">
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
    //   answer: "Amrita Entrance Examination – Engineering",
    answer: "Amrita vishwa vidyapeetham",
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [< Aeee_ExamPattern />],
  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Aeee_eligibility />],
  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Aeee_Syllabus />],
  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Aeee_ImpDates />],
  },
];

export default AeeeExam