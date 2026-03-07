import {
  Building,
  User,
  Key,
  Shield,
  Bed,
  Utensils,
  Bell,
  HelpCircle,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import MobileHeader from "../../components/Back";

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#f9fafc] to-[#eef2f7]">

      {/* HEADER */}
     <MobileHeader title={`Admin Settings`}/>

      <div className="md:max-w-3xl md:mx-auto md:p-6 space-y-6 pb-10">

        {/* ADMIN PROFILE */}
        <Section title="Admin Profile">
          <NavItem icon={User} label="Edit Admin Profile" to="/admin/settings/edit-profile" />
          <NavItem icon={Key} label="Change Password" to="/admin/settings/change-password" />
          <NavItem icon={Shield} label="Security Settings" to="/admin/settings/security" />
        </Section>

        {/* HOSTEL MANAGEMENT */}
        <Section title="Hostel Management">
          <NavItem icon={Building} label="Hostel Information" to="/admin/settings/hostel-info" />
          <NavItem icon={Building} label="Edit Hostel Info" to="/admin/settings/edit-hostel" />
          <NavItem icon={Bed} label="Room Configuration" to="/admin/settings/rooms" />
          <NavItem icon={Utensils} label="Mess / Tiffin Settings" to="/admin/settings/mess" />
        </Section>

        {/* SYSTEM */}
        <Section title="System Settings">
          <NavItem icon={Bell} label="Notification Settings" to="/admin/settings/notifications" />
        </Section>

        {/* SUPPORT */}
        <Section title="Support">
          <NavItem icon={HelpCircle} label="Help & Support" to="/admin/settings/help" />
        </Section>

        {/* LOGOUT */}
        <ActionCard>
          <button className="w-full flex items-center gap-3 px-4 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <LogOut size={18} />
            Logout
          </button>
        </ActionCard>

        {/* DELETE HOSTEL DATA */}
        <ActionCard>
          <NavItem
            icon={Trash2}
            label="Delete Hostel Data"
            to="/admin/settings/delete-hostel"
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

/* NAV ITEM */
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

/* ACTION WRAPPER */
function ActionCard({ children }) {
  return (
    <div className="bg-white md:rounded-2xl rounded-none shadow-sm">
      {children}
    </div>
  );
}