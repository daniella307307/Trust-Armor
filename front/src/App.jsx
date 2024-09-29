import React from 'react';
import MainEnglish from './components/MainEnglish';
import MainKinyarwanda from './components/MainKinyarwanda';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<MainEnglish />} />
      <Route path="/MainKinyarwanda" element={<MainKinyarwanda />} />
    </Routes>
  </Router>
  );
}

export default App;
