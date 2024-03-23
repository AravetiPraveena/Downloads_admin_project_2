// import React from 'react'
// import { Nav } from '.././UG/Nav';
// import { Link } from 'react-router-dom'
// import { IoMdHome } from "react-icons/io";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PG_Downloads_pdfList from './PG_Downloads_pdfList';






// const Pg_Downloads_AdminPage = () => {

//     const [courses, setCourses] = useState([]);
//     const [selectedCourse, setSelectedCourse] = useState('');
//     const [exams, setExams] = useState([]);

//     const [selectedExam, setSelectedExam] = useState('');
//     // const [pdfFile, setPdfFile] = useState(null);

//     const [message, setMessage] = useState('');

//     const [textInput, setTextInput] = useState('');
//     const [questionPdf, setQuestionPdf] = useState(null);
//     const [solutionPdf, setSolutionPdf] = useState(null);





//     const [examId, setExamId] = useState('');
//     // const [uploadMessage, setUploadMessage] = useState('');


//     useEffect(() => {
//         async function fetchCourses() {
//             try {
//                 const response = await axios.get('http://localhost:5007/courses');
//                 setCourses(response.data);
//             } catch (error) {
//                 console.error('Error fetching courses:', error);
//             }
//         }
//         fetchCourses();
//     }, []);


//     const handleCourseChange = async (e) => {
//         const courseId = e.target.value;
//         setSelectedCourse(courseId);
//         try {
//             const response = await axios.get(`http://localhost:5007/exams/${courseId}`);
//             setExams(response.data);
//         } catch (error) {
//             console.error('Error fetching exams:', error);
//         }

//     };

//     const handleExamChange = (e) => {
//         setSelectedExam(e.target.value);
//     };

//     const handlePdfUpload = (event) => {
//         const file = event.target.files[0];
//         setPdfFile(file);
//     };




//     const handleExamIdChange = (e) => {
//         setExamId(e.target.value);
//     };






//     const handleQuestionPdfUpload = (event) => {
//         const file = event.target.files[0];
//         setQuestionPdf(file);
//     };

//     const handleSolutionPdfUpload = (event) => {
//         const file = event.target.files[0];
//         setSolutionPdf(file);
//     };

//     const handleTextInputChange = (event) => {
//         setTextInput(event.target.value);
//     };

//     const handleUploadButtonClick = async () => {
//         if (selectedCourse !== '102') {
//             setMessage('Please select PG Related course');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('course_id', selectedCourse);
//         formData.append('exam_id', selectedExam);
//         formData.append('description', textInput); // Make sure to include the description
//         formData.append('qs_pdf', questionPdf);
//         formData.append('sol_pdf', solutionPdf);

//         try {
//             const response = await axios.post('http://localhost:5007/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             // console.log(formData)
//             setMessage(response.data.message);
//         } catch (error) {
//             setMessage('Error uploading files.');
//             console.error(error);
//         }
//     };










//     // const handleUploadButtonClick = async () => {
//     //     if (!pdfFile || !selectedExam) {
//     //         setMessage('Please select a PDF file and an exam.');
//     //         return;
//     //     }

//     //     const formData = new FormData();
//     //     formData.append('pdfUpload', pdfFile);
//     //     formData.append('examId', selectedExam);

//     //     try {
//     //         const response = await fetch('http://localhost:5007/upload', {
//     //             method: 'POST',
//     //             body: formData
//     //         });

//     //         if (!response.ok) {
//     //             throw new Error(`HTTP error! Status: ${response.status}`);
//     //         }

//     //         const data = await response.json();
//     //         setMessage(data.message);
//     //         setPdfFile(null); // Reset selected PDF file after successful upload


//     //     } catch (error) {
//     //         console.error('Error uploading file:', error);
//     //         setMessage('Error uploading file: ' + error.message);
//     //     }
//     // };
//     // console.log("hiiiii");
//     // console.log(selectedCourse);
//     // console.log(selectedExam)

//     return (
//         <div>
//             <div>
//                 <div className="ugexam_header">
//                     {Nav.map((NavData, index) => {
//                         return (
//                             <div className="header ug_exam_header" key={index}>
//                                 <div className={NavData.logo_img_container}>
//                                     <Link to={"/"}>
//                                         <img src={NavData.logo} alt="" />
//                                     </Link>
//                                 </div>


//                                 <div className="exam_login_menu  ">
//                                     <li>
//                                         <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
//                                             <IoMdHome /> {NavData.link1}
//                                         </Link>
//                                     </li>

//                                 </div>
//                             </div>

//                         );
//                     })}
//                 </div>
//             </div>
//             <div>
//                 <h1>Downloads Admin Page</h1>
//             </div>


//             <div className='admin_project_container'>
//                 <div>
//                     <label htmlFor="courseSelect">Select a Course:</label>
//                     <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange}>
//                         <option value="">Select a Course</option>
//                         {courses.map(course => (
//                             <option key={course.course_id} value={course.course_id}>
//                                 {course.course_name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="examSelect">Select {selectedCourse} Exam:</label>
//                     <select id="examSelect" value={selectedExam} onChange={handleExamChange}>
//                         <option value="">Select an Exam</option>
//                         {exams.map(exam => (
//                             <option key={exam.exam_id} value={exam.exam_id}>
//                                 {exam.exam_name}
//                             </option>
//                         ))}
//                     </select>

