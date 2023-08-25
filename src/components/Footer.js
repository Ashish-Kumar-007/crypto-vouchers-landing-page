import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          <p>&copy; 2023 Your Crypto Voucher Platform</p>
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
        <div className="flex space-x-4">
          <a href="https://twitter.com/yourplatform" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out" />
          </a>
          <a href="https://facebook.com/yourplatform" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out" />
          </a>
          <a href="https://instagram.com/yourplatform" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
