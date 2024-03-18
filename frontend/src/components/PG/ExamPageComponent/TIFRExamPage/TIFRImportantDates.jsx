import React from 'react'

const TIFRImportantDates = () => {
    return (
        <div>
            <table className='examtbl'>
                <tr style={{textAlign:"center"}}>
                    <th>Event</th>
                    <th>Dates</th>
                </tr>
                <tr style={{fontWeight:"normal"}}>
                    <td>Online application portal opens</td>
                    <td>3<sup>rd</sup> October, 2023</td>
                </tr>
                <tr style={{fontWeight:"normal"}}>
                    <td>Application deadline</td>
                    <td>2<sup>nd</sup> November, 2023</td>
                </tr>
                <tr style={{fontWeight:"normal"}}>
                    <td>Hall ticket download begins</td>
                    <td>20<sup>th</sup> November, 2023</td>
                </tr>
                <tr style={{fontWeight:"normal"}}>
                    <td>Date of Examination</td>
                    <td>10<sup>th</sup> December, 2023 <br />
                        <b>Morning Session:</b> <br />
                        Physics, Chemistry, and Computer Science & Learning, Information and Data Science, and MSc (Wildlife Biology & Conservation) : 9:30 a.m. to 12:30 p.m. <br />
                        <b>Afternoon Session:</b> <br />
                        Biology (JGEEBILS) : 2:30 p.m. to 5:00 p.m. <br />
                        Mathematics & Science Education : 2:30 p.m. to 5:30 p.m.
                    </td>
                </tr>
                <tr style={{fontWeight:"normal"}}>
                    <td>Program start date</td>
                    <td>1<sup>st</sup> August, 2024</td>
                </tr>
            </table>
        </div>
    )
}

export default TIFRImportantDates