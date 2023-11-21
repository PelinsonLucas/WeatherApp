import React, { useState } from 'react'
import './WeatherApp.css'
import Rain from './Rain/Rain.jsx'

import IconClear from '../Assets/clear.png'
import IconCloud from '../Assets/cloud.png'
import IconDrizzle from '../Assets/drizzle.png'
import IconHumidity from '../Assets/humidity.png'
import IconRain from '../Assets/rain.png'
import IconSearch from '../Assets/search.png'
import IconSnow from '../Assets/snow.png'
import IconWind from '../Assets/wind.png'
import IconMist from '../Assets/mist.png'

export const WeatherApp = () => {

  let apiKey = "dc15576c26ad304252c00bda9366c7ce"

  const [weatherIcon, setWeatherIcon] = useState(IconCloud)

  const setClear = (background, rain) => {
    background.classList.remove('rainy');
    background.classList.add('clear');
    rain.classList.remove('display');
    rain.classList.add('hide');
  }

  const setRain = (background, rain) => {
    background.classList.remove('clear');
    background.classList.add('rainy');
    rain.classList.remove('hide');
    rain.classList.add('display');
  }

  const search = () => {
    const searchCity = document.getElementsByClassName("cityInput")
    if (searchCity[0].value==="") {
      return 0;
    }

      let urlWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity[0].value}&appid=${apiKey}&units=metric`
      let responsePromise = fetch(urlWeatherApi)

      responsePromise.then((response) => response.json() )
      .then( (data) => {

      const humidity = document.getElementsByClassName('humidity-percentage')
      const wind = document.getElementsByClassName('wind-rate')
      const temperature = document.getElementsByClassName('weather-temp')
      const location = document.getElementsByClassName('weather-location')
      const rain = document.querySelector('.rain')
      const background = document.querySelector('.background')

      humidity[0].innerHTML = data.main.humidity + ' %';
      wind[0].innerHTML = data.wind.speed + ' km/h';
      temperature[0].innerHTML = data.main.temp + 'ºc';
      location[0].innerHTML = data.name;

      switch (data.weather[0].main) {
        case 'thunderstorm':
        case 'Rain':
          setWeatherIcon(IconRain);
          setRain(background, rain);
          break;
        case 'Drizzle':
          setWeatherIcon(IconDrizzle);
          setClear(background, rain);
          break;
        case 'Snow':
          setWeatherIcon(IconSnow);
          setClear(background, rain);
          break;
        case 'Clouds':
          setWeatherIcon(IconCloud);
          setClear(background, rain);
          break;
        case 'Clear':
          setWeatherIcon(IconClear);
          setClear(background, rain);
          break;
        case 'Mist':
          setWeatherIcon(IconMist);
          setClear(background, rain);
          break;
        default:
          setWeatherIcon(IconWind);
          setClear(background, rain);
          break;
      }

   }).catch( () => { 
      return 0;
    })
    
  }

  return (
    <>  
      <div className='background'></div>
      <div className='container'>
        <div className='top-bar'>
          <input type='text' className='cityInput' placeholder='Search' onKeyDown={ 
              (event) => { 
                if (event.key==='Enter')
                  search();
              } 
          }/>
          <div className='search-icon' onClick={() => search()}>
              <img src={IconSearch} alt='' />
          </div>
        </div>
        <div className='weather-image'>
              <img src={weatherIcon} alt='' />
            </div>
            <div className='weather-temp'>-ºc</div>
            <div className='weather-location'>--</div>
            <div className='data-container'>
              <div className='element'>
                <img src={IconHumidity} alt="" className='icon' />
                <div className='data'>
                  <div className='humidity-percentage'>- %</div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className='element'>
                <img src={IconWind} alt="" className='icon' />
                <div className='data'>
                  <div className='wind-rate'>- km/h</div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
      </div>
      <Rain/>
    </>
  )
}

export default WeatherApp