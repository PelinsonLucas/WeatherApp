import React from 'react'
import "./Sidebar.css"
import { DonutLarge, MoreVert, Message, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat/SidebarChat';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-headerAvatar">
          <IconButton>
            <Avatar/>
          </IconButton>
        </div>
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLarge/>
          </IconButton>
          <IconButton>
            <Message/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className='sidebar-searchContainer'>
          <SearchOutlined/>
          <input type="text" placeholder='Search or start new chat'/>
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar