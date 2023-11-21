import "./Rain.css";
import React from 'react'

export const Rain = () => {

  return (
    <>
      <div className="rain" onLoad={makeItRain()}>
        <div className="front-row"></div>
        <div className="back-row"></div>
      </div>
    </>
  )
}

const makeItRain = () => {
    
  var rain = document.querySelector('.rain');
  if(rain === null){
    rain = document.createElement('div');
    rain.classList.add('rain');
  }

  var rainFrontRow = rain.querySelector('.front-row');
  var rainBackRow = rain.querySelector('.back-row');

  if(rainFrontRow === null){
    rainFrontRow = document.createElement('div');
    rainFrontRow.classList.add('front-row');
    rain.appendChild(rainFrontRow);
  } 
  if(rainBackRow === null){
    rainBackRow = document.createElement('div');
    rainBackRow.classList.add('back-row');
    rain.appendChild(rainBackRow);
  }

  rainFrontRow.innerHTML = '';
  rainBackRow.innerHTML = '';

  var increment = 0;
  var drops = '';
  var backDrops = '';

  while (increment < 100) {
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
  
      //random number between 5 and 2
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;

      drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
      backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }
    rainFrontRow.innerHTML = drops;
    rainBackRow.innerHTML = backDrops;
  };

export default Rain