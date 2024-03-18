// import React from 'react'
// import Header from './Header'
// import logo from './logo2.jpg'
// import pdf from './Images/IITJEE.pdf'

// import './JeeOts.css'

// import Faq from './Faq'
// import { Link } from 'react-router-dom'
// import Footer from './Footer'
// import Examheader from './Examheader'
// import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
// import { PiDesktopTowerLight } from "react-icons/pi";
// import otsimg from './image-removebg-preview.png'

// import { FaShoppingBag } from "react-icons/fa";
// import { SiTestcafe } from "react-icons/si";
// import { FaArrowCircleRight } from "react-icons/fa";
// import Cards from './CARDS/Cards'

// export const JeeOts = () => {

//    return (
//       <div>
//          {/* import logo from './logo2.jpg' */}
//          <Examheader />

//          {/* IIT - JEE - ONLINE TEST SERIES */}
//          <div class="otsh1" style={{ background: " #000", height: "9vh" }}>
//             <h1> JEE - ONLINE TEST SERIES</h1>
//          </div>

//          <div className='jeesection'>
//             <div className='jeediv'>
//                <h2>JEE (MAINS & ADVANCED) - ONLINE TEST SERIES - 2023</h2>
//                <a href={pdf} target='_blank'>COURSE  BROCHURE
//                </a>

//             </div>
//             <p className='jeesection_paragraph'>Preparing well for the exam and attempting the exam successfully is one of the greatest desires for all the students. Many students will not be able to attempt IIT-JEE on the examination day as they do not have the right resources and proper guidance for the preparation. Our online test series makes your understanding stronger and helps you to challenge yourself in an environment that resembles the final examination. Challenger test series - as the name suggest, challenges the students’ abilities to attain the best by answering the toughest questions. With our online test series, channel your skills towards the desired success.</p>
//          </div>
//          <div >

//             {/* WHY ONLINE TEST SERIES? */}
//             {/* <div className='jeesection'>

//                <h2>WHY ONLINE TEST SERIES?</h2>

//                <div className='jeelist'>
//                   <ul>
//                      <li>It will help in improving paper solving speed.</li>
//                      <li>Our performance analysis helps you understand the areas of improvement.</li>
//                      <li>Appearing in these tests will improve the overall preparation and will increase the chances of getting a good score.</li>
//                      <li>Our online test series helps you know your understanding of the subject so that you can put efforts in the right direction.</li>
//                   </ul>
//                </div>
//             </div> */}

//             <div className='whyonline_ots'>
//                <div className='features_heading'>
//                   <h2>WHY ONLINE TEST SERIES?</h2>
//                   <div className="ots_whyots-cordContainer">
//                      <div className="ots_whyots-cord_-contant">
//                         <div >
//                            <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
//                            <p style={{ color: "#000" }}>It will help in improving paper solving speed.</p>
//                         </div>

//                      </div>
//                      <div className="ots_whyots-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
//                            <p style={{ color: "#000" }}>
//                               Our performance analysis helps you understand the areas of improvement.
//                            </p>
//                         </div>

//                      </div >
//                      <div className="ots_whyots-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
//                            <p style={{ color: "#000" }}>
//                               Appearing in these tests will improve the overall preparation and will increase the chances of getting a good score.
//                            </p>
//                         </div>

//                      </div>
//                      <div className="ots_whyots-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
//                            <p style={{ color: "#000" }}>
//                               Our online test series helps you know your understanding of the subject so that you can put efforts in the right direction.
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* BUY ONLINE TEST SERIES */}
//             {/* <div className='jeesection jeetable'>
//                <h2>BUY ONLINE TEST SERIES</h2>

//                <table className='jeeinsidetable'>
//                   <tr>
//                      <th >S.NO</th>
//                      <th> TEST SERIES TYPE</th>
//                      <th>PRICE</th>
//                      <th>START DATE</th>
//                      <th>END DATE</th>
//                      <th>ENROLL NOW</th>
//                   </tr>
//                   <tr>
//                      <td>1</td>
//                      <td>Complete Test Series(JEE Mains+Advanced)  + Challenger Test Series (Advanced)</td>
//                      <td>&#8377;5000 + <small>GST</small></td>
//                      <td>22-03-2023</td>
//                      <td>31-07-2023</td>
//                      <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
//                   </tr>

