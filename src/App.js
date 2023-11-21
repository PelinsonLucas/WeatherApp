import './App.css';
import Homepage from './Components/Homepage/Homepage';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Header from './Components/Header/Header.jsx';
import Login from './Components/ChatApp/Login/Login.jsx';
import Register from './Components/ChatApp/Register/Register.jsx';
import ChatApp from './Components/ChatApp/ChatApp.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/chatapp" element={<ChatApp />} />
        <Route path="/chatapp/login" element={<Login />} />
        <Route path="/chatapp/register" element={<Register />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
