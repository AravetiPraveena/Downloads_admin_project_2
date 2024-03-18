import Examheader from "../Examheader"
import Faq from "../Faq"
import Footer from "../Footer"
import viteeeCardImg from '../CARDS/images/viteee ots card.png'
import { FaShoppingBag } from "react-icons/fa";

// import academic from "../UG/CARDS/images/academic.png";
import academic from ".././CARDS/images/academic.png";

import subjectsd from ".././CARDS/images/learning.png";
import answering from ".././CARDS/images/answering.png"
import Additional from ".././CARDS/images/Additional.png"
import Indiarank from ".././CARDS/images/Indiarank.png";

import performance from "../CARDS/images/NeetperformanceAnalysis.png";
import solving from "../CARDS/images/jee_papersolvingspeed.png";
import score from "../CARDS/images/good_score.png";
import understanding from "../CARDS/images/understandingsubject.png";

export const ViteeeOTSPage = () => {
  return (
    <div>
      <Examheader />
      <div class="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1> VITEEE - ONLINE TEST SERIES</h1>
      </div>

      <div className="jeesection">
        <div className="jeediv">
          <h2>VITEEE - ONLINE TEST SERIES - 2024</h2>
          {/* <a href='#' >COURSE BROCHURE</a> */}
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
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          {/* <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two">
                <div className="cards_logo_two">
              
                  <img src={viteeeCardImg} alt="" />
                </div>
              
                <div className="card_dates_two">
                  <span>10-04-2023 to 22-06-2023</span>
                </div>

                <p className="ENROLL_NOW_btn_two">
                  <a href="">
                    <p><FaShoppingBag /></p>
                    Buy Now
                  </a>
                </p>

                <div className="price_viewschedule_btn">
                
                  <p className="price_two">Price </p>
                  <a href="">
                  
                    view schedule
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>





      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            {/* <li>It will help in improving paper solving speed.</li> */}
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
              </span>
              <p>
                All India rank will be given for each test.
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={subjectsd} alt="" />
              </span>
              <p>
                10 papers as a part of the challenger test series
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={answering} alt="" />
              </span>
              <p>
                Developed as per the latest syllabus of BITSAT exam.
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Additional} alt="" />
              </span>
              <p>
                Additional 5 Previous year question papers for practice
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* <Faq /> */}
      <Footer />


    </div>
  )
}