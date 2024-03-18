
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo2.jpeg'

import ISROSyllabus from './ExamPageComponent/ISROExamPage/ISROSyllabus'
import onlinets from '../UG/Images/online test seires.png'
import recordedmc from '../UG/Images/recorded mini class.png'
import livecls from '../UG/Images/live class.png'
import Footer from '../UG/Footer'
import JestExampatterns from './ExamPageComponent/JESTExamPage/JestExampatterns'
import JESTEligibility from './ExamPageComponent/JESTExamPage/JESTEligibility'
import JESTImportantDates from './ExamPageComponent/JESTExamPage/JESTImportantDates'
import JESTSyllabus from './ExamPageComponent/JESTExamPage/JESTSyllabus'
import { Nav } from '../UG/Nav'
import { IoMdHome } from "react-icons/io";





const Pg_JEST_ExamPage = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
    return (
        <div>
            {/* import logo from '../../logo2.jpeg' */}
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

            <div className="otsh1" id='viteee-exampage' >
                <h1 style={{ color: '#000' }}>JEST EXAM PAGE</h1>

            </div>
            <div className='FAQCONTENT' id='faq'>
                <div className="wrapper-3 container">


                    <div className='sdfsf'>
                        <div className='examdiv'>
                            <button className='exambtn' id='viteeeExamLink'><a target='_blank' href="https://www.jest.org.in/" >JEST Official Webpage </a>
                            </button>
                        </div>
                        <div className="accordion">
                            {isor.map((item, i2) => (
                                <div className="item2">
                                    <div className="title" id='viteeeExamLink' onClick={() => toggle2(i2)}>
                                        <h2>{item.Qustion}</h2>
                                        <span>{selected === i2 ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected === i2 ? 'content-show2' : 'content2'}>
                                        <div>
                                            {/* <div className='imagessg'> */}
                                            <div className={item.class}>
                                                <div>
                                                    <ul className={item.clName}>
                                                        <div className='exSpace'>
                                                            <li><b>{item.answer}</b></li><br />

                                                        </div>
                                                    </ul>
                                                </div>
                                                {/* <div className='imgSection'>
                                         <img src={item.ansIMG} alt="" />
                                         </div> */}

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>



                <div class="neetcourses pgexms" id='viteeeExamLink'>
                    <div class="courses_heading">
                        <h1>JEST COURSES</h1>
                    </div>

                    <div class="online_courses">
                        <div class="courses1 courses1-img" id='KeamExamcourses1'>
                            <div class="test_btn ots_btn" id='viteeeExamLink'>
                                <h3 style={{ color: '#000' }}>ONLINE TEST SERIES</h3>
                                <img src={onlinets} alt="" />
                                <div class="btn-neet">
                                    <button id='viteeeExamLink'>
                                        <Link to='/jest_ots'>Explore <i class="uil uil-angle-right icon"></i></Link></button>
                                </div>

                            </div>
                        </div>


                        {/* <div class="courses1">
                                <div class="test_btn ots_btn">
                                    <h3>RECORDED MINI COURSES</h3>
                                    <img src={recordedmc} alt="" />
                                    <div class="btn-neet">
                                        <button>
                                            <Link to=''>Explore <i class="uil uil-angle-right icon"></i></Link></button>
                                    </div>
                                </div>
                            </div> */}

                        {/* <div class="courses1">
                                <div class="test_btn ots_btn">
                                    <h3>LIVE CLASSES</h3>
                                    <img src={livecls} alt="" />
                                    <div class="btn-neet">
                                        <button>
                                            <Link to=''>Explore <i class="uil uil-angle-right icon"></i></Link></button>
                                    </div>

                                </div>
                            </div> */}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const isor = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "Joint Entrance Screening Test (JEST)",

    },
    // Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<JestExampatterns />],
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<JESTEligibility />],




    },
    // syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<JESTSyllabus />],
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<JESTImportantDates />],

    },
]
export default Pg_JEST_ExamPage