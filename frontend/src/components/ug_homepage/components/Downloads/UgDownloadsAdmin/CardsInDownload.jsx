

import React, { useEffect, useState } from 'react';
import Examheader from '../../../../UG/Examheader';
import axios from 'axios';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import '../styles/Downloads.css'

const CardsInDownload = () => {
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5007/ServerForCards/gettingData/")
      .then(res => res.json())
      .then(res => {
        // Filter the data where course_id is 101
        const filteredData = res.filter(item => item.course_id === 101);
        setCardsToDisplay(filteredData);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Examheader />
      <div className="Downloadsdiv">
        <div className="DownloadsUgdiv">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', margin: '20px', padding: '10px'}}>
            <h1>UG EXAMS</h1>
            <Link to={'/Pg_downloadadminpage_two'}><button>Admin Page</button></Link>
          </div>
          <div className="DownloadsUgButton">
            {cardsToDisplay.map((item) => (
              <div className="DownloadsUgButtondiv" key={item.card_id}>
                <div className="DownloadsUgButtonimg">
                  <img src={`http://localhost:5007/ServerForCards/${item.card_image}`} alt="" />
                </div>
                {/* <div>{item.card_text}</div> */}
                <div style={{ textAlign: 'center', margin:'5px' }}>
  {/* <a href={`/iitjeemaindownload/${item.exam_id}/${item.course_id}`}>{item.card_text}</a> */}
  <Link to={`/iitjeemaindownload/${item.exam_id}/${item.course_id}`}>{item.card_text}</Link>
</div>



              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CardsInDownload;




















