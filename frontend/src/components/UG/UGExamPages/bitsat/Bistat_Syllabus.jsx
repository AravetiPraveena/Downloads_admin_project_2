import React from 'react'
// import Bitsatsyllabus from './BITSAT-2024_brochure.pdf'
import { MdDownload } from "react-icons/md";
import Bitsatsyllabus from './BITSAT-2024_Syllabus.pdf'
export const Bistat_Syllabus = () => {
  return (
    <div>

      <b>

        <p>BITSAT-2024 syllabus: </p>
        {/* <a className='SYLLABUS_pdf' href={Bitsatsyllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a> */}

        <a className='SYLLABUS_pdf' href={Bitsatsyllabus} target='_blank'>Syllabus Information  <span> <MdDownload /></span></a>
      </b>
    </div>
  )
}
