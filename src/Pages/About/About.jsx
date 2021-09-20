import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import about from '../../images/goran-ivos-iOykDIkZLQw-unsplash.jpg';
import {FaGithubSquare,FaLinkedinIn} from 'react-icons/all';
import './About.css';
// import right from '../../images/siora-photography-hgFY1mZY-Y0-unsplash.jpg';

const About = () => {
    return (
        <div className="w-full h-screen flex">
            <Navbar />
            <div className="flex flex-col justify-start items-center text-center mx-8 md:mx-auto mt-24 about">
                    <h1 className="text-3xl font-semibold mb-6">About Us</h1>
                    <p className="text-xl font-bold mb-4">SDE-CRACKER always helps you to get better understanding in advance DSA problems and interview preparation.</p>
                    <p className="">Only start doing these problems if you feel you are comfortable with solving basic problems of DSA. Once you are, you can 
                    start preparing for these problems, because these problems are solely interview based.</p>
                    <div className="flex flex-col md:flex-row justify-around mt-24 md:mt-32 contribute">
                        <div className="w-full md:w-60 h-36 flex flex-col justify-between items-center rounded-md about-card py-4 mb-20 relative">
                            <div className="w-16 h-16 absolute bg-gray-900 rounded-full photo">
                                {/* <img src={about} alt="about" className="bg-cover rounded-full" /> */}
                            </div>
                            <h1 className="w-full mt-10 md-mt-0">Harshit Singh</h1>
                            <div className="w-full flex justify-end items-end px-4">
                                <a rel="noreferrer" target="_blank" href="/" className="flex border-0 outline-none mr-3"><FaGithubSquare size={22} /></a>
                                <a rel="noreferrer" target="_blank" href="/" className="flex border-0 outline-none"><FaLinkedinIn size={22} /></a>
                            </div>
                        </div>
                        <div className="w-full md:w-60 h-36 flex flex-col justify-between items-center rounded-md about-card py-4 mb-20 relative">
                            <div className="w-16 h-16 absolute bg-gray-900 rounded-full photo">
                                {/* <img src={about} alt="about" className="bg-cover rounded-full" /> */}
                            </div>
                            <h1 className="w-full mt-10 md-mt-0">Drishty Pal</h1>
                            <div className="w-full flex justify-end items-end px-4">
                                <a rel="noreferrer" target="_blank" href="https://github.com/drishty11" className="flex border-0 outline-none mr-3"><FaGithubSquare size={22} /></a>
                                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/drishty-pal-49a68820a/" className="flex border-0 outline-none"><FaLinkedinIn size={22} /></a>
                            </div>
                        </div>
                    </div>
                    <h1>Project shown on:</h1>
                    <h1>Github</h1>
            </div>
        </div>
    )
}

export default About


