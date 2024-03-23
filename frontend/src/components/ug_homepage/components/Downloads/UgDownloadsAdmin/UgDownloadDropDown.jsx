import React from 'react'
// import { Nav } from '../../UG/Nav';
import { Link } from 'react-router-dom'
// import { IoMdHome } from "react-icons/io";
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { UgDownloadsGet } from './UgDownloadsGet';
 
 
const UgDownloadDropDwon = () => {
 
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [exams, setExams] = useState([]);
 
  const [selectedExam, setSelectedExam] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
 
  const [message, setMessage] = useState('');
 
  const [textInput, setTextInput] = useState('');
  const [questionPdf, setQuestionPdf] = useState(null);
  const [solutionPdf, setSolutionPdf] = useState(null);
 
 
 
  const [examId, setExamId] = useState('');
  // const [uploadMessage, setUploadMessage] = useState('');
 
 
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
 
  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };
 
 
  const handleExamIdChange = (e) => {
    setExamId(e.target.value);
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
    if (selectedCourse !== '101') {
      setMessage('Please select only UG Related course');
      return;
    }
 
 
   
 
    const formData = new FormData();
    formData.append('course_id', selectedCourse);
    formData.append('exam_id', selectedExam);
    formData.append('description', textInput); // Make sure to include the description
    formData.append('qs_pdf', questionPdf);
    formData.append('sol_pdf', solutionPdf);
 
    try {
      const response = await axios.post('http://localhost:5007/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // console.log(formData)
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading files.');
      console.error(error);
    }
  };
 
 
  return (
    <div style={{ "backgroundColor": "gray", "height": "auto","alignItems": "center"}}>
      <div>
        <h1 style={{ "color": "", "fontFamily": "italic", "font-size": "36px" }}>Downloads Admin Page</h1>
      </div>
 
 
      <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }} className='admin_project_container'>
        <div style={{ "padding": "20px", "margin-top": "10px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }}>
          <label style={{ "padding": "20px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }} htmlFor="courseSelect">Select a Course:</label>
          <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select a Course</option>
            {courses.map(course => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </select>
        </div>
 
 
        <div style={{ "padding": "10px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }}>
          <label style={{ "padding": "20px", "margin-top": "10px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }} htmlFor="examSelect">Select {selectedCourse} Exam:</label>
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
            <div style={{}}>
              <label style={{ "height": "10px", "padding-right": "10px" }} htmlFor="textInput">Description:</label>
              <input style={{ "padding": "5px", "margin-top": "15px", "font-style": "italic", "font-weight": "bold" }} type="text" id="textInput" value={textInput} name="textInput" onChange={handleTextInputChange} />
            </div>
          )}
 
          {/* PDF upload sections */}
          {selectedExam && (
            <div style={{ "padding": "20px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }}>
              <label htmlFor="questionPdfUpload">Upload Question papers PDF :</label>
              <input style={{ "padding-left": "15px" }} type="file" id="questionPdfUpload" accept=".pdf" onChange={handleQuestionPdfUpload} />
            </div>
          )}
 
          {selectedExam && (
            <div style={{ "padding": "10px", "margin-top": "10px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }}>
              <label htmlFor="solutionPdfUpload">Upload Solutions papers PDF :</label>
              <input style={{ "height": "25px", "padding-left": "10px" }} type="file" id="solutionPdfUpload" accept=".pdf" onChange={handleSolutionPdfUpload} />
            </div>
          )}
 
          <button style={{ "padding": "10px", "margin-left": "10px", "font-style": "italic", "font-weight": "bold", "text-align": "center" }} onClick={handleUploadButtonClick}>Upload</button>
 
          {/* <Link to={`/ug-downloads-get/${selectedCourse}/${selectedExam}`}>View Uploaded Details</Link> */}
          <Link style={{"margin-left":"20px"}} to={`/ugDownloadsGet/`}>View Uploaded Details</Link>
          {message && <p>{message}</p>}
        </div>
 
      </div>
    </div>
  )
}
 
export default UgDownloadDropDwon