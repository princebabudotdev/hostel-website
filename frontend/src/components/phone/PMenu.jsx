import { Home, Utensils, MessageSquare, User, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileMenuBar() {
  const menus = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Tiffin", icon: Utensils, path: "/tiffin" },
    { name: "Query", icon: MessageSquare, path: "/query" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md lg:hidden z-50">
      <div className="flex items-center justify-between px-2 py-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-2 rounded-lg ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={22}
                    className={isActive ? "text-black" : "text-gray-500"}
                  />
                  <span
                    className={`mt-1 text-[11px] ${
                      isActive ? "text-black font-medium" : "text-gray-500"
                    }`}
                  >
                    {menu.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}

      </div>
    </div>
  );
}