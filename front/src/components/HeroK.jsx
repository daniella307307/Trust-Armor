import React from 'react';

const HeroK = () => {
  return (
    <section id="Intangiriro" className="text-center p-10 bg-dark text-white">
      {/* Wrapping the content in a container with limited width */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-black font-bold">
          SHINGANISHA URUGENDO RWAWE KURI INTERINETI UKORESHEJE AI YACU YITWA TRUSTARMOR!
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          AI yitwa TrustArmor igufasha gutekana mu gihe uri kuri interineti kuko imenye amafoto na link bitari ibya nyabo cyangwa 
          byakugirira nabi. Hehe n'amalinki yo kugira nabi cyangwa amakuru atari yo mu gihe uri kuri interineti kugira ngo tugire umutekano mu gihe turi kuri interineti.
        </p>
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
        <button className="bg-purple-600 rounded text-white flex items-center justify-center px-6 py-2 md:py-3 w-full md:w-48 transition duration-300 ease-in-out hover:bg-purple-700">
          Yikoreshe nonaha!
        </button>
      </div>
      
      </div>
    </section>
  );
};

export default HeroK;
