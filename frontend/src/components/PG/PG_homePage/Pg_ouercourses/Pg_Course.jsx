import React from 'react'
import './pg_courses.css'
import { Pg_Our_Courses_DAta } from './Pg_Our_Courses_DAta'
import { pg_OUR_Courses_Data2 } from './Pg_Our_Courses_DAta'
import { Link } from 'react-router-dom'


export const Pg_Course = () => {
  return (
    <div>
        <div className=' Pg_Container' id='course'>
            <div className='Pg_CoursesTitle' id=''>
                <h1>OUR COURSES</h1>
            </div>
            <div className='Pg_Courses-list'>
                {Pg_Our_Courses_DAta.map((courses1,coursesIndex1) =>{
                    return(
                        <div key={coursesIndex1} className={courses1.oURcOURSE}>
                                <div className='Pg_courses-images'>
                                <h3 className='PgCOURSES_text'>{courses1.Text}</h3>
                                    <img src={courses1.image} alt=''/>
                                </div>
                            <div className='Pg_courses-contant'>
                               <ul className='Pg_courses-list'>
                                <h4>Features</h4>
                                <li>{courses1.List1}</li>
                                <li>{courses1.List2}</li>
                                <li>{courses1.List3}</li>
                                <li>{courses1.List4}</li>
                               </ul>  
                            </div>
                            <div className='Pg_coursesList_'>
                                {/* <h4>{courses.CorsesText}</h4> */}
                                <ul className='Pg_coursesList'>
                                    <li className={courses1.CourseClass}><Link to='/Gate_ots'>{courses1.Corses1}</Link></li>
                                    <li className={courses1.CourseClass}><Link to='/iitjam_ots'>{courses1.Corses2}</Link></li>
                                    <li className={courses1.CourseClass}><Link to='/est_ots'>{courses1.Corses3}</Link></li>
                                    <li className={courses1.CourseClass}><Link to='/tifr_ots'>{courses1.Corses4}</Link></li>
                                    <li className={courses1.CourseClass}><Link to='/isro_ots'>{courses1.Corses5}</Link></li>
                                    <li className={courses1.CourseClass}><Link to='/barc_ots'>{courses1.Corses6}</Link ></li>
                                    <li className={courses1.CourseClass}><Link to='/jest_ots'>{courses1.Corses7}</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
                 {pg_OUR_Courses_Data2.map((courses2,coursesIndex) =>{
                    return(
                        <div key={coursesIndex} className={courses2.oURcOURSE}>
                                <div className='Pg_courses-images'>
                                <h3 className='PgCOURSES_text'>{courses2.Text}</h3>
                                    <img src={courses2.image} alt=''/>
                                </div>
                            <div className='Pg_courses-contant'>
                               
                               <ul className='Pg_courses-list'>
                               <h4 >Features</h4>
                                <li>{courses2.List1}</li>
                                <li>{courses2.List2}</li>
                                <li>{courses2.List3}</li>
                                <li>{courses2.List4}</li>
                               </ul>  
                            </div>

                            <div className='Pg_coursesList_'>
                                {/* <h4>{courses.CorsesText}</h4> */}
                                <ul className='Pg_coursesList'>
                                    <li className={courses2.CourseClass}><Link to="/Gate_OLVC">{courses2.Corses1}</Link></li>
                                    <li className={courses2.CourseClass}><Link to="/iitjam_olvc">{courses2.Corses2}</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
