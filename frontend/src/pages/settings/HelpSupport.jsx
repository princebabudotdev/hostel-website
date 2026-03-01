import { HelpCircle, MessageSquare, Mail, Info, ChevronRight } from "lucide-react";

export default function HelpSupport() {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">

      {/* HEADER */}
      <div className="bg-white px-5 py-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Help & Support
        </h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:px-6 space-y-6 py-6">

        {/* FAQ SECTION */}
        <div className="bg-white md:rounded-3xl md:shadow-md py-4">

          <SectionTitle title="Frequently Asked Questions" />

          <NavItem icon={HelpCircle} label="How to change password?" />
          <NavItem icon={HelpCircle} label="How to update profile?" />
          <NavItem icon={HelpCircle} label="How hostel WiFi works?" />

        </div>

        {/* CONTACT SECTION */}
        <div className="bg-white md:rounded-3xl md:shadow-md py-4">

          <SectionTitle title="Contact Support" />

          <NavItem icon={MessageSquare} label="Chat with Support" />
          <NavItem icon={Mail} label="Email Support" />

        </div>

        {/* APP INFO */}
        <div className="bg-white md:rounded-3xl md:shadow-md py-4">

          <SectionTitle title="Application Info" />

          <InfoRow label="App Version" value="1.0.0" />
          <InfoRow label="Last Updated" value="March 2026" />

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

/* NAV ITEM */
function NavItem({ icon: Icon, label }) {
  return (
    <button className="w-full flex items-center justify-between px-5 py-5 text-sm font-medium text-gray-800">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-xl">
          <Icon size={18} className="text-gray-600" />
        </div>
        {label}
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  );
}

/* INFO ROW */
function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center px-5 py-5 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}