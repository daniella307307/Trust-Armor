import React from 'react';

const How = () => {
  return (
    <section id="How_it_works" className="text-center p-10 bg-dark text-white">
      {/* Wrapping the content in a container with limited width */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-black font-bold">How It Works!</h1>
        <p className="mt-4 text-gray-500 text-lg">
           TrustArmor is the automatic fraudulent link and Image Source Detection Browser Extension. It is a comprehensive security tool that goes beyond scanning links to also verify the authenticity of images received online. By leveraging advanced algorithms and techniques, this extension aims to automatically detect potentially fraudulent links and verify the sources of images, enhancing user awareness and safeguarding against various online threats.
        </p>
      </div>
    </section>
  );
};

export default How;
