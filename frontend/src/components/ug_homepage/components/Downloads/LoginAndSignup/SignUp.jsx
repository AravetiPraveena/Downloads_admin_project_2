import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpValidation from './SignUpValidation'
import axios from 'axios'
export const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })
    console.log(values)
    const [errors, setErrors] = useState({})
    function handleSubmit(event) {
        event.preventDefault();
        const err = SignUpValidation(values)
        setErrors(err);
        // setErrors(SignUpValidation(values))
        if (err.name === "" && err.email === "" && err.password === "") {
            axios.post("http://localhost:5007/register", values)
                .then(res => {
                    // console.log("values sent"+values)
                    navigate('/download')
                    console.log("This is the response code" + res)
                })
                .catch(err => console.log(err))
        }
    }
    function handleInput(event) {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    return (
        <div>
            <div>
                <div className="containerInDownloads">
                    <h2>Sign in page</h2>
                    <h3>PLEASE ENTER THE CREDENTIALS</h3>
                    <div className="formContainerInDownload">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Enter ur name' name='name' onChange={handleInput} />
                            {errors.name && <span>{errors.name}</span>}
                            <input type="email" placeholder='Enter ur mail' name='email' onChange={handleInput} />
                            {errors.email && <span>{errors.email}</span>}
                            <input type="password" placeholder='Enter password' name='password' onChange={handleInput} />
                            {errors.password && <span>{errors.password}</span>}
                            <button type='submit' className='submitBInLoginForDownload' >Create Account</button>
                            <Link to='/download' type='button' className='submitBInLoginForDownload' style={{ backgroundColor: "wheat", padding: "10px" }} >Go to Login page</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
