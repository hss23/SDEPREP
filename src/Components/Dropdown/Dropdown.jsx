import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

export const Dropdown = React.forwardRef((props,ref) => {
    return (
        <div className="bubble" ref={ref}>
            <div className="dropdown-content flex flex-col">
                <Link to="/profile" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Profile</Link>
                <Link to="/dashboard" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Dashboard</Link>
                <Link to="/contact" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Connect</Link>
                <Link to="/about" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">About Us</Link>
                <Link to="/" className="dropdown-btn flex justify-start items-center tracking-wide w-full h-8 px-3 text-sm font-semibold text-left w-100 border-0">Logout</Link>
            </div>
        </div>
    )
})
