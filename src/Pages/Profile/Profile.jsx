import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {FaUser,MdEmail} from 'react-icons/all';
import trophy from '../../images/trophy.png';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="profile mt-32 h-80 md:h-72 mx-auto rounded-lg">
                <div className="h-28 relative top">
                    <label className="w-40 h-24 absolute rounded-lg bg-white" style={{bottom:'-48px',left:'40px'}}> 
                        <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className="rounded-full" />
                    </label>
                </div>
                <div className="w-full h-52 md:h-44 flex flex-col justify-between md:px-12 px-8 pt-16 pb-4" style={{background:'#f8f9fa'}}>
                    <div className="flex flex-col mb-2 md:mb-0">
                        <div className="flex items-start mb-2">
                            <FaUser size={20} className="mr-3" />
                            <h1 className="text-lg font-semibold">Drishty Pal</h1>
                        </div>
                        <div className="flex items-start">
                            <MdEmail size={20} className="mr-3" />
                            <h1 className="text-md font-semibold">drishtypal1107@gmail.com</h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <label className="flex text-sm font-medium md:mb-0 mb-2"> No. Of Attempted Questions :
                            <h1 className="ml-1">10</h1>
                        </label>
                        <label className="flex text-sm font-medium ml-0 md:ml-8"> Rank 
                            <img src={trophy} width="20" className="mr-1" alt="trophy" />
                            : 
                            <h1 className="ml-1">10</h1>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
