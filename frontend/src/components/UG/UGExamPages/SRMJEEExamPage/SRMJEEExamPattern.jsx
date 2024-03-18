import React from 'react'
import { MdDownload } from "react-icons/md";
import testpattern from './srmjeee-examination-pattern.pdf'

const SRMJEEExamPattern = () => {
  return (
    <div>
        <ul className='ExamsUl_list'>
            <li>SRMIST has released the SRMJEEE 2024 pattern along with the availability of the application form. Physics, Chemistry, and Mathematics/Biology will be the three portions of the exam.</li>
            <li>The exam will be administered in accordance with the SRMJEEE 2024 exam pattern and syllabus for the entrance exam.</li>
            <li>The SRM Institute will also issue the SRMJEEE 2024 syllabus, which will serve as the foundation for the entrance exam questions.</li>
            <li>SRMJEEE 2024 will be a two-and-a-half-hour online (computer-based) test with a total of 125 questions divided into sections.</li><br />
            <li><b>Test Pattern: </b><b>
        <a className='SYLLABUS_pdf' href={testpattern} target='_blank'>Test Information  <span> <MdDownload /></span></a>
        
      </b></li>
        </ul>
    </div>
  )
}

export default SRMJEEExamPattern