import {React, useRef, useState, useEffect} from 'react'
import './Homepage.css'
import Header from '../../Header/Header.jsx'
import Home from './Home/Home.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'


export const Homepage = () => {

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
    <div className='homepage-background'>
        <div className='homepage-container'>
         <Home/>
         <Portfolio/>
        </div>
    </div>
  )
}

export default Homepage