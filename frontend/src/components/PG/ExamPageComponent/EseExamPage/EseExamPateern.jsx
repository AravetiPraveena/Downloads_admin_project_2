import React from 'react'
import examPattern from './ESE-2024_ExamPattern.pdf'
import { MdDownload } from "react-icons/md";

export const EseExamPateern = () => {
  return (
    <div>
    <b>
    <p>ESE-2024 exam pattern PDF: </p>
    <a className='SYLLABUS_pdf' href={examPattern} target='_blank'>Exam Pattern<span> <MdDownload /></span></a>
  </b>
</div>
  )
}

