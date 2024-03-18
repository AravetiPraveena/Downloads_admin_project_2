

// import React, { useState } from 'react';
// import Examheader from '../../../UG/Examheader';
// import './styles/Downloads.css';
// import { MdDownload } from 'react-icons/md';
// import { FaSearch } from "react-icons/fa";
// import Footer from '../Footer/Footer';
// import jan20questionpdf from './Question Papers/OPEN TEST 1.pdf'

// const IitjeeDownloadPage = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value.toLowerCase());
//     };

//     const sessions = [
//         '20<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
//         '24<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
//         '25<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
//         '25<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
//         '24<sup>TH</sup> APRIL, 2024 FORENOON SESSION',
//         '24<sup>TH</sup> APRIL, 2024 AFTERNOON SESSION',
//         '25<sup>TH</sup> APRIL, 2024 FORENOON SESSION',
//         '25<sup>TH</sup> APRIL, 2024 AFTERNOON SESSION',
//         '24<sup>TH</sup> JANUARY, 2023 AFTERNOON SESSION',
//         '24<sup>TH</sup> JANUARY, 2023 FORENOON SESSION',
//         '25<sup>TH</sup> JANUARY, 2023 FORENOON SESSION',
//         '25<sup>TH</sup> JANUARY, 2023 AFTERNOON SESSION',
//     ];

//     const filteredJanuarySessions = sessions.filter(session =>
//         session.includes("JANUARY, 2024") && session.includes(searchQuery)
//     );

//     const filteredAprilSessions = sessions.filter(session =>
//         session.includes("APRIL, 2024") && session.includes(searchQuery)
//     );

//     const filteredJanuarySessions2023 = sessions.filter(session =>
//         session.includes("JANUARY, 2023") && session.includes(searchQuery)
//     );

//     return (
//         <div>
//             <Examheader />
//             <div className="IItMainDownloads">
//                 <div className="IitMainHeading">
//                     <h2>JEE MAINS - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
//                 </div>
//                 <div className="Iitmainstablediv">
//                     <div className='Download_Searchbar'>
//                         <FaSearch />
//                         <input
//                             type="text"
//                             placeholder="Search by year (e.g., 2024)"
//                             value={searchQuery}
//                             onChange={handleSearch}
//                         />
//                     </div>

//                     <table className="Iitmainstable">
//                         <tr className="Iitmainstrheading">
//                             <th colSpan={4}>JEE MAINS - 2024 JANUARY SESSION</th>
//                         </tr>
//                         <tr>
//                             <th>S.No</th>
//                             <th>DATE/SESSION</th>
//                             <th>QUESTION PAPERS</th>
//                             <th>SOLUTIONS</th>
//                         </tr>
//                         {filteredJanuarySessions.map((session, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td dangerouslySetInnerHTML={{ __html: session }}></td>
//                                 <td>
//                                     <a style={{color:"#000"}} target='_blank' href={jan20questionpdf}><MdDownload /> Question Paper</a>
//                                     <button> </button>
//                                 </td>
//                                 <td>
//                                     <button><MdDownload /> Solution</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </table>
//                     <table className="Iitmainstable">
//                         <tr className="Iitmainstrheading">
//                             <th colSpan={4}>JEE MAINS - 2024 APRIL SESSION</th>
//                         </tr>
//                         <tr>
//                             <th>S.No</th>
//                             <th>DATE/SESSION</th>
//                             <th>QUESTION PAPERS</th>
//                             <th>SOLUTIONS</th>
//                         </tr>
//                         {filteredAprilSessions.map((session, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td dangerouslySetInnerHTML={{ __html: session }}></td>
//                                 <td>
//                                     <button><MdDownload /> Question Paper</button>
//                                 </td>
//                                 <td>
//                                     <button><MdDownload /> Solution</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </table>

//                     <table className="Iitmainstable">
//                         <tr className="Iitmainstrheading">
//                             <th colSpan={4}>JEE MAINS - 2023 JANUARY SESSION</th>
//                         </tr>
//                         <tr>
//                             <th>S.No</th>
//                             <th>DATE/SESSION</th>
//                             <th>QUESTION PAPERS</th>
//                             <th>SOLUTIONS</th>
//                         </tr>
//                         {filteredJanuarySessions2023.map((session, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td dangerouslySetInnerHTML={{ __html: session }}></td>
//                                 <td>
//                                     <button><MdDownload /> Question Paper</button>
//                                 </td>
//                                 <td>
//                                     <button><MdDownload /> Solution</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </table>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default IitjeeDownloadPage;






