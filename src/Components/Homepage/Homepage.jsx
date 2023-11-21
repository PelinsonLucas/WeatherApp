import {React, useRef, useState, useEffect, useCallback} from 'react'
import './Homepage.css'
import Home from './Home/Home.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Particles from "react-tsparticles"
import { loadFirePreset } from "tsparticles-preset-fire"

export const Homepage = () => {

  const options = {
    preset: "fire",
    fullscreen: true,
    fpsLimit: 60,
    background: {
        image: "radial-gradient(rgb(50, 20, 10), rgb(0, 0, 0))",
    },
  };

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFirePreset(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(); // Use useRef to persist observer across renders

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.remove('hide');
          entry.target.classList.add('show');
          setIsIntersecting(true);
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.add('hide');
          setIsIntersecting(false);
        }
      });
    });

    const divs = document.querySelectorAll('.animated');
    divs.forEach((div) => {
      observer.current.observe(div);
    });

    // Clean up function to stop observing when component unmounts
    return () => {
      if (observer.current) {
        divs.forEach((div) => {
          observer.current.unobserve(div);
        });
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (

    <div className='homepage-container'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
      <div className='homepage-container'>
        <Home/>
        <Portfolio/>
      </div>
    </div>
  )
}

export default Homepage