import {
  Bed,
  Users,
  Wifi,
  Fan,
  Bath,
  ShieldCheck,
  Pencil,
  Trash2
} from "lucide-react";
import { useState } from "react";
import MobileHeader from "../../components/Back";

export default function RoomsPage() {

  const [rooms, setRooms] = useState([
    {
      id: 1,
      type: "Single Room",
      priceYear: 72000,
      total: 10,
      available: 3,
      services: ["WiFi", "Private Bathroom", "Fan", "Security"]
    },
    {
      id: 2,
      type: "Double Sharing",
      priceYear: 54000,
      total: 20,
      available: 7,
      services: ["WiFi", "Shared Bathroom", "Fan", "Security"]
    },
    {
      id: 3,
      type: "Triple Sharing",
      priceYear: 42000,
      total: 30,
      available: 12,
      services: ["WiFi", "Shared Bathroom", "Fan", "Security"]
    }
  ]);

  const [editingRoom, setEditingRoom] = useState(null);

  const handleChange = (e) => {
    setEditingRoom({ ...editingRoom, [e.target.name]: e.target.value });
  };

  const updateRoom = () => {

    setRooms(
      rooms.map((r) =>
        r.id === editingRoom.id ? editingRoom : r
      )
    );

    setEditingRoom(null);
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      <MobileHeader title={` Room Types`}/>



      <div className="max-w-3xl mx-auto py-4 px-1 space-y-4">

        {/* EDIT FORM */}

        {editingRoom && (

          <div className="bg-white p-4 shadow-sm space-y-3">

            <h2 className="text-sm font-semibold">
              Edit {editingRoom.type}
            </h2>

            <input
              name="priceYear"
              value={editingRoom.priceYear}
              onChange={handleChange}
              className="w-full border px-3 py-2 text-sm"
            />

            <input
              name="total"
              value={editingRoom.total}
              onChange={handleChange}
              className="w-full border px-3 py-2 text-sm"
            />

            <input
              name="available"
              value={editingRoom.available}
              onChange={handleChange}
              className="w-full border px-3 py-2 text-sm"
            />

            <button
              onClick={updateRoom}
              className="bg-black text-white px-3 py-2 text-sm"
            >
              Update Room
            </button>

          </div>

        )}


        {/* ROOM LIST */}

        {rooms.map((room) => (

          <RoomCard
            key={room.id}
            room={room}
            onEdit={() => setEditingRoom(room)}
            onDelete={() => deleteRoom(room.id)}
          />

        ))}

      </div>

    </div>
  );
}


/* ROOM CARD */

function RoomCard({ room, onEdit, onDelete }) {

  return (
    <div className="bg-white p-4 space-y-3 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
          <Bed size={18}/>
        </div>

        <div className="flex-1">

          <p className="font-medium text-sm">
            {room.type}
          </p>

          <p className="text-xs text-gray-500">
            ₹{room.priceYear}/year
          </p>

        </div>

      </div>


      <div className="text-sm text-gray-600 space-y-1">

        <div className="flex items-center gap-2">
          <Users size={16}/>
          Total Rooms: {room.total}
        </div>

        <div className="flex items-center gap-2">
          <Bed size={16}/>
          Available: {room.available}
        </div>

      </div>


      <div className="flex flex-wrap gap-2">

        {room.services.map((s,i)=>(
          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {s}
          </span>
        ))}

      </div>


      <div className="flex gap-2 pt-2">

        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1"
        >
          <Pencil size={14}/>
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-1"
        >
          <Trash2 size={14}/>
          Delete
        </button>

      </div>

    </div>
  );
}