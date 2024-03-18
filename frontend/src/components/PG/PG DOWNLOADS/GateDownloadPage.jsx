import React, { useState } from 'react';
import { MdDownload } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import { Nav } from '../../UG/Nav';
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import Footer from '../../UG/Footer';



const GateDownloadPage = () => {

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
          <h2>GATE - PREVIOUS QUESTION PAPERS WITH SOLUTIONS</h2>
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
              <th colSpan={4}>GATE - 2024 JANUARY SESSION</th>
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
              <th colSpan={4}>GATE - 2024 FEBRUARY SESSION</th>
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

export default GateDownloadPage