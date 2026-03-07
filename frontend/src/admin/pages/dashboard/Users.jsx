import {
  User,
  Phone,
  MessageCircle,
  GraduationCap,
  Home,
  Edit,
  Ban,
  Trash2,
  UserX
} from "lucide-react";
import MobileHeader from "../../components/Back";

export default function UsersPage() {

  // Fake hostel users
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      college: "CCS University",
      room: "A101",
      status: "active"
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "+91 9123456780",
      college: "Meerut College",
      room: "B203",
      status: "active"
    },
    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 9988776655",
      college: "AKTU",
      room: "C110",
      status: "suspended"
    }
  ];

  return (
    <div className="bg-[#f4f6f9] min-h-screen">

      {/* HEADER */}

    <MobileHeader title={`Hostel Users`}/>

      <div className="max-w-3xl mx-auto py-4 px-0 space-y-4">

        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}

      </div>

    </div>
  );
}


/* USER CARD */

function UserCard({ user }) {

  const whatsappLink = `https://wa.me/${user.phone.replace(/\D/g, "")}`;
  const callLink = `tel:${user.phone}`;

  return (
    <div className="bg-white  shadow-sm p-4 space-y-3">

      {/* USER HEADER */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div className="flex-1">

          <p className="font-medium text-sm">
            {user.name}
          </p>

          <p className="text-xs text-gray-500">
            {user.phone}
          </p>

        </div>

        <StatusBadge status={user.status} />

      </div>


      {/* DETAILS */}

      <div className="flex flex-col gap-1 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <Home size={16} />
          Room: {user.room}
        </div>

        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          {user.college}
        </div>

      </div>


      {/* CONTACT ACTIONS */}

      <div className="flex gap-2">

        <a
          href={callLink}
          className="flex items-center gap-1 text-xs bg-black text-white px-3 py-1 rounded-md"
        >
          <Phone size={14} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1 rounded-md"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>

      </div>


      {/* ADMIN ACTIONS */}

      <div className="flex flex-wrap gap-2 pt-2">

        <ActionBtn icon={Edit} label="Edit" />

        <ActionBtn icon={UserX} label="Suspend" />

        <ActionBtn icon={Ban} label="Block" />

        <ActionBtn icon={Trash2} label="Delete" danger />

      </div>

    </div>
  );
}


/* STATUS BADGE */

function StatusBadge({ status }) {

  if (status === "suspended")
    return (
      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
        Suspended
      </span>
    );

  if (status === "blocked")
    return (
      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
        Blocked
      </span>
    );

  return (
    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
      Active
    </span>
  );
}


/* ACTION BUTTON */

function ActionBtn({ icon: Icon, label, danger }) {

  return (
    <button
      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md
      ${danger
        ? "text-red-600 hover:bg-red-50"
        : "text-gray-700 hover:bg-gray-100"}`}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}