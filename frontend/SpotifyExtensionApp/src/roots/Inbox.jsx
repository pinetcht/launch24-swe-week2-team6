import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import ChatCard from '../components/ChatCard.jsx';
import { FaArrowLeft } from "react-icons/fa";
import SearchBar from '../components/SearchBar.jsx';

const Inbox = () => {
  const [chatId, setChatId] = useState("");
  const chatsWithUser = [{
    id: "chatID1",
    recievers: [
      {
        username: "janedoe",
        profilepic: "https://pbs.twimg.com/profile_images/487911640147324928/3ZMfaTi8_400x400.jpeg"
      }
    ],
    recentmessage: "Hey did you hear Taylor's new album?!"
  },{
    id: "chatID2",
    recievers: [
      {
        username: "bob",
        profilepic: "https://www.orlandosentinel.com/wp-content/uploads/migration/2007/04/27/6QJF3UOGYZBH5JVUBO7FJIIRXE.jpg?w=620",
      }
    ],
    recentmessage: "So true"
  },{
    id: "chatID3",
    recievers: [
      {
        username: "dylan",
        profilepic: "https://t3.ftcdn.net/jpg/00/52/82/66/360_F_52826677_DVtGDQwfQE6V8lgQ9BV5ytA57fDZ6ucS.jpg"
      }
    ],
    recentmessage: "Hahahaha"
  },{
    id: "chatID4",
    recievers: [
      {
        username: "dylan",
        profilepic: "https://t3.ftcdn.net/jpg/00/52/82/66/360_F_52826677_DVtGDQwfQE6V8lgQ9BV5ytA57fDZ6ucS.jpg"
      }
    ],
    recentmessage: "We have to go to his concert!"
  }]

  return (
    <>
      <NavBar />
  
      <div className="page-container">
        <div>
            <h1>Inbox</h1>
        </div> 
        {chatId === "" && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '70px' }}>
              <SearchBar placeholder="Search by username..." />
              {/* <button
                style={{ 
                  marginLeft: '10px', 
                  padding: '12px',
                  backgroundColor: '#F9BC60',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  marginBottom: '6px', 
                }}
                className="filter-button"
              >
                Sort By
              </button> */}
          </div>
        )}
        {chatId === "" ? (
            chatsWithUser.map((chat) =>
              <ChatCard chat={chat} setChatId={setChatId} key={chat.id}/>
            )
          ) : (
            <>
              <button 
                onClick={ () => setChatId("") }
                className="back-button" 
                style={{ 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  cursor: 'pointer', 
                  padding: '10px' 
                }}
              >
                <FaArrowLeft color="white" size={45} />
              </button>
              <h1 >You have entered chat {chatId} </h1>
              
            </>
          )
        }
      </div>
    </>
  )
}

export default Inbox;
