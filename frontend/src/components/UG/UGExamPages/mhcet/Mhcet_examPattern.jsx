import React from 'react'

export const Mhcet_examPattern = () => {
  return (
    <div>
      <ul className='ExamsUl_list'>
        <li>Overall, MHT CET 2023 comprises 3 papers and all of them take place in the online mode.</li>
        <li>The exam question paper will appear in the MCQ form.</li>
        <li>The duration of the exam will be 180 minutes.</li>
        <li>There will be 150 questions for the PCM group, 200 questions for the PCB group, and 150 questions for the agriculture courses group.</li>
        <li>The total marks for each paper will be 100 marks.</li>
        <li> +1 will be given for each correct answer and in maths, +2 will be given for the correct answer.</li>
        <li>There will be no negative marking.</li>
        <li><b>Test Pattern:</b></li>
        <table className='examtbl'>
          <tr>
            <th rowSpan={2}>Paper</th>
            <th rowSpan={2}>Subject</th>
            <th colSpan={2}>No.of MCQ's based on</th>
            <th rowSpan={2}>Marks/Question</th>
            <th rowSpan={2}>Total Marks</th>
            <th rowSpan={2}>Duration in min</th>
          </tr>
          <tr>
            <th>std. XI</th>
            <th>std. XII</th>
          </tr>
          <tr>
            <td>Paper I</td>
            <td>Mathematics</td>
            <td>10</td>
            <td>40</td>
            <td>2</td>
            <td>100</td>
            <td>90</td>
          </tr>
          <tr>
            <td rowSpan={2}>Paper II</td>
            <td>Physics</td>
            <td>10</td>
            <td>40</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>100</td>
            <td rowSpan={2}>90</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td>10</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Paper III</td>
            <td>Biology</td>
            <td>20</td>
            <td>80</td>
            <td>1</td>
            <td>100</td>
            <td>90</td>
          </tr>
        </table>
      </ul>
    </div>
  )
}
