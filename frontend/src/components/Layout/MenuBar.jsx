import {
  LayoutDashboard,
  Bed,
  CreditCard,
  Receipt,
  UtensilsCrossed,
  Wrench,
  Megaphone,
  Package,
  Users,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function StudentSidebar() {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Room Details", icon: Bed, path: "/room" },
    { name: "Fees & Payments", icon: CreditCard, path: "/fees" },
    { name: "Payment History", icon: Receipt, path: "/payment-history" },
    { name: "Mess Menu", icon: UtensilsCrossed, path: "/mess-menu" },
    { name: "Maintenance", icon: Wrench, path: "/maintenance" },
    { name: "Announcements", icon: Megaphone, path: "/announcements" },
    { name: "Parcel / Courier", icon: Package, path: "/parcel" },
    { name: "Visitors Log", icon: Users, path: "/visitors" },
    { name: "Leave Request", icon: CalendarDays, path: "/leave" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 z-40 flex flex-col">
      
      {/* LOGO */}
      <div className="h-16 flex items-center gap-3 px-5 border-b border-gray-200 bg-white">

  {/* Logo Icon */}
  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
    KL
  </div>

  {/* Brand Text */}
  <div>
    <h1 className="text-gray-900 font-semibold text-base leading-none">
      Kaveri Living
    </h1>
    <p className="text-xs text-gray-500 tracking-wide">
      Hostel Management
    </p>
  </div>

</div>

      {/* MENU */}
      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3  transition-all duration-200 text-sm ${
                  isActive
                    ? "bg-gray-900  text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </div>

      {/* BOTTOM USER SECTION */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center text-gray-700 text-sm font-semibold">
            U
          </div>
          <div>
            <p className="text-gray-800 text-sm font-medium">
              Rahul Sharma
            </p>
            <p className="text-gray-500 text-xs">
              Room A-203
            </p>
          </div>
        </div>

        <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}