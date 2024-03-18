import STUDY_MATERIAL from './infographic/STUDY_MATERIAL.png'
import ONE_ONE_DOUBT_CLARIFICATION from './infographic/ONE_ONE_DOUBT_CLARIFICATION.png'
import ONE_ONE from './infographic/ONE_ONE.png'
import engineering from './infographic/png 2.png'
import yourpreparation from "./CARDS/images/yourpreparation.png";
import './HIGHLIGHTS.css'
import jeeMPC from "./CARDS/images/CLASSSCHEDULE.png";

import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

import mpc from '../UG/infographic/mpc.png'


export const HIGHLIGHTS = () => {
    const paymentJEE = 'https://forms.gle/TFEvKJT5tzkDH7YR7'

    const [commingsoonpopu, setcommingsoonpopu] = useState(false);
    const handlepublicationpop_u = () => {
        setcommingsoonpopu(true)
    }
    const handlepublicationpop_up_clos = () => {
        setcommingsoonpopu(false)
    }


    const [enrollPopupVisible, setEnrollPopupVisible] = useState(false);
    const [knowMorePopupVisible, setKnowMorePopupVisible] = useState(false);
    const [schedulePopupVisible, setSchedulePopupVisible] = useState(false);

    const [knowMorePopupVisible2, setKnowMorePopupVisible2] = useState(false);
    const [schedulePopupVisible3, setSchedulePopupVisible3] = useState(false);
    return (
        <div>
            {/* <div className="Online_live_-class-container">
                <h2 style={{ color: '#00aff0' }}>HIGHLIGHTS OF THE COURSE</h2>
                <div className="Online_live_-class-container_HIGHLIGHTS_COURSE">

                    <div className="LIVE_LECTURES">
                        <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                            <img src={ONE_ONE_DOUBT_CLARIFICATION} alt="" />
                            <h3 id="HIGHLIGHTScourse">LIVE LECTURES</h3>
                        </div>
                    </div>

                    <div className="STUDY_MATERIAL">
                        <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                            <img src={STUDY_MATERIAL} alt="" />
                            <h3 id="HIGHLIGHTScourse">STUDY MATERIAL</h3>
                        </div>
                    </div>

                    <div className="ONLINE_TEST_SERIES">
                        <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                            <img src={yourpreparation} alt="" />
                            <h3 id="HIGHLIGHTScourse">ONLINE TEST SERIES</h3>
                        </div>
                    </div>

                    <div className="DOUBT_CLARIFICATION">
                        <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                            <img src={ONE_ONE} alt="" />
                            <h3 id="HIGHLIGHTScourse">ONE - ONE DOUBT CLARIFICATION</h3>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='IIT-JEE_MAINS_ADVANCED_container'>
                <div className="IIT-JEE_MAINS_ADVANCED">
                    <div className="olvc_card_head">
                        <div className='olvc_card_head_title'>
                            <h3>IIT-JEE MAINS & ADVANCED - 2025</h3>
                            <br />
                            <h3>ONLINE LIVE CLASSES</h3>
                        </div>
                    </div>

                    <div className='subject_list_contant'>
                        <div className='subject_list_data'>
                            <h4>MATHEMATICS</h4>
                            <h4>PHYSICS</h4>
                            <h4>CHEMISTRY</h4>
                        </div>
                        <div className="IIT-JEE_MAINS_ADVANCED_img">
                            <img src={mpc} alt="" />

                        </div>
                    </div>

                    <div className="JEE_MAINS_ADVANCED_buttons">

                    <button onClick={() => setKnowMorePopupVisible(true)}>KNOW MORE</button>
                        <div className="jeeOlvc_ENROLL_NOW">
                            {knowMorePopupVisible && (
                                <div className="schedule-popup">
                                    <div className="schedule-popup-content">
                                        <button style={{ float: 'right' }} className="close-_button" onClick={() => setKnowMorePopupVisible(false)}><IoMdClose /></button>
                                        <div className="jeeOlvc_ENROLL_NOW_popup-content">
                                            <div className="Ongoing" >

                                            </div>
                                            <p>For Student entering class 12/Long-term</p>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        {/* ENROLL NOW */}
                        <button className='Highlights_btn'><a className='Highlights_atag' href={paymentJEE} target="_blank">FEES STRUCTURE</a>
                        </button>
                        {/* KNOW MORE */}
                       

                        {/* SCHEDULE */}
                        <button onClick={() => setSchedulePopupVisible(true)}>SCHEDULE</button>
                        <div className="jeeOlvc_ENROLL_NOW">
                            {/* {schedulePopupVisible && (
                                <div className="jeeOlvc_ENROLL_NOW">
                                    <button style={{ float: 'right', position: 'absolute', right: '0' }} className="close-button" onClick={() => setSchedulePopupVisible(false)}><IoMdClose /></button>
                                    <div className="jeeOlvc_ENROLL_NOW_popup-content">
                                        <div>
                                            <ul>
                                                <b className='olvc_SCHEDULE'>MORNING BATCH</b>
                                                <li><b><span style={{ color: 'red' }}>SUBJECTS :</span> MATHEMATICS, PHYSICS, CHEMISTRY</b></li>
                                            </ul>
                                            <div className='olvcBATCH_timings'>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'>Mathematics :</span> 6:00 AM to 7:00 AM</li>
                                                </ul>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'> Physics : </span>5:00 AM to 6:00 AM</li>
                                                    <li>Monday - Wednesday</li>
                                                </ul>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'> Chemistry :</span>  5:00AM to 6:00 AM</li>
                                                    <li>Thursday - Saturday</li>
                                                </ul>
                                            </div>
                                            <div className='olvc_Ongoing'>
                                                <ul>
                                                    <b>Ongoing : </b>
                                                    <li>6<sup>th</sup> February, 2024</li>
                                                </ul>
                                                <ul>
                                                    <b>Next Enrollment :    </b>
                                                    <li>26<sup>th</sup> February, 2024</li>
                                                    <li> 25<sup>th</sup> March, 2024</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                            {schedulePopupVisible && (
                                <div className="schedule-popup">
                                    <div className="schedule-popup-content">
                                        <button className="close-_button" onClick={() => setSchedulePopupVisible(false)}>
                                            <IoMdClose />
                                        </button>
                                        <div>
                                            <ul>
                                                <b className='olvc_SCHEDULE'>MORNING BATCH</b>
                                                <li><b><span style={{ color: 'red' }}>SUBJECTS :</span> MATHEMATICS, PHYSICS, CHEMISTRY</b></li>
                                            </ul>
                                            <div className='olvcBATCH_timings'>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'>Mathematics :</span> 6:00 AM to 7:00 AM</li>
                                                </ul>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'> Physics : </span>5:00 AM to 6:00 AM</li>
                                                    <li>Monday - Wednesday</li>
                                                </ul>
                                                <ul>
                                                    <li><span className='olvc_SUBJECTSSPan'> Chemistry :</span>  5:00AM to 6:00 AM</li>
                                                    <li>Thursday - Saturday</li>
                                                </ul>
                                            </div>
                                            <div className='olvc_Ongoing'>
                                                <ul>
                                                    <b>Ongoing : </b>
                                                    <li>6<sup>th</sup> February, 2024</li>
                                                </ul>
                                                <ul>
                                                    <b>Next Enrollment :    </b>
                                                    <li>26<sup>th</sup> February, 2024</li>
                                                    <li> 25<sup>th</sup> March, 2024</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>



                {/* card 2 new */}
                {/* <div className="IIT-JEE_MAINS_ADVANCED">
                    <div className="olvc_card_head">
                        <div className='olvc_card_head_title'>
                            <h2>IIT-JEE MAINS & ADVANCED - 2025</h2>
                            <br />
                            <h2>ONLINE LIVE CLASSES</h2>
                        </div>
                    </div>

                    <div className='subject_list_contant'>
                        <div className='subject_list_data'>
                            <h4>MATHEMATICS</h4>
                            <h4>PHYSICS</h4>
                            <h4>CHEMISTRY</h4>
                        </div>
                        <div className="IIT-JEE_MAINS_ADVANCED_img">
                            <img src={mpc} alt="" />

                        </div>
                    </div>
                    <div className="IIT-JEE_MAINS_ADVANCED_contant">
                    </div>

                    <div>
                        <div className="price_viewschedule_btn">
                            <p className="price_two">₹50000 + GST"</p>
                            <a style={{ background: 'red', color: 'white' }} target="_blank" href="https://forms.gle/TFEvKJT5tzkDH7YR7">
                                Buy Now
                            </a>
                        </div>
                    </div>

                    <div className="JEE_MAINS_ADVANCED_buttons">
                      
                        <button ><a style={{ color: '#000' }} href="https://online-ug.egradtutor.in/" target="_blank">ENROLL NOW</a>
                        </button>

                      
                        <button onClick={() => setKnowMorePopupVisible2(true)}>KNOW MORE</button>
                        <div className="jeeOlvc_ENROLL_NOW">
                            {knowMorePopupVisible2 && (
                                <div className="jeeOlvc_ENROLL_NOW">
                                    <button style={{ float: 'right' }} className="close-button" onClick={() => setKnowMorePopupVisible2(false)}><IoMdClose /></button>
                                    <div className="jeeOlvc_ENROLL_NOW_popup-content">
                                        <div className="Ongoing" >
                                            <p>For Student entering class 12/Long-term</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                      
                        <button onClick={() => setSchedulePopupVisible3(true)}>SCHEDULE</button>
                        <div className="jeeOlvc_ENROLL_NOW">
                            {schedulePopupVisible3 && (
                                <div className="jeeOlvc_ENROLL_NOW">
                                    <button style={{ float: 'right' }} className="close-button" onClick={() => setSchedulePopupVisible3(false)}><IoMdClose /></button>

                                    <div className="jeeOlvc_ENROLL_NOW_popup-content">
                                        <div>
                                            <ul >
                                                <b className='olvc_SCHEDULE'>EVENING BATCH</b>
                                                <li><b><span style={{ color: 'red' }}>SUBJECTS :</span> MATHEMATICS, PHYSICS, CHEMISTRY</b></li>
                                                <li><b><span style={{ color: 'red' }}>TIMINGS :</span> 6:00PM to 7:00PM</b></li>
                                            </ul>

                                            <div className='olvc_Ongoing'>
                                                <ul>
                                                    <b>Ongoing </b>
                                                    <li>February  : 6<sup>th</sup></li>
                                                </ul>
                                                <ul>
                                                    <b>Next instalment  </b>
                                                    <li>26<sup>th</sup> February, 2024</li>
                                                    <li> 25<sup>th</sup> March, 2024</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div> */}


            </div>



        </div>
    )
}