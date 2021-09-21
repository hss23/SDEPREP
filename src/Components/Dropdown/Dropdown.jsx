import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Dropdown.css'
import { useAuth } from '../../Services/firebase';
export const Dropdown = React.forwardRef((props,ref) => {
    const [error, setError]=useState("")
    const {currentUser,logout}= useAuth()
    const history= useHistory()
    async function handlelogout(){
      setError('')
      try{
          await logout()
          history.push("/")
      }catch{
          setError("failed")
      }
    }
    
    return (
        <div className="bubble" ref={ref}>
            <div className="dropdown-content flex flex-col">
                <h1 className="text-black">{currentUser?.email}</h1>
                <Link to="/profile" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Profile</Link>
                <Link to="/dashboard" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Dashboard</Link>
                <Link to="/contact" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Connect</Link>
                <Link to="/about" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">About Us</Link>
                <p onClick={handlelogout} className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Logout</p>
            </div>
        </div>
    )
})
