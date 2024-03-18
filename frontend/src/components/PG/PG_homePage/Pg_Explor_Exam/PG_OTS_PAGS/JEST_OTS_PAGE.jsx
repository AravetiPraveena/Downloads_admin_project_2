import React, { useContext, useState } from "react";
import Faq from "../../../../UG/Faq";
import logo from "../../../../UG/logo2.jpg";
import { Link } from "react-router-dom";
import "../../../../UG/IITJEE_OLVCStyles.css";
import Footer from "../../../../UG/Footer";
import Examheader from "../../../../UG/Examheader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";

import BITSATimg from "../../../../UG/CARDS/images/BITSATCARD.png";
import { FaShoppingBag } from "react-icons/fa";

import academic from "../../../../UG/CARDS/images/academic.png";
import analysis from "../../../../UG/CARDS/images/analysis.png";
import performance from "../../../../UG/CARDS/images/NeetperformanceAnalysis.png";
import subjects from "../../../../UG/CARDS/images/learning.png";
import Indiarank from "../../../../UG/CARDS/images/Indiarank.png";

import subjectsd from "../../../../UG/CARDS/images/learning.png";
import answering from "../../../../UG/CARDS/images/answering.png";
import Additional from "../../../../UG/CARDS/images/Additional.png";
import myContext from "../../../context/MyContext";

