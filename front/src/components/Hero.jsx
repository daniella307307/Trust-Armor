import React from 'react';

const Hero = () => {
  return (
    <section id="Introduction" className="text-center p-10 bg-dark text-white">
      {/* Wrapping the content in a container with limited width */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-black font-bold">
          SAFEGUARD YOUR ONLINE EXPERIENCE WITH OUR TRUSTARMOR AI!
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          TrustArmor AI enhances your online safety by detecting fraudulent links and verifying image sources. Stay protected from scams and misinformation while browsing, ensuring a secure and trustworthy internet experience.
        </p>
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
        <button className="bg-purple-600 rounded text-white flex items-center justify-center px-6 py-2 md:py-3 w-full md:w-48 transition duration-300 ease-in-out hover:bg-purple-700">
        Use It Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
