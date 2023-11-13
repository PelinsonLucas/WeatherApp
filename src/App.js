import './App.css';
import Homepage from './Components/Homepage/Homepage';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Header from './Header/Header.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Header/>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/" element={<Homepage />} />
      </Switch>
    </>
  );
}

export default App;
