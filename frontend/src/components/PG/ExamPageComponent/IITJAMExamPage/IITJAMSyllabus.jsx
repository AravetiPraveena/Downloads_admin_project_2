import React from 'react'
import { MdDownload } from "react-icons/md";
import cysyllub from './CY_Syllabus.pdf'
import ggsyllub from './GG_Syllabus.pdf'
import masyllub from './MA_Syllabus.pdf'
import btsyllub from './BT_Syllabus.pdf'
import ensyllub from './EN_Syllabus.pdf'
import mssyllub from './MS_Syllabus.pdf'
import phsyllub from './PH_Syllabus.pdf'

const IITJAMSyllabus = () => {
  return (
    <div>
        <table className='examtbl'>
          <tr style={{textAlign:"center"}}>
            <th>Department</th>
            <th>URL Links</th>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Chemistry(CY)</td>
            <td><a className='SYLLABUS_pdf' href={cysyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Geology(GG)</td>
            <td><a className='SYLLABUS_pdf' href={ggsyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Mathematics(MA)</td>
            <td><a className='SYLLABUS_pdf' href={masyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Biotechnology(BT)</td>
            <td><a className='SYLLABUS_pdf' href={btsyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Economics(EN)</td>
            <td><a className='SYLLABUS_pdf' href={ensyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Mathematical Statistics(MS)</td>
            <td><a className='SYLLABUS_pdf' href={mssyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
          <tr style={{fontWeight:"normal"}}>
            <td>Physics(PH)</td>
            <td><a className='SYLLABUS_pdf' href={phsyllub} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a></td>
          </tr>
        </table>
    </div>
  )
}

export default IITJAMSyllabus