import React from 'react';
import Navbar from "./NavbarK";
import Hero from "./HeroK";
import ImageCarousel from "./ImageCarousel";
import How from "./HowK";
import Footers from "./FootersK"; 
import MainComponent from "./MainComponentK";
import '../../src/App.css';

function MainKinyarwanda() {
  return (
    
    <div className="app">
      <Navbar />
      <Hero />
      <How />
      <ImageCarousel />
      <MainComponent />
      <Footers /> 
    </div>
  );
}

export default MainKinyarwanda;
