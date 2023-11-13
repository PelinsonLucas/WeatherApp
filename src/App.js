import './App.css';
import Homepage from './Components/Homepage/Homepage';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Header from './Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Header/>
    </>
  );
}

export default App;
