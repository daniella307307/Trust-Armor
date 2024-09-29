import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
const NavbarK = () => {
    const navigate = useNavigate();

  const handleEnglishClick = () => {
    navigate('/');
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <div className="flex items-center text-white font-bold">
        <img src={logo} alt="TrustArmor Logo" className="h-8 w-8 mr-2" />
        TrustArmor
      </div>
      <button onClick={handleEnglishClick} className="bg-purple-600 text-white px-4 py-2 rounded ml-auto">
        Koresha Icyongereza
      </button>
    </nav>
  );
};

export default NavbarK;
