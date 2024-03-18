import React from 'react'
import { MdDownload } from "react-icons/md";
import mathssyllab from './Maths_syllabus_exam_instructions.pdf'
import physicssyllab from './Physics_syllabus_exam_instructions.pdf'
import chemistrysyllab from './Chemistry_syllabus_exam_instructions.pdf'
import biologysyllab from './Biology_syllabus_exam_instructions.pdf'
import cssyllab from './CS_LIDS_syllabus_exam_instructions.pdf'
import sesyllab from './ScienceEducation_syllabus_exam_instructions.pdf'




const TIFRSyllabus = () => {
  return (
    <div>
        <table className='examtbl'>
          <tr style={{textAlign:"center"}}>
            <th>Syllabus</th>
            <th>URL Link</th>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Mathematics</td>
            <td><a className='SYLLABUS_pdf' href={mathssyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Physics</td>
            <td><a className='SYLLABUS_pdf' href={physicssyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Chemistry</td>
            <td><a className='SYLLABUS_pdf' href={chemistrysyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Biology</td>
            <td><a className='SYLLABUS_pdf' href={biologysyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Computer Science & Learning, Information and Data Science</td>
            <td><a className='SYLLABUS_pdf' href={cssyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Science Education</td>
            <td><a className='SYLLABUS_pdf' href={sesyllab} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
        </table>
    </div>
  )
}

export default TIFRSyllabus