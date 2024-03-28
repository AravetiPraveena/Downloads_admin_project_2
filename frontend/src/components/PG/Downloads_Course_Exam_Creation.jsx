import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadingCoursesExams = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]);
  const [examName, setExamName] = useState(''); // Add examName state variable

  useEffect(() => {
    // Fetch courses when component mounts
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5007/server1/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      course_id: courseId,
      course_name: courseName
    };

    try {
      const response = await axios.post('http://localhost:5007/server1/saveCourse', data);
      setMessage(response.data.message);
      setCourseId('');
      setCourseName('');
      fetchCourses(); // Refresh courses after creating a new one
    } catch (error) {
      setMessage('Error creating course');
      console.error('Error creating course:', error);
    }
  };

  const handleCourseChange = async (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    try {
      const response = await axios.get(`http://localhost:5007/server1/exams/${courseId}`);
      setExams(response.data);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  const handleExamNameChange = (event) => { // Define handleExamNameChange function
    setExamName(event.target.value);
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post('http://localhost:5007/server1/saveExam', {
        course_id: selectedCourse,
        exam_name: examName
      });
      console.log(response.data);
      // Clear the form fields after successful upload
      setSelectedCourse('');
      setExamName('');
    } catch (error) {
      console.error('Error uploading exam:', error);
    }
  };

  return (
    <div>
      <h1 className='pdf_table_heading'>Create Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseId">Course ID:</label>
          <input type="text" id="courseId" placeholder="Enter Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input type="text" id="courseName" placeholder="Enter Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}

      {/* EXAM CREATION CODE */}
      <h1 className='pdf_table_heading'>Create Exam</h1>
      <div className="admin_project_item">
        <label htmlFor="courseSelect" className="admin_label">Select a Course:</label>
        <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange} className="admin_select">
          <option value="">Select a Course</option>
          {/* Map over your courses to generate options */}
          {/* Replace courses array with your actual data */}
          {courses.map(course => (
            <option key={course.course_id} value={course.course_id}>
              {course.course_name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Render input field for exam name */}
      {selectedCourse && (
        <div>
          <label htmlFor="examName">Enter Exam Name:</label>
          <input 
            type="text" 
            id="examName" 
            placeholder="Enter Exam Name" 
            value={examName} 
            onChange={handleExamNameChange} 
          />
        </div>
      )}

      {/* Render upload button if exam name is entered */}
      {selectedCourse && examName && (
        <button onClick={handleUpload}>Upload</button>
      )}

      {/* END */}
    </div>
  );
}

export default UploadingCoursesExams;
