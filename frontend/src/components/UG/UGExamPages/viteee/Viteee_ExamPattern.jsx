import React from 'react'
import './ExamViteeeContant.css'

export const Viteee_ExamPattern = () => {
  return (
    <div>
      {/* <ul className='ExamsUl_list'>
        <b>Below we have provided the complete exam pattern for the VITEEE 2023:</b>
        <li> <b>Mode of Exam:</b> VITEEE 2023 Examination will be held through online (CBT) mode.</li>
        <li> <b>Types of Questions:</b>  The Question paper will consist of Multiple-choice questions (MCQs).</li>
        <li> <b>Duration:</b>  Total 2 hour and 30 minutes will be provided for solving the question paper.</li>
        <li> <b>Medium:</b> The examination will be held in English medium only.</li>
        <li><b>Marking Scheme:</b> For every correct answer one mark will be awarded.</li>
        <li><b>Negative Marking:</b> There won’t be any negative marking in the exam.
        </li>
      </ul> */}

      <div className='CONDUCTING_AUTHORITY'>
        <table className='CONDUCTING_AUTHORITY_table'>
          <thead>
            <tr>
              <th>Subject</th>
              <th>No.of Questions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>35</td>
            </tr>
            <tr>
              <td>English</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Aptitude</td>
              <td>10</td>
            </tr>

          </tbody>
        </table>

        <b>Exam Duration : 2 Hours and 30 Minutes</b>
      </div>
    </div>
  )
}
