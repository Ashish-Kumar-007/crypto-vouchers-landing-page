import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Side Navigation */}
      <aside className="w-[300px] bg-white">
        <nav>
          <Sidebar />
        </nav>
      </aside>

      <div className="w-full bg-white">
        {/* Top Navigation */}
        <nav className="">
          {/* Add your top navigation content here */}
          <Navbar />
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
