import React, { useState } from 'react';
import { MdDownload } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Nav } from '../../UG/Nav';
import Footer from '../../UG/Footer';

const IsroDownloadPage = () => {
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
      {/* import logo from '../../logo2.jpeg' */}
      <div>
        <div className="ugexam_header">
          {Nav.map((NavData, index) => {
            return (
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

            );
          })}
        </div>
      </div>



      <div className="IItMainDownloads">
        <div className="IitMainHeading">
          <h2>ISRO - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
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
              <th colSpan={4}>ISRO - 2024 JANUARY SESSION</th>
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
              <th colSpan={4}>ISRO - 2024 FEBRUARY SESSION</th>
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

export default IsroDownloadPage





// import React, { useState, useEffect } from 'react';
// import { MdDownload } from 'react-icons/md';
// import { FaSearch } from "react-icons/fa";
// import { Nav } from '../../UG/Nav';
// import { Link } from 'react-router-dom'
// import { IoMdHome } from "react-icons/io";
// import Footer from '../../UG/Footer'; // Uncommented to include Footer component

// import axios from 'axios';

// const IsroDownloadPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [pdfs, setPdfs] = useState([]); // Initialize pdfs with an empty array
//   const [error, setError] = useState(null);
//   const [isroPdfs, setIsroPdfs] = useState([]);

//   useEffect(() => {
//     const fetchPdfs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5007/exams_pdfs');
//         const isroPdfsData = response.data.filter(pdf => pdf.description.trim().toLowerCase().includes('isro'));
//         setIsroPdfs(isroPdfsData); // Set isroPdfs state
//         setPdfs(isroPdfsData); // Set pdfs state with initial ISRO PDFs

//         console.log('ISRO PDFs:', isroPdfsData);
//       } catch (err) {
//         console.error('Error fetching PDFs:', err);
//         setError('Error fetching PDFs. Please try again.');
//       }
//     };
//     fetchPdfs();
//   }, []);

//   const handleSearch = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filteredPdfs = isroPdfs.filter(pdf => pdf.description.toLowerCase().includes(query));
//     setPdfs(filteredPdfs);
//   };

//   return (
//     <div>
//       <div className="ugexam_header">
//         {Nav.map((NavData, index) => (
//           <div className="header ug_exam_header" key={index}>
//             <div className={NavData.logo_img_container}>
//               <Link to={"/"}>
//                 <img src={NavData.logo} alt="" />
//               </Link>
//             </div>
//             <div className="exam_login_menu">
//               <li>
//                 <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
//                   <IoMdHome /> {NavData.link1}
//                 </Link>
//               </li>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div>
//         <div className="IitMainHeading">
//           <h2>ISRO - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
//         </div>

//         <div className='Download_Searchbar'>
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search by year (e.g., 2024)"
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//         </div>

//         {error && <p>{error}</p>}
//         <table className="Iitmainstable">
//           <thead>
//             <tr className="Iitmainstrheading">
//               <th colSpan={4}>ISRO - 2024 SESSION</th>
//             </tr>
//             <tr>
//               <th>S.NO</th>
//               <th>DATE/SESSION</th>
//               <th>Question Papers PDF</th>
//               <th>Solution PDF</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pdfs.map((pdf, index) => (
//               <tr key={index}>
//                <td>{index + 1}</td>
//                 <td>{pdf.description}</td>
//                 <td>
//                   <a
//                     href={`http://localhost:5007${pdf.qs_pdf_path}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: 'black' }}
//                   >
//                     <MdDownload /> Question Paper
//                   </a>
//                 </td>
//                 <td>
//                   <a
//                     href={`http://localhost:5007/uploads/${pdf.sol_pdf_name}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: 'black' }}
//                   >
//                     <MdDownload /> Solution
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* <Footer /> Include Footer component */}
//     </div>
//   );
// }

// export default IsroDownloadPage;

