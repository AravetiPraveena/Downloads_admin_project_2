import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/wbjeeimg1.png'
import tabimg from './Images/wbjeeimg2.png'
import tabimg1 from './Images/wbjeeimg3.png'
import tabimg5 from './Images/wbjeeimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import WBJEEExamPattern from './UGExamPages/WBJEEExamPage/WBJEEExamPattern'
import WBJEEEligibility from './UGExamPages/WBJEEExamPage/WBJEEEligibility'
import WBJEESyllabus from './UGExamPages/WBJEEExamPage/WBJEESyllabus'
import WBJEEImportantDates from './UGExamPages/WBJEEExamPage/WBJEEImportantDates'
import livecls from './Images/live class.png'
import onlinets from './Images/online test seires.png'
import recordedmc from './Images/recorded mini class.png'
import Footer from './Footer'
import Examheader from './Examheader'


export const WbjeeExam = () => {
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

      <div className='otsh1' id='WbjeeExam-exampage'>
        <h1 >WBJEE EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='WbjeeExamLink'><a href="https://wbjeeb.in/wbjee-exam/" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='WbjeeExamLink' onClick={() => toggle2(i2)}>
                    <h2 id='WbjeeExamtext'>{item.Qustion}</h2>
                    <span id='WbjeeExamtext'>{selected === i2 ? '-' : '+'}</span>
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





      <div class="neetcourses" id='WbjeeExamLink'>
        <div class="courses_heading">
          <h1 id='WbjeeExamtext'>WBJEE COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='WbjeeExammcourses1'>
            <div class="test_btn ots_btn" id='WbjeeExamLink'>
              <h3 style={{color:'#004f7e'}}>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button id='WbjeeExamLink'>
                  <a href="/WBJEE_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>

                

              </div>

            </div>
          </div>


          <div class="courses1" id='WbjeeExammcourses1'>
            <div class="test_btn ots_btn" id='WbjeeExamLink'>
              <h3 style={{color:'#004f7e'}}>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='WbjeeExamLink'>
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
    answer: "West Bengal Joint Entrance Examinations Board"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<WBJEEExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<WBJEEEligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<WBJEESyllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<WBJEEImportantDates />],
  },
]






