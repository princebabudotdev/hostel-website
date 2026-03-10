import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileHeader from "../../components/Back";
import Index from "../../apis/Index";
import { useToast } from "../../../context/ToastContext";
import { handleError, handleResponse } from "../../../utils/apiHandler";

export default function CreateRoom() {

  const [roomNo, setRoomNo] = useState("");
  const [type, setType] = useState("single");
  const [totalSeats, setTotalSeats] = useState(1);
  const [features, setFeatures] = useState([""]);
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleFeatureChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    const updated = features.filter((_, i) => i !== index);
    setFeatures(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      roomNo,
      type,
      totalSeats,
      features: features.filter((f) => f.trim() !== ""),
    };

    try {

      setLoading(true);

      const res = await Index.createRoom(payload);

      handleResponse(res, showToast);

      navigate("/admin/rooms");

    } catch (error) {

      handleError(error, showToast);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      <MobileHeader title="Create Room" />

      <div className="max-w-md mx-auto p-4">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm p-5 space-y-4"
        >

          {/* ROOM NUMBER */}

          <div>
            <label className="text-xs text-gray-500">Room Number</label>

            <input
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
              placeholder="Enter room number"
              type="number"
              className="w-full border px-3 py-2 text-sm rounded mt-1"
            />
          </div>

          {/* ROOM TYPE */}

          <div>
            <label className="text-xs text-gray-500">Room Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border px-3 py-2 text-sm rounded mt-1"
            >
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="shared">Shared</option>
            </select>
          </div>

          {/* TOTAL SEATS */}

          <div>
            <label className="text-xs text-gray-500">Total Seats</label>

            <select
              value={totalSeats}
              onChange={(e) => setTotalSeats(Number(e.target.value))}
              className="w-full border px-3 py-2 text-sm rounded mt-1"
            >
              <option value={1}>1 Seat</option>
              <option value={2}>2 Seats</option>
              <option value={3}>3 Seats</option>
              <option value={4}>4 Seats</option>
            </select>
          </div>

          {/* FEATURES */}

          <div className="space-y-2">

            <div className="flex items-center justify-between">

              <label className="text-xs text-gray-500">Features</label>

              <button
                type="button"
                onClick={addFeature}
                className="flex items-center gap-1 text-xs bg-black text-white px-2 py-1 rounded"
              >
                <Plus size={14} />
                Add
              </button>

            </div>

            {features.map((feature, index) => (

              <div key={index} className="flex gap-2">

                <input
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder="Feature (wifi, balcony...)"
                  className="flex-1 border px-3 py-2 text-sm rounded"
                />

                {features.length > 1 && (

                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-2 text-red-500"
                  >
                    <X size={16} />
                  </button>

                )}

              </div>

            ))}

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 text-sm rounded flex items-center justify-center"
          >

            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Create Room"
            )}

          </button>

        </form>

      </div>

    </div>
  );
}