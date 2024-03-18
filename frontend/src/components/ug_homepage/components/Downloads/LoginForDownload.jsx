import React from 'react'
import './styles/LoginForDownload.css'

export const LoginForDownload = () => {
    function handleSubmit(){
        console.log("form submitted");
    }
    return (
        <div>
            <div className="containerInDownloads">
                <h3>PLEASE ENTER THE CREDENTIALS</h3>
                <div className="formContainerInDownload">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter user name' />
                        <input type="email" placeholder='Enter ur mail ' />
                        <input type="password" placeholder='Enter password' />
                        <button type='submit'className='submitBInLoginForDownload' >Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
