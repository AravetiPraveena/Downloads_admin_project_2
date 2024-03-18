import React from 'react'

export const Aeee_ExamPattern = () => {
  return (
    <div>
      <ul className='ExamsUl_list'>
        <li>The questions are based on the syllabus in class 11<sup>th</sup> & class<sup>th</sup>.</li>
        <li>The syllabus for AEEE 2024 is appended in Appendix - II.</li>
        <li>The pattern of examination paper for AEEE 2024 is given in the website: <a href="www.amrita.edu/btech">www.amrita.edu/btech</a></li>
        <li>All the questions are of <b>Multiple-Choice type</b> and will have four options as possible answers.</li>
        <li>Candidates can choose the most appropriate answer for each question in the Computer Based Test(CBT) mode. Answers marked can be changed later, before the final submission of all the answers.</li>
        <li><b>3(Three) marks</b> are awarded for each correct answer and <b>-1(negative one)</b> for each wrong answer.</li><br />
        <li><b>Number of Questions and mark Distribution for AEEE 2024:</b></li>
        <table className='examtbl'>
          <tr>
            <th>Subject</th>
            <th>No.of Questions</th>
            <th>Marks(3)</th>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td>40</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Physics</td>
            <td>30</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td>25</td>
            <td>75</td>
          </tr>
          <tr>
            <td>English</td>
            <td>05</td>
            <td>15</td>
          </tr>
          <tr style={{fontWeight:"bold"}}>
            <td>TOTAL</td>
            <td>100</td>
            <td>300</td>
          </tr>
        </table>
      </ul>
    </div>
  )
}