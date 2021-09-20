import React, {useState} from 'react';
import {BsFillChatFill,RiDiscussFill,IoMdSend,IoClose} from 'react-icons/all';
import about from '../../images/goran-ivos-iOykDIkZLQw-unsplash.jpg';
import './Chatbot.css';

const ChatButton = () => {
    const [openchat, setOpenChat] = useState(false);
    return (
      <div className="fixed right-12 bottom-6">
        {openchat ? <ChatBot show={openchat} /> : ''}
        <button className="w-16 h-16 flex justify-center items-center rounded-lg bg-white" onClick={() => setOpenChat(!openchat)} style={{boxShadow:'2px 4px 12px #d9d9d9, -2px 9px 5px #ffffff'}}>
            {openchat ? <IoClose size={40} /> : <BsFillChatFill size={30} />}
        </button>
      </div>
    );
}

function ChatBot(show) {
    return (
        <>
        {
        show ? 
        <div>
            <div className="chatbox fixed z-50 rounded-lg">
                <div className="p-3 flex justify-start items-center rounded-t-lg" style={{background: '#1E3163'}}>
                    <RiDiscussFill className="mr-2" fill="#fff" />
                    <h1 className="text-white">Discussion Form</h1>  
                </div>
                <div className="flex flex-col justify-between" style={{height:'calc(100% - 70px)'}}>
                    <div className="flex px-3 py-4">
                        <img className="w-8 h-8 rounded-full" src={about} alt="about" />
                        <div className="chat relative ml-4 py-1">
                            <p className="pl-2 pr-8">text</p>
                            <p className="pl-2 text-left text-white" style={{fontSize:'8px'}}>11/07/2021</p>
                        </div>
                    </div>
                    <div className="w-72 mx-auto rounded-2xl relative" style={{border:'1px solid'}}>
                        <input type="text" className="w-full outline-none px-3 py-2 text-xs rounded-2xl" placeholder="Write Your Doubt....." />
                        <button><IoMdSend className="absolute right-3 top-1.5" size={20} /></button>
                    </div>
                </div>
            </div>
            {/* <ChatButton /> */}
        </div> : ''
        }
        </>
    )
} 

export default ChatButton
// export default ChatBot