//                   <tr>
//                      <td>2</td>
//                      <td>Challenger Test Series (JEE Advanced)</td>
//                      <td>&#8377;2000 + <small>GST</small></td>
//                      <td>20-04-2023</td>
//                      <td>31-07-2023</td>
//                      <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
//                   </tr>

//                   <tr>
//                      <td>3</td>
//                      <td>JEE (Mains+Advanced) - Mathematics</td>
//                      <td>&#8377;2000 + <small>GST</small></td>
//                      <td>22-03-2023</td>
//                      <td>31-07-2023</td>
//                      <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
//                   </tr>

//                   <tr>
//                      <td>4</td>
//                      <td>JEE (Mains+Advanced) - Physics</td>
//                      <td>&#8377;2000 + <small>GST</small></td>
//                      <td>22-03-2023</td>
//                      <td>31-07-2023</td>
//                      <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
//                   </tr>

//                   <tr>
//                      <td>5</td>
//                      <td>JEE (Mains+Advanced) - Chemistry</td>
//                      <td>&#8377;2000 + <small>GST</small></td>
//                      <td>22-03-2023</td>
//                      <td>31-07-2023</td>
//                      <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
//                   </tr>
//                </table>
//             </div> */}

// <Cards/>
// {/*

//             <div className='cards_ots_container' >

//                <h1>BUY ONLINE TEST SERIES</h1>
//                <div className="cards_ots_subcontainer">
//                   <div className="cards_ots">

//                      {
//                         Cardsdata.map((cards, index) => {
//                            return (
//                               <div key={index} className='card_ots'>
//                                  <div className='cards_ots_logo'>

//                                     <SiTestcafe className='cards_logo_text' />

//                                  </div>

//                                  <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE1}</p>
//                                  <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE2}</p>
//                                  <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE3}</p>

//                                  <div className="card_ots_dates">
//                                     <span>{cards.START_DATE}</span>
//                                     <span>to</span>
//                                     <span>{cards.END_DATE}</span>

//                                  </div>

//                                  <button className='ENROLL_NOW_btn'><p><FaShoppingBag /></p>{cards.ENROLL_NOW}</button> <p className="OTS_CARDS_price">
//                                     {cards.PRICE}
//                                  </p>

//                               </div>
//                            )
//                         })
//                      }
//                   </div>
//                </div>

//             </div>
//  */}

//             <div className='features_heading features_ots' style={{width:"80%"}}>
//                <h2>JEE (MAINS & ADVANCED)-TEST SERIES SCHEDULE</h2>
//                <div className='buttons_ots'>
//                   <button>JEE-MAINS SCHEDULE</button>
//                   <button>JEE-ADVANCED SCHEDULE</button>
//                </div>
//             </div>

//             {/*

//             IIT-JEE(MAINS & ADVANCED)-TEST SERIES SCHEDULE
//             <div className='jeesection'>
//                <div className='jeebtns'>
//                   <h2>JEE (MAINS & ADVANCED)-TEST SERIES SCHEDULE</h2>

//                   <ul>
//                      <li><a href="#">Complete Test Series(JEE Mains+Advanced) + Challenger Test Series (Advanced)</a></li>
//                      <li><a href="#">Challenger Test Series (JEE Advanced)</a></li>
//                      <li><a href="#">JEE (Mains+Advanced) - Mathematics</a></li>
//                      <li><a href="#">JEE (Mains+Advanced) - Physics</a></li>
//                      <li><a href="#">JEE (Mains+Advanced) - Chemistry</a></li>
//                   </ul>

//                </div>

//                <div className='jeelist'>

