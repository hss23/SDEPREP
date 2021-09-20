import React, {useEffect} from 'react';
import {FcGoogle,MdEmail,HiLockClosed} from 'react-icons/all';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    return (
        <div className="w-full h-screen flex">
            <form className="w-full my-auto mt-md-20">
                <div className="h-80 relative flex flex-col justify-start items-start bg-white m-auto px-6 py-4 form">
                    <a href="/" className="absolute bg-white rounded-full" style={{top:'-16px', right:'60px'}}><FcGoogle size={30} /></a>
                    <h1 className="mb-3 text-2xl font-bold">Sign In</h1>
                    <label htmlFor="" className="text-sm font-semibold mb-1">E-MAIL</label>
                    <div className="w-full relative mb-4">
                        <MdEmail className="h-full absolute ml-2" />
                        <input className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-basic" placeholder="Enter your email address" required />
                        {/* <FiCheck className="absolute right-6 text-xl" /> */}
                    </div>
                    <label htmlFor="" className="text-sm font-semibold mb-1">PASSWORD</label>
                    <div className="w-full relative mb-2">
                        <HiLockClosed className="h-full absolute ml-2" />
                        <input className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-password-input" placeholder="Password" required />
                    </div>
                    <button type="button" className="w-full text-right text-xs mb-4 border-0 outline-none">Forgot password</button>
                    <button className="w-full flex items-center justify-center px-4 py-2 mb-6 text-md font-semibold text-white submit-btn" type="button">Login</button>
                    <p className="w-full text-center text-xs mb-2">Not registered ? <Link to="/" className="underline">Sign up</Link></p>
                </div> 
            </form>   
        </div>
    )
}

export default Login

// https://freefrontend.com/css-login-forms/
// https://codepen.io/shayanea/pen/eVMMgO?editors=1010
