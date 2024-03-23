import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, } from 'react'
import axios from 'axios'
export const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  // navigator=useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "http://localhost:5007/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
      console.log(email+"from jsx page")
    if (!response.ok) {
      alert("error checking user existence")
      // Handle non-successful response
      // console.error("Unexpected response from server:", response);
        throw new Error(`HTTP error! Status: ${response.status}`);
      // return;
    }

    const data = await response.json();

    if (data.Status === "Success") {
      console.log("Reset password email sent successfully");
      Navigate("/uglogin");
    } else {
      console.error("Unexpected response from server:", data);
    }
  } catch (error) {
    console.error("Error during request:", error);
  }
};
  const sendEmail = async (e) => {
    e.preventDefault();
    // ==========below code posts the data using fetch========
    const res = await fetch("http://localhost:5007/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        email
      })
    })
    console.log(res)

  }

  
// ===========below commented code fetches the data ==================
// fetch("http://localhost:5007/register")
// .then(res=>console.log(res))
// .catch(err=>console.log("error happened"+err))
//===========we can also do this in place of above posting part with the fetch========================
//axios.post("http://localhost:5007/",{email})
//.then(res=>console.log(res))
// .catch(err=>console.log(err))

// const handleSubmit=(e)=>{
//   e.preventDefault();
//   axios.post("http://localhost:5007/forgotPassword",{email})
//   .then(res=>{
//     console.log(res)
//   })
//   .catch(err=>{
//     console.log(err)
//   })

// }

  return (
    <div>

      <div className="containerInDownloads">
        <h1>  ForgotPassword Page</h1>
        <h3>PLEASE ENTER THE MAIL TO RESET UR PASSWORD</h3>
        <div className="formContainerInDownload">
          <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter ur mail' name='email' onChange={(event) => { setEmail(event.target.value) }} />
            <button  type='button' onClick={handleSubmit} style={{ backgroundColor: "#D46C56", color: "white", padding: "15px" }} >Send Email </button>
            {/* <Link to='/resetPageToTest' style={{color:"red"}}>ResetPasswordPageToTest</Link> */}
          </form>
        </div>
      </div>
    </div>
  )
}
