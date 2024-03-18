import React from 'react'
import '../../Exams.css'
import { MdDownload } from "react-icons/md";
import neetsyllabus from './SYLLABUS FOR NEET.pdf'


export const Neet_Syllabus = () => {
  return (
    <div>

      <b>

        <p>NEET-2024 syllabus: </p>

        <a className='SYLLABUS_pdf' href={neetsyllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a>
      </b>



    </div>
  )
}
