import React from 'react'
import eligibility from './BARC_Eligibility_2024.pdf'

const BARCEligibility = () => {
  return (
    <div>
        <ul className='ExamsUl_list examtbl'>
        <a className='exambtn iitjamexambtn' id='TS_EAMCETExamLink'><a target='_blank' href={eligibility}>Eligibility Requirements(ERs) for Admission </a>
        </a>
      </ul>
    </div>
  )
}

export default BARCEligibility