import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/keamimg1.png'
import tabimg from './Images/keamimg2.png'
import tabimg1 from './Images/keamimg3.png'
import tabimg5 from './Images/keamimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import KEAMExamPattern from './UGExamPages/KEAMExamPage/KEAMExamPattern'
import KEAMEligibility from './UGExamPages/KEAMExamPage/KEAMEligibility'
import KEAMSyllabus from './UGExamPages/KEAMExamPage/KEAMSyllabus'
import KEAMImportantDates from './UGExamPages/KEAMExamPage/KEAMImportantDates'
import livecls from './Images/live class.png'
import onlinets from './Images/online test seires.png'
import recordedmc from './Images/recorded mini class.png'
import Footer from './Footer'
import Examheader from './Examheader'


export const KeamExam = () => {
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

      <div className='otsh1' id='KeamExam-exampage'>
        <h1 style={{color:'#000'}}>KEAM EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='KeamExamLink'><a href="https://www.cee.kerala.gov.in/cee/index.php?url=in" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='KeamExamLink' onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i2 ? 'content-show2' : 'content2'}>
                    <div>
                      <div className='imagessg'>{item.answer}
                        <img src={item.ansIMG} alt="" />
                      </div>


                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>








      <div class="neetcourses" id='KeamExamLink'>
        <div class="courses_heading">
          <h1>KEAM COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='KeamExamcourses1'>
            <div class="test_btn ots_btn" id='KeamExamLink'>
              <h3  id='KeamExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button id='KeamExamLink'>
                  <a href="/KEAM_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>

               

              </div>

            </div>
          </div>


          <div class="courses1" id='KeamExamcourses1'>
            <div class="test_btn ots_btn"id='KeamExamLink'>
              <h3 id='KeamExamtext'>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='KeamExamLink'>
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
    answer: "Office of the Commissioner of Entrance Exams run by the Government of Kerala"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<KEAMExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<KEAMEligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<KEAMSyllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<KEAMImportantDates />],
  },
]







