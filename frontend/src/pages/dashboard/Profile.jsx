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

export default function StudentProfile() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifiAccess, setWifiAccess] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  const student = {
    name: "Rahul Sharma",
    studentId: "KLH20260017",
    room: "A-203",
    block: "Block A",
    hostel: "Kaveri Living Hostel",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    address: "Bangalore, Karnataka, India",
    emergencyContact: "Anil Sharma (+91 9123456789)",
    feeStatus: "Paid",
    joinDate: "12 July 2025",
    messPlan: "Veg Monthly",
  };

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
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold shadow-md">
              R
            </div>

            <div>
              <h2 className="font-semibold">{student.name}</h2>
              <p className="text-xs text-gray-500">ID: {student.studentId}</p>
              <p className="text-xs text-gray-500">{student.hostel}</p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm text-black hover:underline">
            <Edit size={16} />
            Edit
          </button>
        </div>

        {/* PERSONAL INFO */}
        <Section title="Personal Information">
          <InfoItem icon={Mail} label="Email" value={student.email} />
          <InfoItem icon={Phone} label="Phone" value={student.phone} />
          <InfoItem icon={MapPin} label="Address" value={student.address} />
        </Section>

        {/* HOSTEL INFO */}
        <Section title="Hostel Details">
          <InfoItem icon={Home} label="Room" value={student.room} />
          <InfoItem icon={CreditCard} label="Fee Status" value={student.feeStatus} />
          <InfoItem icon={ShieldCheck} label="Mess Plan" value={student.messPlan} />
        </Section>

        {/* SETTINGS */}
        <Section title="Preferences">
          <Toggle icon={Bell} label="Notifications" enabled={notifications} setEnabled={setNotifications} />
          <Toggle icon={Moon} label="Dark Mode" enabled={darkMode} setEnabled={setDarkMode} />
          <Toggle icon={Wifi} label="WiFi Access" enabled={wifiAccess} setEnabled={setWifiAccess} />
          <Toggle icon={Lock} label="Privacy Mode" enabled={privacyMode} setEnabled={setPrivacyMode} />
        </Section>

        {/* ACTION BUTTONS */}
        <div className="bg-white shadow-sm p-4 space-y-3">
          <ActionButton icon={Settings} label="Account Settings" />
          <ActionButton icon={LogOut} label="Logout" danger />
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
        <p className="text-sm font-medium">{value}</p>
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
function ActionButton({ icon: Icon, label, danger }) {
  return (
    <button
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