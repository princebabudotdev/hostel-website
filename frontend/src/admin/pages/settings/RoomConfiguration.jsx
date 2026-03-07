import { Bed, Users, DollarSign, Edit, Trash2, Plus } from "lucide-react";
import MobileHeader from "../../components/Back";

export default function RoomConfiguration() {

  // Fake data
  const rooms = [
    {
      id: 1,
      type: "Single Room",
      price: 6000,
      total: 10,
      available: 3
    },
    {
      id: 2,
      type: "Double Sharing",
      price: 4500,
      total: 15,
      available: 5
    },
    {
      id: 3,
      type: "Triple Sharing",
      price: 3500,
      total: 20,
      available: 8
    }
  ];

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white border-b px-4 py-3 z-20 flex justify-between items-center">
        <h1 className="text-base font-semibold">
          Room Configuration
        </h1>

        <button className="flex items-center gap-1 text-sm bg-black text-white px-3 py-1 rounded-md">
          <Plus size={16} />
          Add Room
        </button>
      </div> */}

        <MobileHeader title={' Room Configuration'}/>


      <div className="max-w-3xl mx-auto py-4 space-y-4">

        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}

      </div>

    </div>
  );
}


/* ROOM CARD */

function RoomCard({ room }) {

  return (
    <div className="bg-white shadow-sm p-4 space-y-3">

      {/* ROOM TYPE */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <Bed size={18} />
        </div>

        <div className="flex-1">
          <p className="font-medium text-sm">
            {room.type}
          </p>

          <p className="text-xs text-gray-500">
            ₹{room.price} per month
          </p>
        </div>

      </div>


      {/* ROOM DETAILS */}

      <div className="flex flex-col gap-1 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <Users size={16} />
          Total Rooms: {room.total}
        </div>

        <div className="flex items-center gap-2">
          <Bed size={16} />
          Available: {room.available}
        </div>

        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          Price: ₹{room.price}
        </div>

      </div>


      {/* ACTIONS */}

      <div className="flex gap-2 pt-2">

        <button className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 rounded">
          <Edit size={14} />
          Edit
        </button>

        <button className="flex items-center gap-1 text-xs px-2 py-1 text-red-600 bg-red-50 rounded">
          <Trash2 size={14} />
          Delete
        </button>

      </div>

    </div>
  );
}