//                <h2>FEATURES OF ONLINE TEST SERIES</h2>
//                   <ul>
//                      <li>Gives you other possible solutions to a problem.</li>
//                      <li>Each test gives you the realistic & authentic all India ranking.</li>
//                      <li>Question papers prepared by experts who are top faculty across India.</li>
//                      <li>Developed as per the latest syllabus of IIT-JEE-(MAINS & ADVANCED) exam.</li>
//                      <li>All the tests will be accessible till the IIT-JEE-(ADVANCED)-2023 examination.</li>
//                      <li>Gives you sufficient time to consolidate on your JEE Mains & JEE Advanced preparation.</li>
//                      <li>Courses designed to challenge and test the students learning and understanding of the subjects.</li>
//                      <li>This test series helps you to eliminate conceptual doubts and plugs in any gaps in your preparation.</li>
//                      <li>Same pattern and time limit as the actual JEE exam which acquaints students with the intricacies of the exam.</li>
//                      <li>Gives you several chances to appear in simulated JEE like environment to help you develop better time management skills.</li>
//                   </ul>
//                </div>

//             </div> */}

//             {/* fax */}

//             <div className='features_ots '>
//                <div className='features_heading'>
//                   <h2 style={{width: "87%"}}>FEATURES OF ONLINE TEST SERIES</h2>
//                   <div className="ots_-cordContainer">
//                      <div className="ots_-cord_-contant">
//                         <div >
//                            <div style={{ fontSize: '50px', color: 'red' }}>  <HiOutlineChatBubbleBottomCenterText /></div>
//                            <p> Gives you other possible solutions to a problem.</p>
//                         </div>

//                      </div>
//                      <div className="ots_-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '50px', color: 'red' }}>
//                               <HiOutlineChatBubbleBottomCenterText />
//                            </div>
//                            <p>
//                               Each test gives you the realistic & authentic all India ranking.
//                            </p>
//                         </div>

//                      </div >
//                      <div className="ots_-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '50px', color: 'red' }}>
//                               <HiOutlineChatBubbleBottomCenterText />
//                            </div>
//                            <p>
//                               Question papers prepared by experts who are top faculty across India.
//                            </p>
//                         </div>

//                      </div>
//                      <div className="ots_-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '50px', color: 'red' }}>
//                               <HiOutlineChatBubbleBottomCenterText />
//                            </div>
//                            <p>
//                               Developed as per the latest syllabus of IIT-JEE-(MAINS & ADVANCED) exam.
//                            </p>
//                         </div>
//                      </div>
//                      <div className="ots_-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '50px', color: 'red' }}>
//                               <HiOutlineChatBubbleBottomCenterText />
//                            </div>
//                            <p>
//                               All the tests will be accessible till the IIT-JEE-(ADVANCED)-2023 examination.
//                            </p>
//                         </div>
//                      </div>
//                      {/* <div className="ots_-cord_-contant">
//                         <div>
//                            <div style={{ fontSize: '50px', color: 'red' }}>
//                               <HiOutlineChatBubbleBottomCenterText />
//                            </div>
//                            <p>
//                               Gives you sufficient time to consolidate on your JEE Mains & JEE Advanced preparation.
//                            </p>
//                         </div>
//                      </div> */}
//                   </div>
//                </div>
//             </div>
//             <Faq />
//             <Footer />
//          </div>
//       </div>
//    )
// }

// export const Cardsdata = [
//    {
//       TEST_SERIES_TYPE1: 'Complete Test Series',
//       TEST_SERIES_TYPE2: '(JEE Mains+Advanced) ',

//       TEST_SERIES_TYPE3: ' Challenger Test Series (Advanced)',
//       PRICE: '₹5000 + GST',
//       START_DATE: '22-03-2023',
//       END_DATE: '31-07-2023',
//       ENROLL_NOW: 'Buy Now'
//    },

//    {
//       TEST_SERIES_TYPE1: 'Challenger Test Series',
//       TEST_SERIES_TYPE2: '(JEE Advanced) ',

//       TEST_SERIES_TYPE3: ' Challenger Test Series (Advanced)',
//       PRICE: '₹2000 + GST	',
//       START_DATE: '20-04-2023',
//       END_DATE: '31-07-2023',
//       ENROLL_NOW: 'Buy Now'
//    }, {
//       TEST_SERIES_TYPE1: 'JEE ',
//       TEST_SERIES_TYPE2: '(Mains+Advanced) Mathematics ',

