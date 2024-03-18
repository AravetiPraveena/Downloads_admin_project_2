import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo2.jpeg'
import TIFRExamPattern from './ExamPageComponent/TIFRExamPage/TIFRExamPattern'
import TIFREligibility from './ExamPageComponent/TIFRExamPage/TIFREligibility'
import TIFRSyllabus from './ExamPageComponent/TIFRExamPage/TIFRSyllabus'
import TIFRImportantDates from './ExamPageComponent/TIFRExamPage/TIFRImportantDates'
import onlinets from '../UG/Images/online test seires.png'
import recordedmc from '../UG/Images/recorded mini class.png'
import livecls from '../UG/Images/live class.png'
import Footer from '../UG/Footer'
import { Nav } from '../UG/Nav'
import { IoMdHome } from "react-icons/io";





export const Pg_Tifr_ExamPage = () => {
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

            <div className="otsh1" id='KcetExam-exampage'>
                <h1 style={{ color: '#000' }}>TIFR EXAM</h1>
            </div>


            <div className='FAQCONTENT' id='faq'>
                <div className="wrapper-3 container">


                    <div className='sdfsf'>

                        <div className='examdiv'>
                            <button className='exambtn' id='KcetExamLink'><a target='_blank' href="https://www.tifr.res.in/academics/gs_advertisement.php" >TIFR Official Webpage </a>
                            </button>
                        </div>
                        <div className="accordion">
                            {Tifr.map((item, i2) => (
                                <div className="item2">
                                    <div className="title" id='KcetExamLink' onClick={() => toggle2(i2)}>
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

                <div class="neetcourses pgexms " id='KcetExamLink'>
                    <div class="courses_heading">
                        <h1>TIFR COURSES</h1>
                    </div>

                    <div class="online_courses" >
                        <div class="courses1 courses1-img" id='KcetExamcourses1'>
                            <div class="test_btn ots_btn" id='KcetExamLink'>
                                <h3 className='KcetExamtext'>ONLINE TEST SERIES</h3>
                                <img src={onlinets} alt="" />
                                <div class="btn-neet">
                                    <button id='KcetExamLink'>
                                        <Link to='/tifr_ots'>Explore <i class="uil uil-angle-right icon"></i></Link></button>
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
                                <h3>RECORDED MINI COURSES</h3>
                                <img src={recordedmc} alt="" />
                                <div class="btn-neet">
                                    <button>
                                        <Link style={{cursor:"auto"}} to=''>Explore <i class="uil uil-angle-right icon"></i></Link></button>
                                </div>
                            </div>
                        </div> */}


                        {/* <div class="courses1">
                            <div class="test_btn ots_btn">
                                <h3>LIVE CLASSES</h3>
                                <img src={livecls} alt="" />
                                <div class="btn-neet">
                                    <button>
                                        <Link style={{cursor:"auto"}} to=''>Explore <i class="uil uil-angle-right icon"></i></Link></button>
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


const Tifr = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "TIFR Hyderabad.",

    },
    // Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<TIFRExamPattern />],
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<TIFREligibility />],




    },
    // syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<TIFRSyllabus />],
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<TIFRImportantDates />],

    },
]