import React, { useState } from 'react';
import Examheader from '../../../UG/Examheader';
import './styles/Downloads.css';
import { MdDownload } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import Footer from '../Footer/Footer';
import jan20questionpdf from './Question Papers/OPEN TEST 1.pdf';
import jan20solutionpdf from './Question Papers/OPEN TEST 1 SOL_Rev0.pdf'

const IitjeeDownloadPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const sessions = [
        '20<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
        '24<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
        '25<sup>TH</sup> JANUARY, 2024 FORENOON SESSION',
        '25<sup>TH</sup> JANUARY, 2024 AFTERNOON SESSION',
        '24<sup>TH</sup> APRIL, 2024 FORENOON SESSION',
        '24<sup>TH</sup> APRIL, 2024 AFTERNOON SESSION',
        '25<sup>TH</sup> APRIL, 2024 FORENOON SESSION',
        '25<sup>TH</sup> APRIL, 2024 AFTERNOON SESSION',
        '24<sup>TH</sup> JANUARY, 2023 AFTERNOON SESSION',
        '24<sup>TH</sup> JANUARY, 2023 FORENOON SESSION',
        '25<sup>TH</sup> JANUARY, 2023 FORENOON SESSION',
        '25<sup>TH</sup> JANUARY, 2023 AFTERNOON SESSION',
    ];

    const filteredJanuarySessions = sessions.filter(session =>
        session.includes("JANUARY, 2024") && session.includes(searchQuery)
    );

    const filteredAprilSessions = sessions.filter(session =>
        session.includes("APRIL, 2024") && session.includes(searchQuery)
    );

    const filteredJanuarySessions2023 = sessions.filter(session =>
        session.includes("JANUARY, 2023") && session.includes(searchQuery)
    );

    const january2024QuestionsPDFs = [
        jan20questionpdf,
        // jan23questionpdf
    ];

    const january2024SolutionPDFs = [
        jan20solutionpdf,
        // jan23questionpdf
    ];

    return (
        <div>
            <Examheader />
            <div className="IItMainDownloads">
                <div className="IitMainHeading">
                    <h2>JEE MAINS - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
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
                            <th colSpan={4}>JEE MAINS - 2024 JANUARY SESSION</th>
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
                                    <a style={{ color: "#000" }} target='_blank' href={january2024QuestionsPDFs[index]}><MdDownload /> Question Paper</a>
                                </td>
                                <td>
                                <a style={{ color: "#000" }} target='_blank' href={january2024SolutionPDFs[index]}><MdDownload />Solution</a>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <table className="Iitmainstable">
                        <tr className="Iitmainstrheading">
                            <th colSpan={4}>JEE MAINS - 2024 APRIL SESSION</th>
                        </tr>
                        <tr>
                            <th>S.No</th>
                            <th>DATE/SESSION</th>
                            <th>QUESTION PAPERS</th>
                            <th>SOLUTIONS</th>
                        </tr>
                        {filteredAprilSessions.map((session, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td dangerouslySetInnerHTML={{ __html: session }}></td>
                                <td>
                                    <a href=""><MdDownload /> Question Paper</a>
                                </td>
                                <td>
                                    <a href=""><MdDownload /> Solution</a>
                                </td>
                            </tr>
                        ))}
                    </table>

                    <table className="Iitmainstable">
                        <tr className="Iitmainstrheading">
                            <th colSpan={4}>JEE MAINS - 2023 JANUARY SESSION</th>
                        </tr>
                        <tr>
                            <th>S.No</th>
                            <th>DATE/SESSION</th>
                            <th>QUESTION PAPERS</th>
                            <th>SOLUTIONS</th>
                        </tr>
                        {filteredJanuarySessions2023.map((session, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td dangerouslySetInnerHTML={{ __html: session }}></td>
                                <td>
                                    <a href=""><MdDownload /> Question Paper</a>
                                </td>
                                <td>
                                    <a href=""><MdDownload /> Solution</a>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IitjeeDownloadPage;














































