import { X } from "lucide-react";
import { useState } from "react";
import Index from "../../apis/Index";
import { useToast } from "../../../context/ToastContext";

export default function EditUserModal({ user, onClose }) {
  const [roomNo, setRoomNo] = useState(user?.roomNo || "");

  const { showToast } = useToast();

  const handleSave = async () => {
    try {
      const res = await Index.assignRoom(user._id, {
        roomNo,
      });

      showToast({
        type: "success",
        message: res?.data?.message || "User updated",
      });

      onClose();
    } catch (error) {
      showToast({
        type: "error",
        message: error?.response?.data?.message || "Update failed",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[320px] p-5 rounded-lg shadow-lg space-y-4">
        {/* HEADER */}

        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
              {user?.fullname?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-semibold">{user?.fullname}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
              <p className="text-xs text-gray-400">{user?.phone}</p>
            </div>
          </div>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* ROOM INPUT */}

        <div className="space-y-1">
          <p className="text-xs text-gray-500">Room Number</p>

          <input
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            placeholder="Enter room number"
            className="w-full border px-3 py-2 text-sm rounded focus:outline-none"
          />
        </div>

        {/* HOSTEL NAME */}

        {/* ACTIONS */}

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="text-xs px-3 py-1 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="text-xs px-3 py-1 bg-black text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
