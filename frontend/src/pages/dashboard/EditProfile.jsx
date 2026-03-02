import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../config/axios..config";
import { User, Phone, MapPin, Home } from "lucide-react";
import UseAuth from "../../context/auth/UseAuth";

export default function EditProfile() {
  const { user } = UseAuth();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState("");

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    roomNo: "",
    college: "",
    course: "",
    year: "",
    address: "",
    emergencyContact: "",
  });

  // 🔁 Sync user
  useEffect(() => {
    if (user) {
      setForm({
        fullname: user.fullname || "",
        phone: user.phone || "",
        roomNo: user.roomNo || "",
        college: user.college || "",
        course: user.course || "",
        year: user.year || "",
        address: user.address || "",
        emergencyContact: user.emergencyContact || "",
      });

      setImagePreview(user.avatar || "");
    }
  }, [user]);

  // 🧠 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🖼️ Upload avatar (separate API)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Max 2MB allowed");
      return;
    }

    // preview
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);

    try {
      setImageLoading(true);

      const formData = new FormData();
      formData.append("avatar", file);

      const res = await axiosInstance.patch(
        "/api/v1/user/update/avatar",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data?.avatar) {
        setImagePreview(res.data.avatar);
      }

    } catch (err) {
      console.error(err.response || err);
      alert("Image upload failed ❌");
    } finally {
      setImageLoading(false);
    }
  };

  // 🚀 Submit profile (only allowed fields)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        fullname: form.fullname,
        phone: form.phone,
        roomNo: form.roomNo,
        college: form.college,
        course: form.course,
        year: form.year,
        address: form.address,
        emergencyContact: form.emergencyContact,
      };

      await axiosInstance.patch("/api/v1/user/update", payload);

      alert("Profile updated ✅");

    } catch (err) {
      console.error(err.response.data || err);
      alert("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <h1 className="text-base font-semibold">Edit Profile</h1>
      </div>

      <div className="md:max-w-3xl md:mx-auto md:p-6 space-y-6">

        {/* PROFILE IMAGE */}
        <div className="bg-white border border-gray-200 p-5 md:rounded-2xl">
          <h2 className="text-sm font-semibold mb-4">Profile Picture</h2>

          <div className="flex flex-col md:flex-row items-center gap-5">

            {/* Avatar */}
            <div
              onClick={() => fileInputRef.current.click()}
              className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-xl font-semibold cursor-pointer relative"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                form.fullname?.[0]?.toUpperCase() || "U"
              )}

              {imageLoading && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs">
                  Uploading...
                </div>
              )}
            </div>

            {/* Hidden input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <p className="text-xs text-gray-500">
              Tap image to change profile picture
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 p-5 space-y-4 md:rounded-2xl"
        >
          <FormInput icon={User} label="Full Name" name="fullname" value={form.fullname} onChange={handleChange} />
          <FormInput icon={Phone} label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <FormInput icon={Home} label="Room No" name="roomNo" value={form.roomNo} onChange={handleChange} />
          <FormInput icon={User} label="College" name="college" value={form.college} onChange={handleChange} />
          <FormInput icon={User} label="Course" name="course" value={form.course} onChange={handleChange} />
          <FormInput icon={User} label="Year" name="year" value={form.year} onChange={handleChange} />
          <FormInput icon={MapPin} label="Address" name="address" value={form.address} onChange={handleChange} />
          <FormInput icon={Phone} label="Emergency Contact" name="emergencyContact" value={form.emergencyContact} onChange={handleChange} />

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

/* 🔁 Input */
function FormInput({ icon: Icon, label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">{label}</label>
      <div className="flex items-center gap-2 border border-gray-200 px-3 py-2">
        <Icon size={16} className="text-gray-400" />
        <input
          type="text"
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full text-sm outline-none bg-transparent"
        />
      </div>
    </div>
  );
}