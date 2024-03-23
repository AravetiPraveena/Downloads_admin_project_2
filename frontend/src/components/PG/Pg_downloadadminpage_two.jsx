import React, { useState, useEffect } from 'react';
import { Nav } from '.././UG/Nav';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import axios from 'axios';
import PG_Downloads_pdfList from './PG_Downloads_pdfList';
import './Pg_downloadadminpage_two.css';
import Footer from '.././UG/Footer';

const Pg_downloadadminpage_two = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [exams, setExams] = useState([]);
    const [selectedExam, setSelectedExam] = useState('');
    const [message, setMessage] = useState('');
    const [textInput, setTextInput] = useState('');
    const [questionPdf, setQuestionPdf] = useState(null);
    const [solutionPdf, setSolutionPdf] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [showExamOptions, setShowExamOptions] = useState(false); // State variable to toggle exam options

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
        formData.append('date_column', selectedDate);

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
            <h1>Downloads Admin Page</h1>
            <div className='admin_project_container'>
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '5rem', padding: '10px'}}>
                    <h1 className='pdf_table_heading'>Exams Uploader</h1>
                    <button className='admin_button' onClick={() => setShowExamOptions(!showExamOptions)}>Add Exam Pdfs +</button>
                </div>
                {showExamOptions && (
                    <>
                        <div className="admin_project_item">
                            <label htmlFor="courseSelect" className="admin_label">Select a Course:</label>
                            <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange} className="admin_select">
                                <option value="">Select a Course</option>
                                {courses.map(course => (
                                    <option key={course.course_id} value={course.course_id}>
                                        {course.course_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="admin_project_item">
                            <label htmlFor="examSelect" className="admin_label">Select {selectedCourse} Exam:</label>
                            <select id="examSelect" value={selectedExam} onChange={handleExamChange} className="admin_select">
                                <option value="">Select an Exam</option>
                                {exams.map(exam => (
                                    <option key={exam.exam_id} value={exam.exam_id}>
                                        {exam.exam_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selectedExam && (
                            <div className="admin_project_item">
                                <label htmlFor="dateInput" className="admin_label">Select Exam Date:</label>
                                <input type="date" id="dateInput" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="admin_input" />
                            </div>
                        )}
                        {selectedExam && (
                            <div className="admin_project_item">
                                <label htmlFor="textInput" className="admin_label">Exam Name:</label>
                                <input type="text" id="textInput" value={textInput} name="textInput" onChange={handleTextInputChange} className="admin_input" />
                            </div>
                        )}
                        {selectedExam && (
                            <div className="admin_project_item">
                                <label htmlFor="questionPdfUpload" className="admin_label">Upload Question Papers PDF:</label>
                                <input type="file" id="questionPdfUpload" accept=".pdf" onChange={handleQuestionPdfUpload} className="admin_input" />
                            </div>
                        )}
                        {selectedExam && (
                            <div className="admin_project_item">
                                <label htmlFor="solutionPdfUpload" className="admin_label">Upload Solutions Papers PDF:</label>
                                <input type="file" id="solutionPdfUpload" accept=".pdf" onChange={handleSolutionPdfUpload} className="admin_input" />
                            </div>
                        )}
                        <button onClick={handleUploadButtonClick} className="admin_button">Upload</button>
                        {message && <p className="admin_message">{message}</p>}
                    </>
                )}
            </div>
            <PG_Downloads_pdfList />
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Pg_downloadadminpage_two;
