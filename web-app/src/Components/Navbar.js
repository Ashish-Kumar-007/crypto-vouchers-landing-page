import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            type="search"
            className="bg-white w-96 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-none border border-gray-400"
            placeholder="Search.."
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
