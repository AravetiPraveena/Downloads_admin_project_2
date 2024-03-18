import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/tseamcetimg1.png'
import tabimg from './Images/tseamcetimg2.png'
import tabimg1 from './Images/tseamcetimg3.png'
import tabimg5 from './Images/tseamcetimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import livecls from './Images/live class.png'
import onlinets from './Images/online test seires.png'
import recordedmc from './Images/recorded mini class.png'

// Ts exam pages
import { Ts_ExamPattern } from './UGExamPages/TS_eamcet/Ts_ExamPattern'
import { Ts_Eligibility } from './UGExamPages/TS_eamcet/Ts_Eligibility'
import { Ts_Syllabus } from './UGExamPages/TS_eamcet/Ts_Syllabus'
import { Ts_impDates } from './UGExamPages/TS_eamcet/Ts_impDates'
import Footer from './Footer'
import Examheader from './Examheader'


export const TsEamcetExam = () => {
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

      <div className='otsh1' id='TS_EAMCET-exampage'>
        <h1 style={{color:'#000'}}>TS-EAMCET EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button id='TS_EAMCETExamLink' className='exambtn'><a target='_blank' href="https://jntuh.ac.in/">Official Webpage</a></button>
            </div>

            <div className="accordion" >
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='TS_EAMCETExamLink' onClick={() => toggle2(i2)}>
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








      <div class="neetcourses" id='TS_EAMCETExamLink'>
        <div class="courses_heading">
          <h1>TS-EAMCET COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='TS_EAMCETcourses1'>
            <div class="test_btn ots_btn" id='TS_EAMCETExamLink'>
              <h3 className='TS_EAMCETExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button>
                  <a href="/TS-EMACET_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>

              </div>

            </div>
          </div>


          <div class="courses1" id='TS_EAMCETcourses1'>
            <div class="test_btn ots_btn" id='TS_EAMCETExamLink'>
              <h3 className='TS_EAMCETExamtext'>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='TS_EAMCETExamLink'>
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
    answer: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<Ts_ExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Ts_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Ts_Syllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Ts_impDates />],
  },
]

