// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-900 py-20 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Generate Crypto Vouchers with Ease
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience secure and fast cryptocurrency voucher generation.
        </p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
