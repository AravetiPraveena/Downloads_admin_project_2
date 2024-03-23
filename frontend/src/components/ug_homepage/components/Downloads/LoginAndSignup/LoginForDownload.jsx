import React, { useState } from 'react'
import '../styles/LoginForDownload.css'
import axios from 'axios'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
export const LoginForDownload = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })//object with two properties
    const [showPassword,setShowPassword]=useState(false)
    const navigate = useNavigate();
    function handleSubmit(event) {
        console.log("form submitted");
        event.preventDefault();
        // navigate('/')
        axios.post("http://localhost:5007/login", values)
            .then(res => {
                console.log(res)
                if (res.data === "success") {
                    alert("success")
                }
                else {
                    alert("failure while loggin in no record exist")
                }
            })
            .catch(err => console.log(err + "happened while posting the data from axios"))
    }
    function handleInput(event) {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    function togglePasswordVisibility() {
        setShowPassword(prev=>!prev)
    }
    // https://www.nodemailer.com/#nodemailer-features
    return (
        <div>
            <div className="containerInDownloads">
                <h2>Login Page</h2>
                <h3>PLEASE ENTER THE CREDENTIALS</h3>
                <div className="formContainerInDownload">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" placeholder='Enter ur mail' name='email' onChange={handleInput} />
                        <div className="inputContainerInUserLogin">
                            <input type={showPassword?"text":"password"} className='passwordFieldInLogin' placeholder='Enter password' name='password' onChange={handleInput} />
                            <button onClick={togglePasswordVisibility} type='button' className='visibilityButton'>{showPassword?<FaEye className='eyeIconInLogin'/>:<FaRegEyeSlash  className='eyeIconInLogin' />}</button>
                        </div>
                        <button type='submit' className='submitBInLoginForDownload' >Log In</button>
                        <p>Do not have an account? Sign Up here.....</p>
                        <Link to='/signup' type='button' className='singUp' style={{ backgroundColor: "wheat", padding: "10px" }} >Sign Up</Link>
                        <Link to='/forgotPassword' type='button' className='singUp' style={{ backgroundColor: "wheat", padding: "15px" }} >Forgot Password?</Link>

                    </form>
                </div>
            </div>
        </div>
    )
}
