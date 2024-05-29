import React from 'react'
import '../roots/inbox.css'
import { FaArrowRight } from "react-icons/fa";

const ChatCard = ({ chat, setChatId }) => {

    return (
        <button onClick={ ()=> setChatId(chat.id) } className="chat-card-container">
            {chat.recievers.map((u, index) => 
                <div key={index} className="receiver-info">
                    <img src={u.profilepic} width="50px" className="chat-profile-pic"/>
                    <p> {u.username} </p>
                </div>
            )}
            <h4 className="recent-message"> {chat.recentmessage} </h4>
            <FaArrowRight color="white" className="arrow"size={45} />
        </button>
        
    )
}

export default ChatCard