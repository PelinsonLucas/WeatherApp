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
import BackgroundImage from '../Assets/background.jpg'

export const WeatherApp = () => {

  let apiKey = "dc15576c26ad304252c00bda9366c7ce"

  const [weatherIcon, setWeatherIcon] = useState(IconCloud)

  const search = () => {
    const searchCity = document.getElementsByClassName("cityInput")
    if (searchCity[0].value==="") {
      return 0;
    }
    let urlGeocodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity[0].value}&appid=${apiKey}`
    
    fetch(urlGeocodingApi)
    .then( (response) => response.json() )
    .then( (data) => {
      let {lat, lon} = data[0]

      let urlWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      let responsePromise2 = fetch(urlWeatherApi)

      responsePromise2.then((response) => response.json() )
      .then( (data) => {

        const humidity = document.getElementsByClassName('humidity-percentage')
        const wind = document.getElementsByClassName('wind-rate')
        const temperature = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')
        const [rainFront, rainBack] = document.querySelectorAll('.rain')

        humidity[0].innerHTML = data.main.humidity + ' %';
        wind[0].innerHTML = data.wind.speed + ' km/h';
        temperature[0].innerHTML = data.main.temp + 'ºc';
        location[0].innerHTML = data.name;

        switch (data.weather[0].main) {
          case 'thunderstorm':
          case 'Rain':
            setWeatherIcon(IconRain);
            rainFront.hidden = false;
            rainBack.hidden = false;
            break;
          case 'Drizzle':
            rainFront.hidden = true;
            rainBack.hidden = true;
            setWeatherIcon(IconDrizzle);
            break;
          case 'Snow':
            rainFront.hidden = true;
            rainBack.hidden = true;
            setWeatherIcon(IconSnow);
            break;
          case 'Clouds':
            rainFront.hidden = true;
            rainBack.hidden = true;
            setWeatherIcon(IconCloud);
            break;
          case 'Clear':
            rainFront.hidden = true;
            rainBack.hidden = true;
            setWeatherIcon(IconClear);
            break;
          default:
            rainFront.hidden = true;
            rainBack.hidden = true;
            setWeatherIcon(IconWind);
            break;
        }
        
        console.log(data)
      }).catch( () => { 
        return 0 
      })

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