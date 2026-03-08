import { Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../context/auth/UseAuth";

export default function PremiumNavbar() {
  const { user } = UseAuth();

  return (
    <nav className="w-full  lg:px-8 flex items-center justify-between border-gray-200">
      {/* BRAND */}

      <div className="flex items-center gap-3">
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

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-2">
        {/* NOT LOGGED IN */}

        {!user && (
          <div className="flex items-center gap-2">
            <NavLink
              to="/auth/login"
              className="text-sm px-3 py-1.5 text-gray-700 hover:text-indigo-600"
            >
              Login
            </NavLink>

            <NavLink
              to="/auth/register"
              className="text-sm px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
          </div>
        )}

        {/* LOGGED IN */}

        {user && (
          <>
            <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition hover:scale-110">
              <Bell size={20} />

              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <NavLink
              to="/profile"
              className="p-2 text-gray-600 hover:text-indigo-600 transition hover:scale-110"
            >
              <User size={20} />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
