import React from 'react';
import Navbar from "./Navbar";
import Hero from './Hero';
import ImageCarousel from "./ImageCarousel";
import How from "./How";
import Footers from "./Footers"; 
import MainComponent from "./MainComponent";
import '../../src/App.css';


function MainEnglish() {
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

export default MainEnglish;
