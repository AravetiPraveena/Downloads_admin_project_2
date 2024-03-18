import React from 'react'
import '../../Exams.css'

export const Mhcet_impDates = () => {
  return (
    <div>
         <table className='examtbl'>
          <tr>
            <th>Events  </th>
            <th>Exam Dates  </th>
            </tr>
          <tr>
            <td>Online Application form starts </td>
            <td>16<sup>th</sup> January, 2024</td>
            </tr>
          <tr>
            <td>Last date to submit application form </td>
            <td>1<sup>st</sup> March, 2024 
                </td>
          </tr>
          {/* <tr>
            <td>Online registration of application form with late fee of Rs 500/-  </td>
            <td>8th to 15th April 2023 
                </td>
                </tr>
          <tr>
            <td>Correction facility </td>
            <td>April 2023 
                </td>
                </tr> */}
          <tr>
            <td><b>Tentative Date of MHCET(PCB) 2024</b><br /><b>Tentative Date of MHCET(PCM) 2024</b> </td>
            <td>16<sup>th</sup> April, 2024 to 23<sup>rd</sup> April, 2024 <br /> 25<sup>th</sup> April, 2024 to 30<sup>th</sup> April, 2024
               </td>
          </tr>
                </table>
    </div>
  )
}
