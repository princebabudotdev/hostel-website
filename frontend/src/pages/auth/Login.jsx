import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful");
    }, 2000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Google Login Successful");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-6">

      <div className="w-full max-w-md p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">

        {/* Brand */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            Kaveri Living
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Premium Hostel Experience
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-0 top-2 text-gray-500" size={18} />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white pl-7 pb-2 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-0 top-2 text-gray-500" size={18} />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white pl-7 pb-2 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full border border-white/20 text-white tracking-wide transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-gray-500">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-full border border-white/20 text-white tracking-wide transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.69 1.22 9.19 3.6l6.86-6.86C35.91 2.18 30.35 0 24 0 14.63 0 6.63 5.48 2.64 13.44l8 6.21C12.67 13.34 17.83 9.5 24 9.5z"/>
                  <path fill="#34A853" d="M46.5 24c0-1.64-.15-3.21-.43-4.71H24v9h12.68c-.55 2.96-2.22 5.47-4.73 7.15l7.26 5.64C43.96 36.73 46.5 30.88 46.5 24z"/>
                  <path fill="#4A90E2" d="M10.64 28.65c-1.09-3.22-1.09-6.73 0-9.95l-8-6.21C.86 16.13 0 19.96 0 24s.86 7.87 2.64 11.51l8-6.86z"/>
                  <path fill="#FBBC05" d="M24 48c6.35 0 11.91-2.09 15.88-5.68l-7.26-5.64c-2.02 1.35-4.6 2.14-8.62 2.14-6.17 0-11.33-3.84-13.36-9.15l-8 6.21C6.63 42.52 14.63 48 24 48z"/>
                </svg>
                Sign in with Google
              </>
            )}
          </button>

        </form>

        <div className="mt-8 text-center text-xs text-gray-500">
          © 2026 Kaveri Living. All rights reserved.
        </div>

      </div>
    </div>
  );
}