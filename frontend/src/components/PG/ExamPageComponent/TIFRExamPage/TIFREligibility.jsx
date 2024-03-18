import React from 'react'
import { MdDownload } from "react-icons/md";
import eligibility from './GS-2024_Eligibility_Table_19_02.pdf'

const TIFREligibility = () => {
  return (
    <div>
      <button className='exambtn' id='KcetExamLink'><a target='_blank' href={eligibility} >Eligibility Information </a>
      <span> <MdDownload /></span>
      </button>
    </div>
  )
}

export default TIFREligibility