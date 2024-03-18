import React from 'react'
import mathssyllab from './Maths_syllabus_exam_instructions.pdf'
import physicssyllab from './Physics_syllabus_exam_instructions.pdf'
import chemistrysyllab from './Chemistry_syllabus_exam_instructions.pdf'
import biologysyllab from './Biology_syllabus_exam_instructions.pdf'
import cssyllab from './CS_LIDS_syllabus_exam_instructions.pdf'
import sesyllab from './ScienceEducation_syllabus_exam_instructions.pdf'

const TIFRExamPattern = () => {
    return (
        <div>
            <ul className='ExamsUl_list'>
                <li><b>TIFR GS Exam Pattern for Mathematics</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={mathssyllab} >Mathematics Exam Pattern </a>
                </button><br />
                <li><b>TIFR GS Exam Pattern for Physics</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={physicssyllab} >Physics Exam Pattern</a>
                </button><br />
                <li><b>TIFR GS Exam Pattern for Chemistry</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={chemistrysyllab} >Chemistry Exam Pattern</a>
                </button><br />
                <li><b>TIFR GS Exam Pattern for Biology</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={biologysyllab} >Biology Exam Pattern</a>
                </button><br />
                <li><b>TIFR GS Exam Pattern for Computer Science & Learning, Information and Data Science</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={cssyllab} >Biology Exam Pattern</a>
                </button><br />
                <li><b>TIFR GS Exam Pattern for Science Education</b></li>
                <button className='exambtn' id='KcetExamLink'><a target='_blank' href={sesyllab} >Biology Exam Pattern</a>
                </button><br />
            </ul>
        </div>
    )
}

export default TIFRExamPattern