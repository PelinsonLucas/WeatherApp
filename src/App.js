import './App.css';
import Homepage from './Components/Homepage/Homepage';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Header from './Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route exact path="/Portfolio" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
