import {
  Bell,
  Moon,
  Shield,
  Wifi,
  Lock,
  User,
  Key,
  HelpCircle,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifiAccess, setWifiAccess] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafc] to-[#eef2f7]">

      {/* HEADER */}
      <div className="sticky top-0 bg-white  px-4 py-4 z-20">
        <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:p-6 space-y-6 pb-10">

        {/* ACCOUNT */}
        <Section title="Account">
          <NavItem icon={User} label="Edit Profile" to="edit-profile" />
          <NavItem icon={User} label="Account Info" to="account-info" />
          <NavItem icon={Key} label="Change Password" to="change-password" />
          <NavItem icon={Shield} label="Security Settings" to="security-setting" />
        </Section>

        {/* PREFERENCES */}
        <Section title="Preferences">
          <Toggle icon={Bell} label="Notifications" enabled={notifications} setEnabled={setNotifications} />
          <Toggle icon={Moon} label="Dark Mode" enabled={darkMode} setEnabled={setDarkMode} />
          <Toggle icon={Wifi} label="WiFi Access" enabled={wifiAccess} setEnabled={setWifiAccess} />
          <Toggle icon={Lock} label="Privacy Mode" enabled={privacyMode} setEnabled={setPrivacyMode} />
        </Section>

        {/* SUPPORT */}
        <Section title="Support">
          <NavItem icon={HelpCircle} label="Help & Support" to="help-support" />
        </Section>

        {/* LOGOUT */}
        <ActionCard>
          <button className="w-full flex items-center gap-3 px-4 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <LogOut size={18} />
            Logout
          </button>
        </ActionCard>

        {/* DELETE ACCOUNT */}
        <ActionCard>
          <NavItem
            icon={Trash2}
            label="Delete Account"
            to="delete-account"
            danger
          />
        </ActionCard>

      </div>
    </div>
  );
}

/* SECTION */
function Section({ title, children }) {
  return (
    <div className="bg-white md:rounded-2xl rounded-none shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 px-4 pt-4 pb-2 uppercase tracking-wider">
        {title}
      </h3>
      <div className="divide-y divide-gray-100">
        {children}
      </div>
    </div>
  );
}

/* NAV ITEM (NOW USING NAVLINK) */
function NavItem({ icon: Icon, label, to, danger }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-full flex items-center justify-between px-4 py-4 text-sm font-medium transition
        ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"}
        ${isActive ? "bg-gray-100" : ""}`
      }
    >
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-xl">
          <Icon size={18} />
        </div>
        {label}
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </NavLink>
  );
}

/* TOGGLE */
function Toggle({ icon: Icon, label, enabled, setEnabled }) {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-xl">
          <Icon size={18} className="text-gray-600" />
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center px-1 rounded-full transition duration-300 ${
          enabled ? "bg-black justify-end" : "bg-gray-300 justify-start"
        }`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
      </button>
    </div>
  );
}

/* ACTION WRAPPER */
function ActionCard({ children }) {
  return (
    <div className="bg-white md:rounded-2xl rounded-none shadow-sm ">
      {children}
    </div>
  );
}