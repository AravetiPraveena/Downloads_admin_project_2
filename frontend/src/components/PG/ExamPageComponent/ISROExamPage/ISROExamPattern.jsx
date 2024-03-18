import React from 'react'

const ISROExamPattern = () => {
  return (
    <div>
        <table className='examtbl'>
            <tr style={{textAlign:"center"}}> 
                <th>Type of Questions</th>
                <th>Objective</th>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Total No. of Questions in part-A</td>
                <td>80</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Total No. of Questions in part-B</td>
                <td>15</td>
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
                <td>Time duration</td>
                <td>120 Minutes</td>
            </tr>
        </table>
        <p>Based on a candidate's performance in the written test, he/she will be shortlisted for the interview.</p>
    </div>
  )
}

export default ISROExamPattern