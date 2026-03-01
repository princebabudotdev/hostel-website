import { Bell, User } from "lucide-react";
import { useState } from "react";

export default function PremiumNavbar() {
  const [active, setActive] = useState("Dashboard");

  const links = ["Dashboard", "Rooms", "Tiffin", "Complaints", "Payments"];

  return (
    <nav className="w-full px-2 lg:px-8  flex items-center justify-between md:px-0 border-gray-200">

      {/* 📱 Mobile Brand Section (Only Mobile) */}
      <div className="flex items-center gap-3 lg:hidden">
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
          KL
        </div>

        <div>
          <h1 className="text-gray-900 font-semibold text-base leading-none">
            Kaveri Living
          </h1>
          <p className="text-xs text-gray-500 tracking-wide">
            Hostel Management
          </p>
        </div>
      </div>

      {/* 💻 Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-10">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className="relative group overflow-hidden"
          >
            <span
              className={`block text-sm font-medium transition-all duration-300
              ${active === link
                  ? "text-indigo-600"
                  : "text-gray-600 group-hover:text-indigo-600"
                }
              group-hover:-translate-y-6`}
            >
              {link}
            </span>

            <span className="absolute left-0 top-6 text-sm font-medium text-indigo-600 transition-all duration-300 group-hover:translate-y-[-24px]">
              {link}
            </span>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300
              ${active === link ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </button>
        ))}
      </div>

      {/* 🔔 Right Side Icons (Always Visible) */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}