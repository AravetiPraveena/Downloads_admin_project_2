import React, { useState } from 'react';
import { MdDownload } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import Examheader from '../../../UG/Examheader';
import Footer from '../Footer/Footer';





const JeeAdvancedDownloadPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const sessions = [
        '24<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
        '24<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
        '25<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
        '25<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
        '24<sup>TH</sup> FEBRUARY, 2024 FORENOON SESSION',
        '24<sup>TH</sup> FEBRUARY, 2024 AFTERNOON SESSION',
        '25<sup>TH</sup> FEBRUARY, 2024 FORENOON SESSION',
        '25<sup>TH</sup> FEBRUARY, 2024 AFTERNOON SESSION',
    ];

    const filteredJanuarySessions = sessions.filter(session =>
        session.includes("JANUARY, 2024") && session.includes(searchQuery)
    );

    const filteredFebruarySessions = sessions.filter(session =>
        session.includes("FEBRUARY, 2024") && session.includes(searchQuery)
    );

    return (
        <div>
            <Examheader />

            <div className="IItMainDownloads">
                <div className="IitMainHeading">
                    <h2>JEE ADVANCED - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
                </div>
                <div className="Iitmainstablediv">
                    <div className='Download_Searchbar'>
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search by year (e.g., 2024)"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>

                    <table className="Iitmainstable">
                        <tr className="Iitmainstrheading">
                            <th colSpan={4}>JEE ADVANCED - 2024 JANUARY SESSION</th>
                        </tr>
                        <tr>
                            <th>S.No</th>
                            <th>DATE/SESSION</th>
                            <th>QUESTION PAPERS</th>
                            <th>SOLUTIONS</th>
                        </tr>
                        {filteredJanuarySessions.map((session, index) => (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td dangerouslySetInnerHTML={{ __html: session }}></td>
                                <td>
                                    <button><MdDownload /> Question Paper</button>
                                </td>
                                <td>
                                    <button><MdDownload /> Solution</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <table className="Iitmainstable">
                        <tr className="Iitmainstrheading">
                            <th colSpan={4}>JEE ADVANCED - 2024 FEBRUARY SESSION</th>
                        </tr>
                        <tr>
                            <th>S.No</th>
                            <th>DATE/SESSION</th>
                            <th>QUESTION PAPERS</th>
                            <th>SOLUTIONS</th>
                        </tr>
                        {filteredFebruarySessions.map((session, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td dangerouslySetInnerHTML={{ __html: session }}></td>
                                <td>
                                    <button><MdDownload /> Question Paper</button>
                                </td>
                                <td>
                                    <button><MdDownload /> Solution</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default JeeAdvancedDownloadPage