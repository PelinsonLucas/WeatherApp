import React, { useState, useEffect }  from 'react'
import "./Chat.css"
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    // Load messages from localStorage on component mount
    useEffect(() => {
      const storedMessages = localStorage.getItem('messages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    }, []);
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      const message = {
        text: e.target.message.value,
        user: 'lucas', // replace this with the actual user
        timestamp: new Date().toISOString()
      };
      const newMessages = [...messages, message];
      setMessages(newMessages);
      localStorage.setItem('messages', JSON.stringify(newMessages));
      e.target.message.value = '';
    };
  
    return (
      <div>
        <h1>Chat App</h1>
        <div>
          {messages.map((message, index) => (
            <p key={index} className={`message ${message.user === 'current user' ? 'current-user' : 'other-user'}`}>
              <strong>{message.user}</strong>: {message.text} <em>{message.timestamp}</em>
            </p>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input type="text" name="message" placeholder="Type your message" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
}

export default Chat