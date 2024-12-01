import React from 'react';
import './Hero.css'; 
import photo from '../../Assets/photo.png'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Grab Upto 50% Off On Selected Headphones</h1>
        <button className="hero-button">Buy Now</button>
      </div>
      <div className="hero-image">
        <img src={photo} alt="Headphones" />
      </div>
    </section>
  );
};

export default HeroSection;