//       TEST_SERIES_TYPE3: ' Mathematics',
//       PRICE: '₹2000 + GST',
//       START_DATE: '22-03-2023',
//       END_DATE: '31-07-2023',
//       ENROLL_NOW: 'Buy Now'
//    }, {
//       TEST_SERIES_TYPE1: 'JEE',
//       TEST_SERIES_TYPE2: '(Mains+Advanced) - Physics ',

//       // TEST_SERIES_TYPE3: ' Challenger Test Series (Advanced)',
//       PRICE: '₹2000 + GST',
//       START_DATE: '22-03-2023',
//       END_DATE: '31-07-2023',
//       ENROLL_NOW: 'Buy Now'
//    },

//    {
//       TEST_SERIES_TYPE1: 'JEE',
//       TEST_SERIES_TYPE2: 'Mains+Advanced) ',

//       TEST_SERIES_TYPE3: ' Chemistry',
//       PRICE: '₹2000 + GST',
//       START_DATE: '22-03-2023',
//       END_DATE: '31-07-2023',
//       ENROLL_NOW: 'Buy Now'
//    },

// ]

import React from "react";
import Header from "./Header";
import logo from "./logo2.jpg";
import pdf from "./Images/IITJEE.pdf";

import "./JeeOts.css";

import Faq from "./Faq";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Examheader from "./Examheader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiDesktopTowerLight } from "react-icons/pi";
import otsimg from "./image-removebg-preview.png";

import { FaShoppingBag } from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";
import Cards from "./CARDS/Cards";

