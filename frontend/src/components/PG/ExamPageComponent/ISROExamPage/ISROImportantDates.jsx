import React from 'react'

const ISROImportantDates = () => {
  return (
    <div>
        <table className='examtbl'>
            <tr style={{textAlign:"center"}}>
                <th>Event</th>
                <th>Dates</th>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>ISRO 2024 Application form releases :</td>
                <td>25<sup>th</sup> May, 2023</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Last date to fill ISRO 2024 Application form :</td>
                <td>14<sup>th</sup> June, 2023</td>
            </tr>
            <tr style={{fontWeight:"normal"}}>
                <td>Last date for payment of fee</td>
                <td>16<sup>th</sup> June, 2023</td>
            </tr>
            {/* <tr>
                <td>The download of Admit Card for ISRO 2021 :</td>
                <td>May 18, 2021</td>
            </tr>
            <tr>
                <td>Written Examination Date :</td>
                <td>June 6, 2021</td>
            </tr>
            <tr>
                <td>Announcement of Results :</td>
                <td>June 29, 2021</td>
            </tr> */}
        </table>
    </div>
  )
}

export default ISROImportantDates