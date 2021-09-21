import React,{useState,useEffect,useContext} from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/all'
import {IconContext } from "react-icons"
import SolutionModal from '../../Components/SolutionModal/SolutionModal';
const QuesList = ({topic}) => {
    const [player,setPlayer]=useState(false);
    const url="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"

    const playSolution = (url)=>{
      setPlayer(true);
    }
    return (
      <IconContext.Provider value={{ className: "bg-white h-12 w-6" }}>
        <div className="container w-screen h-screen bg-gray-300 flex flex-col items-center py-12 px-28">
        {player? <SolutionModal player={player} setPlayer={setPlayer} url={url}/> : ""}
            <div className="flex w-full justify-start">
            <div className="flex justify-start items-center py-12">
            <AiOutlineLeft className="rounded-l-full mb-5"/>
              <div className="flex flex-col text-center px-2">
              <div className="p-12 bg-white border-2 rounded-md">
                    <h1>Day 1</h1>
                </div>
                <h2>Arrays</h2>
              </div>
              <div className="flex flex-col text-center px-2">
              <div className="p-12 bg-white border-2 rounded-md">
                    <h1>Day 1</h1>
                </div>
                <h2>Arrays</h2>
              </div>
              <div className="flex flex-col text-center px-2">
              <div className="p-12 bg-white border-2 rounded-md">
                    <h1>Day 1</h1>
                </div>
                <h2>Arrays</h2>
              </div>
              <AiOutlineRight className="rounded-r-full mb-5"/>
            </div>
            </div>
            <div className="queslist w-full bg-white flex flex-col justify-center self-center p-8">
              <h1 className="p-2">Arrays</h1>
              <div className="questions flex  w-full font-bold border-b-2 p-2">
                <p className="flex-1">Questions</p>
                <p className="flex-1 text-center">Solved</p>
                <p className="flex-1 text-right">Solution</p>
              </div>
            <div className="questions flex justify-between align-middle items-center border-b-2 p-2">
                <p className="flex-1">Find the duplicates in array of N+1 integers.</p>
                <input className="flex-1 text-center" type="checkbox"/>
                <p className="flex-1 text-right cursor-pointer" onClick={()=> playSolution(url)}>Solution</p>
            </div>
            <div className="questions flex justify-between align-middle items-center border-b-2 p-2">
                <p className="flex-1">Find the duplicates in array of N+1 integers.</p>
                <input className="flex-1 text-center" type="checkbox"/>
                <p className="flex-1 text-right">Solution</p>
            </div>
           
              {/* */}
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default QuesList