export const JeeOts = () => {
  return (
    <div>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      {/* IIT - JEE - ONLINE TEST SERIES */}
      <div class="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1> JEE - ONLINE TEST SERIES</h1>
      </div>

      <div className="jeesection">
        <div className="jeediv">
          <h2>JEE (MAINS & ADVANCED) - ONLINE TEST SERIES - 2023</h2>
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
      <div>
        {/* WHY ONLINE TEST SERIES? */}
        {/* <div className='jeesection'>

               <h2>WHY ONLINE TEST SERIES?</h2>

               <div className='jeelist'>
                  <ul>
                     <li>It will help in improving paper solving speed.</li>
                     <li>Our performance analysis helps you understand the areas of improvement.</li>
                     <li>Appearing in these tests will improve the overall preparation and will increase the chances of getting a good score.</li>
                     <li>Our online test series helps you know your understanding of the subject so that you can put efforts in the right direction.</li>
                  </ul>
               </div>
            </div> */}

        {/* 
            <div className='whyonline_ots'>
               <div className='features_heading'>
                  <h2>WHY ONLINE TEST SERIES?</h2>
                  <div className="ots_whyots-cordContainer">
                     <div className="ots_whyots-cord_-contant">
                        <div >
                           <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
                           <p style={{ color: "#000" }}>It will help in improving paper solving speed.</p>
                        </div>

                     </div>
                     <div className="ots_whyots-cord_-contant">
                        <div>
                           <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
                           <p style={{ color: "#000" }}>
                              Our performance analysis helps you understand the areas of improvement.
                           </p>
                        </div>

                     </div >
                     <div className="ots_whyots-cord_-contant">
                        <div>
                           <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
                           <p style={{ color: "#000" }}>
                              Appearing in these tests will improve the overall preparation and will increase the chances of getting a good score.
                           </p>
                        </div>

                     </div>
                     <div className="ots_whyots-cord_-contant">
                        <div>
                           <div style={{ fontSize: '70px', color: '#fff', textAlign: "center" }}> <PiDesktopTowerLight /></div>
                           <p style={{ color: "#000" }}>
                              Our online test series helps you know your understanding of the subject so that you can put efforts in the right direction.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

        {/* BUY ONLINE TEST SERIES */}
        {/* <div className='jeesection jeetable'>
               <h2>BUY ONLINE TEST SERIES</h2>

               <table className='jeeinsidetable'>
                  <tr>
                     <th >S.NO</th>
                     <th> TEST SERIES TYPE</th>
                     <th>PRICE</th>
                     <th>START DATE</th>
                     <th>END DATE</th>
                     <th>ENROLL NOW</th>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>Complete Test Series(JEE Mains+Advanced)  + Challenger Test Series (Advanced)</td>
                     <td>&#8377;5000 + <small>GST</small></td>
                     <td>22-03-2023</td>
                     <td>31-07-2023</td>
                     <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
                  </tr>

                  <tr>
                     <td>2</td>
                     <td>Challenger Test Series (JEE Advanced)</td>
                     <td>&#8377;2000 + <small>GST</small></td>
                     <td>20-04-2023</td>
                     <td>31-07-2023</td>
                     <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
                  </tr>

                  <tr>
                     <td>3</td>
                     <td>JEE (Mains+Advanced) - Mathematics</td>
                     <td>&#8377;2000 + <small>GST</small></td>
                     <td>22-03-2023</td>
                     <td>31-07-2023</td>
                     <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
                  </tr>

                  <tr>
                     <td>4</td>
                     <td>JEE (Mains+Advanced) - Physics</td>
                     <td>&#8377;2000 + <small>GST</small></td>
                     <td>22-03-2023</td>
                     <td>31-07-2023</td>
                     <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
                  </tr>

                  <tr>
                     <td>5</td>
                     <td>JEE (Mains+Advanced) - Chemistry</td>
                     <td>&#8377;2000 + <small>GST</small></td>
                     <td>22-03-2023</td>
                     <td>31-07-2023</td>
                     <td><center><a href='https://online-ug.egradtutor.in/' target='_blank'>BUY NOW</a></center></td>
                  </tr>
               </table>
            </div> */}

        <div className="whyonline_ots">
          <Cards />
        </div>

        {/* 


            <div className='cards_ots_container' >

               <h1>BUY ONLINE TEST SERIES</h1>
               <div className="cards_ots_subcontainer">
                  <div className="cards_ots">

                     {
                        Cardsdata.map((cards, index) => {
                           return (
                              <div key={index} className='card_ots'>
                                 <div className='cards_ots_logo'>

                                    <SiTestcafe className='cards_logo_text' />

                                 </div>

                                 <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE1}</p>
                                 <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE2}</p>
                                 <p><FaArrowCircleRight />{cards.TEST_SERIES_TYPE3}</p>

                                 <div className="card_ots_dates">
                                    <span>{cards.START_DATE}</span>
                                    <span>to</span>
                                    <span>{cards.END_DATE}</span>


                                 </div>

                                 <button className='ENROLL_NOW_btn'><p><FaShoppingBag /></p>{cards.ENROLL_NOW}</button> <p className="OTS_CARDS_price">
                                    {cards.PRICE}
                                 </p>

                              </div>
                           )
                        })
                     }
                  </div>
               </div>


     


            </div>
 */}

        {/* <div className='features_heading features_ots' style={{width:"80%"}}>
               <h2>JEE (MAINS & ADVANCED)-TEST SERIES SCHEDULE</h2>
               <div className='buttons_ots'>
                  <button>JEE-MAINS SCHEDULE</button>
                  <button>JEE-ADVANCED SCHEDULE</button>
               </div>
            </div> */}

        {/* 

            IIT-JEE(MAINS & ADVANCED)-TEST SERIES SCHEDULE
            <div className='jeesection'>
               <div className='jeebtns'>
                  <h2>JEE (MAINS & ADVANCED)-TEST SERIES SCHEDULE</h2>

                  <ul>
                     <li><a href="#">Complete Test Series(JEE Mains+Advanced) + Challenger Test Series (Advanced)</a></li>
                     <li><a href="#">Challenger Test Series (JEE Advanced)</a></li>
                     <li><a href="#">JEE (Mains+Advanced) - Mathematics</a></li>
                     <li><a href="#">JEE (Mains+Advanced) - Physics</a></li>
                     <li><a href="#">JEE (Mains+Advanced) - Chemistry</a></li>
                  </ul>
   
               </div>

               <div className='jeelist'>
                  
               <h2>FEATURES OF ONLINE TEST SERIES</h2>
                  <ul>
                     <li>Gives you other possible solutions to a problem.</li>
                     <li>Each test gives you the realistic & authentic all India ranking.</li>
                     <li>Question papers prepared by experts who are top faculty across India.</li>
                     <li>Developed as per the latest syllabus of IIT-JEE-(MAINS & ADVANCED) exam.</li>
                     <li>All the tests will be accessible till the IIT-JEE-(ADVANCED)-2023 examination.</li>
                     <li>Gives you sufficient time to consolidate on your JEE Mains & JEE Advanced preparation.</li>
                     <li>Courses designed to challenge and test the students learning and understanding of the subjects.</li>
                     <li>This test series helps you to eliminate conceptual doubts and plugs in any gaps in your preparation.</li>
                     <li>Same pattern and time limit as the actual JEE exam which acquaints students with the intricacies of the exam.</li>
                     <li>Gives you several chances to appear in simulated JEE like environment to help you develop better time management skills.</li>
                  </ul>
               </div>



               
            </div> */}

        {/* fax */}

        {/* <div className='features_ots '>
               <div className='features_heading'>
                  <h2 style={{width: "87%"}}>FEATURES OF ONLINE TEST SERIES</h2>
                  <div className="ots_-cordContainer">
                     <div className="ots_-cord_-contant">
                        <div >
                           <div style={{ fontSize: '50px', color: 'red' }}>  <HiOutlineChatBubbleBottomCenterText /></div>
                           <p> Gives you other possible solutions to a problem.</p>
                        </div>

                     </div>
                     <div className="ots_-cord_-contant">
                        <div>
                           <div style={{ fontSize: '50px', color: 'red' }}>
                              <HiOutlineChatBubbleBottomCenterText />
                           </div>
                           <p>
                              Each test gives you the realistic & authentic all India ranking.
                           </p>
                        </div>

                     </div >
                     <div className="ots_-cord_-contant">
                        <div>
                           <div style={{ fontSize: '50px', color: 'red' }}>
                              <HiOutlineChatBubbleBottomCenterText />
                           </div>
                           <p>
                              Question papers prepared by experts who are top faculty across India.
                           </p>
                        </div>

                     </div>
                     <div className="ots_-cord_-contant">
                        <div>
                           <div style={{ fontSize: '50px', color: 'red' }}>
                              <HiOutlineChatBubbleBottomCenterText />
                           </div>
                           <p>
                              Developed as per the latest syllabus of IIT-JEE-(MAINS & ADVANCED) exam.
                           </p>
                        </div>
                     </div>
                     <div className="ots_-cord_-contant">
                        <div>
                           <div style={{ fontSize: '50px', color: 'red' }}>
                              <HiOutlineChatBubbleBottomCenterText />
                           </div>
                           <p>
                              All the tests will be accessible till the IIT-JEE-(ADVANCED)-2023 examination.
                           </p>
                        </div>
                     </div>
                    
                  </div>
               </div>
            </div> */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export const Cardsdata = [
  {
    TEST_SERIES_TYPE1: "Complete Test Series",
    TEST_SERIES_TYPE2: "(JEE Mains+Advanced) ",

    TEST_SERIES_TYPE3: " Challenger Test Series (Advanced)",
    PRICE: "₹5000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },

  {
    TEST_SERIES_TYPE1: "Challenger Test Series",
    TEST_SERIES_TYPE2: "(JEE Advanced) ",

    TEST_SERIES_TYPE3: " Challenger Test Series (Advanced)",
    PRICE: "₹2000 + GST	",
    START_DATE: "20-04-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },
  {
    TEST_SERIES_TYPE1: "JEE ",
    TEST_SERIES_TYPE2: "(Mains+Advanced) Mathematics ",

    TEST_SERIES_TYPE3: " Mathematics",
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },
  {
    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "(Mains+Advanced) - Physics ",

    // TEST_SERIES_TYPE3: ' Challenger Test Series (Advanced)',
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },

  {
    TEST_SERIES_TYPE1: "JEE",
    TEST_SERIES_TYPE2: "Mains+Advanced) ",

    TEST_SERIES_TYPE3: " Chemistry",
    PRICE: "₹2000 + GST",
    START_DATE: "22-03-2023",
    END_DATE: "31-07-2023",
    ENROLL_NOW: "Buy Now",
  },
];
