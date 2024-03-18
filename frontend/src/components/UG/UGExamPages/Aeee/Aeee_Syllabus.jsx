import React from 'react';
import { MdDownload } from "react-icons/md";
import syllabus from './AEEE_syllabus_2024.pdf'

const Aeee_Syllabus = () => {
  return (
    <div> 
       <b>
    <a className='SYLLABUS_pdf' href={syllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a>
  </b>
  </div>
  )
}

export default Aeee_Syllabus