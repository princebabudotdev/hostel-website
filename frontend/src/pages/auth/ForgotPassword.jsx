import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-6 relative overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Forgot Password
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Enter your registered email to reset your password
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-0 top-2 text-gray-500">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white pl-7 pb-2 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Send Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Reset Link"
              )}
            </button>

            {/* Other Options */}
            <div className="pt-6 border-t border-white/10 text-center space-y-3">
              <button
                type="button"
                className="w-full py-3 rounded-full border border-white/10 text-gray-400 hover:text-white transition"
              >
                Try Another Way
              </button>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </div>

          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-green-400 text-sm">
              ✅ Reset link has been sent to your email.
            </p>

            <Link
              to="/login"
              className="w-full inline-block py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              Return to Login
            </Link>
          </div>
        )}

        {/* Footer Branding */}
        <p className="text-gray-600 text-xs mt-10 text-center">
          Kaveri Living • Premium Hostel Experience
        </p>

      </div>
    </div>
  );
}