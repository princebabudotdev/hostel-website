import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  ShieldCheck,
  CreditCard,
  Bell,
  Moon,
  Wifi,
  Lock,
  Edit,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import UseAuth from "../../context/auth/UseAuth";
import { NavLink } from "react-router-dom";

export default function UserProfile() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifiAccess, setWifiAccess] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  const { user , logout } = UseAuth();

  return (
    <div className="bg-[#f4f6f9] min-h-screen pb-24 md:pb-6">
      {/* HEADER */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md px-4 py-3 z-20">
        <h1 className="text-base font-semibold">My Profile</h1>
      </div>

      <div className="max-w-3xl mx-auto py-6 space-y-6">
        {/* PROFILE CARD */}
        <div className="bg-white shadow-sm p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold shadow-md overflow-hidden">
              {user?.avatar ? (
                <img
                  className="h-full w-full object-cover"
                  src={user.avatar}
                  alt="avatar"
                />
              ) : (
                user?.fullname
                  ?.split(" ")
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase() || "U"
              )}
            </div>

            {/* Basic Info */}
            <div>
              <h2 className="font-semibold">{user?.fullname || "N/A"}</h2>
              <p className="text-xs text-gray-500">
                ID: {user?.userId || "N/A"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.hostel || "Kaveri living hostel"}
              </p>
            </div>
          </div>

          <NavLink
            to={`/settings/edit-profile`}
            className="flex items-center gap-1 text-sm text-black hover:underline"
          >
            <Edit size={16} />
            Edit
          </NavLink>
        </div>

        {/* PERSONAL INFO */}
        <Section title="Personal Information">
          <InfoItem icon={Mail} label="Email" value={user?.email} />
          <InfoItem icon={Phone} label="Phone" value={user?.phone} />
          <InfoItem icon={MapPin} label="Address" value={user?.address} />
          <InfoItem
            icon={Phone}
            label="Emergency Contact"
            value={user?.emergencyContact}
          />
        </Section>

        {/* ACADEMIC / HOSTEL INFO */}
        <Section title="Academic & Hostel Details">
          <InfoItem icon={Home} label="Room No" value={user?.roomNo} />
          <InfoItem icon={User} label="College" value={user?.college} />
          <InfoItem icon={User} label="Course" value={user?.course} />
          <InfoItem icon={User} label="Year" value={user?.year} />
        </Section>

        {/* TIFFIN / MESS STATUS */}
        <Section title="Mess / Tiffin">
          <InfoItem
            icon={CreditCard}
            label="Tiffin Status"
            value={
              user?.tiffinActive ? (
                <span className="text-green-600 font-semibold">Active</span>
              ) : (
                <span className="text-red-500 font-semibold">Inactive</span>
              )
            }
          />
        </Section>

        {/* SETTINGS */}
        <Section title="Preferences">
          <Toggle
            icon={Bell}
            label="Notifications"
            enabled={notifications}
            setEnabled={setNotifications}
          />
          <Toggle
            icon={Moon}
            label="Dark Mode"
            enabled={darkMode}
            setEnabled={setDarkMode}
          />
          <Toggle
            icon={Wifi}
            label="WiFi Access"
            enabled={wifiAccess}
            setEnabled={setWifiAccess}
          />
          <Toggle
            icon={Lock}
            label="Privacy Mode"
            enabled={privacyMode}
            setEnabled={setPrivacyMode}
          />
        </Section>

        {/* ACTIONS */}
        <div className="bg-white shadow-sm p-4 space-y-3">
          <ActionButton icon={Settings} label="Account Settings" />
          <ActionButton fnc={logout} icon={LogOut} label="Logout" danger />
        </div>
      </div>
    </div>
  );
}

/* SECTION */
function Section({ title, children }) {
  return (
    <div className="bg-white shadow-sm p-5 space-y-4">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      {children}
    </div>
  );
}

/* INFO ITEM */
function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-gray-400" />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium">{value || "N/A"}</p>
      </div>
    </div>
  );
}

/* TOGGLE */
function Toggle({ icon: Icon, label, enabled, setEnabled }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-gray-400" />
        <span className="text-sm">{label}</span>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-11 h-6 rounded-full flex items-center px-1 transition ${
          enabled ? "bg-black justify-end" : "bg-gray-300 justify-start"
        }`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow"></div>
      </button>
    </div>
  );
}

/* ACTION BUTTON */
function ActionButton({ icon: Icon, label, danger , fnc }) {
  return (
    <button
    onClick={fnc}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
