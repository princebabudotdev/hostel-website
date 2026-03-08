import { useState } from "react";
import { User, Phone, MessageSquare, Mail, School } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import indexApi from "../../apis/index.api";
import { handleError, handleResponse } from "../../utils/apiHandler";

export default function AdmissionQuery() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    collegeName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await indexApi.createQuery(formData);
      handleResponse(res, showToast);

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        collegeName: "",
        message: "",
      });
    } catch (error) {
      handleError(error, showToast);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f3f4f6] flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-sm p-6">
        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-indigo-600">
            Kaveri Living
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Student Hostel Admission Query
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-0 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:border-indigo-500 pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-0 top-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border-b border-gray-300 focus:border-indigo-500 pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-0 top-3 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border-b border-gray-300 focus:border-indigo-500 pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* College Name */}
          <div className="relative">
            <School className="absolute left-0 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="College Name"
              className="w-full border-b border-gray-300 focus:border-indigo-500 pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              className="absolute left-0 top-3 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your query..."
              rows={3}
              className="w-full border-b border-gray-300 focus:border-indigo-500 pl-7 py-2 text-sm focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white text-sm font-medium transition"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 rounded-full border-white border-t-transparent animate-spin mx-auto"></div>
            ) : (
              "Send Query"
            )}
          </button>
        </form>

        {/* Hostel Info */}
        <div className="mt-8 border-t pt-5 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">
              Kaveri Living Hostel
            </span>{" "}
            provides safe, comfortable and affordable accommodation for students
            with modern facilities, peaceful environment, and easy access to
            nearby colleges.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-400">
          © 2026 Kaveri Living Hostel
        </div>
      </div>
    </div>
  );
}
