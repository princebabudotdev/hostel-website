import React from "react";
import { Bell, Search, Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white border-b">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Mobile Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Page Title */}
        <h1 className="text-lg font-semibold text-gray-800">
          Admin Dashboard
        </h1>

      </div>

      {/* Center Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium">Prince Babu</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;