import { useState } from "react";
import { User, Mail, Phone, Lock } from "lucide-react";
import { Link , NavLink } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful");
      console.log(formData);
    }, 2000);
  };

  const handleGoogleRegister = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      alert("Google Registration Successful");
    }, 2000);
  };

  return (
    <div className="min-h-screen md:bg-[#f5f5f5] flex items-center justify-center">

      <div className="w-full max-w-md bg-white md:shadow-sm p-6">

        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-black">
            Kaveri Living
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create Your Student Account
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">

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
              className="w-full border-b border-gray-300 focus:border-black pl-7 py-2 text-sm focus:outline-none"
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
              required
              placeholder="Email Address"
              className="w-full border-b border-gray-300 focus:border-black pl-7 py-2 text-sm focus:outline-none"
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
              className="w-full border-b border-gray-300 focus:border-black pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-0 top-3 text-gray-400" size={18} />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:border-black pl-7 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white text-sm font-medium"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 rounded-full border-white border-t-transparent animate-spin mx-auto"></div>
            ) : (
              "Register"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Register */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full py-3 border border-gray-300 text-sm font-medium flex items-center justify-center gap-2"
          >
            {googleLoading ? (
              <div className="w-5 h-5  rounded-full border-2 border-black border-t-transparent animate-spin"></div>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.69 1.22 9.19 3.6l6.86-6.86C35.91 2.18 30.35 0 24 0 14.63 0 6.63 5.48 2.64 13.44l8 6.21C12.67 13.34 17.83 9.5 24 9.5z"/>
                  <path fill="#34A853" d="M46.5 24c0-1.64-.15-3.21-.43-4.71H24v9h12.68c-.55 2.96-2.22 5.47-4.73 7.15l7.26 5.64C43.96 36.73 46.5 30.88 46.5 24z"/>
                  <path fill="#4A90E2" d="M10.64 28.65c-1.09-3.22-1.09-6.73 0-9.95l-8-6.21C.86 16.13 0 19.96 0 24s.86 7.87 2.64 11.51l8-6.86z"/>
                  <path fill="#FBBC05" d="M24 48c6.35 0 11.91-2.09 15.88-5.68l-7.26-5.64c-2.02 1.35-4.6 2.14-8.62 2.14-6.17 0-11.33-3.84-13.36-9.15l-8 6.21C6.63 42.52 14.63 48 24 48z"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-600 pt-4">
            Already have an account?{" "}
            <NavLink to="/auth/login" className="text-black">
              Login
            </NavLink>
          </div>

        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          © 2026 Kaveri Living
        </div>

      </div>
    </div>
  );
}