
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDownload } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Examheader from '../../../UG/Examheader';
import Footer from '../Footer/Footer';

function IitjeeDownloadPage() {
    const [pdfs, setPdfs] = useState([]);
    const [error, setError] = useState(null);
    const { exam_id } = useParams(); // Extract exam_id from URL

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get(`http://localhost:5007/server1/exams_pdfs/${exam_id}/101`);
                setPdfs(response.data);
            } catch (err) {
                console.error('Error fetching PDFs:', err);
                setError('Error fetching PDFs. Please try again.');
            }
        };

        fetchPdfs();
    }, [exam_id]); // exam_id is a dependency

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Adjust locale as needed
    };

    return (
        <div className='admin_project_container'>



<Examheader />

<div className='Downloads_body_container'>
<div className="IitMainHeading" style={{ backgroundColor: 'black', width: '100%' }}>


{pdfs.length > 0 && (
    <h2 style={{ color: 'white' }}>{pdfs[0].exam_id} Exam Pdfs</h2>
)}




</div>

{error && <p>{error}</p>}
            <table className="pdf-table">
                <thead>
                   
                    <tr>
                        <th>S.NO</th>
                        <th>Date/Year</th>
                        <th>SESSION</th>
                        <th>Question Papers PDF</th>
                        <th>Solution PDF</th>
                    </tr>
                </thead>
                <tbody>
                    {pdfs.map((pdf, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{formatDate(pdf.Date_Year)}</td>
                            <td>{pdf.description}</td>
                            <td>
                                <a href={`http://localhost:5007/server1/${pdf.qs_pdf_path}`} target="_blank" rel="noopener noreferrer">
                                    <MdDownload /> Question Paper
                                </a>
                            </td>
                            <td>
                                <a href={`http://localhost:5007/server1/uploads/${pdf.sol_pdf_name}`} target="_blank" rel="noopener noreferrer">
                                    <MdDownload /> Solution
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



</div>
<Footer />
        </div>
    );
}

export default IitjeeDownloadPage;










































