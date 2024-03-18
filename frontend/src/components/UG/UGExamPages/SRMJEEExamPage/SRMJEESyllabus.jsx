import React from 'react'
import { MdDownload } from "react-icons/md";
import syllabus from './srmjeee-syllabus.pdf'

const SRMJEESyllabus = () => {
  return (
    <div>
        <a className='SYLLABUS_pdf' href={syllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a>
    </div>
  )
}

export default SRMJEESyllabus