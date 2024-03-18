import React from 'react'

const JestExampatterns = () => {
  return (
    <div>
        <table className='examtbl'>
            <tr style={{textAlign:"center"}}>
                <th>Type of Questions</th>
                <th>Objective</th>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Total No. of Questions</td>
                <td>50</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Total No. of Sections</td>
                <td>2</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Medium</td>
                <td>English</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Mode</td>
                <td>Offline</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Duration</td>
                <td>180 Minutes</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Marking Scheme</td>
                <td>Section-A:25 questions(3 marks,-1 for wrong answer)<br/>Section-B:15 questions(9 marks,-3 for wrong answer)</td>
            </tr>
        </table>
    </div>
  )
}

export default JestExampatterns