import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/vittableimg1.png'
import tabimg from './Images/vittableimg2.png'
import tabimg1 from './Images/vittableimg3.png'
import tabimg5 from './Images/vittableimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
// import livecls from './Images/live class.png'
import livecls from "./infographic/image-removebg-preview (10).png";
// import onlinets from './Images/online test seires.png'
import onlinets from "./infographic/image-removebg-preview (11).png";

import recordedmc from './Images/recorded mini class.png'

// vitee expam pages
import { Viteee_ExamPattern } from './UGExamPages/viteee/Viteee_ExamPattern'
import { Viteee_Eligibility } from './UGExamPages/viteee/Viteee_Eligibility'
import { Viteee_Syllabus } from './UGExamPages/viteee/Viteee_Syllabus'
import { Viteee_impDates } from './UGExamPages/viteee/Viteee_impDates'
import Footer from './Footer'
import Examheader from './Examheader'

import Information_brochure from '../UG/Vitee/viteeeProspectus.pdf'
// import MPCEA from '../UG/Vitee/MPCE&A-merged.pdf'

 

export const ViteeeExam = () => {
  const [selected, setSelected] = useState(null)
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null)

    }
    setSelected(i1)
  }
  return (
    <div className='iitjeebody' >
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div class="otsh1" id='viteee-exampage'>
            <h1 style={{color:'#000'}}>VITEEE EXAM</h1>
          </div>
      <div className='FAQCONTENT' id='faq'>
        <div className="wrapper-3 container">

          <div className='sdfsf'>
            <div className='examdiv'>
              <button id='viteeeExamLink' className='exambtn'><a href={Information_brochure} target='_blank'>Information Brochure</a></button>
              <button id='viteeeExamLink' className='exambtn'><a href="https://viteee.vit.ac.in/?utm_source=GL271YTR&utm_campaign=viteee2024&gad_source=1&gclid=CjwKCAiArLyuBhA7EiwA-qo80HlWKBJNaEDNGHDcwerW6WQFJv72THqb8VT0P8Y8vPapuj_0judjNRoCheMQAvD_BwE" target='_blank'>Official Webpage</a></button>
            </div>

            <div className="accordion">
              {sixtoten.map((item, i2) => (
                <div className="item2">
                  <div className="title" id='viteeeExamLink' onClick={() => toggle2(i2)}>
                    <h2>{item.Qustion}</h2>
                    <span>{selected === i2 ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i2 ? 'content-show2' : 'content2'}>
                    <div>
                      <div className='CONDUCTING_AUTHORITY'>
                        <p>{item.answer}</p>
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


      <div class="neetcourses" id='viteeeExamLink'>
        <div class="courses_heading">
          <h1>VITEEE COURSES</h1>
        </div>

        <div class="online_courses">
          <div class="courses1 courses1-img" id='viteeecourses1'>
            <div class="test_btn ots_btn" id='viteeeExamLink'>
              <h3 style={{color:'#000'}}>ONLINE TEST SERIES</h3>
              <img src={onlinets} alt="" />
              <div class="btn-neet">
                <button id='viteeeExamLink'>
                <Link to='/VITEEE_OTS_PAGE'>Explore <i class="uil uil-angle-right icon"></i></Link>

                  {/* <a href="">Explore <i class="uil uil-angle-right icon"></i></a> */}
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
                  <a href="">Coming Soon <i class="uil uil-angle-right icon"></i></a></button>
              </div>
            </div>
          </div> */}

          <div class="courses1" id='viteeecourses1'>
            <div class="test_btn ots_btn" id='viteeeExamLink'>
              <h3 style={{color:'#000'}}>LIVE CLASSES</h3>
              <img src={livecls} alt="" />
              <div class="btn-neet">
                <button id='viteeeExamLink'>
                <Link to='/VITEEE_olvc_PAGE'>Explore <i class="uil uil-angle-right icon"></i></Link>

                  {/* <a href="">Explore <i class="uil uil-angle-right icon"></i></a> */}
                  
                  </button>
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
    answer: "Vellore Institute of Technology Engineering Entrance Examination (VITEEE) is conducted for admission to undergraduate engineering programmes in VIT group of Institutions. VITEEE will be conducted between 19 and 30 April 2024 (Tentatively) at designated centres across India and abroad (No.of days will vary for test cities). The duration of the examination will be 2 hours and 30 minutes. Candidates can appear only once for VITEEE-2024. All questions will be Multiple Choice Questions and one mark for the right answer and zero for the wrong answer. Those who score '0' in total will be declared as 'Not qualified' and will not be eligible to participate in the counselling process. There will be a total of 125 questions divided into the section Maths/Biology (40 questions), Physics (35 questions), Chemistry (35 questions), Aptitude (10 questions), and English (5 questions). The question paper will be in English only. The fee towards application and subsequent counselling is non-refundable. The method of Equi-percentile is adopted for the merit list preparation of VITEEE-Computer Based Examination."
  },
  // Exam Pattern ==========================
  {
    Qustion: "EXAM PATTERN",

    answer: [<Viteee_ExamPattern />],


  },
  // ELIGIBILITY ==========================================
  {
    Qustion: "ELIGIBILITY",
    answer: [<Viteee_Eligibility />],

  },
  // syllabus ================================
  {
    Qustion: "SYLLABUS",
    answer: [<Viteee_Syllabus />],

  },

  {
    Qustion: "IMPORTANT DATES",
    answer: [<Viteee_impDates />],
  },
]



