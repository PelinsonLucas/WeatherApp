import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header className={`header ${isMenuVisible ? 'visible' : ''}`}>
        <nav>
          <ul className="nav">
            <li className="nav-item gray"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item light-gray"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item gray"><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li className="nav-item light-gray"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav> 
        <a className={`${isMenuVisible ?  'menu-button active' : 'menu-button'}`} onClick={toggleMenu}>
          <span />
        </a>
      </header>
      <div className={`spacer ${isMenuVisible ? 'visible' : ''}`}> </div>
    </>
  );
};

export default Header;