import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import { Link } from 'react-router-dom'
import onlinets from './infographic/ONLINE TEST SERIES.png'
import livecls from './infographic/onlinets.png'
import recordedmc from './Images/recorded mini class.png'

// exam components
import { Iit_jee_ExamPattren } from './UGExamPages/iitjee/Iit_jee_ExamPattren'
import { Iitjee_Eligibility } from './UGExamPages/iitjee/Iitjee_Eligibility'
import { Iitjee_Syllabus } from './UGExamPages/iitjee/Iitjee_Syllabus'
import { Iitjee_Important } from './UGExamPages/iitjee/Iitjee_Important'
import Iitjee_banners from './Ug_Carousel/iitjee/Iitjee_banners'
import Footer from './Footer'
import Examheader from './Examheader'



export const IITJEE_EXAM = () => {
  const [selected, setSelected] = useState(null)
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null)

    }
    setSelected(i1)
  }
  // const[showMenu, setshowMenu] = useState(0);

  return (
    <div className='iitjeebody' >
      {/* import logo from './logo2.jpg' */}

      <Examheader />
      <div class="otsh1" id='Iitjee_-exampage'>
        <h1 className='examHead' style={{color:'#000'}}> JEE (MAINS & ADVANCED) EXAM</h1>
      </div>
      <div className='jee_Carousal' style={{ paddingBottom: '1rem' }}>
        <Iitjee_banners />
      </div>

      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">



          <div className='sdfsf'>
            <div className='examdiv'>
              <button className='exambtn' id='jeeExamLink'><a target='_blank' href="https://jeemain.nta.ac.in/" >JEE(Mains) Official Webpage </a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='jeeExamLink'onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i2 ? 'content-show2' : 'content2'}>
                    <div>
                      <div className='imagessg'><p style={{ color: 'black' }}>{item.answer} </p> <img src={item.ansIMG} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div class="neetcourses" id='jeeExamLink'>
        <div class="courses_heading">
          <h1 className='examHead'> JEE (MAINS & ADVANCED) COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img">
            <div class="test_btn ots_btn" id='jeeExamLink'>
              <h3 style={{color:'#000'}}>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id='jeeExamLink'>
                  <Link to='/iitjee_otc'>Explore <i class="uil uil-angle-right icon"></i></Link>
                </button>
              </div>

            </div>
          </div>


          {/* <div class="courses1">
            <div class="test_btn ots_btn">
              <h3>RECORDED MINI COURSES</h3>
              <img src={recordedmc} alt="" />
              <div class="btn-neet">
                <button>
                  <Link to=''>Coming Soon <i class="uil uil-angle-right icon"></i></Link></button>
              </div>
            </div>
          </div> */}

          <div class="courses1">
            <div class="test_btn ots_btn" id='jeeExamLink'>
              <h3 style={{color:'#000'}}>LIVE CLASSES</h3>
              <img src={livecls} alt="" />
              <div class="btn-neet">
                <button id='jeeExamLink'>
                  <Link  to='/iitjee_olvc'>Explore <i class="uil uil-angle-right icon"></i></Link></button>
              </div>

            </div>
          </div>

        </div>
      </div>





      <Footer />

    </div>
  )
}


const sixtoten = [
  {
    Qustion: "CONDUCTING AUTHORITY",
    answer: "National Testing Agency"
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",
    // answerB: "MAINS ",
    answer: [<Iit_jee_ExamPattren />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Iitjee_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Iitjee_Syllabus />],
  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Iitjee_Important />],
  },
]



