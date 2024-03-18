import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/apeapcetimg1.png'
import tabimg from './Images/apeapcetimg2.png'
import tabimg1 from './Images/apeapcetimg3.png'
import tabimg5 from './Images/apeapcetimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import livecls from './Images/live class.png'
import onlinets from './Images/online test seires.png'
import recordedmc from './Images/recorded mini class.png'

// ap exapm pages
import { Ap_examPattern } from './UGExamPages/ap_eapcet/Ap_examPattern'
import { Ap_Eligibility } from './UGExamPages/ap_eapcet/Ap_Eligibility'
import { Ap_Syllabus } from './UGExamPages/ap_eapcet/Ap_Syllabus'
import { Ap_impDates } from './UGExamPages/ap_eapcet/Ap_impDates'
import Footer from './Footer'
import Examheader from './Examheader'



export const ApEamcetExam = () => {
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

      <div className='otsh1' id='AP_EAPCET-exampage'>
        <h1 style={{color:'#000'}}>AP-EAPCET EXAM</h1>
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">


          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='AP_EAPCETExamLink'><a href="https://www.jntuk.edu.in/" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='AP_EAPCETExamLink' onClick={() => toggle2(i2)}>
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





      <div class="neetcourses" id='AP_EAPCETExamLink'>
        <div class="courses_heading">
          <h1>AP-EAPCET COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='AP_EAPCETcourses1'>
            <div class="test_btn ots_btn" id='AP_EAPCETExamLink'>
              <h3 className='AP_EAPCETExamtext'>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">

                <button>
                  <a href="/AP-EAPCET_OTS_PAGE">Explore <i class="uil uil-angle-right icon"></i></a></button>

              </div>

            </div>
          </div>


          <div class="courses1" id='AP_EAPCETcourses1'>
            <div class="test_btn ots_btn" id='AP_EAPCETExamLink'>
              <h3 className='AP_EAPCETExamtext'>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button id='AP_EAPCETExamLink'>
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
    answer: "Jawaharlal Nehru Technological University, Kakinada (JNTUK)"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    answer: [<Ap_examPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Ap_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Ap_Syllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Ap_impDates />],
  },
]





