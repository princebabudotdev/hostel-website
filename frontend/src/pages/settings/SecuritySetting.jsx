import { useState } from "react";
import {
  Shield,
  Smartphone,
  Key,
  Eye,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function SecuritySetting() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6f8]">

      {/* HEADER */}
      <div className="bg-white px-5 py-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Security Settings
        </h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:px-6 space-y-6 py-6">

        {/* ACCOUNT SECURITY */}
        <div className="bg-white md:rounded-3xl md:shadow-md py-4">

          <SectionTitle title="Account Protection" />

          <ToggleItem
            icon={Shield}
            label="Two-Factor Authentication"
            enabled={twoFactor}
            setEnabled={setTwoFactor}
          />

          <ToggleItem
            icon={Smartphone}
            label="Login Alerts"
            enabled={loginAlerts}
            setEnabled={setLoginAlerts}
          />

          <ToggleItem
            icon={Eye}
            label="Private Profile"
            enabled={privateProfile}
            setEnabled={setPrivateProfile}
          />

        </div>

        {/* PASSWORD & SESSIONS */}
        <div className="bg-white md:rounded-3xl md:shadow-md py-4">

          <SectionTitle title="Access & Sessions" />

          <NavItem icon={Key} label="Reset All Sessions" />

          <NavItem icon={LogOut} label="Logout from All Devices" danger />

        </div>

      </div>
    </div>
  );
}

/* SECTION TITLE */
function SectionTitle({ title }) {
  return (
    <h3 className="px-5 pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {title}
    </h3>
  );
}

/* TOGGLE ITEM */
function ToggleItem({ icon: Icon, label, enabled, setEnabled }) {
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-xl">
          <Icon size={18} className="text-gray-600" />
        </div>
        <span className="text-sm font-medium text-gray-800">
          {label}
        </span>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-14 h-7 transition-all duration-300 ${
          enabled ? "bg-black" : "bg-gray-300"
        } rounded-full`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${
            enabled ? "right-1" : "left-1"
          }`}
        ></span>
      </button>
    </div>
  );
}

/* NAV ITEM */
function NavItem({ icon: Icon, label, danger }) {
  return (
    <button
      className={`w-full flex items-center justify-between px-5 py-4 text-sm font-medium ${
        danger ? "text-red-600" : "text-gray-800"
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon size={18} />
        {label}
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  );
}