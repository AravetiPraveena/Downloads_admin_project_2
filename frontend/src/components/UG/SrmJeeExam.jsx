import React from 'react'
import { useState } from 'react'
import './IITjee.css'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import SRMJEEExamPattern from './UGExamPages/SRMJEEExamPage/SRMJEEExamPattern'
import SRMJEEEligibility from './UGExamPages/SRMJEEExamPage/SRMJEEEligibility'
import SRMJEESyllabus from './UGExamPages/SRMJEEExamPage/SRMJEESyllabus'
import SRMJEEImportantsDates from './UGExamPages/SRMJEEExamPage/SRMJEEImportantsDates'
import livecls from './Images/live class.png'
import onlinets from './Images/online test seires.png'
import recordedmc from './Images/recorded mini class.png'
import Footer from './Footer'
import Examheader from './Examheader'


export const SrmJeeExam = () => {
  const [selected, setSelected] = useState(null)
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null)

    }
    setSelected(i1)
  }
  return (
    <div className='iitjeebody'>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className='otsh1' id='SrmJeeExam-exampage'>
        <h1 style={{color:'#000'}}>SRMJEE EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='SrmJeeExamLink'><a href="https://www.srmist.edu.in/" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='SrmJeeExamLink' onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i2 ? 'content-show2' : 'content2'}>
                    <div>
                      <div className='imagessg'>{item.answer}
                        {/* <img src={item.ansIMG} alt="" /> */}
                      </div>


                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>








      <div class="neetcourses" id='SrmJeeExamLink'>
        <div class="courses_heading">
          <h1>SRMJEE COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='SrmJeeExamcourses1'>
            <div class="test_btn ots_btn" id='SrmJeeExamLink'>
              <h3 id='SrmJeeExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id='SrmJeeExamLink'>
                  <Link to="/SRMJEE_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></Link></button>
              </div>

            </div>
          </div>


          <div class="courses1" id='SrmJeeExamcourses1'>
            <div class="test_btn ots_btn" id='SrmJeeExamLink'>
              <h3 id='SrmJeeExamtext'>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='SrmJeeExamLink'>
                  <a href="">Coming Soon <i class="uil uil-angle-right icon"></i></a></button>
              </div>
            </div>
          </div>

          {/* <div class="courses1">
        <div class="test_btn ots_btn">
          <h3>LIVE CLASSES</h3>
          <img src={livecls} alt="" />
          <div class="btn-neet"> 
            <button>
              <a href="">Explore <i class="uil uil-angle-right icon"></i></a></button>
          </div>

        </div>
      </div> */}

        </div>
      </div>










      <Footer />
    </div>
  )
}




const sixtoten = [
  {
    Qustion: "CONDUCTING AUTHORITY",
    answer: "SRM Institute of Science and Technology (SRMIST)"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<SRMJEEExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<SRMJEEEligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<SRMJEESyllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<SRMJEEImportantsDates />],
  },
]

