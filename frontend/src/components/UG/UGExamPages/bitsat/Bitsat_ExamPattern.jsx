import React from 'react'

export const Bitsat_ExamPattern = () => {
  return (
    <div>
      <ul className='ExamsUl_list'>
        <li><b>Mode of exam: </b> Computer-Based Test</li>
        <li><b>Medium of paper:</b> English</li>
        <li><b>Duration of exam:</b> 180 minutes</li>
        <li> <b>Number of questions:</b> 130</li>
        <li><b>Marking scheme:</b> Each question carries 3 marks and 1 mark will be deducted for each wrong answer.</li>
        <li><b>Test Format: </b>Each session of BITSAT-2024 will be of 3 hours duration(without break), comprising the following 4 parts:</li>
        <table className='examtbl'>
          <tr>
            <th>Part</th>
            <th>Subject</th>
            <th>No of Questions</th>
          </tr>
          <tr>
            <td>Part I</td>
            <td>Physics</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Part II</td>
            <td>Chemistry</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Part III</td>
            <td>a) English Proficiency <br />
            b) Logical Reasoning
            </td>
            <td>10 <br />
            20</td>
          </tr>
          <tr>
            <td>Part IV</td>
            <td>Mathematics/Biology (For B. Pharm)</td>
            <td>40</td>
          </tr>
          <tr>
            <td></td>
            <td><b>Total</b></td>
            <td>130</td>
          </tr>
        </table>
        <li>If a candidate answers all the 130 questions (without skipping any question), the candidate will have an option of attempting 12 (twelve) extra questions, if there is still time left. These extra questions will be from Physics, Chemistry, Mathematics/ Biology and Logical Reasoning only; three questions from each of them. Further, once the candidate has opted for extra questions, he/she cannot go back for correction of any of the earlier answered 130 questions.</li>
      </ul>
    </div>
  )
}
