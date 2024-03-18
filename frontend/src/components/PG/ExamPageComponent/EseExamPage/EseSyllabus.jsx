import React from 'react'
import syllabus from './ESE-2024_Syllabus_notice.pdf'
import { MdDownload } from "react-icons/md";

export const EseSyllabus = () => {
  return (
    <div>
        <b>
        <p>ESE-2024 syllabus PDF: </p>
        <a className='SYLLABUS_pdf' href={syllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a>
      </b>
    </div>
  )
}

