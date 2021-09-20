import React from 'react';
import {IoMdSend,RiFacebookFill,FaLinkedinIn,FiGithub} from 'react-icons/all';
import Navbar from '../../Components/Navbar/Navbar';
import './Contact.css';

export const Contact = () => {
    return (
        <div className="w-full h-screen flex">
            <Navbar />
            <form className="w-full my-auto">
                <div className="h-96 relative flex flex-col justify-end items-center md:justify-end md:items-end bg-white m-auto px-0 md:px-10 py-4 contact-form">
                    <div className="w-60 h-16 md:h-96 absolute flex flex-col items-start justify-between bg-white top-0 bottom-0 z-50 p-4 ml-0 md:ml-12 getInTouch">
                        <h1 className="w-full text-xl text-center font-bold">Contact Info</h1>
                        {/* <p>Leave Us a Message</p> */}
                        <div className="w-full hidden md:flex justify-around">
                            <RiFacebookFill />
                            <FiGithub />
                            <FaLinkedinIn />
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="flex flex-col mr-10 mb-4 input_field">
                            <label className="text-sm font-semibold mb-1">First Name</label>
                            <input type="text" placeholder="First Name" className="py-2 text-xs outline-none" />
                        </div>
                        <div className="flex flex-col mb-4 input_field">
                            <label className="text-sm font-semibold mb-1">Last Name</label>
                            <input type="text" placeholder="Last Name" className="py-2 text-xs outline-none" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="flex flex-col mr-10 mb-4 input_field">
                            <label className="text-sm font-semibold mb-1">Email Address</label>
                            <input type="text" placeholder="Email Address" className="py-2 text-xs outline-none" />
                        </div>
                        <div className="flex flex-col mb-4 input_field">
                            <label className="text-sm font-semibold mb-1">Mobile Number</label>
                            <input type="text" placeholder="Mobile Number" className="py-2 text-xs outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:justify-end mb-10 input_field" style={{width:'316px'}}>
                        <label className="text-sm font-semibold mb-2">Message</label>
                        <textarea placeholder="Write your message" rows={3} className="text-xs outline-none"></textarea>
                    </div>
                    <div className="w-full flex justify-center md:justify-end items-center">
                        <button type="button" className="w-20 h-10 flex justify-center items-center text-sm font-semibold text-white rounded-lg submit-btn">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
