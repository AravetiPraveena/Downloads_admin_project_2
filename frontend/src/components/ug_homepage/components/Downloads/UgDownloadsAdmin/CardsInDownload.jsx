import React, { useEffect, useState } from 'react'
import kcetimage from '../Images/JEE_MAINS__image-removebg-preview.png'
import Examheader from '../../../../UG/Examheader'
import axios from 'axios'
import Footer from '../../Footer/Footer'
export const CardsInDownload = () => {
  const [text, setText] = useState("")
  const [imageOfCard, setImageOfCard] = useState([])
  const [cardsToDisplay, setCardsToDisplay] = useState([])
  function handleImage(event) {
    setImageOfCard(event.target.files[0]);
  }
  function handleText(event) {
    setText(event.target.value)
  }
  async function handleUpload(event) {
    
    // event.preventDefault();
    console.log("upload button cliked");
    console.log(text + "after clicking the handleupload");
    console.log(imageOfCard);
    const formData = new FormData();
    formData.append("ImageOfCard", imageOfCard);
    formData.append("TextForCard", text);
    // const config={headers:{'Content-Type':"multipart/form-data"}}
    // console.log("Formdata attched",formData)
    try {
      const response = await axios.post("http://localhost:5007/upload", formData)
      console.log("res", response.data)
    }
    catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error:", error.message);
      }
      console.log(error);
    }
  }
  useEffect(() => {
    fetch("http://localhost:5007/gettingData")
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        setCardsToDisplay(res)
        console.log(cardsToDisplay + "cards to disp;ay data")
      })
      .catch(err => console.log(err))
  }, [])
  // console.log(cardsToDisplay+"the data from backend")
  // console.log(cardsToDisplay.card_text)
  return (
    <div>
      <Examheader />
      <div className="Downloadsdiv">
        <div className="DownloadsUgdiv">
        <form action="" encType="multipart/form-data">
          <input type="file" onChange={handleImage} />
          <input type="text" placeholder='enter exam name' style={{ border: "2px solid black", padding: "10px" }} onChange={handleText} />
          <button onClick={handleUpload}>Upload To Create Card</button>
        </form>
        <h1>UG EXAMS</h1>
        <div className="DownloadsUgButton">
          {cardsToDisplay.map((item) => (
            // <div key={item.card_id} >
                <div className="DownloadsUgButtondiv">
                  <div className="DownloadsUgButtonimg">
                    <img src={`http://localhost:5007/${item.card_image}`} alt="" />
                  </div>
                  <a href="/iitjeemaindownload">{item.card_text}</a>
                </div>
              // {/* </div> */}
          ))}
            </div>
        </div>
        <div>
        
        </div>
      </div>
     
      <Footer/>
    </div>
  )
}
