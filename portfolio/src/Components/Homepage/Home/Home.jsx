import React from 'react';
import './Home.css'; // Assuming you have a corresponding CSS file

import profile from '../../Assets/profile.jpeg';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <h1 className="greeting animated">Hello, I'm Lucas Pelinson</h1>
      <p className="introduction animated">I'm a Software Developer. </p>
      <img src={profile} alt="Profile" className="profile-picture animated"/> {/* Replace with your image path */}
      {/* Add more elements as needed */}
    </div>
  );
};

export default Home;