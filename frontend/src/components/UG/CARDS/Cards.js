import React, { useState } from "react";
// import { Cardsdata, Cardsdata1, Cardsdata2 } from './cardsdata'
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
// import { Link } from "react-router-dom";

import { PiChatCenteredTextLight } from "react-icons/pi";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import j_MA from "../CARDS/images/jeeMPC.png";
import j_A from "../CARDS/images/JeeAdvancedMPC.png";
import j_maths from "../CARDS/images/MATHEMATICS.png";
import j_phy from "../CARDS/images/PHYSICS.png";
import j_chem from "../CARDS/images/CHEMISTRY.png";

import "./Cards.css";

const Cards = () => {
  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <div>
      <>
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              {Cardsdata1.map((cards, index) => {
                return (
                  <div key={index} className="card_two">
                    <div className="cards_logo_two">
                      <img src={cards.logoimg} />
                      {/* <p className="cards_logo_two_icon">{cards.logo}</p> */}
                      {/* <h3>Complete Test Series</h3> */}
                    </div>
                    {/* <div className="card_info_two">
                      <p>
                        <FaArrowCircleRight />
                        {cards.TEST_SERIES_TYPE1}
                      </p>
                      <p>
                        <FaArrowCircleRight />
                        {cards.TEST_SERIES_TYPE2}
                      </p>
                      <p>
                        <FaArrowCircleRight />
                        {cards.TEST_SERIES_TYPE3}
                      </p>
                    </div> */}
                    <div className="card_dates_two">
                      <span>{cards.START_DATE}</span>
                      <span>to</span>
                      <span>{cards.END_DATE}</span>
                    </div>
                    <p className="ENROLL_NOW_btn_two">
                      <a href={cards.linkopnen_ots} target="_blank">
                        <p>
                          <FaShoppingBag />
                        </p>
                        {cards.ENROLL_NOW}
                      </a>
                    </p>
                    <div className="price_viewschedule_btn">
                      <p className="price_two">{cards.PRICE}</p>
                      <a
                      // href={cards.schedule}
                      // onClick={scheduledowload}
                      // download={cards.schedule}
                      >
                        <p>{/* <IoIosStar /> */}</p>
                        {cards.viewschedule}
                      </a>

                      {showscheduledowloaded ? (
                        <div className="schedule_Dowloaded ">
                          <p>
                            schedule Dowloaded <FiCheck />
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}

              {Cardsdata2.map((cards, index) => {
                return (
                  <div key={index} className="card_two">
                    <div className="cards_logo_two">
                      {/* {cards.logo} */}
                      <img src={cards.logoimg} />
                      {/* <SiTestcafe className='cards_logo_text'/> */}
                    </div>
                    {/* <div className="card_info_two">
                      <p>
                        <FaArrowCircleRight />
                        {cards.TEST_SERIES_TYPE1}
                      </p>
                      <p>
                        <FaArrowCircleRight />
                        {cards.TEST_SERIES_TYPE2}
                      </p>
                    </div> */}
                    <div className="card_dates_two">
                      <span>{cards.START_DATE}</span>
                      <span>to</span>
                      <span>{cards.END_DATE}</span>
                    </div>

                    <p className="ENROLL_NOW_btn_two">
                      <a href={cards.linkopnen_ots} target="_blank">
                        <p>
                          <FaShoppingBag />
                        </p>
                        {cards.ENROLL_NOW}
                      </a>
                    </p>

                    <div className="price_viewschedule_btn">
                      <p className="price_two">{cards.PRICE}</p>
                      <a href="">
                        <p>{/* <IoIosStar /> */}</p>
                        {cards.viewschedule}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* {
             cardsdata.map((cards, index) => {
               return (
                 <div key={index}>
                   {cards.abd}
                 </div>
               )
             })
           } */}
        </div>
      </>
    </div>
  );
};

export default Cards;

export const Cardsdata1 = [
  {
    logo: <SiTestcafe />,
    logoimg: [j_MA],
    TEST_SERIES_TYPE1: "Complete Test Series",
    TEST_SERIES_TYPE2: "(JEE Mains+Advanced) ",
    linkopnen_ots: "https://online-ug.egradtutor.in/",
    TEST_SERIES_TYPE3: " Challenger Test Series (Advanced)",
    PRICE: "₹5000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "View Schedule",
    // schedule: [schedule],
  },
];

export const Cardsdata2 = [
  {
    logo: <CiPen />,
    logoimg: [j_A],

    TEST_SERIES_TYPE1: "Challenger Test Series",
    TEST_SERIES_TYPE2: "(JEE Advanced) ",

    linkopnen_ots: "https://online-ug.egradtutor.in/",
    viewschedule: "View Schedule",

    PRICE: "₹2000 + GST	",
    START_DATE: "20-04-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },
  {
    logo: <FaNewspaper />,
    logoimg: [j_maths],

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "(Mains+Advanced)-Mathematics",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "View Schedule",
  },
  {
    logo: <FaBookOpen />,
    logoimg: [j_phy],

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "(Mains+Advanced)-Physics",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "View Schedule",
  },
  {
    logo: <PiStudentFill />,
    logoimg: [j_chem],

    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "(Mains+Advanced)-Chemistry",
    linkopnen_ots: "https://online-ug.egradtutor.in/",

    // TEST_SERIES_TYPE3: ' Chemistry',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
    viewschedule: "View Schedule ",
  },
];

// Cards