//                     {/* Input field for text */}
//                     {selectedExam && (
//                         <div>
//                             <label htmlFor="textInput">Your Text:</label>
//                             <input type="text" id="textInput" value={textInput} name="textInput" onChange={handleTextInputChange} />
//                         </div>
//                     )}

//                     {/* PDF upload sections */}
//                     {selectedExam && (
//                         <div>
//                             <label htmlFor="questionPdfUpload">Upload Question papers PDF:</label>
//                             <input type="file" id="questionPdfUpload" accept=".pdf" onChange={handleQuestionPdfUpload} />
//                         </div>
//                     )}

//                     {selectedExam && (
//                         <div>
//                             <label htmlFor="solutionPdfUpload">Upload Solutions papers PDF:</label>
//                             <input type="file" id="solutionPdfUpload" accept=".pdf" onChange={handleSolutionPdfUpload} />
//                         </div>
//                     )}

//                     <button onClick={handleUploadButtonClick}>Upload</button>

//                     {message && <p>{message}</p>}
//                 </div>
//             </div>
//             <PG_Downloads_pdfList />
//         </div>
//     )
// }

// export default Pg_Downloads_AdminPage






import React, { useState, useEffect } from 'react';
import { Nav } from '.././UG/Nav';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import axios from 'axios';
import PG_Downloads_pdfList from './PG_Downloads_pdfList';

const Pg_Downloads_AdminPage = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [exams, setExams] = useState([]);
    const [selectedExam, setSelectedExam] = useState('');
    const [message, setMessage] = useState('');
    const [textInput, setTextInput] = useState('');
    const [questionPdf, setQuestionPdf] = useState(null);
    const [solutionPdf, setSolutionPdf] = useState(null);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await axios.get('http://localhost:5007/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }
        fetchCourses();
    }, []);

    const handleCourseChange = async (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);
        try {
            const response = await axios.get(`http://localhost:5007/exams/${courseId}`);
            setExams(response.data);
        } catch (error) {
            console.error('Error fetching exams:', error);
        }
    };

    const handleExamChange = (e) => {
        setSelectedExam(e.target.value);
    };

    const handleQuestionPdfUpload = (event) => {
        const file = event.target.files[0];
        setQuestionPdf(file);
    };

    const handleSolutionPdfUpload = (event) => {
        const file = event.target.files[0];
        setSolutionPdf(file);
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleUploadButtonClick = async () => {
        const formData = new FormData();
        formData.append('course_id', selectedCourse);
        formData.append('exam_id', selectedExam);
        formData.append('description', textInput);
        formData.append('qs_pdf', questionPdf);
        formData.append('sol_pdf', solutionPdf);

        try {
            const response = await axios.post('http://localhost:5007/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error uploading files.');
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                <div className="ugexam_header">
                    {Nav.map((NavData, index) => (
                        <div className="header ug_exam_header" key={index}>
                            <div className={NavData.logo_img_container}>
                                <Link to={"/"}>
                                    <img src={NavData.logo} alt="" />
                                </Link>
                            </div>
                            <div className="exam_login_menu  ">
                                <li>
                                    <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
                                        <IoMdHome /> {NavData.link1}
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Downloads Admin Page</h1>
            </div>
            <div className='admin_project_container'>
                <div>
                    <label htmlFor="courseSelect">Select a Course:</label>
                    <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange}>
                        <option value="">Select a Course</option>
                        {courses.map(course => (
                            <option key={course.course_id} value={course.course_id}>
                                {course.course_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="examSelect">Select {selectedCourse} Exam:</label>
                    <select id="examSelect" value={selectedExam} onChange={handleExamChange}>
                        <option value="">Select an Exam</option>
                        {exams.map(exam => (
                            <option key={exam.exam_id} value={exam.exam_id}>
                                {exam.exam_name}
                            </option>
                        ))}
                    </select>
                    {/* Input field for text */}
                    {selectedExam && (
                        <div>
                            <label htmlFor="textInput">Your Text:</label>
                            <input type="text" id="textInput" value={textInput} name="textInput" onChange={handleTextInputChange} />
                        </div>
                    )}
                    {/* PDF upload sections */}
                    {selectedExam && (
                        <div>
                            <label htmlFor="questionPdfUpload">Upload Question papers PDF:</label>
                            <input type="file" id="questionPdfUpload" accept=".pdf" onChange={handleQuestionPdfUpload} />
                        </div>
                    )}
                    {selectedExam && (
                        <div>
                            <label htmlFor="solutionPdfUpload">Upload Solutions papers PDF:</label>
                            <input type="file" id="solutionPdfUpload" accept=".pdf" onChange={handleSolutionPdfUpload} />
                        </div>
                    )}
                    <button onClick={handleUploadButtonClick}>Upload</button>
                    {message && <p>{message}</p>}
                </div>
            </div>
            <PG_Downloads_pdfList />
       
            </div>
    )
 }

export default Pg_Downloads_AdminPage