import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { Nav } from "../../../../UG/Nav";
import { IoMdHome } from "react-icons/io";
export const JEST_OTS_PAGE = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <div>
        <div className="ugexam_header">
          {Nav.map((NavData, index) => {
            return (
              <div className="header ug_exam_header" key={index}>
                <div className={NavData.logo_img_container}>
                  <Link to={"/"}>

                    <img src={NavData.logo} alt="" />
                  </Link>
                </div>


                <div className="exam_login_menu  ">
                  <li>
                    <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
                      <IoMdHome /> {NavData.link1}
                    </Link>
                  </li>
                  {/* <a
                    href="https://online-ug.egradtutor.in"
                    target='_blank'
                    className={NavData.login}
                  >
                    {NavData.btn1}
                  </a> */}

                </div>
              </div>

            );
          })}


        </div>
      </div>

      {/* BITSAT - ONLINE TEST SERIES */}
      <div className="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1>JEST - ONLINE TEST SERIES</h1>
      </div>
      <div className="jeesection">
        <div className="jeediv">

          <h2>JEST - ONLINE TEST SERIES - 2024</h2>

          {/* <a href="">COURSE BROCHURE</a> */}
        </div>

        <p className="jeesection_paragraph">
          JEST stands for the Joint Entrance Screening Test. It is an online
          exam conducted for students aspiring to pursue postgraduate programs
          in physics and theoretical computer science. JEST provides an
          opportunity for candidates to explore advanced degrees, including
          Ph.D., at various prestigious institutes across India. Thorough
          preparation and outstanding performance in the exam are essential
          goals for JEST aspirants. The JEST Online Test Series offered by
          eGRADTutor academy proves to be an invaluable resource for students,
          enabling them to assess their knowledge and comprehension of subjects
          before facing the actual entrance examination. Our online test series
          not only reinforces your understanding but also provides challenges in
          an environment closely resembling the final JEST examination. At
          eGRADTutor academy, we offer a comprehensive set of resources,
          including previous year question papers and online test series
          tailored specifically for JEST aspirants. The online test series
          replicates the JEST exam interface, empowering students to strategize
          and approach the examination with confidence. Practicing with our test
          series enhances aspirants' preparation, significantly improving their
          prospects of success in the JEST exam and admission to diverse
          postgraduate programs in physics and theoretical computer science.
        </p>
      </div>

      {/* WHY ONLINE TEST SERIES? */}
      <div className="FEATURES_Bgcolor">
        <div className="jeesection">
          <h2>WHY ONLINE TEST SERIES?</h2>
          <ul className="FEATURES_-contant">
            {/* <li>By taking BITSAT online tests series, candidates get familiar with the test-taking environment.</li> */}
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={academic} alt="" />
              </span>
              <p>
                JEST online test series is crafted by academic experts with
                years of domain knowledge and experience
              </p>
            </li>

            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={performance} alt="" />
              </span>
              <p>
                With the help of online test series, candidates are able to
                enhance their speed and accuracy of answering questions in the
                examination.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={analysis} alt="" />
              </span>
              <p>
                You will be receiving an in-depth analysis post your test that
                will help you understand your strong/weak areas.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={subjects} alt="" />
              </span>
              <p>
                JEST online test series lets you have a real-time exam
                experience. You can learn to manage your time better, attempt
                questions with accuracy and precision.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* BUY ONLINE TEST SERIES */}
      {/* <div className="jeesection jeetable">
        <h2>BUY ONLINE TEST SERIES</h2>
        <div>
           <table className="jeeinsidetable">
            <tr>
              <th>S.NO</th>
              <th> TEST SERIES TYPE</th>
              <th>PRICE</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>BUY NOW</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Challenger Test Series (15 Tests)</td>
              <td>
                &#8377;2500 +<small>GST</small>
              </td>
              <td>10-04-2023</td>
              <td>22-06-2023</td>
              <td>
                <center>
                  <a href="https://online-ug.egradtutor.in/">BUY NOW</a>
                </center>
              </td>
            </tr>
          </table> 
        </div>
      </div> */}

      {/* <div className="whyonline_ots">
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two">
                <div className="cards_logo_two"> */}
      {/* <SiTestcafe /> */}
      {/* <img src={BITSATimg} alt="" />
                </div> */}
      {/* <div className="card_info_two">
                <p>
                  <FaArrowCircleRight />
                  Challenger Test Series (15 Tests)
                </p>
              </div> */}
      {/* <div className="card_dates_two">
                  <span>10-04-2023 to 22-06-2023</span>
                </div> */}

      {/* <p className="ENROLL_NOW_btn_two">
                  <a href="">
                    <p><FaShoppingBag /></p>
                    Buy Now
                  </a>
                </p> */}

      {/* <div className="price_viewschedule_btn">
                  <p className="price_two">₹5000 + GST"</p>
                  <a href=""> */}
      {/* <p><IoIosStar /></p>
                    view schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* NEET - ONLINE TEST SERIES SCHEDULE */}

      {/* <div className="jeesection ots_schedule">
        <h2 className="bitsatheading">BITSAT - ONLINE TEST SERIES SCHEDULE</h2>
        <a className="otsbroucher" href="#">
          BITSAT - ONLINE TEST SERIES SCHEDULE
        </a>
      </div> */}

      {/* FEATURES OF ONLINE TEST SERIES */}
      {/* <div className='jeesection'>
        <h2>FEATURES OF ONLINE TEST SERIES</h2>
        <ul>
          <li>All India rank will be given for each test.</li>
          <li>10 papers as a part of the challenger test series</li>
          <li>Developed as per the latest syllabus of BITSAT exam.</li>
          <li>Additional 5 Previous year question papers for practice</li>
          <li>Well explained and detailed answers for every question.</li>
          <li>All the tests are active till the BITSAT - 2023 examination.</li>
          <li>Test series prepared by experts who are top faculty across India.</li>
          <li>We have designed BITSAT online test series that will provide you with in-depth coverage of the latest syllabus.</li>
          <li>Our BITSAT online test interface is similar to that of the final exam, and it helps students assess their preparation.</li>
          <li>Same pattern and time limit as the actual BITSAT exam which acquaints students with the intricacies of the exam.</li>
        </ul>
      </div> */}

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            {/* <li>It will help in improving paper solving speed.</li> */}
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
              </span>
              <p>All India rank will be given for each test.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={subjectsd} alt="" />
              </span>
              <p>10 papers as a part of the challenger test series</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={answering} alt="" />
              </span>
              <p>Developed as per the latest syllabus of JEST exam.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Additional} alt="" />
              </span>
              <p>Additional 5 Previous year question papers for practice</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="features_ots ">
        <div className="features_heading">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <div className="ots_-cordContainer">
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  {" "}
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p> All India rank will be given for each test.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>10 papers as a part of the challenger test series</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Developed as per the latest syllabus of BITSAT exam.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Additional 5 Previous year question papers for practice</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>
                  Same pattern and time limit as the actual BITSAT exam which
                  acquaints students with the intricacies of the exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
