import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import "./ChatApp.css"
import Chat from './Chat/Chat.jsx'

const ChatApp = () => {
  return (
    <div className='chatApp'>
      <div className='chatApp-container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatApp