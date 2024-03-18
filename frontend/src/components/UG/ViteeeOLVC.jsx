import React, { useContext, useState } from "react"
import Examheader from "./Examheader"
import { Carousel } from "react-responsive-carousel"

import comments from "./CARDS/images/comments.png";
import Discussion from "./BitsatOLVC_images/Discussion.png";
import yourpreparation from "./CARDS/images/yourpreparation.png";
import NeetperformanceAnalysis from "./CARDS/images/NeetperformanceAnalysis.png";
import Footer from "./Footer";
import myContext from "../PG/context/MyContext";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import Faq_Viteee from "./Faq_Viteee";

import mpc from "./infographic/mpc.png";
import Faq from "./Faq";
import bitsatTable2 from "./BitsatOLVC_images/bitsat2024_CRASH_COURSE_TABLE.png";


export const ViteeeOLVC = () => {
    const context = useContext(myContext);
    const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

    const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
    const scheduledowload = () => {
        setshowscheduledowloaded(true);
    };
    return (

        <>
            <span id="topMove"></span>
            <Examheader />
            <div className="otsh1" style={{ background: "#000", height: "9vh" }}>
                <h1>VITEEE CRASH COURSE - 2024</h1>
            </div>

            <div style={{ padding: '10px 0' }}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showArrows={false}
                    interval={4600}
                    showThumbs={false}
                    // showIndicators={false}
                    showStatus={false}
                >
                    {/* <div>
                        <img src={bitsat2024_CRASH_COURSE} alt="" />
                    </div>
                    <div>
                        <img src={BITSAT_CRASH_COURSE_BANNER} alt="" />
                    </div> */}
                </Carousel>
            </div>

            <div className="jeesection">
                <div className="jeediv">
                    <h2 className="olvcheading">
                        VITEEE CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
                    </h2>
                    <p className="jeesection_paragraph">
                        Vellore Institute of Technology Engineering Entrance Examination (VITEEE) is conducted for admission to undergraduate engineering programmes in VIT group of Institutions. VITEEE will be conducted between 19 and 30 April 2024 (Tentatively) at designated centres across India and abroad (No.of days will vary for test cities). The duration of the examination will be 2 hours and 30 minutes. Candidates can appear only once for VITEEE-2024. All questions will be Multiple Choice Questions and one mark for the right answer and zero for the wrong answer. Those who score '0' in total will be declared as 'Not qualified' and will not be eligible to participate in the counselling process. There will be a total of 125 questions divided into the section Maths/Biology (40 questions), Physics (35 questions), Chemistry (35 questions), Aptitude (10 questions), and English (5 questions). The question paper will be in English only. The fee towards application and subsequent counselling is non-refundable. The method of Equi-percentile is adopted for the merit list preparation of VITEEE-Computer Based Examination.
                    </p>
                </div>
            </div>

            <div>
                {/* <div className="FEATURES_Bgcolor">
  <div className="whyonline_ots ">
    <div className="wayOTS_-container  ">
      <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
      <ul className="FEATURES_-contant">
        <li style={{ alignItems: "center" }}>
          <span className="card_-img">
            <img width={90} height={90} src={answering} alt="" />
          </span>
          <p>Classroom just for you!! Anywhere, Anytime!</p>
        </li>
        <li style={{ alignItems: "center" }}>
          <span className="card_-img">
            <img width={90} height={90} src={Additional} alt="" />
          </span>
          <p>
            Live online video classes encourage participation of students.
          </p>
        </li>
        <li style={{ alignItems: "center" }}>
          <span className="card_-img">
            <img width={90} height={90} src={comments} alt="" />
          </span>
          <p>
            Live online video classes allow interaction with students
            through chats and comments.
          </p>
        </li>
        <li style={{ alignItems: "center" }}>
          <span className="card_-img">
            <img width={90} height={90} src={explained} alt="" />
          </span>
          <p>
            Live interaction with expert faculty helps students to
            understand the areas of improvement.
          </p>
        </li>
       
      </ul>
    </div>

    <div className="Schedulebitsat">
      <div className="COURSEInfoCard_-container">
        <h2>Schedule</h2>
        <ul className="COURSEInfoCard">
          <li>
            <b>COURSE :</b> ONLINE LIVE VIDEO CLASSES
          </li>

          <li>
            {" "}
            <b>EXAM :</b> BITSAT 1 - YEAR COURSE – 2024
          </li>
          <li>
            <b>SYLLABUS</b> COMPLETE SYLLABUS FOR XI & XII
          </li>
          <li>
            <b>ELIGIBILITY :</b> APPEARED/PASSED XI IN 2023/PASSED
            XII(LONG TERM)
          </li>
          <li>
            <b>SUBJECTS :</b> MATHS + PHYSICS + CHEMISTRY + ENGLISH AND
            LOGICAL REASONING
          </li>
          <li>
            <b>COURSE DURATION :</b> 7 - 8 MONTHS
          </li>
          <li>
            <b>MODE OF INSTRUCTIONS :</b> ENGLISH
          </li>
          <li>
            <b>START DATE :</b> Batch-1: 01-06-2023 Batch-2: 01-07-2023
          </li>
          <li>
            <b>END DATE :</b> COURSE VALID UNTIL BITSAT EXAM
          </li>
          <li>
            <b>FEES :</b> 45000/- + GST (TOTAL FEE CAN BE PAID IN 2
            INSTALLMENTS) ONLY
          </li>
          <li>
            <b>TIMINGS :</b> BATCH-1: 6:00 AM – 8:00AM BATCH-2: 7:00 PM –
            9:00PM
          </li>
          <a href="https://online-ug.egradtutor.in/">
            <button>ENROLL NOW</button>
          </a>
        </ul>
      </div>
   
    </div>

   
  </div>
</div> */}
            </div>


            {/* table */}

            {/* BUY ONLINE TEST SERIES */}

            {/* <div
  style={{ overflowY: "scroll" }}
  className="container content-container"
></div> */}

            <div className="bitsat_olvc">
                {/* BITSAT CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024 */}

                {/* WHY ONLINE LIVE VIDEO CLASSES ? */}
            </div>

            {/* FEATURES OF ONLINE LIVE VIDEO CLASSES */}

            <div className="FEATURES_Bgcolor">
                <div className="whyonline_ots">
                    {/* <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1> */}
                    <h1 className="subheading">FEATURES AND HIGHLIGHTS OF THE COURSE</h1>

                    <ul className="FEATURES_-contant">
                        <li id="FEATURES-OTS">
                            <div className="FEATURES_-contantImg_bg">
                                <img width={150} height={150} src={Discussion} alt="" />
                            </div>
                            <p>
                                Discussion and coverage of entire BITSAT syllabus in 30-35 days.
                            </p>
                        </li>

                        <li id="FEATURES-OTS">
                            <div className="FEATURES_-contantImg_bg">
                                <img width={150} height={150} src={yourpreparation} alt="" />
                            </div>
                            <p>Practice sheets with 100-150 questions for daily practice.</p>
                        </li>

                        <li id="FEATURES-OTS">
                            <div className="FEATURES_-contantImg_bg">
                                <img width={150} height={150} src={comments} alt="" />
                            </div>
                            <p>
                                One-on-One doubt clarification sessions and personal mentoring.
                            </p>
                        </li>

                        <li id="FEATURES-OTS">
                            <div className="FEATURES_-contantImg_bg">
                                <img width={150} height={150} src={NeetperformanceAnalysis} alt="" />
                            </div>
                            <p>Online test series for continuous performance Evaluation</p>
                        </li>
                    </ul>
                </div>
            </div>
            <br />

            {/* <div>
                <div className="whyonline_ots">
                    <h1 className="subheading">BATCH TIMINGS</h1>
                    <img src={bitsatTable2} alt="" style={{ width: "100%" }} />
                </div>
            </div> */}



            {/* <Faq_BitsatOLVC /> */}
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
    )
}