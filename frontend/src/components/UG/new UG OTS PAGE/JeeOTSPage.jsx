import Examheader from "../Examheader";

import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";

import performance from "../CARDS/images/NeetperformanceAnalysis.png";
import solving from "../CARDS/images/jee_papersolvingspeed.png";
import score from "../CARDS/images/good_score.png";
import understanding from "../CARDS/images/understandingsubject.png";

import preparation from "../CARDS/images/preparation.png";
import subjects from "../CARDS/images/learning.png";
import eliminate from "../CARDS/images/yourpreparation.png";
import management from "../CARDS/images/managementskills.png";

import pdf from "../Images/IITJEE.pdf";

import { SiTestcafe } from "react-icons/si";
import { CiPen } from "react-icons/ci";
import { FaNewspaper } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
// import  schedule  from "./schedule.pdf";
import { IoIosStar } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { useContext, useState } from "react";
import Faq from "../Faq";
import Footer from "../Footer";
import Cards from "../CARDS/Cards";

import "./JeeOTSPage.css";

import myContext from "../../PG/context/MyContext";
import { MdOutlineVerticalAlignTop } from "react-icons/md";


export const JeeOTSPage = () => {

  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <div>
      <Examheader />

      <div class="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1> JEE - ONLINE TEST SERIES</h1>
      </div>

      <div className="jeesection">
        <div className="jeediv">
          <h2>JEE (MAINS & ADVANCED) - ONLINE TEST SERIES - 2024</h2>
          <a href={pdf} target="_blank">
            COURSE BROCHURE
          </a>
        </div>
        <p className="jeesection_paragraph">
          Preparing well for the exam and attempting the exam successfully is
          one of the greatest desires for all the students. Many students will
          not be able to attempt IIT-JEE on the examination day as they do not
          have the right resources and proper guidance for the preparation. Our
          online test series makes your understanding stronger and helps you to
          challenge yourself in an environment that resembles the final
          examination. Challenger test series - as the name suggest, challenges
          the students’ abilities to attain the best by answering the toughest
          questions. With our online test series, channel your skills towards
          the desired success.
        </p>
      </div>

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <div className="wayOTS_-container  ">
            <h2>WHY ONLINE TEST SERIES?</h2>
            <ul className="FEATURES_-contant">
              {/* <li>It will help in improving paper solving speed.</li> */}
              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={performance} alt="" />

                </div>
                <p>
                  Our performance analysis helps you understand the areas of
                  improvement.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                {/* <BsChatLeftTextFill /> */}
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={solving} alt="" />

                </div>
                <p>It will help in improving paper solving speed.</p>
              </li>
              <li style={{ alignItems: "center" }}>
                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={score} alt="" />
                </div>
                <p>
                  Appearing in these tests will improve the overall preparation
                  and will increase the chances of getting a good score.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>

                <div className="FEATURES_-contantImg_bg">
                  <img width={150} height={150} src={understanding} alt="" />
                </div>

                <p>
                  Our online test series helps you know your understanding of
                  the subject so that you can put efforts in the right
                  direction.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="whyonline_ots">
        <Cards />
      </div>

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            {/* <li>It will help in improving paper solving speed.</li> */}
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={preparation} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>
                Gives you sufficient time to consolidate on your JEE Mains & JEE
                Advanced preparation.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={eliminate} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>
                His test series helps you to eliminate conceptual doubts and
                plugs in any gaps in your preparation.
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={management} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>
                Gives you several chances to appear in simulated JEE like
                environment to help you develop better time management skills.
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={subjects} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>
                Courses designed to challenge and test the students learning and
                understanding of the subjects.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* <Faq /> */}
      <Footer />

      {isVisible && (
        <span className="UpArrow" onClick={scrollToTop}>
          <a href="#topMove"><MdOutlineVerticalAlignTop style={{ fontSize: '30px' }} /></a>
        </span>
      )}
    </div>
  );
};

export const Cardsdata1 = [
  {
    logo: <SiTestcafe />,
    TEST_SERIES_TYPE1: "Complete Test Series",
    TEST_SERIES_TYPE2: "(JEE Mains+Advanced) ",
    linkopnen_ots: "https://online-ug.egradtutor.in/",
    TEST_SERIES_TYPE3: " Challenger Test Series (Advanced)",
    PRICE: "₹5000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "view schedule",
    // schedule: [schedule],
  },
];

export const Cardsdata2 = [
  {
    logo: <CiPen />,
    TEST_SERIES_TYPE1: "Challenger Test Series",
    TEST_SERIES_TYPE2: "(JEE Advanced) ",

    linkopnen_ots: "https://online-ug.egradtutor.in/",
    viewschedule: "view schedule",

    PRICE: "₹2000 + GST	",
    START_DATE: "20-04-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },
  {
    logo: <FaNewspaper />,

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "Mains+Advanced)-Mathematics",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "view schedule",
  },
  {
    logo: <FaBookOpen />,

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "Mains+Advanced)-Physics",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "view schedule",
  },
  {
    logo: <PiStudentFill />,

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "Mains+Advanced)-Chemistry",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "view schedule",
  },
];
