import React, { useContext, useState } from "react";

import logo from "./logo2.jpg";
import Faq from "./Faq";
import neetposter from "./posters/NEET_POSTER.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Examheader from "./Examheader";
import subjects from "./CARDS/images/learning.png";
import performance from "./CARDS/images/NeetperformanceAnalysis.png";
import answering from "./CARDS/images/answering.png";
import complex from "./CARDS/images/complex.png";

import Additional from "./CARDS/images/Additional.png";
import shortcuts from "./CARDS/images/shortcuts.png";
import managementskills from "./CARDS/images/managementskills.png";
import explained from "./CARDS/images/explained.png";

import NEETOLVC from "./CARDS/images/NEETOLVC.png";
import myContext from "../PG/context/MyContext";

import { MdOutlineVerticalAlignTop } from "react-icons/md";

export const NeetOLVC = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className="otsh1" style={{ background: "#000", height: "9vh" }}>
        <h1>NEET - ONLINE LIVE VIDEO CLASSES</h1>
      </div>

      <div className="jeesection">
        <div className="jeediv">
          <h2>NEET - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024</h2>
          <ul className="jee-olvc-kchanges text points">
            <li className="text-li">
              Top faculty from IIT/IISc and IISER at eGRADTutor, through this
              course will cover the complete syllabus of XI and XII (P+C) in 5
              to 6 months.
            </li>
            <li className="text-li">
              This course comes with practice tests and challenger questions,
              which will be discussed in detail by the faculty in guidance
              sessions.
            </li>
            <li className="text-li">
              This course comes with practice tests and challenger questions,
              which will be discussed in detail by the faculty in guidance
              sessions.
            </li>
            <li className="text-li">
              Through evaluation sessions, on 4th Saturday every month, student
              can know about key areas of improvement.
            </li>
            <li>
              These classes are designed perfectly to cater each and every
              student to learn, practice and perform.
            </li>
          </ul>
        </div>
      </div>

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <div className="wayOTS_-container  ">
            <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
            <ul className="FEATURES_-contant">
              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={subjects} alt="" />
                </div>
                <p>Classroom just for you!! Anywhere, Anytime!</p>
              </li>
              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={performance} alt="" />
                </div>
                <p>
                  Live online video classes encourage participation of students.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={answering} alt="" />
                </div>
                <p>
                  Live online video classes allow interaction with students
                  through chats and comments.
                </p>
              </li>

              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={complex} alt="" />
                </div>
                <p>
                  Helps students to understand complex information through
                  immediate answers to questions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="whyonline_ots">
        <div className="cards_container">
          <h2>BUY ONLINE LIVE VIDEO CLASSES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two" >
                <div className="cards_logo_two">
                  <img src={NEETOLVC} />
                </div>
                <b>
                  <p>MORNING BATCH</p>
                </b>
                <div className="BATCHE_-container">
                  <div className="MathOLVS">
                    <b>PHYSICS</b>
                    <ul>
                      <li>MONDAY-WEDNESDAY-FRIDAY</li>
                      <li>7:00AM to 8:00AM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>CHEMISTRY</b>
                    <ul>
                      <li>TUESDAY-THURSDAY-SATURDAY</li>
                      <li>7:00AM to 8:00AM</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <b>COURSE DATE</b>
                  <ul className="COURSEDATE">
                    <li>coming soon..</li>
                    <li></li>
                  </ul>
                </div>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹35000 + GST"</p>
                  <a href="https://online-ug.egradtutor.in/" target="_blank">
                    Buy Now
                  </a>
                </div>
                <small style={{ padding: "10px 0 0 0" }}>
                  Students can also register for individual subjects with course
                  fee 20000/- per subject
                </small>
              </div>

              {/* CARD 2 */}
              <div className="card_two" >
                <div className="cards_logo_two">
                  <img src={NEETOLVC} />
                </div>
                <b>
                  <p>EVENING BATCH</p>
                </b>
                <div className="BATCHE_-container">
                  <div className="MathOLVS">
                    <b>PHYSICS</b>
                    <ul>
                      <li>MONDAY-WEDNESDAY-FRIDAY</li>
                      <li>7:00PM to 8:00PM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>CHEMISTRY</b>
                    <ul>
                      <li>TUESDAY-THURSDAY-SATURDAY</li>
                      <li>7:00PM to 8:00PM</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <b>COURSE DATE</b>
                  <ul className="COURSEDATE">
                    <li>Coming soon..</li>
                    <li></li>
                  </ul>
                </div>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹50000 + GST"</p>
                  <a href="https://online-ug.egradtutor.in/" className="ENROLL_NOW_btn_two" target="_blank">
                    Buy Now
                  </a>
                </div>
                <small style={{ padding: "10px 0 0 0" }}>
                  Students can also register for individual subjects with course
                  fee 20000/- per subject
                </small>
              </div>
            </div>
          </div>
        </div>
        <p>
          <b>MODE OF INSTRUCTIONS :</b> WE TEACH ALL OUR COURSES ONLINE VIA
          MICROSOFT TEAMS - WORK OR SCHOOL ACCOUNT
        </p>
        <div>
          <a className="flyer" style={{ color: "#021cff" }} href={neetposter}>
            Online Live Video Classes flyer - NEET
          </a>
        </div>
      </div>

      <section className="contents">
        <div className="container content-container">
          {/* <h1 className="subheading">
            NEET - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
          </h1>
          <br />
          <ul className="jee-olvc-kchanges text points">
            <li className="text-li">
              Top faculty from IIT/IISc and IISER at eGRADTutor, through this
              course will cover the complete syllabus of XI and XII (P+C) in 5
              to 6 months.
            </li>
            <li className="text-li">
              This course comes with practice tests and challenger questions,
              which will be discussed in detail by the faculty in guidance
              sessions.
            </li>
            <li className="text-li">
              This course comes with practice tests and challenger questions,
              which will be discussed in detail by the faculty in guidance
              sessions.
            </li>
            <li className="text-li">
              Through evaluation sessions, on 4th Saturday every month, student
              can know about key areas of improvement.
            </li>
            <li>
              These classes are designed perfectly to cater each and every
              student to learn, practice and perform.
            </li>
          </ul>

          <br /> */}
          {/* <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
          <ul className="text points ">
            <li className="text-li">
              Classroom just for you!! Anywhere, Anytime!
            </li>
            <li className="text-li">
              Live online video classes encourage participation of students.
            </li>
            <li className="text-li">
              Live online video classes allow interaction with students through
              chats and comments.
            </li>
            <li className="text-li">
              Live interaction with expert faculty helps students to understand
              the areas of improvement.
            </li>
            <li className="text-li">
              Helps students to understand complex information through immediate
              answers to questions.
            </li>
          </ul> */}

          {/* <div className="jee_updatedTable ">
            <h1 className="subheading buyolvc">
              BUY ONLINE LIVE VIDEO CLASSES
            </h1>

            <table className="olvctable">
              <tr>
                <th>S.NO</th>
                <th>BATCHES</th>
                <th>TIMINGS</th>
                <th>CLASS SCHEDULE</th>
                <th>COURSE DATE</th>
                <th>COURSE FEE</th>
              </tr>

              <tr>
                <td>1</td>
                <td>MORNING</td>
                <td>7:00AM to 8:00AM</td>
                <td>
                  <b>PHYSICS</b>
                  <br />
                  (MONDAY-WEDNESDAY-FRIDAY) <br />
                  <b>CHEMISTRY</b>
                  <br />
                  (TUESDAY-THURSDAY-SATURDAY)
                </td>
                <td>
                  SESSION-1 <br />
                  SEP 4<sup>th</sup> 2023 <br /> <br />
                  SESSION-2 <br /> SEP 11<sup>th</sup> 2023
                </td>
                <td className="MODE-OF-INSTRUCTIONS">
                  <span>
                    <b> 35000/-</b>
                  </span>{" "}
                  <br /> ( P + C ) <br /> * Students can also register for
                  individual subjects <br /> with course fee 20000/- per
                  subject.
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>EVENING</td>
                <td>7:00PM to 8:00PM</td>
                <td>
                  <b>PHYSICS</b>
                  <br />
                  7:00PM to 8:00PM <br />
                  <b>CHEMISTRY</b>
                  <br />
                  (MONDAY-WEDNESDAY-FRIDAY)
                </td>
                <td>
                  SESSION-1 <br /> SEP 4<sup>th</sup> 2023 <br /> <br />
                  SESSION-2 <br />
                  SEP 11<sup>th</sup> 2023
                </td>
                <td className="MODE-OF-INSTRUCTIONS">
                  {" "}
                  <span>
                    {" "}
                    <b> 35000/-</b>{" "}
                  </span>{" "}
                  <br />( P + C ) <br /> * Students can also register for
                  individual subjects <br /> with course fee 20000/- per
                  subject.
                </td>
              </tr>
              <tr>
                <td className="MODE-OF-INSTRUCTIONS">MODE OF INSTRUCTIONS</td>
                <td colSpan="5">
                  WE TEACH ALL OUR COURSES ONLINE VIA MICROSOFT TEAMS - WORK OR
                  SCHOOL ACCOUNT
                </td>
              </tr>
            </table>
          </div> */}
        </div>
        <br />
      </section>

      {/* <div className="brocher container">
        <a className="olvcbroucher" href={neetposter}>
          Online Live Video Classes flyer - NEET
        </a>
      </div> */}
      <section className="contents">
        <div className=" content-container">
          <div className="menu_buttons2">
            <div className="buttons-with-video">
              <div className="button-conta"></div>
            </div>
          </div>
        </div>
      </section>
      <br />

      {/* FEATURES OF ONLINE LIVE VIDEO CLASSES */}
      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1>
          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={Additional} alt="" />
              </div>
              <p>Study and Practice daily 1 hour to crack NEET - 2024</p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={shortcuts} alt="" />
              </div>
              <p>Learn shortcuts and multiple approaches to problem solving.</p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={managementskills} alt="" />
              </div>
              <p>
                Develop time management and planning skills while preparing.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={explained} alt="" />
              </div>
              <p>
                Entire course of XI and XII (P+C) will be taught in 5 to 6
                months.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* <Faq /> */}
      <Footer />
      {isVisible && (
        <span className="UpArrow" onClick={scrollToTop}>
          <a href="#topMove">
            <MdOutlineVerticalAlignTop style={{ fontSize: "30px" }} />
          </a>
        </span>
      )}
    </>
  );
};
