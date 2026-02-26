import { useState } from "react";
import { Mail, Phone, User, Building2, Home } from "lucide-react";

export default function Register() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    roomNo: "",
    block: "",
    emergencyContact: "",
    agree: false,
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please accept terms & conditions");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful 🎉");
      console.log(formData);
    }, 2000);
  };

  const handleGoogle = () => {
    alert("Continue with Google");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-6">
      <div className="w-full max-w-xl p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-white">
            Kaveri Living
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Resident Registration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* STEP INDICATOR */}
          <div className="text-center text-gray-400 text-sm">
            Step {step} of 3
          </div>

          {/* ---------------- STEP 1 ---------------- */}
          {step === 1 && (
            <>
              <Input icon={<User size={18} />} name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
              <Input icon={<Mail size={18} />} name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <Input icon={<Phone size={18} />} name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
<div className="pt-4">
  <button
    type="button"
    onClick={nextStep}
    className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
  >
    Next
  </button>
</div>
            </>
          )}

          {/* ---------------- STEP 2 ---------------- */}
          {step === 2 && (
            <>
              <Input icon={<Building2 size={18} />} name="college" placeholder="College Name" value={formData.college} onChange={handleChange} />
              <Input icon={<Building2 size={18} />} name="course" placeholder="Course" value={formData.course} onChange={handleChange} />
              <Input icon={<Building2 size={18} />} name="year" placeholder="Year" value={formData.year} onChange={handleChange} />
              <div className="flex gap-4">
                <Button type="button" onClick={prevStep}>Back</Button>
                <Button type="button" onClick={nextStep}>Next</Button>
              </div>
            </>
          )}

          {/* ---------------- STEP 3 ---------------- */}
          {step === 3 && (
            <>
              <Input icon={<Home size={18} />} name="roomNo" placeholder="Room Number" value={formData.roomNo} onChange={handleChange} />
              <Input icon={<Home size={18} />} name="block" placeholder="Block Name" value={formData.block} onChange={handleChange} />
              <Input icon={<Phone size={18} />} name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />

              {/* Checkboxes */}
              <div className="space-y-3 text-sm text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                  I agree to Terms & Conditions
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="updates" checked={formData.updates} onChange={handleChange} />
                  Send registration details to my email
                </label>
              </div>

              <div className="flex gap-4">
                <Button type="button" onClick={prevStep}>Back</Button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </>
          )}

          {/* GOOGLE CONTINUE */}
          <div className="pt-6 border-t border-white/10 text-center">
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              Continue with Google
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ icon, name, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-2 text-gray-500">
        {icon}
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gray-600 focus:border-white pl-7 pb-2 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
        required
      />
    </div>
  );
}

/* Reusable Button */
function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="flex-1 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
    >
      {children}
    </button>
  );
}