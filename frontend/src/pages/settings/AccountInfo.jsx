import { Mail, Phone, MapPin, User, Calendar } from "lucide-react";

export default function AccountInfo() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">

      {/* HEADER */}
      <div className="bg-white px-5 py-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Account Info
        </h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:px-6 space-y-6 pb-10">

        {/* ================= ANDROID STYLE ID CARD ================= */}
        <div className="bg-white md:rounded-3xl md:shadow-md overflow-hidden">

          {/* Banner */}
          <div className="bg-green-600 h-20 relative">
            <div className="absolute -bottom-10 left-5">
              <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden md:rounded-2xl shadow-md">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pt-14 px-5 pb-6">

            <h2 className="text-lg font-semibold text-gray-800">
              Rasyid Ridho
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Divisi Dokumentasi
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-4 text-sm text-gray-700">
              <InfoBlock label="Hostel ID" value="KAV-2026-0045" />
              <InfoBlock label="Room No" value="B-203" />
              <InfoBlock label="Hostel" value="Kaveri Boys Hostel" />
              <InfoBlock label="Valid Till" value="Dec 2026" />
            </div>

          </div>
        </div>

        {/* ================= ACCOUNT DETAILS ================= */}
        <div className="bg-white md:rounded-3xl md:shadow-md">

          <InfoRow icon={User} label="Full Name" value="Rasyid Ridho" />
          <InfoRow icon={Mail} label="Email" value="rasyid@example.com" />
          <InfoRow icon={Phone} label="Phone" value="+91 9876543210" />
          <InfoRow icon={MapPin} label="Address" value="Kaveri Hostel Block B" />
          <InfoRow icon={Calendar} label="Joined On" value="12 Jan 2026" />

        </div>

      </div>
    </div>
  );
}

/* SMALL GRID BLOCK */
function InfoBlock({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

/* INFO ROW */
function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition">
      <div className="bg-gray-100 p-2 md:rounded-xl">
        <Icon size={18} className="text-gray-600" />
      </div>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}