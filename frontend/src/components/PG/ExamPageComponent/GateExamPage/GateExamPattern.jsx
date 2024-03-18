import React from 'react'

const GateExamPattern = () => {
    return (
        <div>
            <table className='examtbl'>
                <tr>
                    <th>Examination Mode</th>
                    <th>Computer Based Test (CBT)</th>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>3 Hours</td>
                </tr>
                <tr>
                    <td>Number of Subjects(Papers)</td>
                    <td>30 test papers</td>
                </tr>
                <tr>
                    <td>Sections</td>
                    <td>General Aptitude (GA) + Candidate's Selected Subject</td>
                </tr>
                <tr>
                    <td>Type of Questions</td>
                    <td>(a)Multiple Choice Questions (MCQ) <br />
                        (b)Multiple Select Questions (MSQ) <br />
                        (c)Numerical Answer Type (NAT) Questions</td>
                </tr>
                <tr>
                    <td>Test of abilities</td>
                    <td>(a)Recall <br />
                        (b)Comprehension <br />
                        (c)Application <br />
                        (d)Analysis and Synthesis</td>
                </tr>
                <tr>
                    <td>Number of Questions</td>
                    <td>10 (GA) + 55 (subject) = 65 Questions</td>
                </tr>
                <tr>
                    <td>Distribution of marks in all papers except AR, CY, DA, EY, GG, MA, PH, ST, XH and XL</td>
                    <td>General Aptitude: 15 Marks <br />
                        Engineering Mathematics**: 13 Marks <br />
                        Subject Questions: 72 Marks <br />
                        Total: 100 Marks <br />
                        (**XE includes an Engineering Mathematics section XE-A of 15 marks)
                    </td>
                </tr>
                <tr>
                    <td>Distribution of marks in papers AR, CY, DA, EY, GG, MA, PH, ST, XH and XL</td>
                    <td>General Aptitude: 15 Marks <br />
                        Subject Questions: 85 Marks <br />
                        Total: 100 Marks
                    </td>
                </tr>
                <tr>
                    <td>Marking Scheme</td>
                    <td>All of the questions will be of 1 mark or 2 marks FOR CORRECT ANSWER</td>
                </tr>
                <tr>
                    <td>Negative marking</td>
                    <td>For a wrong answer to an MCQ, there will be negative marking. For a 1-mark MCQ, 1/3 will be deducted for a wrong answer. Likewise, for 2-mark MCQ, 2/3 will be deducted for a wrong answer. <br />
                    There is no negative marking for wrong answers to MSQ and NAT questions. <br />
                    There is no partial marking for any question.
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default GateExamPattern