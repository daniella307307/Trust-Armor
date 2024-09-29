import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footers = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="flex flex-col items-center space-y-4">
                {/* Title */}
                <div className="flex items-center text-white font-bold">

                <img src={logo} alt="TrustArmor Logo" className="h-8 w-8 mr-2" />TrustArmor
                </div>
                {/* Sections (now horizontal) */}
                <div className="mb-4">
                    <ul className="flex justify-center space-x-4"> {/* flex + horizontal space */}
                        <li><a href="#Intangiriro">Intangiriro</a></li>
                        <li><a href='#Uko_bikora'>Uko Bikora</a></li>
                        <li><a href='#Urugendo'>Urugendo</a></li>
                        <li><a href='#Gushyiraho'>Gushyiraho</a></li>
                    </ul>
                </div>
                
                {/* Social Media Icons */}
                <div className="mb-4">
                    <div className="flex justify-center space-x-4">
                
                    <a href="https://x.com/GiseleAkuzwe1" aria-label="Twitter">
                    <FaTwitter className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/migisha-akuzwe-gisele-40426a256/" aria-label="LinkedIn">
                    <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/firstttyyy.____/" aria-label="Instagram">
                    <FaInstagram className="text-2xl" />
                </a>
                    </div>
                </div>

                {/* Copyright */}
                <div>
                    <p>&copy; {new Date().getFullYear()} TrustArmor. Uburenganzira Bwose Buragenwe.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
