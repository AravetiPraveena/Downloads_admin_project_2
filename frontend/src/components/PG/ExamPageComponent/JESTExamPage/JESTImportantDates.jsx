import React from 'react'

const JESTImportantDates = () => {
  return (
    <div>
        <table  className='examtbl'>
          <tr style={{textAlign:"center"}}>
            <th>Event</th>
            <th>Date</th>
          </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Registration Start Date</td>
                <td>5<sup>th</sup> January,2024</td>
            </tr>
          
            <tr style={{fontWeight:"normal"}}>
                <td>Registration Close Date</td>
                <td>31<sup>st</sup> January,2024</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
              <td>Correction Window Start Date</td>
              <td>2<sup>nd</sup> February,2024</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
              <td>Correction Window Closure Date</td>
              <td>4<sup>th</sup> February, 2024</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
              <td>Admit Card Live Date</td>
              <td>12<sup>th</sup> February, 2024</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
              <td>Examination Date</td>
              <td>3<sup>rd</sup> March, 2024</td>
            </tr>
        </table>
    </div>
  )
}

export default JESTImportantDates