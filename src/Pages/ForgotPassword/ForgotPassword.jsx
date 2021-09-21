import React, {useState} from 'react';
import {FcGoogle,MdEmail,HiLockClosed} from 'react-icons/all';
import { Link , useHistory} from 'react-router-dom';
import './ForgotPassword.css';
import { useAuth } from '../../Services/firebase';

const ForgotPassword = () => {
    const {resetPassword} = useAuth();
    const [email, setemail] = useState();
    const [error, seterror] = useState();
    const [message,setMessage] = useState();
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(e){
        e.preventDefault()
        try {
            seterror('')
            setLoading(true)
            await resetPassword(email)
            setMessage("Password reset link has been sent to your Email")
        } catch{
            setMessage("Email not Found")
        }
        setLoading(false)
    }
    return (
        <div className="w-full h-screen flex">
            <form onSubmit={handleSubmit} className="w-full my-auto mt-md-20" >
                <div className="h-80 relative flex flex-col justify-start items-start bg-white m-auto px-6 py-4 form">
                    <a href="/" className="absolute bg-white rounded-full" style={{top:'-16px', right:'60px'}}><FcGoogle size={30} /></a>
                    <h1 className="mb-3 text-2xl font-bold">Reset Password</h1>
                    <label htmlFor="" className="text-sm font-semibold mb-1">E-MAIL</label>
                    <div className="w-full relative mb-4">
                        <MdEmail className="h-full absolute ml-2" />
                        <input value={email} onChange={(e)=> setemail(e.target.value)}  className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-basic" placeholder="Enter your email address" required />
                        {/* <FiCheck className="absolute right-6 text-xl" /> */}
                    </div>
                    <button disabled={loading} className="w-full flex items-center justify-center px-4 py-2 mb-6 text-md font-semibold text-white submit-btn">Reset Password</button>
                    {message && <p className="w-full text-center text-xs mb-2">{message}</p>   }  
                    <p className="w-full text-center text-xs mb-2"><Link to="/" className="underline">Back To Login </Link></p>
                </div> 
            </form>   
        </div>
    )
}

export default ForgotPassword
