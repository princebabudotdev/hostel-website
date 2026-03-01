import { useState } from "react";
import { User, Mail, Phone, MapPin, Home, CreditCard } from "lucide-react";

export default function EditProfile() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [form, setForm] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    address: "Bangalore, Karnataka",
    room: "A-203",
    block: "Block A",
    messPlan: "Veg Monthly",
    feeStatus: "Paid",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fakeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          alert("Profile Updated Successfully ✅");
        }, 500);
      }
    }, 200);
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">Edit Profile</h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:p-6 space-y-6">

        {/* PROFILE PICTURE SECTION */}
        <div className="bg-white border border-gray-200 p-5 md:rounded-2xl rounded-none">
          <h2 className="text-sm font-semibold mb-4">Profile Picture</h2>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-xl font-semibold">
              R
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="file"
                className="text-sm"
              />

              {loading && (
                <div className="w-full bg-gray-200 h-2 mt-2">
                  <div
                    className="bg-indigo-600 h-2 transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={fakeSubmit}
          className="bg-white border border-gray-200 p-5 space-y-4 md:rounded-2xl rounded-none"
        >

          <FormInput icon={User} label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <FormInput icon={Mail} label="Email" name="email" value={form.email} onChange={handleChange} />
          <FormInput icon={Phone} label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <FormInput icon={MapPin} label="Address" name="address" value={form.address} onChange={handleChange} />
          <FormInput icon={Home} label="Room" name="room" value={form.room} onChange={handleChange} />
          <FormInput icon={Home} label="Block" name="block" value={form.block} onChange={handleChange} />
          <FormInput icon={CreditCard} label="Mess Plan" name="messPlan" value={form.messPlan} onChange={handleChange} />
          <FormInput icon={CreditCard} label="Fee Status" name="feeStatus" value={form.feeStatus} onChange={handleChange} />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 mt-4 text-sm font-medium hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>

        </form>

      </div>
    </div>
  );
}

/* REUSABLE INPUT */
function FormInput({ icon: Icon, label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">{label}</label>
      <div className="flex items-center gap-2 border border-gray-200 px-3 py-2">
        <Icon size={16} className="text-gray-400" />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full text-sm outline-none bg-transparent"
        />
      </div>
    </div>
  );
}