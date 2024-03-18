import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/kcetimg1.png'
import tabimg from './Images/kcetimg2.png'
import tabimg1 from './Images/kcetimg3.png'
import tabimg5 from './Images/kcetimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import livecls from './Images/live class.png'
import onlinets from './infographic/live class.png'
import recordedmc from './Images/recorded mini class.png'

// Kecet exam 
import { Kcet_ExamPattern } from './UGExamPages/kcet/Kcet_ExamPattern'
import { Kcet_Eligibility } from './UGExamPages/kcet/Kcet_Eligibility'
import { Kcet_impDates } from './UGExamPages/kcet/Kcet_impDates'
import Footer from './Footer'
import Examheader from './Examheader'


export const KcetExam = () => {
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

      <div className='otsh1' id='KcetExam-exampage'>
        <h1 style={{ color: '#000' }}>KCET EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='KcetExamLink'><a href="https://cetonline.karnataka.gov.in/kea/" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='KcetExamLink' onClick={() => toggle2(i2)}>
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

      <div class="neetcourses" id='KcetExamLink'>
        <div class="courses_heading">
          <h1>KCET COURSES</h1>
        </div>

        <div class="online_courses" >
          <div class="courses1 courses1-img" id='KcetExamcourses1'>
            <div class="test_btn ots_btn" id='KcetExamLink'>
              <h3 className='KcetExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button id='KcetExamLink'>
                  <a href="/KCET_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>
              </div>

            </div>
          </div>


          <div class="courses1" id='KcetExamcourses1'>
            <div class="test_btn ots_btn" id='KcetExamLink'>
              <h3 className='KcetExamtext'>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='KcetExamLink'>
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
    answer: "Karnataka Examinations Authority"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<Kcet_ExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Kcet_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: " • The question papers of the Common Entrance Test will be based on the First and Second PUC syllabus prescribed by the Department of Pre-University Education of Karnataka State. If you are applying for Pharmacy then it consisted of three different subjects as Physics, Biology, and Chemistry. If applying for Engineering, then the candidate needs to prepare for subjects such as Chemistry, Maths, and Physics.",

  },


  {
    Qustion: "IMPORTANT DATES",
    answer: [<Kcet_impDates />],
  },
]








