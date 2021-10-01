import React from 'react';
import { Link } from 'react-router-dom';
import ChatBot from '../../Components/Chatbot/Chatbox';
import ChatButton from '../../Components/Chatbot/Chatbox';
import Navbar from '../../Components/Navbar/Navbar';
// import subject from '../images/WhatsApp Image 2021-09-06 at 11.52.02 PM.jpeg';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="w-full h-screen">
            <div className="">
                <Navbar />
                <div>
                    <h1 className="mt-24 mb-4 text-center text-4xl font-bold">SDE_CHALLENGE_</h1>
                    <p className="mb-20 text-center font-semibold text-xs">Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.</p>
                    <div className="flex flex-col items-start mx-auto h-full first-container">
                        <div className="w-1 absolute center-line hidden md:flex"></div>
                        <Link to="/questions" className="w-full flex justify-start relative mb-10 md:mb-0 cards cards-left cards-left-line">
                            {/* <div className="w-1 absolute middle-line-right"></div> */}
                            {/* <label className="w-10 h-10 flex justify-center items-center rounded-full subjectName mr-2 absolute"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>DBMS</h1></label> */}
                            <label className="w-10 h-10 hidden md:flex justify-center items-center rounded-full subjectName-left mr-2 absolute z-40"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>DS</h1></label>
                            <div className="w-32 flex flex-col items-center bg-white card-odd card-content">
                                <h1 className="middle flex absolute">/</h1>
                                <h1 className="sub-name sub-name-left font-bold flex absolute">Data Structure</h1>
                                <div className="w-full h-full flex flex-col">
                                    <div className="flex first" style={{height:'50%'}}></div>
                                    <div className="flex second" style={{height:'50%'}}>
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>   
                        <button type="button" className="w-full flex justify-end relative mb-10 md:mb-0 cards cards-right cards-right-line">  
                            {/* <div className="w-1 absolute middle-line-left"></div> */}
                            {/* <label className="w-10 h-10 flex justify-center items-center rounded-full subjectName mr-2 absolute"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>OOPS</h1></label>    */}
                            <label className="w-10 h-10 hidden md:flex justify-center items-center rounded-full subjectName-right mr-2 absolute z-40"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>OOPS</h1></label>   
                            <div className="w-32 flex flex-col items-center bg-white card-even card-content">
                                <h1 className="middle flex absolute">/</h1>
                                <h1 className="sub-name sub-name-right font-bold flex absolute">Object Oriented Programming</h1>
                                <div className="w-full h-full flex flex-col">
                                    <div className="flex first" style={{height:'50%'}}></div>
                                    <div className="flex second" style={{height:'50%'}}>
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>  
                        <button type="button" className="w-full flex justify-start relative mb-10 md:mb-0 cards cards-left cards-left-line">
                            {/* <div className="w-1 absolute middle-line-right"></div> */}
                            {/* <label className="w-10 h-10 flex justify-center items-center rounded-full subjectName mr-2 absolute"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>DBMS</h1></label> */}
                            <label className="w-10 h-10 hidden md:flex justify-center items-center rounded-full subjectName-left mr-2 absolute z-40"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>DBMS</h1></label>
                            <div className="w-32 flex flex-col items-center bg-white card-odd card-content">
                                <h1 className="middle flex absolute">/</h1>
                                <h1 className="sub-name sub-name-left font-bold flex absolute">Database Management System</h1>
                                <div className="w-full h-full flex flex-col">
                                    <div className="flex first" style={{height:'50%'}}></div>
                                    <div className="flex second" style={{height:'50%'}}>
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>   
                        <button type="button" className="w-full flex justify-end relative mb-10 md:mb-0 cards cards-right cards-right-line"> 
                            {/* <div className="w-1 absolute middle-line-left"></div> */}
                            {/* <label className="w-10 h-10 flex justify-center items-center rounded-full subjectName mr-2 absolute"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>SD</h1></label>   */}
                            <label className="w-10 h-10 hidden md:flex justify-center items-center rounded-full subjectName-right mr-2 absolute z-40"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>SD</h1></label>  
                            <div className="w-32 flex flex-col items-center bg-white card-even card-content">
                                <h1 className="middle flex absolute">/</h1>
                                <h1 className="sub-name sub-name-right font-bold flex absolute">Software Development</h1>
                                <div className="w-full h-full flex flex-col">
                                    <div className="flex first" style={{height:'50%'}}></div>
                                    <div className="flex second" style={{height:'50%'}}>
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>  
                        <button type="button" className="w-full flex justify-start relative mb-10 md:mb-0 cards cards-left cards-left-line mb-20">  
                            {/* <div className="w-1 absolute middle-line-right"></div> */}
                            {/* <label className="w-10 h-10 flex justify-center items-center rounded-full subjectName mr-2 absolute"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>CN</h1></label> */}
                            <label className="w-10 h-10 hidden md:flex justify-center items-center rounded-full subjectName-left mr-2 absolute z-40"><h1 className="text-xs text-white font-semibold mb-0" style={{ }}>CN</h1></label>
                            <div className="w-32 flex flex-col items-center bg-white card-odd card-content">
                                <h1 className="middle flex absolute">/</h1>
                                <h1 className="sub-name sub-name-left font-bold flex absolute">Computer Networks</h1>
                                <div className="w-full h-full flex flex-col">
                                    <div className="flex first" style={{height:'50%'}}></div>
                                    <div className="flex second" style={{height:'50%'}}>
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>      
                    </div>
                </div>
            </div>
            <ChatButton />
        </div>
    )
}

export default Dashboard