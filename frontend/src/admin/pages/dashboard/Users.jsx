import {
  User,
  Phone,
  MessageCircle,
  GraduationCap,
  Home,
  Edit,
  Ban,
  Trash2,
  UserX,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";
import MobileHeader from "../../components/Back";
import Index from "../../apis";
import Loader from "../../components/Loader";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loader, setloader] = useState(true);

  const getUsers = async () => {
    setloader(true);
    try {
      const res = await Index.getUsers(page);

      setUsers(res?.data?.data || []);
      setTotalPages(res?.data?.pagination?.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setloader(false);
    }
  };

    const suspendUser = async (id) => {
    try {
     const res =  await Index.suspendUser(id)
     console.log(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

   const ActiveUser = async (id) => {
    try {
     const res =  await Index.ActiveUser(id)
      console.log(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, [page]);



  if (loader) {
    return <Loader />;
  }

  return (
    <div className="bg-[#f4f6f9] min-h-screen">
      <MobileHeader title="Hostel Users" />

      <div className="max-w-3xl mx-auto py-4 space-y-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user} suspendUser={suspendUser} ActiveUser={ActiveUser}/>
        ))}

        {/* PAGINATION */}

        <div className="flex justify-center items-center gap-3 pt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 text-sm bg-white border rounded disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 text-sm bg-black text-white rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* USER CARD */

function UserCard({ user , suspendUser , ActiveUser }) {
  const whatsappLink = `https://wa.me/${user?.phone?.replace(/\D/g, "")}`;
  const callLink = `tel:${user?.phone}`;

  return (
    <div className="bg-white shadow-sm p-4 space-y-3">
      {/* HEADER */}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center overflow-hidden">
          {user?.avatar ? (
            <img
              className="h-full w-full object-cover"
              src={user?.avatar}
              alt=""
            />
          ) : (
            <User size={18} />
          )}
        </div>

        <div className="flex-1">
          <p className="font-medium text-sm">{user?.fullname}</p>

          <p className="text-xs text-gray-500">{user?.phone}</p>
        </div>

        <StatusBadge status={user?.status} />
      </div>

      {/* DETAILS */}

      <div className="flex flex-col gap-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Home size={16} />
          Room: {user?.roomNo || "N/A"}
        </div>

        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          {user?.college || "N/A"}
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          {user?.email || "N/A"}
        </div>
      </div>

      {/* CONTACT */}

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

        {user?.status === "suspended" ? (
          <ActionBtn onClick={()=> ActiveUser(user?._id)} icon={User} label="Activate" />
        ) : (
          <ActionBtn onClick={()=> suspendUser(user?._id)} icon={UserX} label="Suspend" />
        )}

        {user.status !== "blocked" && <ActionBtn icon={Ban} label="Block" />}

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

function ActionBtn({ icon: Icon, label, danger , onClick}) {
  return (
    <button
    onClick={onClick}
      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md
      ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}
