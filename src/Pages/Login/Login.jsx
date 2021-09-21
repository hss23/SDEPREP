import React, {useState} from 'react';
import {FcGoogle,MdEmail,HiLockClosed} from 'react-icons/all';
import { Link , useHistory} from 'react-router-dom';
import './Login.css';
import { useAuth } from '../../Services/firebase';

const Login = () => {
    const {login,googleSignIn} = useAuth();
    const [email, setemail] = useState();
    const [password, setpassword] = useState()
    const [error, seterror] = useState()
    const [loading, setLoading] = useState(false)
    const history= useHistory()
    
    async function handleSubmit(e){
        e.preventDefault()
        try {
            seterror('')
            setLoading(true)
            await login(email,password)
            history.push("/dashboard")
        } catch{
            seterror("Failed to login account")
        }
        setLoading(false)
    }
    async function handleGoogle(e){
        e.preventDefault()
        try {
            seterror('')
            setLoading(true)
            await googleSignIn
            history.push("/dashboard")
        } catch{
            seterror("Failed to login account")
        }
        setLoading(false)
    }
    return (
        <div className="w-full h-screen flex">
            {error&& <h1>{error}</h1>}
            <form className="w-full my-auto mt-md-20" onSubmit={handleSubmit}>
                <div className="h-80 relative flex flex-col justify-start items-start bg-white m-auto px-6 py-4 form">
                    <p onClick={handleGoogle} className="absolute bg-white rounded-full" style={{top:'-16px', right:'60px'}}><FcGoogle size={30} /></p>
                    <h1 className="mb-3 text-2xl font-bold">Sign In</h1>
                    <label htmlFor="" className="text-sm font-semibold mb-1">E-MAIL</label>
                    <div className="w-full relative mb-4">
                        <MdEmail className="h-full absolute ml-2" />
                        <input value={email} onChange={(e)=> setemail(e.target.value)}  className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-basic" placeholder="Enter your email address" required />
                        {/* <FiCheck className="absolute right-6 text-xl" /> */}
                    </div>
                    <label htmlFor="" className="text-sm font-semibold mb-1">PASSWORD</label>
                    <div className="w-full relative mb-2">
                        <HiLockClosed className="h-full absolute ml-2" />
                        <input value={password} onChange={(e)=> setpassword(e.target.value)}  className="w-full flex items-center justify-start pl-8 pr-4 py-2 text-xs outline-none" id="outlined-password-input" placeholder="Password" required />
                    </div>
                    <Link to="/forgot" className="w-full text-right text-xs mb-4 border-0 outline-none">Forgot password</Link>
                    <button className="w-full flex items-center justify-center px-4 py-2 mb-6 text-md font-semibold text-white submit-btn">Login</button>
                    <p className="w-full text-center text-xs mb-2">Not registered ? <Link to="/signup" className="underline">Sign up</Link></p>
                </div> 
            </form>   
        </div>
    )
}

export default Login
