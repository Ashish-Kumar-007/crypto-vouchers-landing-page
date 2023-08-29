import React from "react";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi"; // Import other icons as needed

const navItems = [
  { name: "Previous Giveaway", route: "/services" },
  { name: "Latest Giveaway", route: "/settings" },
  { name: "Create an Giveaway", route: "/contact" },
];

const Sidebar = () => {
  return (
    <div
      className={`bg-gradient-to-l from-gray-100 to-gray-200  w-full min-h-screen px-8 py-0.5 font-nunito shadow-md`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-6 px-4 my-6">
        <div className="flex px-2 md:px-3 items-center">
          <b className="text-2xl">CRYPTO</b>
          <p className="text-2xl">VOUCHERS</p>
        </div>
      </div>

      <div className="flex items-center text mt-24 py-3 px-5 ">
        <span className="mr-2">
          <BiSolidDashboard size={30} />
        </span>
        <span className="text-2xl font-bold">Dashboard</span>
      </div>

      {/* Navigation Buttons */}
      <nav className="space-y-3 mt-5">
        {navItems.map((item, index) => (
          <Link key={index} href={item.route}>
            <div
              className={`relative hover:bg-gray-600 text-gray-500 hover:text-white font-semibold transition-all text-lg py-2 md:py-3 pl-14 mb-2 rounded-lg`}
            >
              <div className="flex items-center">
                <span>{item.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
