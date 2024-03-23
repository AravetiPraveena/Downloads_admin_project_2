import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
export const ResetPassword = () => {
    const navigator=useNavigate()
    const [password,setPassword]=useState(false)
    const[resetPassword,setResetPassword]=useState("");
    const{id,token}=useParams();
    function togglePasswordVisibility() {
        setPassword(prev=>!prev)
    }
    function handleInput(event){
        console.log(event.target.value)
        setResetPassword(event.target.value)
    }
    const handleReset = async (event) => {
        event.preventDefault();
        try {
            const response= await fetch(`http://localhost:5007/resetPageToTest/${id}/${token}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({resetPassword})
               
            })
            if(response.ok){
                const data=await response.json();
                if(data.Status==="Success")
                {
                    navigator('/')
                }
            }
            else{
                console.log("error from the server while responding")
            }

        } catch (error) {
            console.log("error during request:"+error)
        }
    }
  return (
    <div>ResetPassword
         <div className="containerInDownloads">
                <h2>Login Page</h2>
                <h3>PLEASE ENTER THE CREDENTIALS</h3>
                <div className="formContainerInDownload">
                    <form action="" onSubmit={handleReset} >
                        <div className="inputContainerInUserLogin">
                            <input type={password?"text":"password"} className='passwordFieldInLogin' placeholder='Reset password' name='password'  onChange={handleInput}/>
                            <button onClick={togglePasswordVisibility} type='button' className='visibilityButton'>{password?<FaEye className='eyeIconInLogin'/>:<FaRegEyeSlash  className='eyeIconInLogin' />}</button>
                        </div>
                        <button type='submit' className='submitBInLoginForDownload' >Reset Password</button>
                        {/* <p>Do not have an account? Sign Up here.....</p> */}
                        {/* <Link to='/signup' type='button' className='singUp' style={{ backgroundColor: "wheat", padding: "10px" }} >Sign Up</Link> */}
                        {/* <Link to='/forgotPassword' type='button' className='singUp' style={{ backgroundColor: "wheat", padding: "15px" }} >Forgot Password?</Link> */}
                    </form>
                </div>
            </div>
    </div>
  )
}
