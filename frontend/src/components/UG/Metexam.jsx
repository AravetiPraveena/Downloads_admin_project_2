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
import { Met_ExamPattern } from "./UGExamPages/MET/Met_ExamPattern";
import Met_eligibility from "./UGExamPages/MET/Met_eligibility";
import Met_Syllabus from "./UGExamPages/MET/Met_Syllabus";
import Met_ImpDates from "./UGExamPages/MET/Met_ImpDates";
// import Bitsat_Banner from "./Ug_Carousel/BITSAT/Bitsat_Banner";
import Footer from "./Footer";
import Examheader from "./Examheader";


function Metexam() {
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

      <div className='otsh1' id="Metexam-exampage">
        <h1 style={{color:'#000'}}>MET EXAM</h1>
      </div>

      <div className="jee_Carousal" style={{ paddingBottom: "1rem" }}>
      </div>
      <div className="FAQCONTENT" id="faq">
        <div className="wrapper-3 container">

          <div className="sdfsf">
            <div className="examdiv">
              {/* <button className='exambtn'><a href="">Information brochure</a>
              </button> */}

              <button className="exambtn" id="MetexamLink">
                <a
                  href="https://www.manipal.edu/mu/admission/indian-students/online-entrance-exam-overview.html"
                  target="_blank"
                >
                  Official web page
                </a>
              </button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id="MetexamLink" onClick={() => toggle2(i2)}>
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

      <div class="neetcourses" id="MetexamLink">
        <div class="courses_heading">
          <h1>MET COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id="Metexamcourses1">
            <div class="test_btn ots_btn" id="MetexamLink">
              <h3 id="Metexamtext">ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id="MetexamLink">
                  <Link to="/Met_ots">
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

          <div class="courses1" id="Metexamcourses1">
            <div class="test_btn ots_btn" id="MetexamLink">
              <h3 id="Metexamtext">Engineering Entrance Exam Crash Course</h3>
              <img src={livecls} alt="" />
              <div class="btn-neet">
                <button id="MetexamLink">
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
    answer: "Manipal Academy of higher education",
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [< Met_ExamPattern />],
  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Met_eligibility />],
  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Met_Syllabus />],
  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Met_ImpDates />],
  },
];

export default Metexam