import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import { MdDownload } from 'react-icons/md';
import './Pg_downloadadminpage_two.css';


function PG_Downloads_pdfList() {

    const [pdfs, setPdfs] = useState([]);
    const [error, setError] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get('http://localhost:5007/exams_pdfs');
                setPdfs(response.data);
            } catch (err) {
                console.error('Error fetching PDFs:', err);
                setError('Error fetching PDFs. Please try again.');
            }
        };

        fetchPdfs();
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Adjust locale as needed
    };




    return (
        <div className='admin_project_container'>
            <h1 className='pdf_table_heading'>List of PDFs</h1>
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
                            <td>{pdf.pdf_s_id}</td>
                            <td>{formatDate(pdf.Date_Year)}</td>
                            <td>{pdf.description}</td>
                            <td>
                                <a href={`http://localhost:5007${pdf.qs_pdf_path}`} target="_blank">
                                    <MdDownload /> Question Paper
                                </a>
                            </td>
                            <td>
                                <a href={`http://localhost:5007/uploads/${pdf.sol_pdf_name}`} target="_blank">
                                    <MdDownload /> Solution
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}

export default PG_Downloads_pdfList;
