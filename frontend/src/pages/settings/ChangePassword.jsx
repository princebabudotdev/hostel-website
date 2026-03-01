import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Password Updated Successfully");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#f4f6f8]">

            {/* HEADER */}
            <div className="bg-white px-5 py-4">
                <h1 className="text-lg font-semibold text-gray-800">
                    Change Password
                </h1>
            </div>

            <div className="md:max-w-2xl md:mx-auto md:px-6 py-8">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white md:rounded-3xl md:shadow-md px-6 py-8 space-y-8"
                >

                    <ModernInput
                        label="Current Password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        placeholder={"Enter current password"}
                        show={show.current}
                        toggle={() =>
                            setShow({ ...show, current: !show.current })
                        }
                    />

                    <ModernInput
                        label="New Password"
                        name="newPassword"
                        value={formData.newPassword}
                        placeholder="Enter new password"
                        onChange={handleChange}
                        show={show.new}
                        toggle={() =>
                            setShow({ ...show, new: !show.new })
                        }
                    />

                    <ModernInput
                        label="Confirm New Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        show={show.confirm}
                        placeholder={"Enter confirm password"}
                        toggle={() =>
                            setShow({ ...show, confirm: !show.confirm })
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-black text-white text-sm font-medium"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin mx-auto"></div>
                        ) : (
                            "Update Password"
                        )}
                    </button>

                </form>

            </div>
        </div>
    );
}

/* MODERN INPUT */
function ModernInput({ label, name, value, onChange, show, toggle, placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-gray-400">
                {label}
            </label>

            <div className="flex items-center bg-gray-100 px-4 py-3 md:rounded-xl">
                <Lock size={18} className="text-gray-500 mr-3" />

                <input
                    type={show ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className="flex-1 bg-transparent focus:outline-none text-sm"
                />

                <button type="button" onClick={toggle}>
                    {show ? (
                        <EyeOff size={18} className="text-gray-500" />
                    ) : (
                        <Eye size={18} className="text-gray-500" />
                    )}
                </button>
            </div>
        </div>
    );
}