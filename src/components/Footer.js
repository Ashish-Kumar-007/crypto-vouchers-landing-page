import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          <p>&copy; 2023 CryptoVouchers</p>
        </div>
        <div className="flex space-x-6">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
