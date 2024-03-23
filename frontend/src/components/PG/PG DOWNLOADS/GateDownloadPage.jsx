import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from '../../UG/Nav';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdDownload } from 'react-icons/md';
import Footer from '../../UG/Footer';

function PG_Downloads_pdfList() {
    const [pdfs, setPdfs] = useState([]);
    const [error, setError] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get(`http://localhost:5007/exams_pdfs`);
                const filteredPdfs = response.data.filter(pdf => pdf.exam_id === 'gate');
                setPdfs(filteredPdfs);
            } catch (err) {
                console.error('Error fetching PDFs:', err);
                setError('Error fetching PDFs. Please try again.');
            }
        };

        fetchPdfs();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Adjust locale as needed
    };

    return (
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

            <div className="IitMainHeading">
                <h2>GATE - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
            </div>

            <div className='Download_Searchbar'>
                <FaSearch />
                <input
                    type="text"
                    placeholder="Search by year (e.g., 2024)"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {error && <p>{error}</p>}
            <table className="pdf-table">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Date/Year</th>
                        <th>Description</th>
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
            {/* <Footer /> */}
        </div>
    );
}

export default PG_Downloads_pdfList;
