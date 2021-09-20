import React from 'react';
import { Link } from 'react-router-dom';
import {MdEmail,HiLockClosed} from 'react-icons/all';
export const Signup = () => {
    return (
        <div className="w-full h-screen flex">
            <form className="w-full my-auto">
                <div className="h-96 relative flex flex-col justify-start items-start bg-white m-auto px-6 form">
                    <h1 className="w-full text-left text-2xl font-bold py-3 md:text-right" style={{color: '#1E3163'}}>SignUp</h1>
                    <label htmlFor="" className="text-sm font-semibold mb-1">E-MAIL</label>
                    <div className="w-full relative mb-4">
                        <MdEmail className="h-full absolute ml-2" />
                        <input className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-basic" placeholder="Enter your email address" required />
                        {/* <FiCheck className="absolute right-6 text-xl" /> */}
                    </div>
                    <label htmlFor="" className="text-sm font-semibold mb-1">PASSWORD</label>
                    <div className="w-full relative mb-4">
                        <HiLockClosed className="h-full absolute ml-2" />
                        <input className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-password-input" placeholder="Password" required />
                    </div>
                    <label htmlFor="" className="text-sm font-semibold mb-1">CONFIRM PASSWORD</label>
                    <div className="w-full relative mb-6">
                        <HiLockClosed className="h-full absolute ml-2" />
                        <input className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-password-input" placeholder="Confirm Password" required />
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 mb-8 text-md font-semibold text-white submit-btn" type="button">Signup</button>
                    <p className="w-full text-center text-xs mb-2">Already registered ? <Link to="/login" className="underline">Sign in</Link></p>
                </div> 
            </form>   
        </div>
    )
}
